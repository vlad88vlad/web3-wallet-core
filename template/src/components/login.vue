<template>
    <div>
        <alert v-for="(alert,index) in alerts" :style="'top:'+ ((index+1) *6-4) +'%'" :type="alert.type"
               :withCloseBtn="true"
        >
            <span> {{alert.text}} </span>
        </alert>

        <div v-if="welcome">
            <div class="start">
                <div class="parent-content">
                    <div class="start-content">
                        <v-icon class="icon-start">account_balance_wallet</v-icon>
                    </div>
                </div>
            </div>
            <h1 class="welcome " style="text-align: center"> Welcome in your wallet</h1>
        </div>
        <div v-else>
            <v-stepper v-model="e1" vertical>

                <v-stepper-step :complete="e1 > 1" step="1">Enter your private key</v-stepper-step>

                <v-stepper-content step="1">
                    <v-card
                            class="mb-5 card-login"
                            height="200px"
                            color=" lighten-1"

                    >

                        <v-form style="margin-top: 20px;">
                            <div class="input-control">
                                <input id="privateKey" type="text" v-model="privateKey"
                                       :class="[privateKey?'active':'',isValidPrivateKey?'':'no-validate']"
                                       class="matirial-input"
                                       style="color: var(--color-negative);">
                                <label class="matirial-label" :class="privateKey?'active':''" for="privateKey"
                                       style="color: var(--color-negative);">privateKey</label>

                                <span class="bar"></span>
                                <div class="input-error">{{isValidPrivateKeyMessage}}</div>
                            </div>


                        </v-form>
                        <v-btn @click=generatePrivateKey()>Generate Private Key</v-btn>


                        <!--<div>-->

                        <!--</div>-->
                    </v-card>

                    <button class=" v-btn success" @click="createAccount()">
                        Next
                    </button>

                </v-stepper-content>
                <v-stepper-step :complete="e1 > 2" step="2">Enter password</v-stepper-step>

                <v-stepper-content step="2">
                    <v-card
                            class="mb-5 card-login"
                            color=" lighten-1"
                            height="200px"
                    >


                        <div class="input-control">
                            <input id="password" type="password" v-model="password"
                                   :class="[password?'active':'',isValidPassword?'':'no-validate']"
                                   class="matirial-input"
                                   style="color: var(--color-negative);">
                            <label class="matirial-label" :class="password?'active':''" for="password"
                                   style="color: var(--color-negative);">password</label>

                            <span class="bar"></span>
                            <div class="input-error">{{isValidPasswordMessage}}</div>
                        </div>
                        <div class="input-control">
                            <input id="passwordConfirm" type="passwordConfirm" v-model="passwordConfirm"
                                   :class="[passwordConfirm?'active':'',isValidPassword?'':'no-validate']"
                                   class="matirial-input"
                                   style="color: var(--color-negative);">
                            <label class="matirial-label" :class="passwordConfirm?'active':''" for="passwordConfirm"
                                   style="color:  var(--color-negative);">passwordConfirm</label>

                            <span class="bar"></span>
                            <div class="input-error">{{isValidPasswordMessage}}</div>
                        </div>


                    </v-card>

                    <button class=" v-btn success" @click="confirmPassword();">
                        Next
                    </button>

                    <button class=" v-btn back" @click="e1 =e1 - 1">Back</button>
                </v-stepper-content>
                <v-stepper-step :complete="e1 == 4" step="3">Complete</v-stepper-step>

                <v-stepper-content step="3">
                    <v-card
                            class="mb-5 card-login"
                            color=" lighten-1"
                            height="200px"
                    >
                        <v-layout
                                align-center
                                column
                                justify-center
                        >
                            <div class="wallet-ready">
                                <v-icon style="font-size: 3em">account_balance_wallet</v-icon>
                            </div>
                            <h4 class="subheading">Your wallet ready!</h4>
                        </v-layout>
                    </v-card>


                    <button class=" v-btn success" @click="encrypt();">Finish</button>

                </v-stepper-content>
                <v-stepper-content step="4">
                    <v-card
                            class="mb-5 card-login"
                            color="lighten-1"
                            height="200px"
                    >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6"
                                    stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                            <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6"
                                      stroke-linecap="round" stroke-miterlimit="10"
                                      points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>
                    </v-card>


                </v-stepper-content>
                <!--</v-stepper-items>-->
            </v-stepper>
        </div>
        <!--<v-btn flat @click=" encrypt()">Finish</v-btn>-->

    </div>
</template>

<script>
    import router from '.././router'
    import Popup from './customComponents/popup.vue'
    import alert from './customComponents/alert.vue'
    import DonutChart from './customComponents/vuestic-chart/chart-types/DonutChart'
    import LineChart from './customComponents/vuestic-chart/chart-types/LineChart'
    import BubbleChart from './customComponents/vuestic-chart/chart-types/BubbleChart'
    import {SMMTokenABI} from '../contracts'
    import * as Crypto from 'crypto-js';

    export default {

        components: {Popup, alert, DonutChart, LineChart, BubbleChart},
        name: 'login',
        data() {
            return {

                e1: 0,
                privateKey: '',
                publicAddress: '',
                password: '',
                passwordConfirm: '',
                alerts: [],
                welcome: false,
                active: "privateKeyTab",
                baseUrl: this.$parent.baseUrl,


                isValidPrivateKeyMessage: '',
                isValidPrivateKey: true,

                isValidPasswordMessage: '',
                isValidPassword: true,

            }
        },
        router,
        methods: {


            modalClose(evt) {
                this.popupShow = evt;
            },
            confirmPassword() {

                if (!this.password || !this.passwordConfirm) {
                    this.isValidPassword = false
                    this.isValidPasswordMessage = 'password required';
                    this.$parent.callAlert('password  required', 'danger');
                    return
                }
                if (this.password !== this.passwordConfirm) {
                    this.isValidPassword = false
                    this.isValidPasswordMessage = 'password  do not match';
                    this.$parent.callAlert('password  do not match', 'danger');
                    return
                }

                this.e1 = 3
            },
            encrypt() {

                if (this.password === this.passwordConfirm) {
                    let privateKey = Crypto.AES.encrypt(this.privateKey, this.password).toString();
                    this.$localStorage.set('login', true);
                    this.$localStorage.set('privateKey', privateKey)
                    this.e1 = 4


                    this.$http.post(`${this.baseUrl}/login`, {"public": this.publicAddress}).then(
                        function (response) {
                            console.log(response.body);
                        }, function (error) {
                            console.log(error)

                        }
                    );

                    this.welcome = true;
                    setTimeout(() => {
                        this.$parent.getSupportedTokens();

                        this.welcome = false;

                        this.$parent.isLogin = true;

                        this.$router.push('/home')
                    }, 2000)
                } else {
                    this.callAlert('password is incorrect', 'danger');

                }
            },
            generatePrivateKey() {

                let generate = this.$root.web.generatePrivateKey();
                this.privateKey = generate.privateKey;

            },
            createAccount() {
                if (!this.privateKey) {
                    this.isValidPrivateKey = false
                    this.isValidPrivateKeyMessage = 'privateKey required';
                    this.$parent.callAlert('privateKey is required', 'danger');
                    return
                }
                if (!(/^(0x)?[0-9a-x]{66}$/.test(this.privateKey.toLowerCase()))) {
                    this.isValidPrivateKey = false
                    this.isValidPrivateKeyMessage = 'privateKey no validated';
                    this.$parent.callAlert('privateKey no validated', 'danger');
                    return
                }
                this.e1 = 2;
                let account = this.$root.web.createAccount(this.privateKey);
                console.log('account');
                this.publicAddress = account.address
                console.log(account.address);
                this.$localStorage.set('address', account.address)
                console.log(this.$localStorage.get('address'));

            },

            callAlert(text, type) {


                this.alerts.push({
                    showAlert: true,
                    text: text,
                    type: type
                });

                setTimeout(() => {
                    this.alerts.splice(0, 1)

                }, 5000)
            }

        },
        mounted() {
        },
        computed: {},
        watch: {
            privateKey() {
                this.isValidPrivateKey = true

            }, password() {
                this.isValidPassword = true

            }, passwordConfirm() {
                this.isValidPassword = true

            },

        },
        created() {

        }


    }
</script>

<style scoped>


    .welcome {
        text-align: center;
        margin-top: 15px;
        color: var(--main-bg-color-header);
    }

    .start {
        display: flex !important;
        justify-content: center;
        align-items: center;
        width: 100% !important;
        padding-top: 5%;

    }

    .parent-content {
        padding: 25px !important;
        background: rgba(128, 128, 128, 0.2); /*#808080*/

        border-radius: 150px;
        -webkit-animation: button-jump 2s;
        animation: button-jump 2s;
    }

    .start-content {
        animation-timing-function: ease-in-out;
        opacity: 0;
        -webkit-animation: fadeIn ease-in 1;
        -moz-animation: fadeIn ease-in 1;
        animation: fadeIn ease-in 1;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
        animation-duration: 1s;
        border-radius: 150px;
        padding: 15px;
        background: rgba(128, 128, 128, 0.4);
    }

    .btn-type {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px 15px;
    }

    @keyframes button-jump {
        0% {
            box-shadow: 0px 2px 5px #555;
        }
        50% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            box-shadow: 0px 6px 10px #555;
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .icon-start {
        font-size: 15em !important;
        color: var(--main-bg-color-header);

    }

    .bar:before, .bar:after {
        background: var(--color);
    }

    .v-stepper--vertical .v-stepper__content {
        margin: 0 3%;
        padding: 0;
    }

    @media screen and (max-width: 500px) {
        .v-stepper--vertical .v-stepper__content {
            margin: 0;
            padding: 0;
        }
    }

    .card-login {
        background: #2f7cb152 !important;
        color: var(--color);
    }

    .dial {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 0 20px 20px 0;
    }

    .container {
        display: flex; /* or inline-flex */
        flex-direction: row;
        flex-wrap: wrap;
        /*justify-conten:center;*/
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .9s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    svg {
        width: 100px;
        display: block;
        margin: 40px auto 0;
    }

    .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 0;
    }

    .path.circle {
        -webkit-animation: dash 0.9s ease-in-out;
        animation: dash 0.9s ease-in-out;
    }

    .path.line {
        stroke-dashoffset: 1000;
        -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
        animation: dash 0.9s 0.35s ease-in-out forwards;
    }

    .path.check {
        stroke-dashoffset: -100;
        -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
        animation: dash-check 0.9s 0.35s ease-in-out forwards;
    }

    p {
        text-align: center;
        margin: 20px 0 60px;
        font-size: 1.25em;
    }

    p.success {
        color: #73AF55;
    }

    p.error {
        color: #D06079;
    }

    @-webkit-keyframes dash {
        0% {
            stroke-dashoffset: 1000;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 1000;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @-webkit-keyframes dash-check {
        0% {
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dashoffset: 900;
        }
    }

    @keyframes dash-check {
        0% {
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dashoffset: 900;
        }
    }
</style>
