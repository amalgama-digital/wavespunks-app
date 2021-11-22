<template>
    <div class="modal">
        <div class="wrapper">
            <p v-if="error == false">SUCCESS!</p>
            <p v-if="error == true">ERROR!</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notifications",
        props: ['error', 'text'],
        mounted() {
            this.close();
        },
        methods: {
            close() {
                setTimeout(() => {
                    this.$emit('close', false);
                }, 5000);
            }
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        font-style: normal;
    }

    .wrapper {
        width: 340px;
        height: 160px;
        background-color: white;
        box-shadow: 2px 2px 2px 0px rgb(206, 206, 206), -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
    }

    .wrapper > p:first-child {
        font-weight: 500;
    }

    .wrapper > p:last-child {
        font-weight: 300;
    }
</style>