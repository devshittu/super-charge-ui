<template>
    <div class="columns">
        <slot></slot>
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
        name: "AppAccordion"
    }
</script>

<style scoped lang="scss">
    .accordion {
        margin: 0 auto;

        section {
            display: block;

            header {
                cursor: pointer;
                padding: 18px;
                border: 1px dashed orange;
                color: orange;
                transition: background 1.0s ease-in-out;
                margin-bottom: 0.25rem;

                h5 {

                    &:after {
                        content: '\f067';
                        font-family: FontAwesome;
                        display: inline-block;
                        float: right;
                    }
                }

                .selected {
                    h5 {
                        &:after {
                            content: '\f068'
                        }
                    }

                }
            }
            .accord-content {
                display: none;
                width: 100%;
                box-sizing: border-box;
                padding: 18px;
                p {
                    margin-bottom: 0
                }
            }

        }
    }
</style>