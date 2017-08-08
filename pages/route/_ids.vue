<template>
    <div class="user">
        <h3>{{ name }}</h3>
        <h4>@{{ username }}</h4>
        <p>Email : {{ email }}</p>
        <p><nuxt-link to="/route">List of users</nuxt-link></p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        validate ({ params }) { // 获取路由ids  就是文件下划线  _ids
            return !isNaN(+params.ids)
        },
        async asyncData ({ params, error }) {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.ids}`)
                return data
            } catch (e) {
                error({ message: 'User not found', statusCode: 404 })
            }
        }
    }
</script>

<style scoped>
    .user {
        text-align: center;
        margin-top: 100px;
        font-family: sans-serif;
    }
</style>