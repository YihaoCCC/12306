<template>
    <div class="mybutton" :class="color">
        {{ButtonTitle}}
    </div>
</template>
    
<script setup lang='ts'>
   defineProps({
    ButtonTitle: {
        type: String,
        default: '默认按钮'
    },
    color: {
        type: String,
        defaul: 'default'
    }
   })
    
</script>
    
<style lang="scss" scoped>
.mybutton {
    color: #fff;
    width: 120px;
    height: 43px;
    line-height: 43px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    text-align: center;
    letter-spacing: 3px;
    font-weight: bolder;
    display: inline-block;
    margin-left: 15px;
    &:hover {
        transform: scale(1.02);
    }    
}
.gred {
    background-color: transparent;
    border: 1px solid #666;
    color: #666;
}
.default {
    background: linear-gradient(90deg,#00a7fa,#0076f5);
}
.warning {
    background: linear-gradient(90deg,#f79d4e,#ff7700);
}    
</style>