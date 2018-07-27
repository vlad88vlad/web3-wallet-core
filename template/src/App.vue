<template>
    <div class="wrapper">

        <div class="content">
            <header>

                <router-link :to="'/'" class="v-btn no-shadow header-btn logo">
                    <v-icon>account_balance_wallet</v-icon>
                    Wallet
                </router-link>
                <div style=" flex :1 0 auto">
                </div>
                <div>
                    <div style="display: flex;align-items: center;justify-content: center">
                        <v-icon>brightness_5</v-icon>
                        <v-switch @change="theme()"
                                  style="justify-content: center"
                                  v-model="night"
                        ></v-switch>
                        <v-icon>brightness_3</v-icon>
                    </div>
                </div>
                <div v-if="isLogin">
                    <button class="v-btn no-shadow header-btn" @click="popupShowAddress = !popupShowAddress">
                        <v-icon>assignment</v-icon>
                        <div class="header-txt">


                            address
                        </div>
                    </button>

                    <button class="v-btn no-shadow header-btn" @click="logout()">
                        <v-icon>exit_to_app</v-icon>
                        <div class="header-txt">
                            log out
                        </div>
                    </button>
                </div>
            </header>
            <alert v-for="(alert,index) in alerts" :style="'top:'+ (((index+1)) *8-4) +'%'" :type="alert.type"
                   :withCloseBtn="true"
            ><span> {{alert.text}} </span>
            </alert>
            <transition name="fade">
                <popupAddress v-if="isLogin" @modalAddress="modalCloseAddress" v-show="popupShowAddress"></popupAddress>
            </transition>
            <!--<div v-if="welcome">-->
            <!--<div class="start">-->
            <!--<div class="parent-content">-->
            <!--<div class="start-content">-->
            <!--<v-icon class="icon-start">account_balance_wallet</v-icon>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<h1 class="welcome " style="text-align: center"> Welcome in your wallet</h1>-->
            <!--</div>-->
            <div>
                <div class="main-preloader" v-if="preloader">
                    <div style="display: flex;justify-content: center">
                        <div class="circle">
                            <div class="circle1 child"></div>
                            <div class="circle2 child"></div>
                            <div class="circle3 child"></div>
                            <div class="circle4 child"></div>
                            <div class="circle5 child"></div>
                            <div class="circle6 child"></div>
                            <div class="circle7 child"></div>
                            <div class="circle8 child"></div>
                            <div class="circle9 child"></div>
                            <div class="circle10 child"></div>
                            <div class="circle11 child"></div>
                            <div class="circle12 child"></div>
                        </div>
                    </div>
                    <div class="main-preloader-text">
                        Synchronization<br>
                        with your wallet
                    </div>
                </div>
                <div v-else>
                    <router-view></router-view>
                </div>
            </div>
            <img :src="imgUrl">

        </div>
        <div class="footer"></div>

    </div>
</template>

<script>


    import router from './router'
    import PopupAddress from './components/customComponents/popupAddress.vue'
    import alert from './components/customComponents/alert.vue'
    import speakeasy from 'speakeasy'


    export default {
        components: {PopupAddress, alert},

        name: 'app',
        router,
        data() {
            return {
                tokens: '',
                night: false,
                preloader: false,
                welcome: false,
                popupShowAddress: false,
                supportedTokens: [],
                alerts: [],
                imgUrl: '',
                address: this.$localStorage.get('address'),
                isLogin: this.$localStorage.get('login') !== 'null' && this.$localStorage.get('login') !== null,

                baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8010',
            }
        },
        mounted() {
        },
        methods: {
            callAlert(text, type) {

                this.alerts.push({
                    showAlert: true,
                    text: text,
                    type: type,
                    img: ''
                });

                setTimeout(() => {
                    this.alerts.splice(0, 1)

                }, 5000)
            },
            getSupportedTokens() {

                console.log('preloader');
                this.preloader = true;
                let promises = [];

                this.$http.get(`${this.baseUrl}/tokens/${this.address}`).then(
                    function (response) {
                        console.log(response.body);
                        this.tokens = response.body
                        if (this.tokens.length !== 0) {
                            for (let i = 0; i < this.tokens.length; i++) {
                                promises.push(this.$root.web.addToken(this.tokens[i]))
                            }
                            Promise.all(promises).then(res => {
                                console.log(res);
                                this.supportedTokens = this.$root.web.getSupportedTokens()
                                this.supportedTokens.forEach((item, index) => {
                                    console.log('item', item);
                                    this.$root.web.getTokenBalance(item.address, this.$localStorage.get('address')).then(res => {
                                        this.$set(this.supportedTokens[index], 'balance', res);
                                        this.preloader = false;

                                        console.log(index);
                                        console.log(res);
                                    })
                                })

                            })
                        } else {
                            this.preloader = false;

                        }

                    }, function (error) {
                        console.log(error)

                    }
                );


            },
            modalCloseAddress(evt) {
                this.popupShowAddress = evt;
            },
            theme() {
//                this.night = !this.night
                console.log('ss');
                if (this.night) {
                    this.$localStorage.set('night', true);

                    document.documentElement.style.setProperty('--main-bg-color-header', '#d20009');
                    document.documentElement.style.setProperty('--main-bg-color-html', '#313031');
                    document.documentElement.style.setProperty('--main-bg-color-reverse', '#fafafad1');
                    document.documentElement.style.setProperty('--main-primary', '#d20009');
                    document.documentElement.style.setProperty('--color-negative', '#f0f0f0');
                } else {
                    this.$localStorage.set('night', false);
                    document.documentElement.style.setProperty('--main-bg-color-header', '#1777d2');
                    document.documentElement.style.setProperty('--main-bg-color-html', '#fafafa');
                    document.documentElement.style.setProperty('--main-bg-color-reverse', '#fafafad1');
                    document.documentElement.style.setProperty('--main-primary', '#1777d2');
                    document.documentElement.style.setProperty('--color-negative', '#313031');


                }
            },
            logout() {
                this.supportedTokens = [];
                console.log('this.supportedTokens');
                console.log(this.supportedTokens);
                this.isLogin = false;
                this.$localStorage.set('address', null);
                this.$localStorage.set('privateKey', null);
                this.$localStorage.set('login', null);
                this.$router.push('/login');

            }
        },
        created() {


            console.log('verified');

            this.night = this.$localStorage.get('night') === 'true'
            this.theme()
//
            console.log('ss', this.isLogin && !this.welcome);
            if (this.isLogin && !this.welcome) {
                this.getSupportedTokens()

            }

        },
        computed: {},
        watch: {

            welcome() {
                if (this.welcome) {
                    setTimeout(() => {
                        this.welcome = false
                    }, 3000)
                }
            }
        }

    }
</script>

<style>
    :root {
        transition: 1s;
        --main-bg-color-header: #1777d2;
        --main-bg-color-html: #fafafa;
        --main-bg-color-reverse: #fafafad1;
        --main-primary: #448aff;
        --color: #fff;
        --color-negative: #fff
        /*background-color: var( --main-bg-color-reverse) !important;*/
    }

    .v-card {
        color: black !important;

        background: var(--main-bg-color-reverse) !important;
    }

    .root-color {
        background-color: var(--main-bg-color-header) !important;
        color: white;
    }

    .success {
        background-color: #4caf50;
        color: var(--color);
    }

    .back {
        background-color: var(--main-primary) !important;
        color: var(--color);
    }

    .v-input--selection-controls__input {
        margin-top: 4px;
        margin-right: 0 !important;
    }

    .custom-link {
        background: #448aff;
        color: var(--color);
        text-decoration: none;
    }

    .main-preloader {
        margin-top: 100px;
        text-align: center;
        /*display: flex;*/
        /*justify-content: center;*/
        /*text-align: center;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: c;*/
    }

    .main-preloader-text {
        color: var(--main-bg-color-header);
        margin-top: 10px;
        font-size: 25px;
        font-weight: 600;
    }

    .circle {

        /*margin: 0 auto;*/
        width: 100px;
        height: 100px;
        position: relative;
        margin-bottom: 40px;
    }

    .circle .child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .circle .child:before {
        content: "";
        display: block;
        margin: 120px auto;
        width: 25%;
        height: 25%;
        background-color: var(--main-bg-color-header);
        border-radius: 100%;
        animation: circleBounceDelay 1.2s infinite ease-in-out both;
    }

    .circle .circle2 {
        transform: rotate(30deg);
    }

    .circle .circle3 {
        transform: rotate(60deg);
    }

    .circle .circle4 {
        transform: rotate(90deg);
    }

    .circle .circle5 {
        transform: rotate(120deg);
    }

    .circle .circle6 {
        transform: rotate(150deg);
    }

    .circle .circle7 {
        transform: rotate(180deg);
    }

    .circle .circle8 {
        transform: rotate(210deg);
    }

    .circle .circle9 {
        transform: rotate(240deg);
    }

    .circle .circle10 {
        transform: rotate(270deg);
    }

    .circle .circle11 {
        transform: rotate(300deg);
    }

    .circle .circle12 {
        transform: rotate(330deg);
    }

    .circle .circle2:before {
        animation-delay: -1.1s;
    }

    .circle .circle3:before {
        animation-delay: -1s;
    }

    .circle .circle4:before {
        animation-delay: -0.9s;
    }

    .circle .circle5:before {
        animation-delay: -0.8s;
    }

    .circle .circle6:before {
        animation-delay: -0.7s;
    }

    .circle .circle7:before {
        animation-delay: -0.6s;
    }

    .circle .circle8:before {
        animation-delay: -0.5s;
    }

    .circle .circle9:before {
        animation-delay: -0.4s;
    }

    .circle .circle10:before {
        animation-delay: -0.3s;
    }

    .circle .circle11:before {
        animation-delay: -0.2s;
    }

    .circle .circle12:before {
        animation-delay: -0.1s;
    }

    @-webkit-keyframes circleBounceDelay {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }

    @keyframes circleBounceDelay {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }

    @-webkit-keyframes button-jump {
        0% {
            box-shadow: 0px 2px 5px #555;
        }
        50% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            box-shadow: 0px 6px 10px #555;
        }
    }

    .v-text-field .v-input__slot:before {
        background-color: grey;
    }

    .no-shadow {
        box-shadow: none !important;
    }

    .header-btn {
        min-width: 25px !important;
        padding: 0 5px !important;
        margin: 0 !important;
    }

    .v-stepper__header .v-divider {

        background: grey;
    }

    .v-card {
        padding: 1% 2%;
    }

    .logo {
        color: #fff
    }

    button:focus {
        outline: none;
    }

    html {
        overflow-y: auto !important;
    }

    html,
    body {
        transition: 1s;

        height: 100%;
        margin: 0;
        padding: 0;
        background: var(--main-bg-color-html);
        color: var(--color-negative);
    }

    header {
        transition: 1s;

        height: 60px;
        width: 100%;
        background: var(--main-bg-color-header);
        display: flex !important;
        align-items: center;
        padding: 0 20px;
        color: var(--color);
        font-size: 22px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        flex: 1 0 auto;
    }

    .footer {
        flex: 0 0 auto;
    }

    .info-token {
        border-top: 1px solid black;
        height: 50px;
        background: var(--main-bg-color-header);
        padding: 0 3%;
        display: flex;
        align-items: center;
        color: var(--color);
    }

    .header-txt {
        display: block;
    }

    @media screen and (max-width: 370px) {
        .header-txt {
            display: none;
        }
    }


</style>
