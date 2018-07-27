import express from "express";
import bodyParser from 'body-parser';

// import {default  as  Knex} from 'knex'
// import {default  as  Bookshelf} from 'bookshelf'
import request from "request";

import Web3 from "web3";

import path from "path";
import {default as HTTP} from 'http'
import {default as MONGO} from 'mongodb'

import speakeasy from 'speakeasy'
import QRCode from 'qrcode'


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
console.log(typeof  HTTP);
console.log(HTTP.createServer);


const mongoClient = MONGO.MongoClient;
const dbName = 'wallet';
const etherscanApi = 'https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=';
let web3;
let contract;
let url = "wss://ropsten.infura.io/ws";


const connection = (url) => {
    web3 = new Web3(new Web3.providers.WebsocketProvider(url));
    contract = []
    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }
        let db = client.db(dbName);


        db.collection('tokens', function (err, tokens) {

            tokens.find().toArray(function (err, allTokens) {
                if (err) throw err;
                // console.log(tokens);
                client.close();
                for (let i = 0; i < allTokens.length; i++) {
                    contract[allTokens[i].address] = new web3.eth.Contract(allTokens[i].abi, allTokens[i].address)
                }
            });


        })
    })
}
connection(url);
const checkAbi = function (address) {
    return new Promise((resolve, reject) => {
        request.get({
            headers: {'content-type': 'application/json'},
            url: `${etherscanApi}${address}`,
        }, function (error, response, body) {
            if (body) {
                resolve(JSON.parse(body));
            } else {
                resolve(JSON.parse(error));
            }
        });
    });
};
app.get('/customer', function (req, res) {
    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }
        let db = client.db(dbName);
        db.collection('customers', function (err, collection) {
            collection.find({}).toArray(function (err, result) {
                if (err) {
                    res.send(JSON.parse(err))
                } else {
                    res.send(JSON.parse(result));
                }

            });
        });
        client.close();

    });

});

app.post('/login', function (req, res) {
    let publicKey = req.body.public;
    if (!publicKey) {
        res.status(400).send({status: 'public key is empty'});

    }
    let obj = {'public': publicKey.toLowerCase()};

    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }
        let db = client.db(dbName);
        db.collection('customers', function (err, collection) {
            collection.findOne(obj, function (err, result) {
                if (result) {
                    client.close();

                    res.status(200).send(result);

                } else {
                    collection.insertOne(obj, function (err, response) {
                        client.close();

                        res.status(200).send(response.ops[0]);
                    })
                }
            });
        });

    });


});
app.post('/addToken', function (req, res) {
    let address = req.body.address;
    let abi;
    let customer = req.body.customer;
    let obj;

    if (!address) {
        res.status(400).send({status: 'address is empty'});
        return
    }
    if (!customer) {
        res.status(400).send({status: 'customer is empty'});
        return

    }
    if (!/^(0x)?[0-9a-f]{40}$/.test(address.toLowerCase())) {
        res.status(400).send({status: 'address is not valid'});
        return
    }
    if (!/^(0x)?[0-9a-f]{40}$/.test(customer.toLowerCase())) {
        res.status(400).send({status: 'customer is not valid'});
        return

    }


    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }
        let db = client.db(dbName);
        db.collection('tokens', function (err, collectionTokens) {
            collectionTokens.findOne({'address': address.toLowerCase()}, function (err, result) {
                if (result) {
                    db.collection('customersTokens', function (err, customersTokens) {

                        obj = {
                            'address': address,
                            "public": customer
                        };
                        customersTokens.findOne(obj, function (err, response) {
                            if (response) {
                                res.status(200).send({
                                    customerToken: response,
                                    token: result,
                                    customer: {public: customer}
                                });
                            } else {
                                customersTokens.insertOne(obj, function (err, response) {
                                    if (err) {
                                        res.status(400).send({status: 'already defined'});

                                    }
                                    client.close();

                                    res.status(200).send({
                                        customerToken: response.ops[0],
                                        token: result,
                                        customer: {public: customer}
                                    });
                                })
                            }
                        })

                    })
                } else {

                    checkAbi(address).then(resultAbi => {
                        console.log(resultAbi.status == 1);
                        if (resultAbi.status == 1) {
                            abi = JSON.parse(resultAbi.result);
                            console.log(abi);
                            obj = {
                                'address': address,
                                'abi': abi,
                            };
                            collectionTokens.insertOne(obj, function (err, result) {
                                db.collection('customersTokens', function (err, customersTokens) {
                                    obj = {
                                        'address': address,
                                        "public": customer
                                    };
                                    customersTokens.insertOne(obj, function (err, response) {
                                        client.close();

                                        contract[address] = new web3.eth.Contract(abi, address)

                                        res.status(200).send({
                                            customerToken: response.ops[0],
                                            token: result,
                                            customer: {public: customer}
                                        });
                                    })
                                })
                            })
                        } else {
                            res.status(400).send({status: resultAbi.result});

                        }


                    });

                }
            });
        });

    });


});
app.get('/tokens/:address', function (req, res) {
    let customer = req.params.address;
    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }
        let db = client.db(dbName);

        if (customer === 'all') {
            // res.send('просто другий запрос прийдеться робити по токенах');


            db.collection('tokens', function (err, tokens) {

                tokens.find().toArray(function (err, allTokens) {
                    if (err) throw err;
                    // console.log(tokens);
                    client.close();
                    res.status(200).send(allTokens);
                });


            })
        } else {

            db.collection('tokens').aggregate([

                {
                    $lookup:
                        {
                            from: 'customersTokens',
                            localField: 'address',
                            foreignField: 'address',
                            as: 'customersTokens'
                        }
                },
                {
                    $unwind: "$customersTokens"
                },
                {
                    $match:
                        {
                            'customersTokens.public': customer,

                        }
                },
            ]).toArray(function (err, tokens) {
                if (err) throw err;
                console.log(tokens);
                client.close();
                res.send(tokens);
            });

        }
    })
});


app.use(express.static(__dirname + '/view'));


mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
    if (err) {
        return console.log(err);
    }
    let db = client.db(dbName);

    db.collection('customersTokens').aggregate([
        {
            $match:
                {
                    'public': '0xc640c3b2d64e11a6b9cfd53575001632ae9af2a3',

                }
        },
        {
            $lookup:
                {
                    from: 'tokens',
                    localField: 'address',
                    foreignField: 'address',
                    as: 'token'
                }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

})


app.get('/history/:contractAddress/:userAddress', function (req, res) {
    let contractAddress = req.params.contractAddress
    let userAddress = req.params.userAddress
    contract[contractAddress].getPastEvents("allEvents", {
        filter: {},

        fromBlock: 0,
        toBlock: 'latest',
    }).then(events => {
        if (events) {
            let filterEvents = events.filter((item) => {
                return item.returnValues[0].toLowerCase() === userAddress.toLowerCase() || item.returnValues[1].toLowerCase() === userAddress.toLowerCase();
            });
            res.send(JSON.stringify(filterEvents));
        }
    }).catch(err => {
        console.log(err);
        connection(url);

    });
})
app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));


});


app.get('/test', function (req, res) {

    res.sendFile(path.join(__dirname + '/view/test.html'));


});
app.get('/qrcod/:public', function (req, res) {
    let publicKey = req.params.public;
    if (!publicKey) {
        res.status(400).send({status: 'public key is empty'});
        return
    }
    let obj = {'public': publicKey};

    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }

        let db = client.db(dbName);
        db.collection('customers', function (err, collection) {
            collection.findOne(obj, function (err, result) {
                QRCode.toDataURL(result.secret.otpauth_url, function (err, image_data) {
                    res.status(200).send({qrcode: image_data})
                });
            })
        })
    })

});
app.post('/verify', function (req, res) {
    let token = req.body.token;
    let publicKey = req.body.public;

    if (!token) {
        res.status(400).send({status: 'token is empty'});
        return
    }
    if (!publicKey) {
        res.status(400).send({status: 'publicKey is empty'});
        return
    }
    let obj = {'public': publicKey};

    mongoClient.connect(`mongodb://localhost:27017/${dbName}`, function (err, client) {
        if (err) {
            return console.log(err);
        }

        let db = client.db(dbName);
        db.collection('customers', function (err, collection) {
            collection.findOne(obj, function (err, result) {
                let verified = speakeasy.totp.verify({
                    secret: result.secret.base32,
                    encoding: 'base32',
                    token: token
                });
                res.status(200).send({status: verified})
            })
        })
    })



});
app.listen(8010);


