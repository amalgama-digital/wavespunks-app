<template>
    <div>
        <div class="wavespunks-home">
            <div class="wavespunks-header">
                <div class="wavespunks-logo">
                    <img src="/img/logo.svg">
                    <p>CRYPTO CHRONICLES</p>
                </div>
                <div class="wavespunks-links">
                    <a href="/myPunks">MY PUNKS</a>
                    <a id="discord" target="_blank" href="https://discord.gg/gfpKDfRtvf">
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
            <div class="wavespunks-first border-radius-18">
                <div class="wavespunks-first-back border-radius-18">
                    <div class="wavespunks-first-text">
                        <h2 style="color: #FFFFFF;">FIRST-EVER NFT-PUNKS<br>ON WAVES BLOCKCHAIN</h2>
                        <div class="wavespunks-get-one" v-if="punks_supply <= 999">
                            GET&nbsp;ONE&nbsp;NOW
                            <button @click="login">Mint&nbsp;a&nbsp;Waves&nbsp;Punk</button>
                        </div>
                    </div>
                    <img src="/img/first-punk.svg">
                </div>
            </div>
            <div class="wavespunks-watch-out" v-if="punks_supply <= 999">
                <img src="/img/fire-watch.svg">
                <h2>WATCH OUT!</h2>
                <p>THE PRICE WILL INCREASE<br>for every next 100 WAVES PUNKS</p>
                WavesPunks left: {{ 1000 - punks_supply }}<br>
                Current price: {{ (parseInt(punks_supply / 100) + 1) }} WAVES<br><br>
                <div>
                    <div :style="fire">
                        <img src="/img/fire-timeline.svg">
                    </div>
                    <img src="/img/timeline.svg">
                </div>
            </div>
            <div class="wavespunks-what">
                <div class="wavespunks-what-is border-radius-18">
                    <h2>WHAT&nbsp;IS<br>WAVES&nbsp;PUNKS?</h2>
                    <div>
                        <p>Blockchain platform WAVES has always been at the forefront of blockchain technology development.</p>
                        <p>WAVES PUNKS is the first collection of digital punks on Waves blockchain, dedicated both to the major milestones in cryptocurrency history and to the role of Waves blockchain in it.</p>
                    </div>
                </div>
                <div class="wavespunks-what-four">
                    <div class="border-radius-18" style="background: #0055FF;">
                        <img src="/img/only-nft.svg">
                    </div>
                    <div class="border-radius-18" style="background: #0A0A0B;">
                        <img src="/img/first-of-it-s-kind.svg">
                    </div>
                    <div class="border-radius-18" style="background: #FFFFFF;">
                        <img src="/img/waves-community.svg">
                    </div>
                    <div class="border-radius-18" style="background: #000000;">
                        <div style="background: radial-gradient(99.15% 148.72% at 93.42% 110.15%, #0055FF 0.22%, rgba(0, 85, 255, 0) 100%); width: 100%; height: 100%; border-radius: 18px;">
                            <img src="/img/crypto-enthusiasts.svg">
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div>
                <div>
                    <h2>HOW TO MINT</h2>
                    <div>IT’S THAT EASY:</div>
                    <button>Mint a Waves Punk</button>
                </div>
                <div>
                </div>
            </div> -->
            <div class="wavespunks-five-ages">
                <h2>FIVE&nbsp;AGES&nbsp;OF<br>CRYPTO&nbsp;HISTORY</h2>
                <div class="wavespunks-five-ages-four">
                    <div class="wavespunks-crypto-antiquity border-radius-18">
                        <img src="/img/antiquity-punk-card.svg">
                        <div class="wavespunks-five-ages-text" style="color: white;">
                            <h3>CRYPTO<br>ANTIQUITY</h3>
                            <p>The concept of bit gold<br>Nick Sabo & Satoshi Nakamoto</p>
                            <p>Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                        </div>
                    </div>
                    <div class="wavespunks-middle-ages border-radius-18">
                        <img src="/img/middle-ages-card.svg">
                        <div class="wavespunks-five-ages-text">
                            <h3>BLOCKCHAIN<br>MIDDLE&nbsp;AGES</h3>
                            <p>ICO «gold rush»<br>Sahsa Ivanov & Waves foundation</p>
                            <p>Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                        </div>
                    </div>
                    <div class="wavespunks-the-great border-radius-18">
                        <img src="/img/crypto-mess-punk-card.svg">
                        <div class="wavespunks-five-ages-text" style="color: white;">
                            <h3>THE<br>GREAT</h3>
                            <p>SEC strikes back<br>Crypto Kitties & Bitcoin Futures</p>
                            <p style="color: #FF00CF;">Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                            <img src="/img/crypto-mess.svg">
                        </div>
                    </div>
                    <div class="wavespunks-crypto-renaissance border-radius-18">
                        <img src="/img/renaissance-punk-card.svg">
                        <div class="wavespunks-five-ages-text" style="color: white;">
                            <h3>CRYPTO<br>RENAISSANCE</h3>
                            <p>Rise of NFT & DeFi-revolution<br>Beeple & Waves Ducks</p>
                            <p>Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                        </div>
                    </div>
                </div>
                <div class="wavespunks-tokenized border-radius-18">
                    <h3>TOKENIZED</h3>
                    <img src="/img/future-letters.svg">
                    <div>
                        <p>Blockchain-based states<br>Last Bitcoin on Earth</p>
                        <p>Only <b>191 rare</b> waves punks<br>Only <b>1 ULTRA-rare</b> waves punks</p>
                    </div>
                    <img src="/img/future-head.svg">
                </div>
            </div>
            <div class="wavespunks-upcoming">
                <h2>UPCOMING&nbsp;NFT<br>COLLECTIONS</h2>
                <div class="wavespunks-upcoming-four">
                    <div class="wavespunks-current-collection border-radius-18">
                        <div style="display: flex; flex-direction: row;">
                            <img src="/img/fire.svg">
                            <p>current<br>collection</p>
                        </div>
                        <div>
                            <p>NFT COLLECTION</p>
                            <p>PUNKS</p>
                        </div>
                        <img src="/img/current-punk-card.svg">
                    </div>
                    <div class="wavespunks-coming-soon border-radius-18">
                        <p>?</p>
                        <p>coming<br>soon</p>
                    </div>
                    <div class="wavespunks-coming-soon border-radius-18">
                        <p>?</p>
                        <p>coming<br>soon</p>
                    </div>
                    <div class="wavespunks-coming-soon border-radius-18">
                        <p>?</p>
                        <p>coming<br>soon</p>
                    </div>
                </div>
            </div>
            <div class="wavespunks-join-the-global">
                <h2>JOIN&nbsp;THE&nbsp;GLOBAL<br>PUNKS&nbsp;MOVEMENT</h2>
                <div>
                    <div>
                        <h2>134 615 USD</h2>
                        <p>With the average selling price of<br>punk over the past year equals</p>
                    </div>
                    <div>
                        <h2>1 786 821 759 USD</h2>
                        <p>And with the total value of punks sold over the last<br>year equals</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wavespunks-footer">
            <div class="wavespunks-footer-wrapper">
                <div class="wavespunks-footer-logo">
                    <img src="/img/logo-footer.svg">
                    <p>CRYPTO CHRONICLES</p>
                </div>
                <div>
                    <p>DON’T&nbsp;MISS<br>THE&nbsp;TOKENIZED&nbsp;FUTURE</p>
                    <!-- <button>Mint a Waves Punk</button> -->
                    <div class="wavespunks-links">
                        <a id="discord" target="_blank" href="https://discord.gg/gfpKDfRtvf">
                            <img src="/img/discord-footer.svg">
                        </a>
                        <a id="telegram" target="_blank" href="https://t.me/wavespunks">
                            <img src="/img/telegram-footer.svg">
                        </a>
                        <a id="instagram" target="_blank" href="https://instagram.com/waves.punks">
                            <img src="/img/instagram-footer.svg">
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/img/footer-punk.svg">
                    <img src="/img/only-nft.svg">
                </div>
            </div>
        </div>
        <connect-wallet v-if="connect" :connect="connect" v-on:close="connect = $event" v-on:success="mint"></connect-wallet>
        <notifications v-if="notify" :error="notify_error" :text="notify_text" v-on:close="notify = $event"></notifications>
    </div>
</template>

<script>
    import axios from "axios";
    import ConnectWallet from "../components/ConnectWallet.vue";
    import Notifications from "../components/Notifications.vue";

    import { ProviderKeeper } from '@waves/provider-keeper';
    import { ProviderCloud } from '@waves.exchange/provider-cloud';

    export default {
        name: "Home",
        data(){
            return {
                connect: false,
                punks_supply: 0,
                inviteKey: "",
                notify: false,
                notify_error: false,
                notify_text: ""
            }
        },
        components: {
            ConnectWallet,
            Notifications
        },
        async mounted() {
            let params = this.$route.params["id"];
            let inviteKey = window.localStorage.getItem("inviteKey");
            if (params != undefined) {
                this.inviteKey = params;
                window.localStorage.setItem("inviteKey", params);
            } else if (inviteKey != null) {
                this.inviteKey = inviteKey;
            }

            await axios.get(`${window.nodeURL}/addresses/data/${window.contractAddress}?key=punks_supply`)
                .then(res => {
                    if (res.data[0].key == "punks_supply" && res.data[0].type == "integer")
                        this.punks_supply = res.data[0].value;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        computed: {
            fire() {
                return "width: " + (this.punks_supply / 10) + "%";
            }
        },
        methods: {
            login() {
                const data = JSON.parse(window.localStorage.getItem("loginChoice"));
                if (!data) {
                    this.connect = true;
                } else {
                    this.mint();
                }
            },
            async mint() {
                const data = JSON.parse(window.localStorage.getItem("loginChoice"));
                if (data.choice == "keeper") {
                    const authData = { data: 'https://wavespunks.com/' };
                    await window.signer.setProvider(new ProviderKeeper(authData)).then(res => {
                        console.log(res);
                    }).catch(error => {
                        console.error(error);
                    });
                } else if (data.choice == "email") {
                    window.signer.setProvider(new ProviderCloud());
                }

                await window.signer.invoke({
                    dApp: window.contractAddress,
                    fee: 900000,
                    payment: [{
                        assetId: 'WAVES',
                        amount: (parseInt(this.punks_supply / 100) + 1) * 100000000,
                    }],
                    call: {
                        function: 'mint',
                        args: [{
                            type: 'string',
                            value: this.inviteKey,
                        }],
                    },
                }).broadcast().then(res => {
                    console.log(res);
                    this.notify = true;
                    this.notify_error = false;
                    this.notify_text = "Your transaction has been broadcast to network!";
                }).catch(error => {
                    console.error(error);
                    this.notify = true;
                    this.notify_error = true;
                    this.notify_text = error.message;
                });
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 1440px) {
        h2 {
            font-size: 42px !important;
        }

        h3 {
            font-size: 30px !important;
        }

        .wavespunks-what-four > div:nth-child(1) > img {
            height: 80%;
        }

        .wavespunks-what-four > div:nth-child(2) > img {
            width: 85%;
        }

        .wavespunks-what-four > div:nth-child(3) > img {
            width: 85%;
        }

        .wavespunks-what-four > div:nth-child(4) img {
            width: 75%;
        }

        .wavespunks-five-ages-text > p:nth-child(2),
        .wavespunks-tokenized > div > p:nth-child(1) {
            font-size: 16px !important;
        }

        .wavespunks-five-ages-text > p:nth-child(3),
        .wavespunks-tokenized > div > p:nth-child(2) {
            font-size: 18px !important;
        }

        .wavespunks-tokenized > img {
            width: 200px;
        }

        .wavespunks-upcoming-four {
            overflow-x: scroll;
            overflow-y: hidden;
            -ms-overflow-style: none; /* for Internet Explorer, Edge */
            scrollbar-width: none; 
        }

        .wavespunks-upcoming-four::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }

        .wavespunks-coming-soon {
            min-width: 330px;
            margin-left: 20px;
        }
    }

    @media only screen and (max-width: 1200px) {
        .wavespunks-watch-out > div:last-child {
            display: none;
        }
    }

    @media only screen and (max-width: 1024px) {
        h2 {
            font-size: 32px !important;
            line-height: 43px !important;
        }

        h3 {
            font-size: 20px !important;
            line-height: 28px !important;
        }

        .wavespunks-header {
            margin-left: 0px !important;
        }

        .wavespunks-get-one {
            font-size: 25px !important;
            width: min-content !important;
        }

        .wavespunks-get-one > button {
            margin-left: 10px;
        }

        .wavespunks-what {
            flex-wrap: wrap;
            height: max-content !important;
        }

        .wavespunks-what > div {
            width: 100% !important;
        }

        .wavespunks-what > div:nth-child(1) {
            padding: 60px !important;
        }

        .wavespunks-what > div:nth-child(2) {
            margin-top: 20px;
            margin-left: 0px;
        }

        .wavespunks-what-four > div:nth-child(2) > img {
            height: 85%;
        }

        .wavespunks-what-four > div:nth-child(3) > img {
            height: 85%;
        }

        .wavespunks-what-four > div:nth-child(4) img {
            height: 75%;
        }

        .wavespunks-five-ages-four {
            height: max-content !important;
        }

        .wavespunks-five-ages-four > div {
            width: 100% !important;
        }

        .wavespunks-middle-ages, .wavespunks-the-great, .wavespunks-crypto-renaissance {
            margin-top: 30px;
        }

        .wavespunks-the-great > .wavespunks-five-ages-text > img {
            width: 80px;
            top: 45px !important;
            left: 125px !important;
        }

        .wavespunks-current-collection > div:nth-child(2) > p:nth-child(2) {
            font-size: 32px !important;
        }

        .wavespunks-footer-wrapper > div:nth-child(3) > img:nth-child(2) {
            display: none;
        }

        .wavespunks-footer-logo {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start !important;
        }

        .wavespunks-footer-logo > p {
            font-size: 12px !important;
            margin-left: 30px;
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

        .wavespunks-first {
            height: 800px !important;
        }

        .wavespunks-first-back {
            flex-direction: column;
            align-items: center;
            background-size: cover;
            background-position: left !important;
        }

        .wavespunks-first-back > img {
            margin-top: 34px !important;
            margin-right: 0px !important;
        }

        .wavespunks-first-text {
            padding: 60px 60px 0 60px !important;
            text-align: center;
        }

        .wavespunks-tokenized {
            flex-wrap: wrap;
            height: 100% !important;
        }

        .wavespunks-tokenized > img:nth-child(2) {
            margin-top: -10px;
        }

        .wavespunks-tokenized > img:nth-child(4) {
            margin-bottom: -10px;
        }

        .wavespunks-footer-wrapper {
            flex-direction: column !important;
        }

        .wavespunks-footer-wrapper > div:nth-child(2) {
            margin-bottom: 20px;
        }

        .wavespunks-footer-logo {
            margin-left: 40px;
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

        .wavespunks-first-text {
            align-items: center;
        }

        .wavespunks-five-ages-four > div {
            height: 221px !important;
        }

        .wavespunks-five-ages-four > div > img {
            height: 100%;
        }

        .wavespunks-the-great > .wavespunks-five-ages-text > img {
            top: 5px !important;
        }

        .wavespunks-five-ages-text > p:nth-child(3) {
            margin-bottom: 0px !important;
        }

        .wavespunks-tokenized {
            position: relative;
        }

        .wavespunks-tokenized > img:nth-child(4) {
            position: absolute;
            right: 20px;
            bottom: -10px;
        }

        .wavespunks-join-the-global > div {
            flex-direction: column !important;
        }

        .wavespunks-join-the-global > div > div:nth-child(2) {
            margin-left: 0px !important;
        }
    }

    @media only screen and (max-width: 660px) {
        .wavespunks-first-back > img {
            height: 400px !important;
        }

        .wavespunks-get-one {
            flex-wrap: wrap;
            justify-content: center !important;
        }

        .wavespunks-get-one > button {
            margin-top: 10px;
        }

        .wavespunks-what-is > div:nth-child(2) {
            font-size: 14px !important;
            line-height: 17px !important;
        }

        .wavespunks-what-four > div:nth-child(2) > img,
        .wavespunks-what-four > div:nth-child(3) > img {
            height: 60% !important;
        }

        .wavespunks-what-four > div:nth-child(4) img {
            height: 50% !important;
        }

        .wavespunks-five-ages h2 {
            margin-left: 0px !important;
            text-align: center;
        }

        .wavespunks-five-ages-four > div {
            padding: 0 35px !important;
        }

        .wavespunks-the-great > .wavespunks-five-ages-text > img {
            top: 10px !important;
            left: 105px !important;
        }

        .wavespunks-five-ages-text > p:nth-child(2),
        .wavespunks-tokenized > div > p:nth-child(1) {
            font-size: 12px !important;
            line-height: 15px !important;
        }

        .wavespunks-five-ages-text > p:nth-child(3),
        .wavespunks-tokenized > div > p:nth-child(2) {
            font-size: 12px !important;
            line-height: 15px !important;
        }

        .wavespunks-the-great > img {
            height: calc(100% + 18px) !important;
        }

        .wavespunks-tokenized {
            flex-direction: column;
            justify-content: center !important;
            align-items: flex-start !important;
            height: 200px !important;
            padding: 0 35px !important;
        }

        .wavespunks-tokenized > img:nth-child(2) {
            position: absolute;
            right: 20px;
            top: 0px;
        }

        .wavespunks-join-the-global {
            margin-left: 0px !important;
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

        .wavespunks-first {
            height: 700px !important;
        }

        .wavespunks-first-back > img {
            height: 300px !important;
            margin-top: 0px !important;
        }

        .wavespunks-what {
            margin-top: 70px !important;
        }

        .wavespunks-what > div:nth-child(1) {
            padding: 35px !important;
        }

        .wavespunks-five-ages {
            margin-top: 80px !important;
        }

        .wavespunks-five-ages-four > div {
            height: 190px !important;
            overflow: hidden;
        }

        .wavespunks-five-ages-four > div > img {
            right: -80px !important;
        }

        .wavespunks-the-great > .wavespunks-five-ages-text > img {
            top: 1px !important;
            left: 95px !important;
        }

        .wavespunks-tokenized > img {
            width: 120px;
        }

        .wavespunks-upcoming {
            margin-top: 78px !important;
        }

        .wavespunks-upcoming h2 {
            margin-left: 0px !important;
        }

        .wavespunks-upcoming-four > div{
            height: 366px !important;
        }

        .wavespunks-current-collection > img {
            width: 200px !important;
        }

        .wavespunks-coming-soon {
            min-width: 200px !important;
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

    h2 {
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
        margin: 0;
    }

    h3 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        margin: 0;
    }

    .border-radius-18 {
        border-radius: 18px;
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

    .wavespunks-first {
        margin-top: 70px;
        background: radial-gradient(49.91% 258.29% at 60.66% 81.09%, #0055FF 0%, #000000 100%);
        height: 550px;
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2)
    }

    .wavespunks-first-back {
        background-image: url("/img/first-back.svg");
        background-repeat: no-repeat;
        background-position: right;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .wavespunks-first-back > img {
        height: 503px;
        margin-top: 47px;
        margin-right: 160px;
    }

    .wavespunks-first-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 60px;
    }

    .wavespunks-get-one {
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        color: #FFFFFF;
        margin-top: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 410px;
    }

    .wavespunks-watch-out {
        width: 100%;
        text-align: center;
        margin-top: 90px;
    }

    .wavespunks-watch-out > p {
        font-size: 12px;
    }

    .wavespunks-watch-out > div {
        position: relative;
        width: min-content;
        padding-top: 20px;
        margin: auto;
    }

    .wavespunks-watch-out > div > div:first-child {
        position: absolute;
        z-index: 0;
        left: 4px;
        bottom: 20px;
        overflow: hidden;
    }

    .wavespunks-watch-out > div > img:last-child {
        position: relative;
        z-index: 1;
    }

    .wavespunks-what {
        display: flex;
        justify-content: space-between;
        height: 500px;
        margin-top: 90px;
    }

    .wavespunks-what-is {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #FFFFFF;
        padding: 0 60px;
        width: calc(50% - 10px);
    }

    .wavespunks-what-is > div:nth-child(2) {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        margin-top: 75px;
    }

    .wavespunks-what-four {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        width: calc(50% - 10px);
        margin-left: 20px;
    }

    .wavespunks-five-ages {
        margin-top: 180px;
    }

    .wavespunks-five-ages h2 {
        margin-left: 60px;
        margin-bottom: 50px;
    }

    .wavespunks-what-four div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 49%;
        height: 49%;
    }

    .wavespunks-five-ages-four {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        height: 675px;
    }

    .wavespunks-five-ages-four > div {
        position: relative;
        height: 321px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: calc(50% - 130px);
        padding: 0 60px;
    }

    .wavespunks-five-ages-four > div > img {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 0;
    }

    .wavespunks-five-ages-four > div > div {
        z-index: 1;
    }

    .wavespunks-crypto-antiquity {
        background: #0055FF;
        box-shadow: 2px 2px 2px 0px rgba(6, 59, 166, 0.6), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-middle-ages {
        background: #F1F1F1;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-the-great {
        background: #000000;
        box-shadow: 2px 2px 2px 0px rgba(1, 1, 1, 0.6), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-the-great > .wavespunks-five-ages-text > img {
        position: absolute;
        top: 10px;
        left: 180px;
    }

    .wavespunks-crypto-renaissance {
        background: #D64422;
        box-shadow: 2px 2px 2px 0px rgba(219, 140, 122, 0.6), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-five-ages-text > p:nth-child(2) {
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
    }

    .wavespunks-five-ages-text > p:nth-child(3) {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    .wavespunks-five-ages-text > p:nth-child(3) > b {
        font-weight: 500;
    }

    .wavespunks-five-ages-four > div:nth-child(1) > .wavespunks-five-ages-text > p:nth-child(3) > b {
        color: #FFD645;
    }

    .wavespunks-five-ages-four > div:nth-child(2) > .wavespunks-five-ages-text > p:nth-child(3) > b {
        color: #0055FF;
    }

    .wavespunks-five-ages-four > div:nth-child(3) > .wavespunks-five-ages-text > p:nth-child(3) > b {
        color: white;
    }

    .wavespunks-five-ages-four > div:nth-child(4) > .wavespunks-five-ages-text > p:nth-child(3) > b {
        color: black;
    }

    .wavespunks-tokenized {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 160px;
        margin-top: 120px;
        padding: 0 60px;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-tokenized > div > p:nth-child(1) {
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
    }

    .wavespunks-tokenized > div > p:nth-child(2) {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    .wavespunks-tokenized > div > p:nth-child(2) > b {
        font-weight: 500;
        color: #FF00CF;
    }

    .wavespunks-upcoming {
        margin-top: 178px;
    }

    .wavespunks-upcoming h2 {
        margin-left: 60px;
        margin-bottom: 50px;
    }

    .wavespunks-upcoming-four {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }

    .wavespunks-upcoming-four > div {
        width: 330px;
        height: 503px;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    }

    .wavespunks-current-collection {
        background: #FFD645;
    }

    .wavespunks-current-collection > div {
        margin-left: 24px;
    }

    .wavespunks-current-collection > div:first-child {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #FF00CF;
        margin-bottom: 22px;
    }

    .wavespunks-current-collection > div:first-child > p {
        margin-left: 7px;
    }

    .wavespunks-current-collection > div:nth-child(2) > p:first-child {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FF00CF;
        margin: 0;
    }

    .wavespunks-current-collection > div:nth-child(2) > p:nth-child(2) {
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
        margin: 0;
    }

    .wavespunks-coming-soon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(177.6% 177.6% at 21.52% 118.9%, #0055FF 0%, #000000 100%);
    }

    .wavespunks-coming-soon > p:first-child {
        font-weight: 300;
        font-size: 200px;
        line-height: 242px;
        text-align: center;
        margin: 0px;
        color: #0055FF;
    }

    .wavespunks-coming-soon > p:nth-child(2) {
        font-weight: 600;
        font-size: 35px;
        line-height: 42px;
        text-align: center;
        color: #0055FF;
        margin-top: 0px;
    }

    .wavespunks-join-the-global {
        margin-left: 60px;
        margin-top: 130px;
    }

    .wavespunks-join-the-global > h2 {
        color: #0055FF;
        margin-bottom: 60px;
    }

    .wavespunks-join-the-global > div {
        display: flex;
        flex-direction: row;
    }

    .wavespunks-join-the-global > div > div:nth-child(2) {
        margin-left: 120px;
    }

    .wavespunks-join-the-global > div > div > p {
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
    }

    .wavespunks-footer {
        font-family: Inter;
        font-style: normal;
        background: black;
        color: white;
        margin-top: 150px;
    }

    .wavespunks-footer-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 160px;
        padding-top: 25px;
        background: radial-gradient(46.38% 222.62% at 47.18% 167.45%, #0055FF 0.22%, rgba(0, 85, 255, 0) 100%);
    }

    .wavespunks-footer-logo {
        display: flex;
        align-items: flex-end;
    }

    .wavespunks-footer-logo > p {
        font-weight: 500;
        font-size: 10px;
        line-height: 17px;
        margin-bottom: 10px;
    }

    .wavespunks-footer-wrapper > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wavespunks-footer-wrapper > div:nth-child(2) > p {
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
    }

    .wavespunks-footer-wrapper > div:nth-child(3) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .wavespunks-footer-wrapper > div:nth-child(3) > img:nth-child(2) {
        width: 75px;
        margin-left: 70px;
    }
</style>
