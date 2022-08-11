<template>
    <div class="ticketDetail padding">
        <h2>车票信息</h2>
        <div class="time baseFlex">
            <div class="starDate">
               <span v-if="showPassenger">{{detail?.leaveDate}}</span>
               <span v-else>{{train.detail.beginDate}}</span>
            </div>
            <div class="endDate">
                <span v-if="showPassenger">{{detail?.arriveDate}}</span>
                <span v-else>{{train.detail.endDate}}</span>
            </div>
        </div>
        <div class="startEnd baseFlex">
            <div class="startTime">
                <div class="time">
                    <span v-if="showPassenger">{{detail?.leaveTime}}</span>
                    <span v-else>{{train.detail.beginStation?.leaveTime}}</span>
                    
                </div>
                <div class="city">
                    <span v-if="showPassenger">{{detail?.orderDetail.beginStation.name}}</span>
                    <span v-else>{{train.detail.beginStation?.station.name}}</span>
                    
                </div>
            </div>
            <div class="checi">
                <div class="name">
                    <span v-if="showPassenger">{{detail?.orderDetail.trainId}}</span>
                    <span v-else>{{train.detail.train?.trainId}}</span>
                </div>

                <el-popover placement="bottom" :width="400" trigger="click">
                    <template #reference>
                        <div class="stopCity">
                            经停信息
                        </div>
                    </template>
                    <el-table :data="station.list" table-layout="fixed" max-height="250">
                        <el-table-column property="name" label="车站" />
                        <el-table-column property="leaveTime" label="离开时间" >
                            <template  #default="scope">
                                {{scope.row.leaveTime ? scope.row.leaveTime : '---'}}
                            </template>    
                        </el-table-column>

                        <el-table-column property="arriveTime" label="到达时间" >
                            <template  #default="scope">
                                {{scope.row.arriveTime ? scope.row.arriveTime : '---'}}
                            </template>  
                        </el-table-column>

                        <el-table-column property="stopTime" label="停留时间" >
                            <template  #default="scope">
                                {{scope.row.stopTime ? scope.row.stopTime : '---'}}
                            </template>  
                        </el-table-column>

                    </el-table>
                </el-popover>
            </div>
            <div class="endCity">
                <div class="time">
                    <span v-if="showPassenger">{{detail?.arriveTime}}</span>
                    <span v-else>{{train.detail.endStation?.arriveTime}}</span>
                    
                </div>
                <div class="city">
                    <span v-if="showPassenger">{{detail?.orderDetail.endStation.name}}</span>
                    <span v-else>{{train.detail.endStation?.station.name}}</span>
                    
                </div>
            </div>
        </div>
        <div v-if="showPassenger" class="passengerandtraintype">
            <div class="trainType">
                <p>{{detail?.orderDetail.passenger.name}}</p>
                <p>{{detail?.orderDetail.carriageNum}}车{{detail?.orderDetail.seatNum}}号</p>
            </div>
            <div class="type">
                <span>身份证{{detail?.orderDetail.passenger.idCard}}</span>
                <div>
                    <span>{{detail?.orderDetail.seatType.name}}</span>
                    ￥ <em>{{detail?.orderDetail.ticketMoney}}</em>
                </div>
            </div>
            <div style="display:flex;justify-content:space-between; align-item:center;">
                <span style="color:red">{{detail?.orderDetail.ticketState}}</span>
                <div  v-if="detail?.orderDetail.ticketState === '已出票' && Date.now() < new Date(props.detail?.orderDetail.leaveDate).getTime()">
                    <my-button color="gred" ButtonTitle="退票" @click="refund"></my-button>
                    <my-button color="default" ButtonTitle="改签" @click="goSearch"></my-button>
                </div>
                <div v-if="detail?.orderDetail.ticketState === '待改签'">
                    <my-button color="default" ButtonTitle="取消改签" @click="cancel"></my-button>
                    <my-button color="warning" ButtonTitle="确认改签" @click="confirm"></my-button>
                </div>
            </div>
            
            
        </div>
        <div v-else class="trainType">
            <span>{{train.detail.seatType?.name}}</span>
            <div>
                ￥ <em style=" color:#0076f5 ">{{train.detail?.money}}</em>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import MyButton from './MyButton.vue';
import { onMounted, ref, reactive, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { getTicketDetail,refundTicket,cancelChange,confirmChange,changeGetCity } from '../api/searchhttp';
const Station:any[] = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
const station = reactive({
    list: Station
})
const obj = {}
const train:any = reactive({
    detail:obj
})
const route = useRoute()
const router = useRouter()
const showPassenger = ref(true)
const {trainId,beginId,endId,seatTypeId,date,type } = route.params
const props = defineProps({
    detail:Object
})
onMounted(() => {
    
})
const goSearch = () =>{
    changeGetCity(props.detail?.orderDetail.detailId).then((res:any) =>{
        console.log(res);
        if(res.code === 200){
            router.push({
            name:'search',
            params:{
                scity: res.obj.bcityId,
                ecity: res.obj.ecityId,
                time: props.detail?.leaveDate,
                type: '1',
                detailId: props.detail?.orderDetail.detailId
            }
        })
        }else{
            ElMessage({
                type:"error",
                message:res.message
            })
        }
        
    })
    
} 
const refund = () =>{
    refundTicket(props.detail?.orderDetail.detailId).then((res:any) =>{
        if(res.code === 200){
            ElMessage({
                type:'success',
                message:res.message
            })
        }else{
            ElMessage({
                type:'error',
                message:res.message
            })
        }
        window.setTimeout(() =>{window.location.reload()},1000)
    })
}
const cancel = () =>{
    cancelChange(props.detail?.orderDetail.detailId).then((res:any) =>{
        if(res.code === 200){
            ElMessage({
                type:'success',
                message:res.message
            })
        }else{
            ElMessage({
                type:'error',
                message:res.message
            })
        }
        window.setTimeout(() =>{window.location.reload()},1000)
    })
}
const confirm = () =>{
    confirmChange(props.detail?.orderDetail.detailId).then((res:any) =>{
        if(res.code === 200){
            ElMessage({
                type:'success',
                message:res.message
            })
        }else{
            ElMessage({
                type:'error',
                message:res.message
            })
        }
        window.setTimeout(() =>{window.location.reload()},1000)
    })
}
watch(() => route.name, (value,oldvalue) => {
    if(value !== "book") {
        showPassenger.value = true
        station.list = props.detail?.trainRouteList.map((item:any) => {
            return {
                name: item.station.name,
                leaveTime: item.leaveTime,
                arriveTime: item.arriveTime,
                stopTime: item.stopTime,
            }
        })
    } else {
        showPassenger.value = false
        getTicketDetail(trainId,beginId,endId,seatTypeId,date,type).then((res:any) => {
        console.log('车次详情（预定界面）');
        train.detail = res
        console.log(train.detail);
        station.list = res.trainRouteList.map((item:any) => {
            return {
                name: item.station.name,
                leaveTime: item.leaveTime,
                arriveTime: item.arriveTime,
                stopTime: item.stopTime,
            }
        })
    })
    }
},
{immediate:true})

</script>
    
<style lang="scss" scoped>
.baseFlex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.padding {
    padding: 30px 30px;
    box-sizing: border-box;
}
.ticketDetail {
    border-radius: 10px;
    background-color: #fff;

    h2 {
        margin: 0 0 20px 0;
        padding: 0 0 10px 0;
        border-bottom: 1px solid #eef1f6;
    }

    .time {
        font-size: 14px;
        color: #999;
    }

    .startEnd {
        border-bottom: 1px solid #999;
        padding-bottom: 30px;

        .time {
            color: #000;
            font-weight: 600;
            font-size: 22px;
            margin: 5px 0 10px 0;
        }

        .city {
            color: #000;
            font-size: 14px;
            font-weight: 600;
        }

        .checi {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;

            .name {
                color: #999;
            }

            .stopCity {
                width: 100%;
                color: #0076f5;
                padding: 2px 6px;
                border-radius: 20px;
                border: 1px solid #999;
                text-align: center;
                position: relative;

                &::after {
                    content: '|';
                    position: absolute;
                    right: -10px;
                    transform: rotate(90deg);
                    color: #999;
                }

                &::before {
                    content: '|';
                    position: absolute;
                    left: -8px;
                    transform: rotate(90deg);
                    color: #999;
                }
            }
        }
    }
    .passengerandtraintype {
        .type {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #999;
            font-size: 14px;
            margin: 10px 0 20px 0;
        }
        p {
            margin: 0;
            color: #333;
            font-weight: bolder;
            font-size: 18px;
        }
    }
    .trainType {
        margin-top: 20px;
        color: #999;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        em {
            font-size: 20px;

        }
    }
}
</style>