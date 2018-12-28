<template>
    <g-chart :complete="completa" :options="options"></g-chart>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data() {
            return {
                completa: false,
                options: {},
            }
        }
    })
</script>
