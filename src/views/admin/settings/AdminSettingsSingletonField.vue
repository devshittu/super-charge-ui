<template>
    <div class="panel-block is-hoverable">

        <div class="container my-3">
            <h4 class="is-size-5 has-text-weight-bold has-text-grey-dark">{{fieldLabel| capitalize}}</h4>
            <div class="level ">
                <div class="level-left is-multiline desc">
                    <p class="level-item has-text-grey">{{fieldDescription | capitalize}} </p>
                </div>
                <div class="level-right field-input">
                    <div class="level-item is-pulled-left">
                        <slot />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'AdminSettingsSingletonField',
        props: [
            'fieldLabel',
            'fieldDescription',
        ]
    }
</script>