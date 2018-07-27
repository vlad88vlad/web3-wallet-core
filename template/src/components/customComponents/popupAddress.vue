<template>
    <div class="v-dialog__content ">
        <div class="v-dialog v-dialog--active" style="width: 440px;">
            <v-tabs
                    v-model="tab"
                    color="root-color"
                    centered
                    slider-color="white"
            >
                <v-tab
                        :key="1"
                        ripple
                >
                    Address
                </v-tab>
                <v-tab
                        :key="2"
                        ripple
                >
                    Private key
                </v-tab>
                <v-tab-item :key="1">

                    <div class="v-card">
                        <div class="v-card__text">
                            <div>
                                <img :src="QRCodeImg" class="qr-code"/>
                            </div>
                            <div class="address">
                                {{address}}
                            </div>
                        </div>
                        <hr class="v-divider">
                        <div class="v-card__actions">
                            <div class="spacer"></div>
                            <v-btn class="success" @click=" copyText()">copy</v-btn>
                            <v-btn class="back" @click="closeDialog()">cancel</v-btn>

                        </div>
                    </div>
                </v-tab-item>
                <v-tab-item :key="2"
                >

                    <div class="v-card">
                        <div class="v-card__text">
                            <div v-if="!showPrivateKey">
                                <div class="input-control">
                                    <input id="passwordPrivate" type="password" v-model="password"
                                           :class="[password?'active':'',isValidpassword?'':'no-validate']"
                                           class="matirial-input">
                                    <label class="matirial-label" :class="password?'active':''"
                                           for="passwordPrivate">password</label>

                                    <span class="bar"></span>
                                    <div class="input-error">{{isValidpasswordMessage}}</div>
                                </div>
                            </div>

                            <div v-if="showPrivateKey">
                                <div>
                                    <img :src="QRCodeImgPrivateKey" class="qr-code"/>
                                </div>
                                <div class="privateKey">
                                    {{privateKey}}
                                </div>
                            </div>

                            <hr class="v-divider">
                            <div class="v-card__actions">
                                <div class="spacer"></div>
                                <v-btn v-if="showPrivateKey" class="success" @click=" copyTextKey()">copy</v-btn>
                                <v-btn class="success" v-else @click=" encriptKey()">encript</v-btn>

                                <v-btn class="back" @click="closeDialog()">cancel</v-btn>

                            </div>
                        </div>
                    </div>
                </v-tab-item>
            </v-tabs>
        </div>
    </div>
</template>

<script>

    import QRCode from 'qrcode'
    import * as Crypto from 'crypto-js';

    export default {
        components: {},
        name: 'popupAddress',
        data() {
            return {
                QRCodeImg: '',
                QRCodeImgPrivateKey: '',
                address: '',
                privateKey: '',
                showPrivateKey: false,
                tab: 1,
                password: '',
                isValidpassword: true,
                isValidpasswordMessage: '',
            }
        },
        methods: {
            encriptKey() {
                if (!this.password) {
                    this.isValidpassword = false
                    this.isValidpasswordMessage = 'password required';
                    this.$parent.$parent.callAlert('password required', 'danger');
                    return
                }
                try {
                    let privateKey = Crypto.AES.decrypt(this.$localStorage.get('privateKey').toString(), this.password);
                    let plaintext = privateKey.toString(Crypto.enc.Utf8);
                    console.log(plaintext);
                    if (!plaintext) {
                        this.isValidpassword = false
                        this.isValidpasswordMessage = 'password is incorrect';
                        this.$parent.callAlert('password is incorrect', 'danger');

                    } else {
                        this.showPrivateKey = true
                        this.privateKey = plaintext;
                        QRCode.toDataURL(this.privateKey, {errorCorrectionLevel: 'H'})
                            .then(url => {
                                this.QRCodeImgPrivateKey = url;
                                console.log(url)
                            })
                            .catch(err => {
                                console.error(err)
                            })

                    }
                } catch (err) {
                    console.log(err);
                    this.isValidpassword = false
                    this.isValidpasswordMessage = 'password is incorrect';
                    this.$parent.callAlert('password is incorrect', 'danger');
                }
            },
            copyText() {


                const el = document.createElement('textarea');
                el.value = this.address;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                this.$parent.callAlert('success copied', 'success');


            },
            copyTextKey() {


                const el = document.createElement('textarea');
                el.value = this.privateKey;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                this.$parent.callAlert('success copied', 'success');


            },
            closeDialog() {
                this.$emit('modalAddress', false);

            },


        },
        created() {
            if (this.$localStorage.get('address') !== 'null' && this.$localStorage.get('address') !== null) {
                this.tab = 2
                this.address = this.$localStorage.get('address').toLowerCase();
                QRCode.toDataURL(this.address, {errorCorrectionLevel: 'H'})
                    .then(url => {
                        this.QRCodeImg = url;
                        console.log(url)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
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
            },
            password() {
                this.isValidpassword = true;

            }
        },
        computed: {}


    }

</script>

<style scoped>
    .privateKey {
        width: 100%;
        overflow-x: auto;
    }

    .qr-code {
        width: 100%;
        height: auto;
    }

    .address {
        text-align: center;
        font-size: 2.6vmin;
    }

    .v-dialog {
        background-color:  var(--color);
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

    @media screen and (min-width: 700px) {
        .address {
            font-size: 16px;
        }
    }

</style>
