<template>
    <section class="container">
        <div>
            <logo/>

            <loading/>
            <div>
                <nuxt-link to="/route">2.自定义路由</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue';
    import loading from '~/pages/loading/index.vue';

    export default {
        components: {
            Logo,
            loading
        },
        asyncData() {
            // 异步操作执行回调 返回值 成功  失败  http://www.jianshu.com/p/063f7e490e9a
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({});
                    console.log(3);
                }, 1000)
            })
        }
    }
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
