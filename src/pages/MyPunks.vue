<template>
    <div>
        <div class="wavespunks-home">
            <div class="wavespunks-header">
                <div class="wavespunks-logo">
                    <a href="/">
                        <img src="/img/logo.svg">
                    </a>
                    <p>CRYPTO CHRONICLES</p>
                </div>
                <div class="wavespunks-links">
                    <a href="/myPunks">MY PUNKS</a>
                    <a id="discord" target="_blank" href="https://discord.gg/QqBptKxSzS">
                        <img src="/img/discord.svg">
                    </a>
                    <a id="telegram" target="_blank" href="https://t.me/wavespunks">
                        <img src="/img/telegram.svg">
                    </a>
                    <a id="instagram" target="_blank" href="https://instagram.com/waves.punks">
                        <img src="/img/instagram.svg">
                    </a>
                </div>
            </div>
        </div>
        <div class="my-punks">
            <div class="punk" v-for="(punk) in punks" v-bind:key="punk.id">
                <img :src="`/punks/p${ punk.id }.png`">
                <div>
                    <div class="punk-name">
                        <p>WavesPunk #{{ punk.id }}</p>
                    </div>
                    <div class="punk-id">
                        <p>id: {{ punk.id }}</p>
                        <p>type: {{ punk.type }}</p>
                    </div>
                    <div class="punk-text">{{ punk.description }}</div>
                </div>
            </div>
        </div>
        <connect-wallet v-if="connect" :connect="connect" v-on:close="connect = $event" v-on:success="getMyPunks($event)"></connect-wallet>
    </div>
</template>

<script>
    import axios from "axios";
    import ConnectWallet from "../components/ConnectWallet.vue";

    export default {
        name: "Home",
        data(){
            return {
                connect: false,
                wallet: {},
                punks: []
            }
        },
        components: {
            ConnectWallet
        },
        async mounted() {
            const data = window.localStorage.getItem("loginChoice");
            if (!data) {
                this.connect = true;
            } else {
                this.wallet = JSON.parse(data);
                this.getMyPunks(this.wallet.address);
            }
        },
        methods: {
            async getMyPunks(address) {
                await axios.get(`${window.nodeURL}/assets/nft/${address}/limit/1000`)
                    .then(res => {
                        for(let i = 0; i < res.data.length; i++) {
                            if (res.data[i].issuer == window.contractAddress) {
                                let data = JSON.parse(res.data[i].description);
                                if (data.id <= 40) {
                                    data.description = window.rare[data.id];
                                }
                                this.punks.push(data);
                            }
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 1024px) {
        .wavespunks-header {
            margin-left: 0px !important;
        }
    }

    @media only screen and (min-width: 769px) {
        .wavespunks-logo > p {
            margin-top: 80px;
        }
    }

    @media only screen and (max-width: 768px) {
        .wavespunks-header {
            align-items: baseline !important;
        }

        .wavespunks-logo {
            display: flex;
            flex-direction: column;
        }
    }

    @media only screen and (min-width: 768px) {
        .wavespunks-logo {
            display: flex;
        }
    }

    @media only screen and (max-width: 767px) {
        .wavespunks-logo {
            margin-left: 60px;
        }

        .wavespunks-logo > p {
            margin-left: 20px;
        }

        .wavespunks-header {
            flex-direction: column;
            align-items: center !important;
        }
    }

    @media only screen and (max-width: 580px) {
        .wavespunks-logo {
            margin-left: 50px !important;
        }

        .wavespunks-logo > img {
            width: 200px !important;
        }

        .wavespunks-logo > p {
            margin-left: 5px !important;
        }
    }

    @media only screen and (max-width: 400px) {
        .wavespunks-home {
            margin: 20px !important;
        }
    }

    .wavespunks-home {
        margin: 40px;
        font-family: Inter;
        font-style: normal;
    }

    .wavespunks-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-left: 70px;
    }

    .wavespunks-logo {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }

    .wavespunks-links {
        display: flex;
        align-items: center;
    }

    .wavespunks-links a, .wavespunks-links a:hover, .wavespunks-links a:active {
        text-decoration: none;
        color: black;
    }

    .wavespunks-links > a {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin: 0px 15px;
    }

    .wavespunks-links > a:first-child {
        color: #ED00CC;
    }

    .my-punks {
        margin: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-family: Inter;
        font-style: normal;
    }

    .punk {
        width: 357px;
        height: 500px;
        background: #F1F1F1;
        border-radius: 18px;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
        margin-top: 20px;
        padding: 20px;
    }

    .punk > img {
        width: 100%;
        margin: auto;
    }

    .punk-name {
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
    }

    .punk-id {
        display: flex;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }

    .punk-id > p:nth-child(2) {
        margin-left: 30px;
    }

    .punk-text {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }
</style>
