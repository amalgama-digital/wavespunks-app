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
        <div class="wallet" v-if="!walletStatus">
            <h2>Connect your Waves wallet</h2>
            <button @click="connect = true">Connect wallet</button>
        </div>
        <div class="panel" v-else>
            <div class="ref">
                Your invite link: <a :href="link">{{ link }}</a>
                <p>WavesPunks has a decentralized reward system for inviting users! 10% of the purchase amount will be sent directly to your Waves wallet! No worries the price for your friend won't change.</p>
            </div>
            <div class="log-out">
                Your address: {{ this.wallet.address }}
                <button @click="logout">Log out</button>
            </div>
        </div>
        <div class="my-punks" v-if="punks.length > 0">
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
        <div class="no-my-punks" v-else-if="walletStatus && punks.length <= 0">
            <p>?</p>
            <p>You don't have WavesPunks yet, your WavesPunks will be show a moment after mint</p>
        </div>
        <connect-wallet v-if="connect" :connect="connect" v-on:close="connect = $event" v-on:success="getMyPunks($event)"></connect-wallet>
    </div>
</template>

<script>
    import axios from "axios";
    import ConnectWallet from "../components/ConnectWallet.vue";

    export default {
        name: "MyPunks",
        data(){
            return {
                connect: false,
                wallet: {},
                walletStatus: false,
                link: "",
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
                this.walletStatus = true;
                this.wallet.address = address;
                this.link = `https://wavespunks.com/i/${address}`;
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
            },
            logout () {
                window.localStorage.removeItem("loginChoice");
                location.reload();
            }
        }
    }
</script>

<style scoped>
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

    button {
        background: #0055FF;
        border: 0;
        box-shadow: 2px 2px 2px 0px rgba(6, 59, 166, 0.6), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
        border-radius: 8px;
        color: white;
        padding: 10px 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
    }

    button:hover {
        cursor: pointer;
    }

    .wavespunks-home, .wallet, .panel, .my-punks, .no-my-punks {
        font-family: Inter;
        font-style: normal;
    }

    .wavespunks-home {
        margin: 40px;
    }

    .wavespunks-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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

    .wallet {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wallet > h2 {
        font-weight: 500;
    }

    .panel {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        font-weight: 300;
    }

    .ref, .log-out {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #F1F1F1;
        border-radius: 18px;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
        margin: 40px;
        padding: 20px;
        text-align: center;
        width: 530px;
    }

    .ref > a, .ref > a:hover, .ref > a:active {
        color: black;
    }

    .log-out > button {
        margin-top: 10px;
    }

    .my-punks {
        margin: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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

    .no-my-punks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #F1F1F1;
        border-radius: 18px;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
        width: 357px;
        height: 500px;
        padding: 20px;
        margin: auto;
    }

    .no-my-punks > p:first-child {
        font-size: 130px;
    }

    .no-my-punks > p:nth-child(2) {
        text-align: center;
    }
</style>
