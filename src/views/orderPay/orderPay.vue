<template>
    <div class="orderPay">
        <layout>
            <template v-slot:left>
                <ticket-detail></ticket-detail>
            </template>
            <template v-slot:right>
                <h3>价格明细</h3>
                <div>
                    <p>火车票</p>
                    <span>火车票</span>
                </div>
            </template>
        </layout>
    </div>


</template>
    
<script setup lang='ts'>
import TicketDetail from '../../components/TicketDetail.vue';
import Layout from '../../components/Layout.vue'
</script>
    
<style lang="scss" scoped>
@import './orderPay.scss';
</style>