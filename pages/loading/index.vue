<template>
    <div class="">
        <nuxt-link to="/loading/about">1.loading跳转页面</nuxt-link>
    </div>
</template>

<script>
    export default {
        asyncData() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({});
                    // 没你什么事
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