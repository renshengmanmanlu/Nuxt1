<template>
    <div class="container">
        <nuxt-link to="/">返回</nuxt-link>
    </div>
</template>

<script>
    export default {
        asyncData() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({})
                    console.log(2);
                }, 1000)
            })
        }
    }
</script>

<style scoped>
    .container {
        font-size: 20px;
        text-align: center;
        padding-top: 100px;
    }
</style>