<template>
<div class="search-box">
    <div class="imgbox">
    </div>
        <div class="searchHeader"> 
            <div class="title">
                
            </div>
            <div class="train">
                <div class="citybetween">
                    <div class="startcity"> 
                        <!-- :disabled="route.params.type === '1'" -->
                        <!-- <input type="text" id="end" placeholder="开始城市"> -->
                        <el-select v-model="startCity" filterable :disabled="route.params.type === '1'">
                            <el-option v-for="item in city.list" :key="item" :label="item.label" :value="item.value" />
                        </el-select>
                        <label for="start" >
                            出发城市
                        </label>                    
                    </div>
                    <div class="change">
                        <svg  @click="change" t="1659422665218" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2575" width="24" height="24"><path d="M900.160222 227.959537a31.994321 31.994321 0 0 0-9.758268 43.992192 447.920494 447.920494 0 1 1-139.655212-139.335268 31.994321 31.994321 0 0 0 34.233924-54.070403 511.909136 511.909136 0 1 0 159.971605 159.171747 31.994321 31.994321 0 0 0-44.792049-9.758268z" fill="#666666" p-id="2576"></path><path d="M255.954568 415.926173a31.994321 31.994321 0 0 0 31.994321 31.994321h447.920494a31.994321 31.994321 0 0 0 22.555996-54.550317l-127.977284-127.977284a31.994321 31.994321 0 0 0-45.271964 45.271964L658.603098 383.931852H287.948889a31.994321 31.994321 0 0 0-31.994321 31.994321zM767.863704 607.892099a31.994321 31.994321 0 0 0-31.994321-31.994321H287.948889a31.994321 31.994321 0 0 0-22.555996 54.550317l127.977284 127.977284a31.994321 31.994321 0 0 0 45.271964-45.271964L365.215174 639.88642H735.869383a31.994321 31.994321 0 0 0 31.994321-31.994321z" fill="#666666" p-id="2577"></path></svg>
                    </div>
                    <div class="endcity">                       
                        <!-- <input type="text" id="end" placeholder="到达城市"> -->
                        <!-- :disabled="startCity?false:true" -->
                        <el-select v-model="endCity" class="inputDeep" :disabled="route.params.type === '1' || !startCity" filterable>
                            <el-option v-for="item in city.list" :key="item" :label="item.label" :value="item.value" :disabled='DisableCity === item.value'/>
                        </el-select>
                        <label for="end">
                            到达城市 
                        </label> 
                    </div>
                </div>
                <div class="datatime">
                    <el-date-picker
                        v-model="time"
                        type="date"
                        placeholder="请选择出发日期"
                        :disabled-date="disabledDate"
                        format="YYYY-MM-DD "
                        value-format="YYYY-MM-DD"
                        id="datatime"
                    >
                    </el-date-picker>
                    <label for="datatime">出发日期</label>
                </div>
                <div class="search" @click="search">
                    <svg t="1658839766155" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2288" width="24" height="24">
                        <path d="M400.085333 151.210667c-89.059556 0-172.672 47.616-218.197333 124.273777a14.222222 14.222222 0 1 0 24.462222 14.535112c40.433778-68.067556 114.659556-110.364444 193.735111-110.364445a14.222222 14.222222 0 1 0 0-28.444444zM170.197333 336.298667a14.236444 14.236444 0 0 0-17.080889 10.609777c-4.252444 18.147556-6.656 29.397333-6.656 49.592889a14.222222 14.222222 0 1 0 28.444445 0c0-17.137778 1.92-26.083556 5.902222-43.121777a14.222222 14.222222 0 0 0-10.609778-17.080889z" fill="#ffffff" p-id="2289">
                        </path>
                        <path d="M947.384889 821.944889L717.809778 592.384a70.584889 70.584889 0 0 0-16.64-12.472889 346.254222 346.254222 0 0 0 47.36-175.089778c0-192.142222-156.302222-348.444444-348.444445-348.444444-192.128 0-348.444444 156.302222-348.444444 348.444444s156.316444 348.430222 348.444444 348.430223c68.408889 0 132.209778-19.882667 186.083556-54.058667 2.915556 4.821333 6.570667 9.472 10.951111 13.852444l229.575111 229.589334a84.849778 84.849778 0 0 0 60.359111 24.974222 84.821333 84.821333 0 0 0 60.344889-24.974222 84.778667 84.778667 0 0 0 24.974222-60.330667 84.920889 84.920889 0 0 0-24.988444-60.359111zM108.529778 404.835556c0-160.768 130.787556-291.555556 291.555555-291.555556 160.782222 0 291.555556 130.787556 291.555556 291.555556 0 160.782222-130.801778 291.541333-291.555556 291.541333-160.768 0-291.555556-130.759111-291.555555-291.541333z m798.620444 497.578666c-10.766222 10.723556-29.496889 10.723556-40.248889 0L637.340444 672.839111c-1.991111-1.976889-2.730667-3.299556-2.830222-3.299555 0.042667-0.611556 0.824889-6.471111 17.080889-22.698667 16.213333-16.256 22.072889-16.995556 22.257778-17.109333 0.369778 0.113778 1.692444 0.853333 3.740444 2.887111l229.546667 229.560889c5.390222 5.390222 8.334222 12.529778 8.334222 20.138666a28.401778 28.401778 0 0 1-8.32 20.096z" fill="#ffffff" p-id="2290">
                        </path>
                        </svg>
                    搜索
                </div>
            </div>   
        </div>
</div>
</template>
    
<script setup lang='ts'>
  
import { ElMessage } from 'element-plus';
import { toNumber } from 'lodash';
import { ref, onMounted, reactive, watch } from 'vue';
import {useRouter,useRoute}  from 'vue-router';
import { getCitys } from '../api/searchhttp'
const router = useRouter()
const route = useRoute()
defineProps({
    width: String,
    showImgBox: String,
    transitonY: String,
    radius: String,
    shadow: String
})
const DisableCity:any = ref('')
const startCity:any = ref('')
const endCity:any = ref('')

const time:any = ref('')
const arr: any[] = []
const city = reactive({
    list: arr
})
watch(startCity, 
    (value,oldValue) => {
        if(value !== oldValue) {
            DisableCity.value = value
        }
    },
)
onMounted(() => {
    getCitys().then((res:any) => {
        res.forEach((item:any) => {
            city.list.push({
                label: item.name,
                value: item.cityId,
            })
        });
        console.log(city.list);
    })
    if(route.name === 'search') {
        startCity.value = toNumber(route.params.scity)
        endCity.value = toNumber(route.params.ecity)
        time.value = route.params.time
    }
})

const change = () => {
        let change = startCity.value
        startCity.value = endCity.value
        endCity.value = change
        if(route.name === 'search') {
            search()
        }
    }
const search = () => {
    if(startCity.value || endCity.value) {
        if( time.value) {
            if(route.params.type === '1' && route.params.detailId !== '0'){
                console.log(1);
                
                router.push({
                    name: 'search',
                    params: {
                        scity: startCity.value,
                        ecity: endCity.value,
                        time: time.value,
                        type: route.params.type,
                        detailId: route.params.detailId
                    }
                })
            }else{
                router.push({
                    name: 'search',
                    params: {
                        scity: startCity.value,
                        ecity: endCity.value,
                        time: time.value,
                        type: '0',
                        detailId: '0'
                    }
                })
            }
            
        } else {
            ElMessage.warning('搜素条件不完整！')
        }    
    } else {
        ElMessage.warning('搜素条件不完整！')
    }
    
}
const disabledDate = (time: Date) => {
  return time.getTime() < (Date.now() - (24 * 60 * 60 * 1000))
}
</script>
    
<style lang="scss" scoped>
.search-box {
    
    position: relative;
}
.imgbox {
    background-image: url("https://images3.c-ctrip.com/train/activity/ctrip-order-static/top-online.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    width: 100%;
    position: absolute;
    display: v-bind(showImgBox);
}
    label {
        color: #999;
        padding: 0px 0 6px 0;        
        font-size: 16px;
        display: block;
    }
    .searchHeader {
        left: 17%;
        transition: all .5s linear;
        width: v-bind(width);
        height: 200px;
        background-color: #fff;
        border-radius: v-bind(radius);
        margin: 0 auto 10px auto;
        transform: translateY(v-bind(transitonY));
        padding: 10px 20px;
        box-sizing: border-box;     
        box-shadow: v-bind(shadow);
        .title {
            height: 50px;
            width: 100%;
        }
        .train {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        .citybetween {
            width: 50%;
            background-color: #f5f5f5;           
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            box-sizing: border-box;
            border-radius: 10px;
            label {
                color: #999;
                padding: 6px 0 0px 0;        
                font-size: 16px;
                display: block;

            }
            .change {
                width: 24px;
                height: 100%;
                position: relative;
                margin-right: 80px;
                svg {
                    cursor: pointer;
                    transform: translateY(5px);
                }
                &::after {
                    color: #999;
                    content: "";
                    border-right: 1px solid #999;
                    position: absolute;
                    top: 33px;
                    left: 10px;
                    width: 1px;
                    height: 12px;
                    transform: scale(2);
                }
                &::before {
                    position: absolute;
                    color: #999;
                    content: "";
                    border-right: 1px solid #999;
                    
                    bottom: 29px;
                    right: 10px;
                    width: 1px;
                    height: 12px;
                    transform: scale(2);
                }
            }
        }
        .datatime {
            width: 320px;
            height: 100%;
            background-color: #f5f5f5;
            padding: 15px 20px;
            border-radius: 10px;
        }
        .search {
            width: 120px;
            height: 100%;
            padding: 30px 10px;
            box-sizing: border-box;
            border-radius: 20px;
            background-color: #0086F6;
            color: #fff;
            font-size: 22px;
            font-weight: bolder;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg {
                margin-right: 10px;
                transition: all .5s;
            }
            &:hover {
                svg {
                    transform: scale(1.3);
                }
            }

        }
    }
    }
    
</style>
<style scoped>
:deep(.el-input__wrapper) {
    background-color: transparent !important;
    box-shadow: none !important;
}
:deep(.el-input__wrapper :hover) {
  border: none !important;
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: unset !important;
}
:deep(.el-input__wrapper) {
  font-size: 24px !important;
  padding: 0 !important;
}           
</style>