<template>
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
                Loading<br>
                your history transactions
            </div>
        </div>
        <div v-else>
            <div class="info-token">
                <img src="../../assets/coin.svg" width="30" height="30">
                Your balance:
                {{balance}}
                {{symbol}}
            </div>
            <div v-if="history.length">
                <div v-for="(item , index) in history">
                    <history-transactions :from=" item.returnValues[0]" :to="item.returnValues[1]"
                                          :amount="item.returnValues[2]" :tx-hash="item.transactionHash"
                                          :decimal="decimal" :symbol="symbol"
                    >
                        <button class="v-btn back" @click="openDetail(item.transactionHash) ">
                            <v-icon>visibility</v-icon>
                            Detail
                        </button>
                    </history-transactions>
                </div>
            </div>
            <div v-else>
                <v-layout
                        align-center
                        column
                        justify-center
                >
                    <h1 class="display-2 font-weight-thin mb-3" style="margin-top: 35px;text-align: center;">
                        Your history empty</h1>
                </v-layout>
            </div>
            <transition name="fade">

                <tx-detail @txDetail="modalClose" v-show="showDetail" :active="showDetail"
                           :hash="currencyHash"></tx-detail>
            </transition>
        </div>
    </div>
</template>

<script>
    import router from '../../router/index'
    import historyTransactions from './historyTransactions.vue'
    import txDetail from './txDetail.vue'


    export default {

        components: {historyTransactions, txDetail},
        name: 'historyToken',
        data() {
            return {
                symbol: '',
                balance: '',
                decimal: '',
                currencyHash: '',
                history: [],
                showDetail: false,
                preloader: false,
                baseUrl: this.$parent.baseUrl,


            }
        },
        router,


        methods: {
            openDetail(hash) {
                this.showDetail = true;
                this.currencyHash = hash;
            },
            modalClose(evt) {
                this.showDetail = evt;
            },
            getTokenDecimals(address) {
                this.$root.web.getTokenDecimals(address).then(res => {
                    console.log(res);
                    this.decimal = res
                });
            },
            getTokenSymbol(address) {
                this.$root.web.getTokenSymbol(address).then(res => {
                    console.log(res);
                    this.symbol = res
                });
            },
            getTokenBalance(addressContract, addressUser) {
                this.$root.web.getTokenBalance(addressContract, addressUser).then(res => {
                    this.balance = res
                });
            },
            getTransactionsByAccount(addressContract, addressUser) {
                console.log('preloader');
                this.preloader =true;
                this.$http.get(`${this.baseUrl}/history/${addressContract}/${addressUser}`).then(
                    function (response) {
                        this.history = response.body;
                        this.preloader =false

                        this.$emit('history', {
                            res: response.body,
                            decimal: this.decimal
                        });
                    }, function (error) {
                        this.preloader =false

                        console.log(error)

                    }
                );
            },


        },
        mounted() {
        },
        computed: {},
        watch: {},
        created() {
            if (this.$route.params.address) {
                this.getTransactionsByAccount(this.$route.params.address, this.$localStorage.get('address').toLowerCase())
                this.getTokenBalance(this.$route.params.address, this.$localStorage.get('address').toLowerCase())
                this.getTokenSymbol(this.$route.params.address)
                this.getTokenDecimals(this.$route.params.address)

            }
        }


    }
</script>

<style scoped>

</style>
