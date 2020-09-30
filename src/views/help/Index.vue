<template>
    <div class="columns">
        <div class="column">
            <article class="accordion">
                <section>
                    <header>
                        <h5>When will I get my race pack with number and timing chip?</h5>
                    </header>
                    <div class="accord-content">
                        <p>You will get your race pack in the post around 2 weeks before the race.</p>
                    </div>
                </section>
                <section>
                    <header>
                        <h5>When will I get my race pack with number and timing chip?</h5>
                    </header>
                    <div class="accord-content">
                        <p>You will get your race pack in the post around 2 weeks before the race.</p>
                    </div>
                </section>
            </article>
        </div>
        <div class="column">
            <article class="accordion">
                <section>
                    <header>
                        <h5>When will I get my race pack with number and timing chip?</h5>
                    </header>
                    <div class="accord-content">
                        <p>You will get your race pack in the post around 2 weeks before the race.</p>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelpIndex',
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
