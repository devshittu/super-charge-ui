<template>
    <p class="has-text-centered">
        <template v-if="!currentPage.includes('signin')">
            <router-link
                    :to="{ name: 'signin'}">
                {{'Signin' | capitalize}}
            </router-link>
            |
        </template>
        <template v-if="!currentPage.includes('signup')">
            <router-link
                    :to="{ name: 'signup'}">
                {{'Register an Admin' | capitalize}}
            </router-link>
        </template>
        <template v-if="!currentPage.includes('reset')">
            |
            <router-link
                    :to="{ name: 'reset'}">
                {{'Forgot password' | capitalize}}
            </router-link>
        </template>

    </p>
</template>
<script>
    export default {
        name: 'auth-footer-links',

        computed: {
            currentPage() {
                return this.$route.path
            }
        }
    }
</script>
