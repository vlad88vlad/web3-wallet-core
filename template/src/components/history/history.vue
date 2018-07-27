<template>
    <div>
        <router-view @history="getData"></router-view>

    </div>
</template>

<script>
    import router from '../../router/index'

    export default {

        components: {},
        name: 'history',
        data() {
            return {

                history: [],
                decimal: '',
                baseUrl: this.$parent.baseUrl,


            }
        },
        router,


        methods: {

            getData(evt) {
                this.history = evt.res.reverse();
                this.decimal=evt.decimal
                console.log('evt', evt);
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
