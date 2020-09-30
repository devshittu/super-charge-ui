<template>
    <section class="hero is-black-passive is-fullheight ">
        <div class="hero-body">
            <div class="container has-text-centered">

                <h1 class="title is-1 pb-3 mb-6 ">Super Recharge Grid</h1>
                <div class="content has-background-black-bisd">

                    <router-view ref="AppMainContent">
                    </router-view>
                </div>

            </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <AppFooter/>
    </section>
</template>

<script>
    import AppFooter from "../components/AppViewComponent/AppFooter";
    export default {
        name: 'ServiceIndex',
        components: {AppFooter},
        props: {
            msg: String
        },
        data() {
            return {
                //msg:'Welcome',
                isNavBarFixed: false
            }
        },
        created() {
            window.addEventListener('scroll', this.windowScroll);
        },
        methods: {
            windowScroll() {
                var det = this.$refs.firstEl.getBoundingClientRect();
                if (-(det.top) > det.height) {
                    this.isNavBarFixed = true;
                }
                else {
                    this.isNavBarFixed = false;
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body {
        min-height: 100rem;
    }

    .margin-bottom-1 {
        margin-bottom: 16rem;
    }
</style>
