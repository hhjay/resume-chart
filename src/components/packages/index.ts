import gCard from './g-card/index.vue';
import gChart from './g-chart/index.vue';
import gCollapse from './g-collapse/index.vue';

const gComponents = [
    gCard,
    gChart,
    gCollapse
]

/**
 * 这里的Vue会报错，是typescript的警告(https://stackoverflow.com/questions/37153731/my-typescript-is-working-though-visual-studio-is-showing-ts-parameter-even)
 */
const install = function(Vue, opts = {}) {

    // 注册组件
    gComponents.map(item=>{
        Vue.component(item.name, item);
    })
}

export default install;