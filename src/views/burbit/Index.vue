<template>
    <div>
    <section class="hero is-default is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand is-hidden-desktop">
                        <a class="navbar-item" href="/">
                        <div class=" logo-brand is-size-3 is-dark-backgroud">
                            <h2 class=" has-text-weight-bold">burbit</h2>
                        </div>
                        </a>
                       <!--
                       <a class="navbar-item" href="#">
                            <img src="https://dansup.github.io/bulma-templates/images/bulma.png" alt="Logo">
                        </a>
                        -->
                        <span class="navbar-burger burger"  data-target="navbarMenu" @click="showNavigationMenu()" :class="{'is-active': menuActive}">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu" :class="{'is-active': menuActive}">
                        <div class="navbar-end">

                            <div class="navbar-end">

                                <a class="navbar-item">

                                    <b-icon
                                            icon="fi-moon"
                                            size="is-large is-size-4"
                                            pack="fi"
                                    >
                                    </b-icon>
                                </a>
                                <router-link
                                        is="div"
                                        :to="{ name: 'signin'}" :class="[currentPage.includes('signin') ? activeLinkClass: '', 'navbar-item', '']">
                                    <b-button tag="a" class="button is-primary is-large is-outlined is-radiusless">
                                    {{'Get a Quote' | capitalize}}
                                    </b-button>
                                </router-link>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
                <router-view ref="AppMainContent">
                </router-view>
        </div>

    </section>
        <AppFooter/>

    </div>
</template>

<script>
    import AppFooter from "../../components/AppViewComponent/AppFooter";
    import BButton from "buefy/src/components/button/Button";
    import BIcon from "buefy/src/components/icon/Icon";

    export default {
        name: 'ServiceIndex',
        components: {
            BIcon,
            BButton,
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
@import "../../assets/scss/variables";
    .logo-brand {
        color: $white;
        background: darken($primary-color, 20%);
        padding: 14px 10px 5px 10px;
        margin-top: -.5rem;
    }
</style>
