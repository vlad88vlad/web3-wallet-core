import Web3 from "web3";
// import {SMMContractABI} from '../contracts';

import {erc20StandardABI} from "../contracts";

export default class Provider {
    constructor(nodeUrl, tokensData) {
        if (!nodeUrl) {
            throw new Error('nodeUrl not found');
        }
        if (tokensData && !tokensData.length) {
            throw new Error(`tokensData - ${tokensData} must be array`);
        }
        this.nodeUrl = nodeUrl;
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.nodeUrl));
        this.tokens = {};
        if (tokensData) {
            for (let tokenData of tokensData) {
                this.addToken(tokenData);
            }
        }
        this.gasPrice = "0.000000003";
        this.gasLimit = "65000";
    }

    getSupportedTokens() {
        let tokens = [];
        for (let key in this.tokens) {
            if (this.tokens.hasOwnProperty(key)) {
                tokens.push({
                    name: this.tokens[key].name,
                    symbol: this.tokens[key].symbol,
                    address: this.tokens[key].address,
                    decimals: this.tokens[key].decimals
                });
            }
        }
        return tokens;
    }

    checkTokenAddress(tokenAddress) {
        if (this.tokens[tokenAddress]) {
            return true;
        } else {
            throw new Error(`This token: ${tokenAddress} not supported`);
        }
    }

    addToken(tokenData) {
        if (!tokenData.address) {
            throw new Error(`tokensData - ${tokenData} must have address`);
        }
        if (!tokenData.abi) {
            tokenData.abi = erc20StandardABI;
        }
        this.tokens[tokenData.address] = tokenData;
        this.tokens[tokenData.address].contract = new this.web3.eth.Contract(tokenData.abi, tokenData.address);

        let pDec = this.getTokenDecimals(tokenData.address).then(response => {
            this.tokens[tokenData.address].decimals = response;
        }, error => {
            console.error(error);
        });

        let pSym = this.getTokenSymbol(tokenData.address).then(response => {
            this.tokens[tokenData.address].symbol = response;
        }, error => {
            console.error(error);
        });
        let pName = this.getTokenName(tokenData.address).then(response => {
            this.tokens[tokenData.address].name = response;
        }, error => {
            console.error(error);
        });
        return Promise.all([pDec, pSym, pName])
    }

    /*
     Get tokens data to blockchain
    */
    getTokenAllowance(tokenAddress, from, to) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.allowance(from, to).call().then(async result => {
                        if (!this.tokens[tokenAddress].decimals) {
                            this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                        }
                        resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                    },
                    error => {
                        reject(error);
                    });
            });
        }
    }

    getTokenBalance(tokenAddress, address) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.balanceOf(address).call().then(async result => {
                        if (!this.tokens[tokenAddress].decimals) {
                            this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                        }
                        resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                    },
                    error => {
                        reject(error)
                    });
            });
        }
    }

    getTokenName(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.name().call();
        }
    }

    getTokenTotalSupply(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return new Promise((resolve, reject) => {
                this.tokens[tokenAddress].contract.methods.totalSupply().call().then(async result => {
                        if (!this.tokens[tokenAddress].decimals) {
                            this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
                        }
                        resolve(result * 10 ** -this.tokens[tokenAddress].decimals);
                    },
                    error => {
                        reject(error)
                    });
            });
        }
    }

    getTransactionReceipt(hash) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getTransactionReceipt(hash).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)

            })
        })

    }

    getTokenSymbol(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.symbol().call();
        }
    }

    getTokenDecimals(tokenAddress) {
        if (this.checkTokenAddress(tokenAddress)) {
            return this.tokens[tokenAddress].contract.methods.decimals().call();
        }
    }

    async getTokenInfo(tokenAddress, data) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getTokenDecimals(tokenAddress);
            }
            return {
                address: `0x${data.substring(11, 74).replace(/^0+/, '')}`,
                value: parseInt(data.substring(75, data.length), 16) * 10 ** -this.tokens[tokenAddress].decimals
            }
        }
    }

    /*
     Send tokens data to blockchain
    */
    async sendTokenTransaction(tokenAddress, account, to, amountToken, gasPrice, gasLimit, countTransactions) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getDecimals(tokenAddress);
            }
            let tx = {
                    to: tokenAddress,
                    value: 0x0,
                    data: this.tokens[tokenAddress].contract.methods.transfer(to, +amountToken * 10 ** this.tokens[tokenAddress].decimals).encodeABI(),
                    from: account.address,
                    nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
                    gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
                    gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
                    chainId: 3
                },
                serializedTx = await account.signTransaction(tx);
            return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
        }
    }

    async approveTokenTransaction(tokenAddress, account, spender, amountToken, countTransactions, gasPrice, gasLimit) {
        if (this.checkTokenAddress(tokenAddress)) {
            if (!this.tokens[tokenAddress].decimals) {
                this.tokens[tokenAddress].decimals = await this.getDecimals(tokenAddress);
            }
            let tx = {
                    to: tokenAddress,
                    value: 0x0,
                    data: this.tokens[tokenAddress].contract.methods.approve(spender, +amountToken * 10 ** this.tokens[tokenAddress].decimals).encodeABI(),
                    from: account.address,
                    nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
                    gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
                    gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
                    chainId: 3
                },
                serializedTx = await account.signTransaction(tx);
            return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
        }
    }

    /*
     Ethereum
    */
    createAccount(privateKey) {
        /*privateKey must have hex format*/
        return this.web3.eth.accounts.wallet.add(privateKey);
    }

    generatePrivateKey() {
        return this.web3.eth.accounts.create();

    }

    getBalance(address) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getBalance(address).then(result => {
                    resolve(this.fromWei(result));
                },
                error => {
                    reject(error)
                });
        });
    }

    getTransactionCount(address) {
        return this.web3.eth.getTransactionCount(address);
    }

    /*
     Ethereum send
    */
    async sendRawTransaction(account, to, amount, gasPrice, gasLimit, countTransactions) {
        let tx = {
                from: account.address,
                to: to,
                value: this.toHex(this.toWei(amount)),
                nonce: this.toHex(countTransactions ? countTransactions : await this.getTransactionCount(account.address)),
                gasPrice: this.toHex(this.toWei(gasPrice ? gasPrice : this.gasPrice)),
                gasLimit: this.toHex(gasLimit ? gasLimit : this.gasLimit),
                chainId: 3
            },
            serializedTx = await account.signTransaction(tx);
        return this.web3.eth.sendSignedTransaction(serializedTx.rawTransaction);
    }

    /*
     Additional methods
    */
    fromWei(value) {
        return this.web3.utils.fromWei(value, 'ether');
    }

    toWei(value) {
        return this.web3.utils.toWei(value, 'ether');
    }

    toWei(value) {
        return this.web3.utils.toWei(value, 'ether');
    }

    toHex(value) {
        return this.web3.utils.toHex(value);
    }

    getBlock(blockHashOrBlockNumber) {
        return this.web3.eth.getBlock(blockHashOrBlockNumber);
    }

    getTransaction(transactionHash) {
        return this.web3.eth.getTransaction(transactionHash);
    }

    getStorageAt(address) {
        return this.web3.eth.getStorageAt(address, 0);
    }

    getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
        if (endBlockNumber == null) {
            endBlockNumber = this.web3.eth.blockNumber;
            console.log("Using endBlockNumber: " + endBlockNumber);
        }
        if (startBlockNumber == null) {
            startBlockNumber = endBlockNumber - 1000;
            console.log("Using startBlockNumber: " + startBlockNumber);
        }
        console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);

        for (let i = startBlockNumber; i <= endBlockNumber; i++) {
            if (i % 1000 == 0) {
                console.log("Searching block " + i);
            }
            this.web3.eth.getBlock(i, true).then(block => {
                if (block !== null && block.transactions !== null) {
                    block.transactions.forEach(function (e) {
                        if (myaccount === "*" || myaccount === e.from || myaccount === e.to) {
                            console.log("  tx hash          : " + e.hash + "\n"
                                + "   nonce           : " + e.nonce + "\n"
                                + "   blockHash       : " + e.blockHash + "\n"
                                + "   blockNumber     : " + e.blockNumber + "\n"
                                + "   transactionIndex: " + e.transactionIndex + "\n"
                                + "   from            : " + e.from + "\n"
                                + "   to              : " + e.to + "\n"
                                + "   value           : " + e.value + "\n"
                                + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
                                + "   gasPrice        : " + e.gasPrice + "\n"
                                + "   gas             : " + e.gas + "\n"
                                + "   input           : " + e.input);
                        }
                    })
                }
            })
        }
    }
}

// export {};





