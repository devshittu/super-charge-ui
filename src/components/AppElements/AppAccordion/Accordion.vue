<template>

    <dl class="accordion box" role="presentation">
        <accordion-item
                v-for="item in content"
                :multiple="multiple"
                :item="item"
                :groupId="groupId"
                :key="item.id">
        </accordion-item>
    </dl>
</template>

<script>
    import AccordionItem from "./AccordionItem";
    export default {
        name: "Accordion",
        components: {AccordionItem},
        props: {
            content: {
                type: Array,
                required: true
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                groupId: null
            }
        },
        mounted() {
            this.groupId = this.$el.id
        }
    }
</script>

<style lang="scss">
    /*scoped*/

    @import "../../../assets/scss/variables";
    $browser-context: 16;
    $blue: #1779ba;
    $gray: #cacaca;
    $red: #cc4b37;
    $white: #ffffff;

    @function em($pixels, $context: $browser-context) {
    @return #{$pixels/$context}em;
    }

    .accordion {
        padding: 0;

    div:not(:last-child) {
        border-bottom: 1px solid rgba(10, 10, 10, 0.1);
    }

    div:last-child .accordion-item-details {
        border-radius: 5px;
    }

    dd {
        margin-left: 0;
    }
    }

    .accordion-item-trigger,
    .accordion-item-details-inner {
        padding: 0.75rem 1.25rem;
    }

    .accordion-item-title {
        position: relative;



    h4 {
        font-size: 1.25rem;
        margin-bottom: 0;
        padding-right: 1.25rem;
        color: darken($primary-color, 15%);
    }
    }

    .accordion-item-trigger {
        width: 100%;
        text-align: left;
        background-color: transparent;
        border: none;

        .is-active &, &:focus {
            outline: $secondary-color 8rem;
        }
    }

    .accordion-item-trigger-icon {
        $size: 8px;
        display: block;
        position: absolute;
        top: 0; right: 1.25rem; bottom: 0;
        margin: auto;
        width: $size;
        height: $size;
        border-right: 2px solid #363636;
        border-bottom: 2px solid #363636;
        /*
        border-right: 2px solid $secondary-color;
        border-bottom: 2px solid $secondary-color;*/
        transform: translateY(-$size / 4) rotate(45deg);
        transition: transform 0.2s ease;

    .is-active & {
        transform: translateY($size / 4) rotate(225deg);
    }
    }

    .accordion-item-details {
        overflow: hidden;
        /*background-color: whitesmoke;*/
        background-color: lighten($primary-color, 55%);
        text-align: justify;
        line-height: 2rem;
    }

    .accordion-item-enter-active, .accordion-item-leave-active {
        will-change: height;
        transition: height 0.2s ease;
    }
    .accordion-item-enter, .accordion-item-leave-to {
        height: 0 !important;
    }
</style>