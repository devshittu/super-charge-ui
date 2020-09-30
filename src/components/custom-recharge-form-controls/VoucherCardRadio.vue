<template>

    <div class="field">
            <slot/>
        <div class="tile is-parent">
            <article class="tile is-child box is-hoverable voucher-card"
                     :class="[{
                            'is-disabled': disabled,
                            'is-focused': isFocused || (activeVoucher === customerValue),
                            'is-rounded': rounded
                        }]"
                     :disabled="disabled"
                     @click="updateActiveVoucher"
                     @keydown.prevent.enter="$refs.label.click()">
                <p class="title value is-size-4">{{ customerValue }}</p>
                <p class="duration is-size-7"> {{ duration }}</p>
                <p class="merchant-price is-size-6">Pay {{ 'N' + merchantPrice + '.00' }}</p>
            </article>
        </div>

    </div>
</template>

<script>

    export default {
        model:{
            prop: 'activeVoucher',
            event: 'onUpdateVoucher'
        },
        name: 'VoucherCardRadioButton',
        props: {
            type: {
                type: String,
                default: 'is-primary'
            },
            expanded: Boolean,
            rounded: Boolean,
            customerValue: {
                type: Number,
                default: 2000
            },
            duration: {
                type: String, //in days
                default: '--'
            },
            merchantPrice: {
                type: Number,
                default: 1980
            },
            activeVoucher: String
        },
        data() {
            return {
                isFocused: false,
                disabled: false
            }
        },
        methods: {
            updateActiveVoucher(){
                this.$emit('onUpdateVoucher', this.customerValue)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/scss/variables";
    .is-hoverable{
        border: .2em solid white;
    }
    .is-hoverable:hover, .is-focused {
        border-color: $primary-color;
        /*background-color: #d8f9f5;*/
        background-color: lighten($primary-color, 50%);
        box-shadow: 0 2px 15px rgba(10,10,10,.3), 0 0 0 1px rgba(10,10,10,.1);
        transition: border .2s, box-shadow .2s;
    }
    .voucher-card p{margin-bottom: 0;}
</style>
