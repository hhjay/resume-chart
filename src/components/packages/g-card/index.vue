<template>
    <div class="h-card">
        <div class="h-card__header" v-if="this.$slots.header">
            <!-- 具名slot -->
            <slot name="header"></slot>
        </div>
        <div class="h-card__body">
            <!-- 默认slot -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-card",
    }
</script>