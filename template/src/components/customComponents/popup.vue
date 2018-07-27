<template>


    <div class="v-dialog__content ">
        <div class="v-dialog v-dialog--active" style="width: 500px;">
            <div class="v-card">
                <div class="v-card__title headline grey lighten-2 v-card__title--primary">
                    Your balance:
                    {{balance}}
                    {{symbol}}
                </div>
                <div class="v-card__text">
                    <div class="input-control">
                        <input id="addressTo" type="text" v-model="addressTo"
                               :class="[addressTo?'active':'',isValidAddressTo?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="addressTo?'active':''" for="addressTo">receiver</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidAddressToMessage}}</div>
                    </div>


                    <div class="input-control">
                        <input id="value" type="text" v-model="value"
                               :class="[value?'active':'',isValidValue?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="value?'active':''" for="value">value</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidValueMessage}}</div>
                    </div>
                    <div class="input-control">
                        <input id="gasPrice" type="text" v-model="gasPrice"
                               :class="[gasPrice?'active':'',isValidgasPrice?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="gasPrice?'active':''" for="gasPrice">gasPrice</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidgasPriceMessage}}</div>
                    </div>
                    <div class="input-control">
                        <input id="gasLimit" type="text" v-model="gasLimit"
                               :class="[gasLimit?'active':'',isValidgasLimit?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="gasLimit?'active':''" for="gasLimit">gasLimit</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidgasLimitMessage}}</div>
                    </div>
                    <div class="input-control">
                        <input id="passwordSend" type="password" v-model="password"
                               :class="[password?'active':'',isValidpassword?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="password?'active':''" for="passwordSend">password</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidpasswordMessage}}</div>
                    </div>


                </div>
                <hr class="v-divider">
                <div class="v-card__actions">
                    <div class="spacer"></div>

                    <v-btn class="back" @click="closeDialog()">cancel</v-btn>
                    <v-btn class="success" @click="send()">send</v-btn>

                    <!--<v-btn type="button" color="success" class="v-btn v-btn&#45;&#45;flat primary&#45;&#45;text" @click="send()"-->
                            <!--:disabled="preloaderTx"-->
                            <!--style="position: relative;">-->
                        <!--<div class="v-btn__content">-->
                            <!--send-->
                        <!--</div>-->
                    <!--</v-btn>-->
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    import * as Crypto from 'crypto-js';

    export default {

        components: {},
        name: 'popup',
        props: ['active', 'type', 'tokenAddress', 'symbol'],
        data() {
            return {
                password: '',
                addressTo: '',
                value: '',


                preloaderTx: false,

                isValidAddressTo: true,
                isValidAddressToMessage: '',

                isValidgasPrice: true,
                isValidgasPriceMessage: '',

                isValidValue: true,
                isValidValueMessage: '',

                isValidgasLimit: true,
                isValidgasLimitMessage: '',

                isValidpassword: true,
                isValidpasswordMessage: '',

                gasLimit: '80000',
                gasPrice: '',
                balance: '',


                address: this.$localStorage.get('address').toLowerCase()

            }
        },
        methods: {
            getBalance(addressUser) {
                this.$root.web.getBalance(addressUser).then(res => {
                    this.balance = res
                });
            },
            getTokenDecimals(address) {
                this.$root.web.getTokenDecimals(address).then(res => {
                    this.decimal = res
                });
            },

            getTokenBalance(addressContract, addressUser) {
                this.$root.web.getTokenBalance(addressContract, addressUser).then(res => {
                    this.balance = res
                });
            },
            gasEstimate() {
                this.$http.get('https://ethgasstation.info/json/ethgasAPI.json').then(
                    function (response) {
                        this.gasPrice = (response.body.average / 10000000000 * 1.5).toFixed(9)
                    }, function (error) {
                        console.log(error)

                    }
                );
            },

            isValidTransaction(tx) {
                if (tx.logs) {
                    this.$parent.$parent.callAlert('transaction have been success', 'success');

                } else {
                    this.$parent.$parent.callAlert('something error in Transaction', 'danger');

                }
                this.preloaderTx = false;

                this.addressTo = '';
                this.value = '';
                this.password = '';

                this.$parent.getBalance();

            },
            sendETH(account) {
                this.$root.web.sendRawTransaction(account, this.addressTo, this.value, this.gasPrice, this.gasLimit)
                    .then(res => {
                        console.log(res);
                        this.isValidTransaction(res);
                    }).catch(err => {
                    this.$parent.$parent.callAlert('invalid transaction', 'danger');

                })
            }, sendToken(account) {

                this.$root.web.sendTokenTransaction(this.tokenAddress, account, this.addressTo, this.value, this.gasPrice, this.gasLimit)
                    .then(res => {
                        console.log(res);

                        this.isValidTransaction(res);

                    }).catch(err => {
                    this.$parent.$parent.callAlert('invalid transaction', 'danger');

                })
            },
            send() {
                if (!this.addressTo) {
                    this.isValidAddressTo = false
                    this.isValidAddressToMessage = 'address required';
                    this.$parent.$parent.callAlert('address is required', 'danger');
                    return
                }
                if (!(/^(0x)?[0-9a-f]{40}$/.test(this.addressTo.toLowerCase()))) {
                    this.isValidValueTo = false
                    this.isValidAddressToMessage = 'address no validated';
                    this.$parent.$parent.callAlert('address no validated', 'danger');
                    return
                }
                if (!this.value) {
                    this.isValidValue = false
                    this.isValidValueMessage = 'value required';
                    this.$parent.$parent.callAlert('value is required', 'danger');
                    return
                }
                if (!(/^-?\d*\.?\d*$/.test(this.value))) {
                    this.isValidValue = false
                    this.isValidValueMessage = 'value must be number';
                    this.$parent.$parent.callAlert('value must be number', 'danger');
                    return
                }
                if (this.value > this.balance) {
                    this.isValidValue = false
                    this.isValidValueMessage = 'value > your balance';
                    this.$parent.$parent.callAlert('value > your balance', 'danger');
                    return
                }
                if (!this.gasPrice) {
                    this.isValidgasPrice = false
                    this.isValidgasPriceMessage = 'gasPrice required';
                    this.$parent.$parent.callAlert('gasPrice is required', 'danger');
                    return
                }
                if (!(/^-?\d*\.?\d*$/.test(this.gasPrice))) {
                    this.isValidgasPrice = false
                    this.isValidgasPriceMessage = 'gasPrice must be number';
                    this.$parent.$parent.callAlert('gasPrice must be number', 'danger');
                    return
                }
                if (!this.gasLimit) {
                    this.isValidgasLimit = false
                    this.isValidgasLimitMessage = 'gasLimit required';
                    this.$parent.$parent.callAlert('gasLimit is required', 'danger');
                    return
                }
                if (!(/^\d+$/.test(this.gasLimit))) {
                    this.isValidgasLimit = false
                    this.isValidgasLimitMessage = 'gasLimit must be number';
                    this.$parent.$parent.callAlert('gasLimit must be number', 'danger');
                    return
                }
                if (this.gasLimit < 21000) {
                    this.isValidgasLimit = false
                    this.isValidgasLimitMessage = 'gasLimit must be > 21000';
                    this.$parent.$parent.callAlert('gasLimit must be > 21000', 'danger');
                    return
                }
                if (!this.password) {
                    this.isValidpassword = false
                    this.isValidpasswordMessage = 'password required';
                    this.$parent.$parent.callAlert('password required', 'danger');
                    return
                }


                try {
                    let privateKey = Crypto.AES.decrypt(this.$localStorage.get('privateKey').toString(), this.password);
                    let plaintext = privateKey.toString(Crypto.enc.Utf8);
                    let account = this.$root.web.createAccount(plaintext);
                    this.preloaderTx = true;
                    if (this.type === 'ETH') {
                        this.sendETH(account);
                        this.symbol = 'ETH'

                    } else {
                        this.sendToken(account);
                    }

                } catch (err) {
                    console.log(err);
                    this.isValidpassword = false
                    this.isValidpasswordMessage = 'password is incorrect';
                    this.$parent.$parent.callAlert('password is incorrect', 'danger');
                }


            },
            closeDialog() {
                this.$emit('modal', false);

            },


        },
        created() {
            this.gasEstimate()
            console.log(this.$parent.$parent);

        },
        mounted() {


        },
        watch: {
            active() {
                if (this.active) {
                    if (this.type === 'ETH') {

                        this.getBalance(this.address)
                    } else {
                        this.getTokenBalance(this.tokenAddress, this.address)
                    }
                    document.body.style['overflow-y'] = 'hidden';

                } else {
                    document.body.style['overflow-y'] = 'visible';

                }

            }, addressTo() {
                this.isValidAddressTo = true

            },
            value() {
                if (!(/^-?\d*\.?\d*$/.test(this.value))) {
                    this.isValidValue = false
                    this.isValidValueMessage = 'value must be number';
                    this.$parent.$parent.callAlert('value must be number', 'danger');
                } else {
                    this.isValidValue = true;

                }


            },
            gasPrice() {
                if (!(/^-?\d*\.?\d*$/.test(this.gasPrice))) {
                    this.isValidgasPrice = false
                    this.isValidgasPriceMessage = 'gasPrice must be number';

                } else {
                    this.isValidgasPrice = true;

                }

            }, gasLimit() {
                console.log((/^\d+$/.test(this.gasLimit)))
                if (!(/^\d+$/.test(this.gasLimit))) {
                    this.isValidgasLimit = false
                    this.isValidgasLimitMessage = 'gasLimit must be number';

                } else {
                    this.isValidgasLimit = true;

                }

            }, password() {
                this.isValidpassword = true;

            }
        },
        computed: {}


    }

</script>

<style scoped>

    .v-dialog {
        background-color: var(--color);
        display: block;

    }

    .v-dialog__content--active {

    }

    .v-dialog__content {
        z-index: 500 !important;

        pointer-events: unset !important;
        width: 100% !important;
        height: 100% !important;
        background: rgba(49, 48, 49, 0.4);
        position: fixed !important;
        top: 0;
        overflow: hidden;
    }


</style>
