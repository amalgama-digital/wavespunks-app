<template>
    <div class="wavespunks-header">
        <div class="wavespunks-logo">
            <a href="/">
                <img src="/img/logo.svg">
            </a>
        </div>
        <div class="wavespunks-links">
            <a v-if="itMyPunks" href="/myPunks" style="color: #ED00CC;">MY PUNKS</a>
            <a v-else href="/myPunks">MY PUNKS</a>
            <!-- <a id="reddit" target="_blank" href="https://www.reddit.com/r/WavesPunks/">
                <img src="/img/reddit.svg">
            </a> -->
            <a id="twitter" target="_blank" href="https://twitter.com/WavesPunks">
                <img width="46" src="/img/twitter.svg">
            </a>
            <a id="discord" target="_blank" href="https://discord.gg/gfpKDfRtvf">
                <img src="/img/discord.svg">
            </a>
            <a id="telegram" target="_blank" href="https://t.me/wavespunks_en">
                <img src="/img/telegram.svg">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            name: "Header",
            itMyPunks() {
                return this.$route.name == 'myPunks';
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
        .wavespunks-header {
            flex-direction: column;
            align-items: center !important;
        }

        .wavespunks-header > .wavespunks-links {
            margin-top: 20px;
        }

        .wavespunks-logo {
            margin-left: 60px;
        }

        .wavespunks-logo > p {
            margin-left: 20px;
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

        .wavespunks-links > a {
            margin: 0 10px !important;
        }
    }

    .wavespunks-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;    
        margin-left: 40px;
        margin-right: 40px;
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

</style>