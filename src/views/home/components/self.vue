<template>
    <div class="self-list">
        <li v-for="(item, index) in data" :key="index">
            <label>{{ item.label }}</label>: 

            <div class="item-contend">
                <a v-if="item.link" :href="(item.isMail ? 'mailto:' : '') + item.link" target="_blank">{{ item.value }}</a>
                <span v-else>{{ item.value }}</span>
            </div>
        </li>
    </div>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                data: [
                    { label: "姓名", value: "huijie" },
                    { label: "号码", value: "151-8716-9993" },
                    { label: "邮箱", value: "sunhhjay@qq.com", link: 'sunhhjay@qq.com', isMail: true },
                    { label: "github", value: "hhjay", link: 'https://github.com/hhjay/' },
                ]
            }
        }
    }
</script>