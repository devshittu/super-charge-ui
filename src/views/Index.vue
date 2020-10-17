<template>
    <!--<section class="hero is-black-passive is-fullheight ">
        &lt;!&ndash; Hero head: will stick at the top &ndash;&gt;
        <div class="hero-head">
            <nav class="navbar is-transparent">
                <div class="container">
                    <div class="navbar-brand">
                        <div class=" logo-brand is-size-3">
                            <h2 class=" has-text-weight-bold">TOPALAT</h2>
                        </div>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                        &lt;!&ndash;<div class="navbar-start">
                            <a class="navbar-item">
                                How it Work?
                            </a>
                            <a class="navbar-item">
                                Find Job
                            </a>
                            <a class="navbar-item">
                                Login
                            </a>
                            <a class="navbar-item is-blue">
                                Register
                            </a>

                        </div>&ndash;&gt;
                        <div class="navbar-end">
                            <router-link
                                    :to="{ name: 'home'}" class="navbar-item">
                                {{'Home' | capitalize}}
                            </router-link>
                            <router-link
                                    :to="{ name: 'services'}" class="navbar-item">
                                {{'Services' | capitalize}}
                            </router-link>
                            <router-link
                                    :to="{ name: 'help'}" class="navbar-item">
                                {{'FAQ' | capitalize}}
                            </router-link>
                            <router-link
                                    :to="{ name: 'help'}" class="navbar-item">
                                {{'Contact Us' | capitalize}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">

                <h1 class="title is-1 pb-3 mb-6 ">{{pageTitle}}</h1>
                <div class="content has-background-black-bisd">

                    <router-view ref="AppMainContent">
                    </router-view>
                </div>

            </div>
        </div>

        &lt;!&ndash; Hero footer: will stick at the bottom &ndash;&gt;
        <AppFooter/>
    </section>-->
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                        <div class=" logo-brand is-size-3">
                            <h2 class=" has-text-weight-bold">Super Charge</h2>
                        </div>
                        </a>
                        <!--<a class="navbar-item" href="#">
                            <img src="https://dansup.github.io/bulma-templates/images/bulma.png" alt="Logo">
                        </a>-->
                        <span class="navbar-burger burger"  data-target="navbarMenu" @click="showNavigationMenu()" :class="{'is-active': menuActive}">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu" :class="{'is-active': menuActive}">
                        <div class="navbar-end">

                            <div class="navbar-end">
                                <router-link
                                        :to="{ name: 'home'}" class="navbar-item " :class="[currentPage.includes('') ? activeLinkClass: '', 'navbar-item']">
                                    {{'Home' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'services'}" :class="[currentPage.includes('services') ? activeLinkClass: '', 'navbar-item']">
                                    {{'Services' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'help'}" :class="[currentPage.includes('help') ? activeLinkClass: '', 'navbar-item']">
                                    {{'FAQ' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'contact-us'}" :class="[currentPage.includes('contact') ? activeLinkClass: '', 'navbar-item']">
                                    {{'Contact Us' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'admin-dashboard'}" :class="[currentPage.includes('contact') ? activeLinkClass: '', 'navbar-item']">
                                    {{'Control Panel' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'signin'}" :class="[currentPage.includes('contact') ? activeLinkClass: '', 'navbar-item']">
                                    {{'Login' | capitalize}}
                                </router-link>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered is-centered">
                    <router-view ref="AppMainContent">
                    </router-view>
                    <!--<div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="http://placehold.it/800x600" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Superhero Scaffolding
                        </h1>
                        <h2 class="subtitle is-4">
                            Let this cover page describe a product or service.
                        </h2>
                        <br>
                        <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p>
                    </div>-->
                </div>
            </div>
        </div>
        <AppFooter/>
    </section>
</template>

<script>
    import AppFooter from "../components/AppViewComponent/AppFooter";

    export default {
        name: 'ServiceIndex',
        components: {
            AppFooter
        },
        props: {
            msg: String,
            pageTitle: String,
        },
        data() {
            return {
                //msg:'Welcome',
                isNavBarFixed: false,
                menuActive:false,
                activeLinkClass: 'is-active',
            }
        },
        created() {
            // window.addEventListener('scroll', this.windowScroll);
        },
        methods: {
            showNavigationMenu() {this.menuActive = !this.menuActive}

        },
        computed: {
            currentPage(){
                return this.$route.path
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
