<template>
    <div class="hero-foot">
        <div class="container">
            <div class=" columns">
                <div class="column ">
                    <!--<div  id="horz-list">-->
                    <ul class="is-horizontal">
                        <li>
                            <router-link
                                    :to="{ name: 'home'}">
                                {{'Home' | capitalize}}
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    :to="{ name: 'services'}">
                                {{'Services' | capitalize}}
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    :to="{ name: 'help'}">
                                {{'FAQ' | capitalize}}
                            </router-link>
                        </li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    <!--</div>-->

                </div>

                <div class="column content has-text-right is-6 ">
                    <p>
                        <strong> &copy; 2020 Super Charge </strong> designed and powered by <strong>Burbit
                        Technologies</strong>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AppFooter'
    }
</script>
<style scoped lang="scss">
    body {
        min-height: 100rem;
    }

</style>