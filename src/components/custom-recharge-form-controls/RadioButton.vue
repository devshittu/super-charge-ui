<template>
    <div class="control" :class="{ 'is-expanded': expanded }">
        <label
                class="b-radio radio button"
                ref="label"
                :class="[newValue === nativeValue ? type : null, size, {
                'is-disabled': disabled,
                'is-focused': isFocused,
                'is-rounded': rounded
            }]"
                :disabled="disabled"
                @click="focus"
                @keydown.prevent.enter="$refs.label.click()">
            <slot/>
            <input
                    v-model="computedValue"
                    type="radio"
                    ref="input"
                    @click.stop
                    :disabled="disabled"
                    :required="required"
                    :name="name"
                    :value="nativeValue"
                    @focus="isFocused = true"
                    @blur="isFocused = false">
        </label>
    </div>
</template>

<script>
    import CheckRadioMixin from 'buefy/src/utils/CheckRadioMixin.js'

    export default {
        name: 'BRadioButton',
        mixins: [CheckRadioMixin],
        props: {
            type: {
                type: String,
                default: 'is-primary'
            },
            expanded: Boolean,
            rounded: Boolean,
        },
        data() {
            return {
                isFocused: false
            }
        }
    }
</script>


