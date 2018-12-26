<template>
    <div>
        图表
    </div>
</template>
<script>
    import Vue from 'vue';
	import ec from 'echarts';
    export default {
        name: 'g-chart',
        props: {
            options: [Object, String, Boolean],
        }
    }
</script>
