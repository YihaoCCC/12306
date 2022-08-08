<template>
    <div class="SafeContent layout">
        <div class="leftContent">
            <slot name="left"></slot>
        </div>
        <div class="rightContent padding">
            <slot name="right"></slot>
        </div>
    </div>    
</template>
    
<script setup lang='ts'>
    
</script>
    
<style scoped lang="scss">
    .padding {
        padding: 30px 30px;
        box-sizing: border-box;
    }
    .layout {
        display: flex;
        justify-content: space-between;
    }
    .leftContent {
        width: 60%;
        border-radius: 20px;
    }
    .rightContent {
        width: 38%;
        border-radius: 20px;
    }
</style>