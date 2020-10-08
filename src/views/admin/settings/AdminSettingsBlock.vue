<template>
    <div class="block my-6 mx-3">
        <div class="mb-5">
            <p class="title is-size-4">{{blockLabel| capitalize}}</p>
            <p class="subtitle is-size-6 has-text-grey is-italic mt-3 ">{{blockDescription | capitalize}}</p>
        </div>
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'AdminSettingsBlock',
        props: [
            'blockLabel',
            'blockDescription',
        ]
    }
</script>