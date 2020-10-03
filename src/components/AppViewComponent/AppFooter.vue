<template>
    <!--<div class="hero-foot">
        <div class="container">
            <div class=" columns">
                <div class="column ">
                    &lt;!&ndash;<div  id="horz-list">&ndash;&gt;
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
                        <li>
                            <router-link
                                    :to="{ name: 'help'}">
                                {{'Contact Us' | capitalize}}
                            </router-link></li>
                    </ul>
                    &lt;!&ndash;</div>&ndash;&gt;

                </div>

                <div class="column content has-text-right is-6 ">
                    <p>
                        <strong> &copy; 2020 Super Charge </strong> designed and powered by <strong>Burbit
                        Technologies</strong>
                    </p>
                </div>

            </div>
        </div>
    </div>-->
    <div class="hero-foot">
        <div class="container has-text-right has-text-centered-mobile">
            <p>
                <strong> &copy; 2020 Super Charge </strong> designed and powered by <strong>Burbit
                Technologies</strong>
            </p>
            <!--<div class="tabs is-centered">
                <ul>
                    <li><p>
                        <strong> &copy; 2020 Super Charge </strong> designed and powered by <strong>Burbit
                        Technologies</strong>
                    </p></li>
                </ul>
            </div>-->
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