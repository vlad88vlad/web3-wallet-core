<template>
    <div class="tx-container">

        <div class="v-card">
            <div class="tx-content">

                <div v-if="toLower(from) == toLower(to)">
                    <div class="tx-content">

                        <div class="tx-place self">
                            self
                        </div>
                        <div>
                            you send yourself,{{calcAmount(amount)}} {{symbol}}
                        </div>
                    </div>
                </div>
                <div v-else-if="toLower(from) == address">
                    <div class="tx-content">

                        <div class="tx-place out">
                            out
                        </div>
                        <div>
                            you send  {{toLower(to)}},{{calcAmount(amount)}} {{symbol}}
                        </div>
                    </div>
                </div>
                <div v-else-if="toLower(to) == address">
                    <div class="tx-content">

                        <div class="tx-place in">
                            in
                        </div>
                        <div>
                            {{toLower(to)}} send you,{{calcAmount(amount)}} {{symbol}}
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <v-card-actions>
                    <div style="flex: 1;">
                    </div>
                    <slot></slot>
                </v-card-actions>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../../router/index'

    export default {

        components: {},
        name: 'historyTransactions',
        props: ['from', 'to', 'amount', 'txHash', 'decimal', 'symbol'],

        data() {
            return {
                balance: false,
                history: [],
                blocks: {},
                tokenAddress: '',
                baseUrl: this.$parent.baseUrl,
                address: this.$localStorage.get('address').toLowerCase()


            }
        },
        router,

        methods: {
            getTransactionReceipt(hash) {
                this.$root.web.getTransactionReceipt(hash).then(res => {
                    console.log(res);
                    this.$root.web.getBlock(res.blockNumber).then(resblock => {
                        console.log(resblock);
                    })
                })
            },
            toLower(address) {
                return address.toLowerCase()
            },
            calcAmount(amount) {
                return amount / 10 ** this.decimal

            },
            getData(evt) {
                this.history = evt
            },


        },
        mounted() {
        },
        computed: {},
        watch: {},
        created() {
        }


    }
</script>

<style scoped>
    .tx-container {
        margin: 15px 3%;
    }

    .tx-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .tx-content > div {
        margin: 5px;
    }

    .tx-place {
        text-align: center;
        width: 30px;
        height: 20px;
        border-radius: 3px;
        color:  var(--color);
    }

    .self {

        background: #1565c0;

    }

    .in {

        background: #4caf50;
    }

    .out {

        background: #ef6c00;

    }
</style>
