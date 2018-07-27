<template>
    <div>
        <div class="v-dialog__content " v-if="active && info">
            <div class="v-dialog v-dialog--active" style="width: 500px;">
                <div class="v-card" v-if="info.hashInfo && info.blockInfo">
                    <div class="v-card__title headline grey lighten-2 v-card__title--primary">
                        <div>Transaction Hash</div>
                        <div class="hash">
                            {{info.hashInfo.transactionHash}}
                        </div>
                    </div>
                    <div class="v-card__text">
                        <div>
                            <div class="flex-container ">
                                <div> from:</div>
                                <div class="hash"> {{info.hashInfo.from}} </div>
                            </div>
                            <div class="flex-container ">
                                <div>to:</div>

                                <div class="hash"> {{info.hashInfo.to}} </div>
                            </div>
                            <div class="flex-container ">
                                <div>blockNumber:</div>

                                <div> {{info.hashInfo.blockNumber}} </div>
                            </div>
                            <div class="flex-container ">
                                <div>gasUsed:</div>

                                <div> {{info.hashInfo.gasUsed}} </div>
                            </div>
                            <div class="flex-container ">
                                <div>status:</div>

                                <div :class="info.hashInfo.status ? 'statusTrue' : ''"> {{info.hashInfo.status}}</div>
                            </div>
                            <div class="flex-container ">
                                <div>timestamp:</div>

                                <div> {{timestampToDate(info.blockInfo.timestamp)}} </div>
                            </div>
                        </div>
                    </div>

                    <hr class="v-divider">
                    <div class="v-card__actions">
                        <div class="spacer"></div>
                        <v-btn class="back" @click="closeDialog()">cancel</v-btn>


                    </div>
                </div>
                <div class="preloader" v-else>
                    <div class="wrapper">
                        <div class="preloader-text"> Loading info</div>

                        <div class="loading">

                            <div class="circle circle-1"></div>
                            <div class="circle circle-2"></div>
                            <div class="circle circle-3"></div>
                            <div class="circle circle-4"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../../router/index'

    export default {

        components: {},
        name: 'txDetail',
        props: ['active', 'hash'],
        data() {
            return {

                address: this.$localStorage.get('address').toLowerCase(),
                info: {
                    hashInfo: null,
                    blockInfo: null
                }

            }
        },
        router,


        methods: {
            timestampToDate(timestamp) {
                let date = new Date(timestamp * 1000);
                return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()


            },
            closeDialog() {
                this.info = {
                    hashInfo: null,
                    blockInfo: null
                };
                this.$emit('txDetail', false);

            },
            getTransactionReceipt(hash) {
                this.$root.web.getTransactionReceipt(hash).then(res => {
                    this.$root.web.getBlock(res.blockNumber).then(resBlock => {
                        this.info = {
                            hashInfo: res,
                            blockInfo: resBlock
                        }
                    })
                })
            }
        },
        mounted() {
        },
        computed: {},
        watch: {
            active() {
                if (this.active) {
                    this.getTransactionReceipt(this.hash);

                }
            }
        },
        created() {
        }


    }
</script>

<style scoped>
    .v-dialog {
        background-color:  var(--color);
        display: block;
        color: #424242;

    }


    .headline {
        font-size: 12px !important;
        line-height: 16px !important;
        font-weight: 600;

    }

    .hash {
        white-space: nowrap; /* Запрещаем перенос строк */
        overflow: hidden; /* Обрезаем все, что не помещается в область */
        text-overflow: ellipsis; /* Добавляем многоточие */
    }

    .flex-container {
        display: flex;
    }

    .flex-container > div {
        font-size: 15px !important;
        line-height: 25px !important;
        margin-left: 5px;
        font-weight: 500;

    }

    .statusTrue {
        color: #4caf50
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

    .preloader-text {
        color:  var(--color);
        font-size: 18px;
        margin-bottom: 10px;
    }

    .preloader {
        height: 300px;

        padding: 0;
        margin: 0;
        background: #d8d8d8;

    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -30px;
    }

    .loading {

        width: 100px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -50px;
        text-align: center;
    }

    .loading .circle {
        width: 15px;
        height: 15px;
        background-color:  var(--color);
        display: inline-block;
        margin: 0 2px;
        border-radius: 50%;
        opacity: 0;
        transform: scale(0);
        animation-name: loaderAnim;
        animation-duration: 2s;
        animation-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
        animation-iteration-count: infinite;
        animation-play-state: running;
    }

    .loading .circle-2 {
        animation-delay: 0.25s;
    }

    .loading .circle-3 {
        animation-delay: 0.5s;
    }

    .loading .circle-4 {
        animation-delay: 0.75s;
    }

    @keyframes loaderAnim {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        25% {
            opacity: 1;
            transform: scale(1);
        }
        75% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>