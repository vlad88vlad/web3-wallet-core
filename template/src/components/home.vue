<template>
    <div style="margin-top: 25px ;">
        <transition name="fade">
            <popup @modal="modalClose" v-show="popupShow" :type="type" :active="popupShow" :token-address="tokenAddress"
                   :symbol="symbol"></popup>
        </transition>

        <transition name="fade">
            <add-token @addToken="modalAddTokenClose" v-show="popupShowAddToken"
            ></add-token>
        </transition>


        <div class="flex-container-parent">
            <div class="flex-container">
                <div v-if="balance !==false ">
                    <v-card style="text-align: center"
                            width="200" height="150">
                        <img src="../assets/eth.png" width="60" height="60">
                        <div>ETH</div>
                        <div>
                            {{(+balance).toFixed(4)}}
                        </div>
                        <v-card-actions>

                            <router-link class="custom-link v-btn" :to="'history/ETH'">
                                <v-icon>history</v-icon>
                                history
                            </router-link>

                            <button class=" v-btn success" @click="openPopup('ETH')">
                                <v-icon>rotate_right</v-icon>
                                send
                            </button>
                        </v-card-actions>


                    </v-card>
                </div>
                <div v-for="item in $parent.supportedTokens">
                    <v-card style="text-align: center"
                            width="200" height="150">
                        <img src="../assets/coin.svg" width="60" height="60">
                        <div>{{item.symbol}}</div>
                        <div>
                            {{(+item.balance).toFixed(4)}}
                        </div>
                        <v-card-actions>

                            <router-link class="custom-link v-btn" :to="`history/token/${item.address}`">
                                <v-icon>history</v-icon>
                                history
                            </router-link>

                            <button :disabled="+item.balance == 0" class=" v-btn success" @click="openPopup('token',item.address,item.symbol)">
                                <v-icon>rotate_right</v-icon>
                                send
                            </button>
                        </v-card-actions>
                    </v-card>
                </div>
                <div>
                    <v-card style="text-align: center"
                            width="200" height="150">
                        <button class="btn-add " @click="popupShowAddToken =!popupShowAddToken">
                            <v-icon style="font-size: 90px;color:var(--main-bg-color-header)">add_circle_outline
                            </v-icon>
                        </button>
                        <v-card-actions style="justify-content: center">
                            <h2>Add token</h2>
                        </v-card-actions>


                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '.././router'
    import Popup from './customComponents/popup.vue'
    import AddToken from './customComponents/addToken.vue'

//    import {RippleAPI} from 'ripple-lib'
//
//    //    console.log(RippleAPI);
//    const api = new RippleAPI({
//        server: 'wss://s.altnet.rippletest.net:51233' // Public rippled server hosted by Ripple, Inc.
//    });
//    api.connect().then(() => {
//        api.getBalances('r4JTZCbecohpHpjyYNSZSW6K34Yr3Gwixr').then(res => {
//            console.log(res);
//        })
//    })
    export default {

        components: {Popup, AddToken},
        name: 'home',
        data() {
            return {
                popupShow: false,
                popupShowAddToken: false,
                baseUrl: this.$parent.baseUrl,
                balance: false,
                type: '',
                tokenAddress: '',
                symbol: '',
                supportedTokens: this.$parent.supportedTokens,
                address: this.$localStorage.get('address').toLowerCase()


            }
        },
        router,


        methods: {
            getBalance() {
                if (this.$localStorage.get('address') !== 'null') {
                    this.$root.web.getBalance(this.$localStorage.get('address').toLowerCase()).then(balance => {
                        console.log('balance');
                        console.log(balance);
                        this.balance = balance;
                    })
                }
            },

            openPopup(type, tokenAddress, symbol) {
                this.type = type;
                this.tokenAddress = tokenAddress;
                if (symbol) {
                    this.symbol = symbol;
                } else {
                    this.symbol = "ETH"
                }
                this.popupShow = !this.popupShow;
            },
            modalClose(evt) {
                this.popupShow = evt;
            },
            modalAddTokenClose(evt) {
                this.popupShowAddToken = evt;
            },


        },
        mounted() {
        },
        computed: {},
        watch: {},
        created() {
            this.getBalance()
        }


    }
</script>

<style scoped>
    .btn-add {
        transition: .5s;
        border-radius: 100% !important;

    }

    .btn-add:hover {
        box-shadow: 0px 6px 10px #555;

    }

    .flex-container-parent {
        display: flex;
        justify-content: space-around;

    }

    .flex-container {
        display: inline-flex;

        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;

    }

    .flex-container > div {
        margin: 5px 15px;
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
        transition: opacity .2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    @media screen and (max-width: 500px) {
        .flex-container {
            justify-content: center;
        }
    }
</style>
