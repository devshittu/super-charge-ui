<template>
        <div class="level-item has-text-centered">
            <!--Check Levels on the documentation-->
            <div class="card is-hoverable carrier-card"
                 :class="[{
                            'is-disabled': disabled,
                            'is-focused': isFocused || (activeCarrier === carrierName),
                            'is-rounded': rounded
                        }]"
                 :disabled="disabled"
                 @click="updateActiveCarrier"
                 @keydown.prevent.enter="$refs.label.click()">
                <div class="card-image">
                    <figure class="image is-64x64 mt-2 mb-2">
                        <img :src="carrierLogoSource" :alt="carrierName">
                    </figure>
                </div>
                <div class="card-content is-hidden-touch pt-2">
                    <p class="title is-size-5">
                        {{carrierName}}
                    </p>
                </div>
            </div>
        </div>

</template>

<script>

    export default {
        model:{
            prop: 'activeCarrier',
            event: 'onUpdateCarrier'
        },
        name: 'MobileCarrierCardRadioButton',
        props: {
            type: {
                type: String,
                default: 'is-primary'
            },
            expanded: Boolean,
            rounded: Boolean,
            carrierLogoSource: {
                type: String,
                default: 'https://nigerialogos.com/logos/9mobile/9mobile.png'
            },
            carrierName: {
                type: String,
                default: '--'
            },
            activeCarrier: String
        },
        data() {
            return {
                isFocused: false,
                disabled: false,
            }
        },
        methods: {
            updateActiveCarrier(){
                this.$emit('onUpdateCarrier', this.carrierName)
            }
        }
    }
</script>

<style scoped>
    .is-hoverable{
        border-bottom: .3em solid white;
        border-radius: .6em;
    }
    .is-hoverable:hover, .is-focused {
        border-color: #3c8195;
        box-shadow: 0 2px 15px rgba(10,10,10,.3), 0 0 0 1px rgba(10,10,10,.1);
        transition: border .2s, box-shadow .2s;
    }
    .carrier-card p{margin-bottom: 0;}
</style>
