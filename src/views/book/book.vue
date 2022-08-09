<template>
    <div class="book SafeContent">
        <h3 @click="goback">
            <svg t="1647575940578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1152" width="24" height="24">
                <path
                    d="M512 34.133333C249.173333 34.133333 34.133333 249.173333 34.133333 512s215.04 477.866667 477.866667 477.866667 477.866667-215.04 477.866667-477.866667S774.826667 34.133333 512 34.133333z m174.08 725.333334c-5.12 3.413333-10.24 5.12-15.36 5.12-5.12 0-10.24-1.706667-15.36-5.12l-143.36-102.4-143.36 102.4c-8.533333 6.826667-20.48 6.826667-30.72 0-8.533333-6.826667-11.946667-18.773333-8.533333-29.013334L488.106667 256c3.413333-10.24 13.653333-17.066667 23.893333-17.066667s20.48 6.826667 23.893333 17.066667l158.72 474.453333c3.413333 10.24 0 22.186667-8.533333 29.013334z"
                    fill="#009dff" p-id="1153"></path>
            </svg>
            <span>返回购票</span>
        </h3>
        <div class="leftDetail ">
            <div class="passenger padding">
                <h2>乘车人信息</h2>
                <template v-if="passengerList.list.length"> 
                    <div class="choosed" v-for="(item,index) in passengerList.list" :key="index">
                        <div class="name">
                            {{item.name}}
                            <span>成人票</span>
                        </div>
                        <div class="idCard">
                            二代身份证
                            {{item.idCard}}
                            <span>{{item.phone}}</span>
                        </div>
                        <svg @click="deletePassenger(item)" t="1659832608462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2277" width="28" height="28"><path d="M507.904 52.224q95.232 0 179.2 36.352t145.92 98.304 98.304 145.408 36.352 178.688-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-178.688-36.352-145.408-98.304-98.304-145.92-36.352-179.2 36.352-178.688 98.304-145.408 145.408-98.304 178.688-36.352zM736.256 573.44q30.72 0 55.296-15.872t24.576-47.616q0-30.72-24.576-45.568t-55.296-14.848l-452.608 0q-30.72 0-56.32 14.848t-25.6 45.568q0 31.744 25.6 47.616t56.32 15.872l452.608 0z" p-id="2278" fill="#e1251b"></path></svg>
                    </div>
                </template>
                <div class="noPassenger padding" v-else>
                    请选择乘车人
                </div>
                <Table @choose-passenger="addPassenger"></Table>
            </div>
            <button class="nowBook" @click="goOrderPay">
                现在订票
            </button>
        </div>
        <div class="rightDetail ">
            <ticket-detail></ticket-detail>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Table from '../../components/Table.vue';
import TicketDetail from '../../components/TicketDetail.vue';
const router = useRouter()
const list: any[] = []
let passengerList = reactive({
    list: list
})
onMounted(() => {

})

const goback = () => {
    window.history.back()
}
const addPassenger = (row:any) => {
    passengerList.list.push(row)
}
const deletePassenger = (item:any) => {
    passengerList.list = passengerList.list.filter((i:any) => i.name !== item.name)   
}
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
const goOrderPay = () => {
    if(passengerList.list.length) {
        router.push('/home/orderPay')
    } else {
        ElMessage.warning('请至少选择一位乘车人！')
    }
}
</script>
    
<style lang="scss" scoped>
@import './book.scss';
</style>