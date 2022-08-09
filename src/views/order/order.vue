<template>
    
    <div class="order SafeContent">
        <div class="buttonList">
            <button @click="changeOrderType(0)">全部订单 </button>
            <button @click="changeOrderType(1)">未出行订单 </button>
            <button @click="changeOrderType(2)">已完成 </button>
        </div>
        <div class="orderItem" v-for="item in 5" :key="item" @click="goDetail(item)">
            <div class="orderHeader">
                <div class="detail">
                    <div>
                        订单号：
                        <span>
                            12345898111561616
                        </span>
                    </div>
                    <div style="margin: 0 0px 0 20px;">
                        预定日期：
                        <em>2022-08-06</em>
                    </div>
                </div>
                <button @click="deleteOrder">删除订单</button>
            </div>

            <div class="orderContent">
                <div class="detail">
                    <div class="city">
                        <div class="startend">
                            北京 - 上海虹桥
                        </div>
                        <div class="status">
                            <span>￥ <em>553</em></span>
                             | {{'已完成'}}
                        </div>
                    </div>
                    <div class="data"> 
                      出发日期：2022-08-06 &nbsp; 00：53 至 06：53  
                      <span>C103</span> 
                    </div>
                    <div class="passenger">
                        出行人：柴渴
                    </div>
                </div>
            </div>
        </div>
        
        
       <div style="text-align: end;padding-right:80px">
         <button class="next" @click="nextPage">下一页</button>
       </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAllOrder} from './orderHttp'
const router = useRouter()
onMounted(() => {
    getAllOrder().then((res) => {
        console.log("请求测试"); 
        console.log(res);           
    })
    setTimeout(() => {
        loading.value = true
    },1500)
})
const deleteOrder = () => {
    console.log("dsaddsafadsfa");   
}
const changeOrderType = (type:number) => {
    // 传递userid 和 订单类别
    console.log(type);
}
const loading = ref(false)
const nextPage = () => {
    console.log("测试");  
} 
const goDetail = (id:any) => {
    router.push('/home/orderDetail')
    console.log(id);
}
</script>
    
<style lang="scss" scoped>
@import './order.scss';
</style>