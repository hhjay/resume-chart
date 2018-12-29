<template>
    <div class="h-collapse" :class="{ 'is-active': show }">
        <div class="collapse-title" @click="handleCollapse">
            <div class="collapse-title__label">
                <slot name="header"></slot>
            </div>

            <span class="collapse-title__arrow"> > </span>
        </div>
        <div class="collapse-body" v-show="show">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'g-collapse',
        data() {
            return {
                show: false,
            }
        },
        methods: {
            handleCollapse() {
                this.show = !this.show;
            }
        }
    }
</script>
