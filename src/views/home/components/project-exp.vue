<template>
    <div class="work-exp">
        <div class="exp-list">
            <g-collapse>
                <h4 class="title" slot="header">
                    <span class="tiele-name">品牌雷达 & 媒介雷达</span> 
                    <span class="title-time">2018年01月 - 至今</span>
                </h4>
                <ul>
                    <li>对原系统进行抽离组件，对组件之间进行解耦，并保留更多的自定义接口，增加代码的可复用及可维护性</li>
                    <li>对原先一些数据很多的图表进行优化，例如webgl处理、对数化处理等</li>
                    <li>对媒介kol做</li>
                </ul>
            </g-collapse>
        </div>

        <div class="exp-list">
            <g-collapse>
                <h4 class="title" slot="header">
                    <span class="tiele-name">数据中心</span> 
                    <span class="title-time">2017年05月 - 2018年01月</span>
                </h4>
                <ul>
                    <li>一个大数据API集成系统，可对需进行采集数据进行数据采集、数据清洗、打标签处理，对已采集数据进行数据（约八千万）提取和可视化处理</li>
                    <li>自主搭建了前端架构，独立开发前端功能，完成了用户权限、数据筛选展示、etl、导出等模块</li>
                    <li>系统使用模块化开发思想，实现组件的可复用和可维护性；拆分了业务的复杂度，高效的完成系统的开发</li>
                </ul>
            </g-collapse>
        </div>

        <div class="exp-list">
            <g-collapse>
                <h4 class="title" slot="header">
                    <span class="tiele-name">数说雷达</span> 
                    <span class="title-time">2016年08月 - 2017年5月</span>
                </h4>
                <ul>
                    <li>对品牌形象和产品体验进行分析活动数据、并构建用户画像的大数据商业应用</li>
                    <div class="exp-list">
                        <h4 class="title blue">
                            美的观星台
                        </h4>
                        <ul>
                            <li>使用原生js写了一些常用组件，例如多选组件、日期组件</li>
                            <li>对之前一些不兼容的代码进行优化重构，例如汉字匹配、echarts2和3的兼容</li>
                        </ul>
                    </div>

                    <div class="exp-list">
                        <h4 class="title blue">
                            数说雷达2.0改版优化及通用ui的开发
                        </h4>
                        <ul>
                            <li>对原先的技术栈进行升级，vue1.x升级至2.x</li>
                            <li>对原先的架构进行改进、功能优化，把一些可缓存的数据写入vuex、把组件之间相应解耦</li>
                            <li>对原先一些常用功能进行封装处理，做成一个内部通用的组件工具</li>
                        </ul>
                    </div>
                    <div class="exp-list">
                        <h4 class="title blue">
                            天河城百货大数据系统
                        </h4>
                        <ul>
                            <li>内部部门报表的采集系统及其他功能的优化，如对表格进行中文拼音排序</li>
                        </ul>
                    </div>
                    <div class="exp-list">
                        <h4 class="title blue">
                            Intel大数据
                        </h4>
                        <ul>
                            <li>对原先系统进行兼容移动端至iPhone4</li>
                        </ul>
                    </div>
                </ul>
            </g-collapse>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        
    })
</script>

