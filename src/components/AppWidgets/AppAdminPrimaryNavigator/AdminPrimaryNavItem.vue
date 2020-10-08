<template>

    <div class="level-item admin-primary-nav-item has-text-centered">

        <div>

            <router-link
                    :to="{ name: routeTo}"
                    :class="[currentPage.includes(label) ? activeLinkClass: '', ]">
                <b-icon
                        :icon="processIcon"
                        pack="fi"
                        class="mb-2 is-size-4"
                >
                </b-icon>

                <p class="heading is-size-6-desktop is-size-7-touch has-text-weight-bold">{{ label | capitalize}}</p>
                <!--<p class="title">3,456</p>-->
            </router-link>
        </div>
    </div>
</template>

<script>
    import {ActiveLinks} from '../../../mixins/link-mixins'

    export default {
        name: "AdminPrimaryNavItem",
        mixins: [ActiveLinks],
        props: {
            icon: {
                type: String,
            },
            label: {
                type: String,
                default: 'Unlabeled',
                required: true
            },
            routeTo: {
                type: String,
                default: 'home',
            },
        },
        computed: {
            processIcon() {
                return (this.icon) ? 'fi-' + this.icon : 'fi-' + 'help-circle'
            },
        }
    }
</script>