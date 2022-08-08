<template>

        <div class="searchDetail" id="header">
            <div>
                北京 - 上海 &nbsp;&nbsp;<span>单程 2022 - 08 -06</span>
                <em>
                    （共40车次）
                </em>
            </div>
            <span class="type">
                火车票 <em> &nbsp;  >  &nbsp; 北京到上海的火车票</em>
            </span>
        </div>
        <div class="SafeContent">
            <TicketCard v-for="item in train.list " :key="item"
                :train="item"
            
            
            ></TicketCard>
        </div>

</template>
    
<script setup lang='ts'>
import { onMounted, reactive, watch ,watchEffect } from 'vue';
import TicketCard from '../../components/TicketCard.vue';
import { useRoute } from 'vue-router';
import {get_search_list} from './searchhttp'
const route = useRoute()
let train = reactive({
    list: []
})
onMounted(() => {
    let dom:any = document.getElementById('header')
    document.addEventListener('scroll', () => {
        let domHeight:any= document.getElementById('header')?.offsetTop

        if(domHeight > 330 && dom) {
            dom!.style.background = '#fff';
            dom.style.boxShadow = '0px 5px 10px #89c1f073'
        } else {
            dom.style.background = ''
            dom.style.boxShadow = ''
        }
    })
    getTrainList()
})
watch(() => route, (value,oldValue) => {
    if(route.name !== 'dashbord') {
        getTrainList()
    }
},
{deep:true}
)
const getTrainList = () => {
    get_search_list(route.params.scity, route.params.ecity, route.params.time).then((res:any) => {
        train.list = res.obj.list
        console.log(train.list);
    })
}

</script>
    
<style lang="scss" scoped>
.searchDetail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    padding: 20px 240px 16px 200px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all .3s ease-in-out;
    span,em {
        font-size: 15px;
        font-style: normal;
        color: #666;
    }
    .type {
        font-size: 16px;
        color: #0086f6;
    }
}
</style>