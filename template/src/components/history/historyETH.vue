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
                <img src="../../assets/eth.png" width="30" height="30">

                Your balance:
                {{balance}}
                ETH
            </div>
            <div v-if="history.length">
                <div v-for="(item,index) in history">


                    <div v-if="item.value > 0">
                        <history-transactions :from=" item.from" :to="item.to"
                                              :amount="item.value" :tx-hash="item.hash"
                                              :decimal="decimal" :symbol="'ETH'"
                        >
                            <button class="v-btn back" @click="openDetail(item.hash) ">
                                <v-icon>visibility</v-icon>
                                Detail
                            </button>
                        </history-transactions>

                    </div>

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
        name: 'historyETH',
        data() {
            return {
                history: [],
                decimal: 18,
                balance: '',
                showDetail: false,
                currencyHash: '',
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
            getBalance(addressUser) {
                this.$root.web.getBalance(addressUser).then(res => {
                    console.log(res);
                    this.balance = res
                });
            },
            getTransactionsByAccount(address) {
                this.preloader =true
                this.$http.get(`https://ropsten.etherscan.io/api?module=account&action=txlist&address=${address}`).then(
                    function (response) {
                        console.log(response.body);
                        this.history = response.body.result;
                        this.preloader =false

                        this.$emit('history', {
                            res: response.body.result,
                            decimal: null
                        })

//                        console.log((response.body.average/ 10000000000 * 1.5).toFixed(9));
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
            console.log(this.$localStorage.get('address'));
            this.getTransactionsByAccount(this.$localStorage.get('address'))
            this.getBalance(this.$localStorage.get('address').toLowerCase())

        }


    }
</script>

<style scoped>

</style>
