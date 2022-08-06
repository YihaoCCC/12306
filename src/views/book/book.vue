<template>
    <div class="book SafeContent">
        <div class="leftDetail ">
            <div class="ticketDetail padding">
                <div>
                    北京南 - 上海虹桥
                </div>
                <div>
                    09月05日 G103 二等座
                </div>
            </div>
            <div class="passenger padding">
                <h2>乘车人信息</h2>
            </div>
        </div>
        <div class="rightDetail ">
            <div class="ticketDetail padding">

            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
   import { onMounted } from 'vue';
   import { useRoute } from 'vue-router';
   const route = useRoute()
   onMounted(() => {
        console.log(route);
   })
</script>
    
<style lang="scss" scoped>
    @import './book.scss'
</style>