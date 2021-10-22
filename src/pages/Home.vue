<template>
    <div class="wavespunks-home">
        <div class="wavespunks-content">
            <div class="wavespunks-back-logo"></div>
            <div class="wavespunks-main">
                <img class="wavespunks-logo" src="/img/logo.svg">
                <p class="wavespunks-text">COMING SOON</p>
            </div>
            <img class="wavespunks-fire" src="/img/fire.svg">
        </div>
    </div>
</template>

<style scoped>
    @media only screen and (max-height: 767px) {
        .wavespunks-main {
            background-size: 500px 500px;
            height: 500px !important;
        }

        .wavespunks-logo {
            height: 170px;
            width: 170px;
            top: -18% !important;
        }

        .wavespunks-text {
            font-size: 25px !important;
            line-height: 67px !important;
            top: -20% !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .wavespunks-main {
            background-size: 500px 500px;
            height: 500px !important;
        }

        .wavespunks-logo {
            height: 170px;
            width: 170px;
            top: -18% !important;
        }

        .wavespunks-text {
            font-size: 25px !important;
            line-height: 67px !important;
            top: -20% !important;
        }
    }

    @media only screen and (max-width: 424px) {
        .wavespunks-main {
            background-size: 300px 300px;
            height: 300px !important;
            bottom: 50px !important;
        }

        .wavespunks-logo {
            height: 120px;
            width: 120px;
            top: -15% !important;
        }

        .wavespunks-text {
            font-size: 15px !important;
            line-height: 37px !important;
            top: -25% !important;
        }
    }

    .wavespunks-home {
        background: #000000;
        color: white;
        height: 100vh;
        font-family: Inter;
        font-style: normal;
    }

    .wavespunks-content {
        background: radial-gradient(circle, rgba(0,85,255,1) 0%, rgba(0,0,0,1) 75%); 
        /* background: radial-gradient(33.35% 47.68% at 46.8% 50.45%, #0055FF 0.22%, rgba(0, 85, 255, 0) 100%); */
        height: 100%;
    }

    .wavespunks-back-logo {
        background-image: url("/img/back-logo.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
    }

    .wavespunks-main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        background-image: url("/img/shadow.svg");
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: 2;
        width: 100%;
        height: 763px;
        bottom: 0;
    }

    .wavespunks-logo {
        position: relative;
        top: -20%;
    }

    .wavespunks-text {
        font-weight: 500;
        font-size: 55px;
        line-height: 67px;
        text-align: center;
        position: relative;
        top: -15%;
    }

    .wavespunks-fire{
        height: 15%;
        position: absolute;
        top: 50%;
        right: 5%;
        z-index: 2;
    }
</style>
