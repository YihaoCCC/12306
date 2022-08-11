<template>
    
    <div class="order SafeContent">
        <div class="buttonList">
            <button @click="changeOrderType(0)">全部订单 </button>
            <button @click="changeOrderType(1)">已支付订单 </button>
            <button @click="changeOrderType(2)">待支付订单 </button>
        </div>
        <div class="orderItem" v-for="item in orders.order" :key="item">
            <div class="orderHeader">
                <div class="detail">
                    <div>
                        订单号：
                        <span>
                            {{item.orderId}}
                        </span>
                    </div>
                    <div style="margin: 0 0px 0 20px;">
                        预定日期：
                        <em>{{item.orderDate}}</em>
                    </div>
                </div>
                <button @click="deleteOrder(item.orderId)" v-if="item.state === '已取消' || item.state === '占座失败' || item.state === '抢票失败'">删除订单</button>
            </div>

            <div class="orderContent" v-for="detail in item.detailList" :key="detail" @click="goDetail(item.orderId)">
                <div class="detail">
                    <div class="city">
                        <div class="startend">
                            {{detail.beginStation.name}} - {{detail.endStation.name}}
                        </div>
                        <div class="status">
                            <span>￥ <em>{{item.money}}</em></span>
                             | {{item.state}}
                        </div>
                    </div>
                    <div class="data"> 
                      出发日期：{{detail.leaveDate}} 至 {{detail.arriveDate}}  
                      <span>{{detail.trainId}}</span> 
                    </div>
                    <div class="passenger">
                        出行人：{{detail.passenger.name}}
                    </div>
                </div>
            </div>
        </div>
        
        
       <!-- <div style="text-align: end;padding-right:80px">
         <button class="next" @click="nextPage">下一页</button>
       </div> -->
    </div>
</template>
    
<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { onMounted,ref,reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getAllOrder,deleteOrderById} from './orderHttp'
const router = useRouter()
const obj = {}
const orders:any = reactive({
    order:obj
})
onMounted(() => {
    getOrder(0)
    setTimeout(() => {
        loading.value = true
    },1500)
})
const getOrder = (state:any) => {
    getAllOrder(state).then((res) => {
        console.log(res);
        orders.order = res      
    })
}
const deleteOrder = (orderId:any) => {
    console.log("删除");
    deleteOrderById(orderId).then( (res:any) =>{
        console.log(res);
        if(res.code === 200){
            ElMessage({
                type: 'success',
                message: res.message
            })
            getOrder(0)
        }else{
            ElMessage({
                type: 'error',
                message: res.message
            })
        }
    })   
}
const changeOrderType = (type:number) => {
    console.log(type);
    getOrder(type)
}
const loading = ref(false)
const nextPage = () => {
    console.log("测试");  
} 
const goDetail = (id:any) => {
    router.push({
        name:'orderDetail',
        params:{
            orderId:id
        }
    })
    console.log(id);
}
</script>
    
<style lang="scss" scoped>
@import './order.scss';
</style>