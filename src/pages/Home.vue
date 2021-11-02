<template>
    <div class="wavespunks-home">
        <div class="wavespunks-header">
            <div class="wavespunks-logo">
                <img src="/img/logo.svg">
                CRYPTO CHRONICLES
            </div>
            <div class="wavespunks-links">
                <a href="#">MY PUNKS</a>
                <a href="#">
                    <img src="/img/discord.svg">
                </a>
                <a href="#">
                    <img src="/img/telegram.svg">
                </a>
                <a href="#">
                    <img src="/img/instagram.svg">
                </a>
            </div>
        </div>
        <div class="wavespunks-first border-radius-18">
            <div class="wavespunks-first-back">
                <div class="wavespunks-first-text">
                    <h2 style="color: #FFFFFF;">FIRST-EVER&nbsp;NFT-PUNKS<br>ON&nbsp;WAVES&nbsp;BLOCKCHAIN</h2>
                    <div class="wavespunks-get-one">
                        GET ONE NOW:
                        <button>Mint a Waves Punk</button>
                    </div>
                </div>
                <img src="/img/first-punk.svg">
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
                <div class="border-radius-18" style="background: #0055FF;">
                    <img src="/img/antiquity-punk-card.svg">
                    <div class="wavespunks-five-ages-text" style="color: white;">
                        <h3>CRYPTO<br>ANTIQUITY</h3>
                        <p>The concept of bit gold<br>Nick Sabo & Satoshi Nakamoto</p>
                        <p>Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                    </div>
                </div>
                <div class="border-radius-18" style="background: #F1F1F1;">
                    <img src="/img/middle-ages-card.svg">
                    <div class="wavespunks-five-ages-text">
                        <h3>BLOCKCHAIN<br>MIDDLE&nbsp;AGES</h3>
                        <p>ICO «gold rush»<br>Sahsa Ivanov & Waves foundation</p>
                        <p>Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                    </div>
                </div>
                <div class="border-radius-18" style="background: #000000;">
                    <img src="/img/crypto-mess-punk-card.svg">
                    <div class="wavespunks-five-ages-text" style="color: white;">
                        <h3>THE<br>GREAT</h3>
                        <p>SEC strikes back<br>Crypto Kitties & Bitcoin Futures</p>
                        <p style="color: #FF00CF;">Only <b>192 rare</b> waves punks<br>Only <b>10 super-rare</b> waves punks</p>
                    </div>
                </div>
                <div class="border-radius-18" style="background: #D64422;">
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
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>


<style scoped>
    h2 {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
    }

    h3 {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        margin: 0;
    }

    .border-radius-18 {
        border-radius: 18px;
    }

    .wavespunks-home {
        margin: 40px 109px;
    }

    .wavespunks-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .wavespunks-logo {
        font-family: Inter;
        font-style: normal;
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
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin: 0px 15px;
    }

    .wavespunks-first {
        margin: 40px 0px;
        background: radial-gradient(49.91% 258.29% at 60.66% 81.09%, #0055FF 0%, #000000 100%);
        height: 550px;
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
        padding: 0 59px;
    }

    .wavespunks-get-one {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        color: #FFFFFF;
        margin-top: 75px;
    }

    .wavespunks-what {
        display: flex;
        justify-content: space-between;
        height: 500px;
        margin: 160px 0;
    }

    .wavespunks-what-is {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #FFFFFF;
        padding: 0 59px;
        width: 46%;
    }

    .wavespunks-what-is > div:nth-child(2) {
        font-family: Inter;
        font-style: normal;
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
        width: 46%;
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
        width: 42%;
        padding: 0 59px;
    }

    .wavespunks-five-ages-four > div > img {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .wavespunks-five-ages-text > p:nth-child(2) {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
    }

    .wavespunks-five-ages-text > p:nth-child(3) {
        font-family: Inter;
        font-style: normal;
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
    }

    .wavespunks-tokenized > div > p:nth-child(1) {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
    }

    .wavespunks-tokenized > div > p:nth-child(2) {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    .wavespunks-tokenized > div > p:nth-child(2) > b {
        font-weight: 500;
        color: #FF00CF;
    }
</style>
