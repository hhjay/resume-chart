import Vue from 'vue';
import './echarts/index';

import VueContentPlaceholders from 'vue-content-placeholders'; // 骨架loading
Vue.use(VueContentPlaceholders);

// 自定义指令
import directive from './directive/index';
for(let i in directive) {
	Vue.directive(i, directive[i]);
}