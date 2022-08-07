<template>
    <div class="SafeContent notFound">
        <img @click="goIndex" src="../../assets/undraw_not_found_dyeh.svg" alt="">
        <h1>404 not Found</h1>
       <span> 点击图片回到主页</span>
    </div>
</template>
    
<script setup lang='ts'>
    import { getCurrentInstance } from 'vue';
    const vue = getCurrentInstance()
    const goIndex = vue?.appContext.config.globalProperties.$goIndex
</script>
    
<style scoped>
    .notFound {
        margin: 100px auto;
        text-align: center;
    }
    span  {
        font-size: 20px;
        color: #999;
    }
</style>