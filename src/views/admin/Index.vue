<template>
    <div>
    <section class="hero is-default is-bold">
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
                                        :to="{ name: 'help'}" :class="[currentPage.includes('help') ? activeLinkClass: '', 'navbar-item']">
                                    {{'FAQ' | capitalize}}
                                </router-link>
                                <router-link
                                        :to="{ name: 'signin'}" :class="[currentPage.includes('signin') ? activeLinkClass: '', 'navbar-item']">
                                    {{'log out' | capitalize}}
                                </router-link>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
        <!--<div class="hero-body">
            <div class="container has-text-centered">
                &lt;!&ndash;<div class="columns is-vcentered is-centered">
                    <div class="column is-5">
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
                    </div>
                </div>&ndash;&gt;
            </div>
        </div>-->
    </section>
        <section class="container mt-6">
            <admin-primary-nav>
                <admin-primary-nav-item icon="home" label="dashboard" route-to="admin-dashboard"/>
                <admin-primary-nav-item icon="list" label="transactions"  route-to="admin-transactions"/>
                <admin-primary-nav-item icon="trending-up" label="analytics" route-to="admin-analytics"/>
                <admin-primary-nav-item icon="settings" label="settings" route-to="admin-settings"/>
            </admin-primary-nav>
            <router-view ref="AppMainContent">
            </router-view>
        </section>
        <AppFooter/>

    </div>
</template>

<script>
    import AppFooter from "../../components/AppViewComponent/AppFooter";
    import AdminPrimaryNav from "../../components/AppWidgets/AppAdminPrimaryNavigator/AdminPrimaryNav";
    import AdminPrimaryNavItem from "../../components/AppWidgets/AppAdminPrimaryNavigator/AdminPrimaryNavItem";

    export default {
        name: 'ServiceIndex',
        components: {
            AdminPrimaryNavItem,
            AdminPrimaryNav,
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
            currentPage:()=> {
                return '';
                //this.route.path
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
