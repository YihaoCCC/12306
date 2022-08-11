<template>
    <div class="card">
        <div class="listOpen">
            <div class="time">
                {{train?.train.beginTime}}
            </div>
            <div class="city">
                {{train?.train.beginStation.name}}
            </div>
        </div>
        <div class="duringTime">
            <div class="haoshi">
                {{train?.train.runTime}}
            </div>
            <div class="line"></div>
            <div class="checi">
                <span>{{train?.train.trainId}}</span>
                <svg t="1659703610329" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3077" width="16" height="16">
                    <path
                        d="M209.513187 890.861078c-62.613136 0-113.529313-50.916177-113.529313-113.529313L95.983874 278.834873c0-62.613136 50.916177-113.529313 113.529313-113.529313L832.548295 165.30556c62.613136 0 113.529313 50.916177 113.529313 113.529313l0 498.496892c0 62.613136-50.916177 113.529313-113.529313 113.529313L209.513187 890.861078zM209.513187 226.198555c-28.898371 0-52.636318 23.565933-52.636318 52.636318l0 498.496892c0 28.898371 23.565933 52.636318 52.636318 52.636318L832.548295 829.968083c28.898371 0 52.636318-23.565933 52.636318-52.636318L885.184613 278.834873c0-28.898371-23.565933-52.636318-52.636318-52.636318L209.513187 226.198555zM791.092894 703.88174c-16.857383 0-30.446498-13.761129-30.446498-30.446498 0-51.948261-42.143457-94.091718-94.091718-94.091718s-94.091718 42.143457-94.091718 94.091718c0 16.857383-13.761129 30.446498-30.446498 30.446498-16.857383 0-30.446498-13.761129-30.446498-30.446498 0-53.15236 27.350244-102.176382 72.417941-130.55871-19.781623-20.985721-30.790526-48.507979-30.790526-77.234336 0-62.613136 50.916177-113.529313 113.529313-113.529313s113.529313 50.916177 113.529313 113.529313c0 28.726356-11.180917 56.0766-30.790526 77.234336 44.895683 28.382328 72.417941 77.234336 72.417941 130.55871C821.711406 690.120611 807.950277 703.88174 791.092894 703.88174zM666.554678 413.177893c-28.898371 0-52.636318 23.565933-52.636318 52.636318s23.565933 52.636318 52.636318 52.636318c29.070385 0 52.636318-23.565933 52.636318-52.636318S695.453049 413.177893 666.554678 413.177893z"
                        p-id="3078" fill="#666666"></path>
                    <path
                        d="M434.507643 413.86595 248.216361 413.86595c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C466.502268 399.588779 452.225097 413.86595 434.507643 413.86595z"
                        p-id="3079" fill="#666666"></path>
                    <path
                        d="M434.507643 559.90593 248.216361 559.90593c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S452.225097 559.90593 434.507643 559.90593z"
                        p-id="3080" fill="#666666"></path>
                    <path
                        d="M434.507643 704.397783 248.216361 704.397783c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S452.225097 704.397783 434.507643 704.397783z"
                        p-id="3081" fill="#666666"></path>
                </svg>
            </div>
        </div>
        <div class="listto">
            <div class="time">
                {{train?.train.endTime}}
            </div>
            <div class="city">
                {{train?.train.endStation.name}}
            </div>
        </div>
        <div class="priceBox">
            <div class="price">
                ￥ <span>{{train?.seatModelList[0].money}}</span>
            </div>
            <div class="torage">
                <div v-for="item in train?.seatModelList">
                   <span>{{item.name}}</span> {{item.ticketNum}} <span>张</span>
                </div>
            </div>
        </div>
        <div class="order" :style="showList ? 'background: #f70' : ''" @click="showListDetail">订</div>
        <div class="qiang">
            <span>抢票成功率：较高</span>
        </div>
    </div>
    <div class="listDetail" :class="showList ? 'showAnimate' : ''">
        <div class="type" v-for="item in train?.seatModelList" :key="item.name">
            {{item.name}}
            <div class="priceBox">
                <div class="price">
                    ￥ <span>{{item.money}}</span>
                </div>
                <div v-if="route.params.type === '1'" class="button" @click="book(item)">改签</div>
                <div v-else class="button" @click="book(item)">{{item.ticketNum > 0 ? '购票' : '抢票'}}</div>
            </div> 
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {changeTicket} from '../api/searchhttp'
const route = useRoute()
const props =defineProps({
    ticket: {
        type :Object,
        default : () => {
            return {
                startTime: '06:20',
                startCity: '北京南',
                haoshi: '5时30分',
                checi: 'G103',
                endTime: '11:29',
                endCity: '上海虹桥',
                price: '553',
                priceList: {
                        erdeng: '553',
                        yideng: '689',
                        shangwu: '1028'
                }
            }
        }
    },
    train: Object,
})
const router = useRouter()
const showList = ref(false)
const showListDetail = () => {
    showList.value = !showList.value
}
// 车次 起始车站id 终止车站id 日期 座位类型 trainId:string,beginId:number,endId:number,seatTypeId:number,date: string)
const book = (item:any) => {
    if(route.params.type === '1'){
        let detail = {
            trainId: item.trainId,
            beginStationId: props.train?.train.beginStationId,
            endStationId:props.train?.train.endStationId,
            seatTypeId:item.seatTypeId,
            changeId:route.params.detailId,
            date:props.train?.date
        }
        changeTicket(detail).then((res:any) => {
            console.log(res);
            if(res.code === 200){
                ElMessage({
                    type:'success',
                    message:res.message
                })
                router.push({
                    name:'orderDetail',
                    params:{
                        orderId: res.obj
                    }
                })
            }else{
                ElMessage({
                    type:'error',
                    message:res.message
                })
            }
        })
        
    }else{
        router.push({
            name: 'book',
            params: {
                trainId: item.trainId,
                beginId: props.train?.train.beginStationId,
                endId: props.train?.train.endStationId,
                seatTypeId: item.seatTypeId,
                date: props.train?.date,
                type: item.ticketNum > 0 ? "普通" : "抢票"
            }
        })
    }
}
</script>
    
<style lang="scss" scoped>
.city {
    font-size: 14px;
    font-weight: 700;
    color: #333;
}
.time {
    font-size: 24px;
    font-weight: 700;
}
.priceBox {
        width: 240px;
        color: #0086f6;
        margin-left: 60px;
        display: flex;
        justify-content: end;
        flex-direction: column;
        .price {
            text-align: end;
        }
}
.card {
    width: 70%;
    height: 100px;
    background-color: #fff;
    margin: 16px 0;
    box-shadow: 0 2px 10px rgb(187, 187, 187);
    border-radius: 10px;
    transition: all .3s ease-in-out;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .listOpen {
        .time {
            color: #0072d1;
        }
    }
    .duringTime {
        color: #999;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        .haoshi {
            font-size: 14px;   
        }
        .line {

            background: url(https://images3.c-ctrip.com/train/activity/ctrip-order-static/icon-fromto.png) no-repeat;
            width: 100%;
            height: 10px;
            margin: 2px 0 6px 0;
            background-position: 100% 90%;

        }
        .checi {
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                margin-left: 5px;
            }
        }
    }
    .priceBox {
        span {
            font-size: 24px;
            font-weight: 700;
        }
        .torage {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #f70;
            span {
                color: #999; 
                font-size: 12px;
            }
        }
    }
    .order {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-color: #0086f6;
        line-height: 50px;
        padding: 0 16px;
        box-sizing: border-box;
        color: #fff;
        font-weight: 600;
        transition: all .3s ease-in-out;
    }
    &:hover {
        transform: scale(1.02);
    }
    .qiang {
        position: absolute;
        font-size: 12px;
        line-height: 18px;
        top: 0;
        left: 0;
        padding: 0 20px 0 8px;
        background: -webkit-gradient(linear,left top,right top,from(#ffe6d2),to(#fff));
        background: -webkit-linear-gradient(left,#ffe6d2,#fff);
        background: linear-gradient(90deg,#ffe6d2,#fff);
        color: #f70;
        border-radius: 6px 0 0;
    }
}
    .listDetail {
        height: 0px;
        width: 70%;
        background-color: #fff;
        border-radius: 8px;
        transition: all .5s ease-in-out;
        overflow: hidden;
        padding: 0px 40px;
        box-sizing: border-box;
        .type {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            font-weight: 700;
            border-bottom: 1px solid #eef1f6;
            .priceBox {
                display: flex;
                justify-content: end;
                align-items: center;
                flex-direction: row;
                span {
                    font-size: 24px;
                }
                .button {
                    background: linear-gradient(90deg,#00a7fa,#0076f5);
                    padding: 0px 15px;
                    width: 80px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 18px;
                    border: none;
                    box-sizing: border-box;
                    margin-left: 20px;
                    text-align: center;
                    transition: all .3s ease-in-out;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
    .showAnimate {
        height: 200px;
    }
</style>