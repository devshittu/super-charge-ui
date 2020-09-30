
<template>
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">

            <div class="columns  is-multiline is-variable is-9 ">
                <div class="column is-half is-large">
                    <div class="box is-shadowless service-card">
                        <b-icon
                                icon="fi-phone"
                                pack="fi"
                                size="is-large mb-5"
                        >
                        </b-icon>
                        <h3 class="title has-text-black  mt-0 is-desktop">Airtime</h3>
                        <div class="content mb-4 is-0-desktop-only">Lorem Ipsum is simply dummy
                            text of
                            the printing and typesetting industry
                        </div>
                        <div content="cta buttons">

                            <router-link
                                    :to="{ name: 'airtime', params:{ story_slug: 'slug' }}" class="button is-outlined is-primary is-medium is-radiusless">

                                    {{'Recharge Airtime' | capitalize}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="column is-half is-large">
                    <div class="box is-shadowless service-card">

                        <b-icon
                                icon="fi-globe"
                                size="is-large mb-5"
                                pack="fi"
                        >
                        </b-icon>
                        <h3 class="title   mt-0 is-desktop">Data Bundle</h3>
                        <div class="content mb-4 is-0-desktop-only">Lorem Ipsum is simply dummy
                            text of
                            the printing and typesetting industry
                        </div>
                        <div content="cta buttons">

                            <router-link
                                    :to="{ name: 'data', params:{ story_slug: 'slug' }}" class="button is-outlined is-primary is-medium is-radiusless">

                                    {{"Activate Data Plan" | capitalize}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="column is-half is-large">
                    <div class="box is-shadowless service-card">

                        <b-icon
                                icon="fi-tv"
                                size="is-large mb-5"
                                pack="fi"
                        >
                        </b-icon>
                        <h3 class="title   mt-0 is-desktop">Cable TV</h3>
                        <div class="content mb-4 is-0-desktop-only">Lorem Ipsum is simply dummy
                            text of
                            the printing and typesetting industry
                        </div>
                        <div content="cta buttons">

                            <router-link
                                    :to="{ name: 'cabletv', params:{ story_slug: 'slug' }}" class="button is-outlined is-primary is-medium is-radiusless">

                                {{"Subscribe Cable TV" | capitalize}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="column is-half  is-large">
                    <div class="box is-shadowless service-card">

                        <b-icon
                                icon="fi-zap"
                                size="is-large mb-5"
                                pack="fi"
                        >
                        </b-icon>
                        <h3 class="title   mt-0 is-desktop">Power Bills</h3>
                        <div class="content mb-4 is-0-desktop-only">Lorem Ipsum is simply dummy
                            text of
                            the printing and typesetting industry
                        </div>
                        <div content="cta buttons">

                            <router-link
                                    :to="{ name: 'power', params:{ story_slug: 'slug' }}" class="button is-outlined is-primary is-medium is-radiusless">

                                {{"Settle Power Bills" | capitalize}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Default.vue"
    }
</script>

<style scoped>

</style>