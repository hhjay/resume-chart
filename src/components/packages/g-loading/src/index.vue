<template>
    <content-placeholders :rounded="true" v-if="!complete">
        <content-placeholders-img />
		<content-placeholders-heading />
	</content-placeholders>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        props: {
            complete:{
                type: Boolean,
                default: false
            }
        }
    })
</script>
