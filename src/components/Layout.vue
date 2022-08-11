<template>
    <div class="SafeContent layout">
        <div class="leftContent">
            <slot name="left"></slot>
        </div>
        <div class="rightContent">
            <slot name="right"></slot>
        </div>
    </div>    
</template>
    
<script setup lang='ts'>
    
</script>
    
<style scoped lang="scss">
    .layout {
        display: flex;
        justify-content: space-between;
    }
    .leftContent {
        width: 60%;
        background-color: #fff;
        border-radius: 20px;
    }
    .rightContent {
        width: 38%;
        background-color: #fff;
        border-radius: 20px;
    }
</style>