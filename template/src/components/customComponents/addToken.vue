<template>


    <div class="v-dialog__content ">
        <div class="v-dialog v-dialog--active" style="width: 500px;">
            <div class="v-card">
                <div class="v-card__title headline grey lighten-2 v-card__title--primary">
                    add Token
                </div>
                <div class="v-card__text">

                    <div class="input-control">
                        <input id="addressToken" type="text" v-model="addressToken" ref="inputAddress"
                               :class="[addressToken?'active':'',isValidAddressToken?'':'no-validate']"
                               class="matirial-input">
                        <label class="matirial-label" :class="addressToken?'active':''"
                               for="addressToken">addressToken</label>

                        <span class="bar"></span>
                        <div class="input-error">{{isValidAddressTokenMessage}}</div>
                        <div class="items" @click=" onFocus()">
                            <div v-if="!!allTokensAutoComplite.length">
                                <div v-for="item in allTokensAutoComplite">
                                    <button @click="addressToken = item.address"> {{item.address}}</button>

                                </div>
                            </div>
                            <div v-else> no found</div>

                        </div>
                    </div>
                    <!--<textarea v-model="abi" style="width: 100%"></textarea>-->


                </div>
                <hr class="v-divider">
                <div class="v-card__actions" style="margin-top: 10px">
                    <div class="spacer"></div>

                    <v-btn class="back" @click="closeDialog()">cancel</v-btn>
                    <v-btn class="success" @click="addToken()">send</v-btn>

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
        name: 'addToken',
        props: ['active', 'type', 'tokenAddress', 'symbol'],
        data() {
            return {
                addressToken: '',
                abi: '',
                allTokens: [],
                baseUrl: this.$parent.baseUrl,
                search: null,


                preloaderTx: false,

                isValidAddressToken: true,
                isValidAddressTokenMessage: '',

                address: this.$localStorage.get('address').toLowerCase(),

            }
        },
        methods: {
            onFocus() {
                this.$refs.inputAddress.focus()
            },

            closeDialog() {
                this.$emit('addToken', false);

            },
            getAllToken() {
                this.$http.get(`${this.baseUrl}/tokens/all`).then(
                    function (response) {
                        console.log('response.body');
                        console.log(response.body);
                        this.allTokens = response.body;
//                        this.allTokensAutoComplite = response.body
                    }
                )
            },
            addToken() {

                let obj = {
                    "address": this.addressToken.toLowerCase(),
                    "customer": this.address.toLowerCase(),
                };
                if (this.abi) {
                    obj["abi"] = JSON.parse(this.abi)

                }
                if (!(/^(0x)?[0-9a-f]{40}$/.test(this.addressToken.toLowerCase()))) {
                    this.isValidAddressToken = false
                    this.isValidAddressTokenMessage = 'address no validated';
                    this.$parent.$parent.callAlert('address no validated', 'danger');
                    return
                }
                this.$http.post(`${this.baseUrl}/addToken`, obj).then(
                    function (response) {
                        console.log(response.body);
                        this.$parent.$parent.getSupportedTokens()
                        this.$emit('addToken', false);
                        this.$parent.$parent.callAlert('token added successfully', 'success');

                    }, function (error) {

                        console.log(error.body.status)
                        this.$parent.$parent.callAlert(error.body.status, 'danger');

                        this.$emit('addToken', false);

                    }
                );
            },


        },
        created() {
            this.getAllToken()
//            console.log(this.$parent.$parent.getSupportedTokens());

        },
        mounted() {


        },
        watch: {


            active() {
                if (this.active) {

                    document.body.style['overflow-y'] = 'hidden';

                } else {
                    document.body.style['overflow-y'] = 'visible';

                }

            }, addressToken() {
                this.isValidAddressToken = true;


            },


        },
        computed: {
            allTokensAutoComplite() {
                return this.allTokens.filter((item) => {
                    return item.address.toLowerCase().includes(this.addressToken.toLowerCase())
                })
            }

        }


    }

</script>

<style scoped>

    .items {
        transition: .4s;
        opacity: 0;
        position: absolute;
        background: #e0e0e0;
        width: 100%;
        z-index: -1;
        max-height: 120px;
        overflow-y: auto;
        padding-bottom: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    input:focus ~ .items {
        display: block;
        opacity: 1;
        z-index: 10000;

    }

    .items > div > div {
        transition: .2s;
        margin: 10px 5px 0 5px;
        /*padding: 5px 5px;*/
        border-bottom: 1.5px solid black;
    }

    .items > div > div:hover {
        border-bottom: 1.5px solid var(--main-bg-color-header);
    }

    textarea {
        border: 1px solid navy;
    }

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
