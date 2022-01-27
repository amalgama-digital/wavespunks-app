<template>
    <div class="wavespunks-upcoming">
        <h2>UPCOMING&nbsp;NFT<br>COLLECTIONS</h2>
        <div class="wavespunks-upcoming-four">
            <div class="wavespunks-first-collection border-radius-18">
                <div>
                    <p>NFT COLLECTION</p>
                    <p>CRYPTO<br>CHRONICLES</p>
                </div>
                <img src="/img/first-punk-card.svg">
            </div>
            <div class="wavespunks-second-collection border-radius-18">
                <div style="display: flex; flex-direction: row;">
                    <img src="/img/fire.svg">
                    <p>current<br>collection</p>
                </div>
                <img src="/img/second-punk-card.svg">
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
</template>

<style scoped>
    @media only screen and (max-width: 1440px) {
        h2 {
            font-size: 42px !important;
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

        .wavespunks-coming-soon,
        .wavespunks-second-collection {
            min-width: 330px;
            margin-left: 20px;
        }
    }

    @media only screen and (max-width: 1024px) {
        h2 {
            font-size: 32px !important;
            line-height: 43px !important;
        }

        .wavespunks-first-collection > div:nth-child(1) {
            margin-bottom: 67px !important;
        }

        .wavespunks-first-collection > div:nth-child(1) > p:nth-child(2) {
            font-size: 22px !important;
            line-height: 26px !important;
        }
    }

    @media only screen and (max-width: 580px) {
        .wavespunks-upcoming {
            margin-top: 78px !important;
        }

        .wavespunks-upcoming h2 {
            margin-left: 0px !important;
        }

        .wavespunks-upcoming-four > div{
            height: 366px !important;
        }

        .wavespunks-first-collection > img {
            width: 200px !important;
        }

        .wavespunks-first-collection > div:nth-child(1) {
            margin-bottom: 67px !important;
        }

        .wavespunks-second-collection {
            min-width: 200px !important;
        }

        .wavespunks-second-collection > img {
            width: 175px;
            margin-top: 50px !important;
        }

        .wavespunks-coming-soon {
            min-width: 200px !important;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
        margin: 0;
    }

    .border-radius-18 {
        border-radius: 18px;
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

    /* Upcoming | First collection */

    .wavespunks-first-collection {
        background: #FFD645;
    }

    .wavespunks-first-collection > div {
        margin-left: 24px;
    }

    .wavespunks-first-collection > div:nth-child(1) {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .wavespunks-first-collection > div:nth-child(1) > p:first-child {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FF00CF;
        margin: 0;
    }

    .wavespunks-first-collection > div:nth-child(1) > p:nth-child(2) {
        font-weight: 500;
        font-size: 30px;
        line-height: 36px;
        margin: 0;
    }

    /* Upcoming | Second collection */

    .wavespunks-second-collection {
        background: url('/img/second-card-back.svg'), radial-gradient(134.56% 88.81% at 92.56% 133.41%, #7000FF 0%, rgba(0, 0, 0, 1) 100%);
        background-repeat: no-repeat;
    }

    .wavespunks-second-collection > div {
        margin-left: 24px;
    }

    .wavespunks-second-collection > div:first-child {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #FF00CF;
        margin-bottom: -8px;
        margin-top: 15px;
    }

    .wavespunks-second-collection > div:first-child > p {
        margin-left: 7px;
    }

    .wavespunks-second-collection > div:nth-child(2) > p:first-child {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FF00CF;
        margin: 0;
    }

    .wavespunks-second-collection > div:nth-child(2) > p:nth-child(2) {
        font-weight: 500;
        font-size: 52px;
        line-height: 63px;
        margin: 0;
    }

    .wavespunks-second-collection > img {
        margin-left: 12.5px;
        margin-right: 12.5px;
    }

    /* Upcoming | Coming Soon */

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
</style>