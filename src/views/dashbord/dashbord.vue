<template>
    <div class="dashbord">
        <div class="hotel floor">
            <h1>优惠酒店</h1>
            <div class="citys">
                <button v-for="item in citys" :key="item.id" @click="cityChange(item.id)"
                    :class="active === item.id ? 'active' : ''">
                    {{ item.name }}
                </button>
            </div>

            <div class="hotelList">
                <card v-for="item in 4" :key="item" :show-detail="true">
                </card>
            </div>

        </div>
        <div class="travel floor">
            <h1>坐火车去旅行</h1>
            <div class="cityList">
                <card v-for="item in travelCitys" :img="item.img" :key="item.id" :imgTitle="item.city"
                    :imgscript="item.describe" :show-img-text="true">
                </card>
            </div>
        </div>

    </div>
</template>
    
<script setup lang='ts'>
import Card from '../../components/Card.vue'
import { ref, reactive } from 'vue'
const citys = reactive([
    {
        id: 1,
        name: '上海'
    },
    {
        id: 2,
        name: '北京'
    },
    {
        id: 3,
        name: '广州'
    },
    {
        id: 4,
        name: '成都'
    },
    {
        id: 5,
        name: '杭州'
    },
    {
        id: 6,
        name: '天津'
    }
])
const travelCitys = reactive([
    {
        id: 1,
        city: '京广高铁',
        describe: '天南地被任我游',
        img: 'https://pic.c-ctrip.com/railway_v2/zzz_236152_3.jpg'
    },
    {
        id: 2,
        city: '京沪高铁',
        describe: '千里京沪一日还',
        img: 'https://pic.c-ctrip.com/railway_v2/zzz_236152.jpg'
    },
    {
        id: 3,
        city: '宁杭甬',
        describe: '最养眼的高铁线路',
        img: 'https://pic.c-ctrip.com/railway_v2/zzz_236152_2.jpg'
    },
    {
        id: 4,
        city: '成俞高铁',
        describe: '爱上天府之国',
        img: 'https://pic.c-ctrip.com/railway_v2/zzz_236152_1.jpg'
    },
])
const active = ref(1)
const cityChange = (porps: any) => {
    active.value = porps
}
</script>
    
<style lang="scss" scoped>
@import './dashbord.scss';
</style>