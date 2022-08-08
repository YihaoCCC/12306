<template>
    <div class="orderPay">
        <layout>
            <template #left>
                <div class="waitingPay">
                    <div class="status">
                        <svg t="1659952331784" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2391" width="40" height="40">
                            <path
                                d="M503.466667 25.6c-263.509333 0-477.866667 214.4256-477.866667 477.866667 0 263.509333 214.357333 477.866667 477.866667 477.866666 263.441067 0 477.866667-214.357333 477.866666-477.866666 0-263.441067-214.4256-477.866667-477.866666-477.866667m0 51.2a427.144533 427.144533 0 0 1 426.666666 426.666667 427.144533 427.144533 0 0 1-426.666666 426.666666 427.144533 427.144533 0 0 1-426.666667-426.666666 427.144533 427.144533 0 0 1 426.666667-426.666667"
                                fill="#0086f6" p-id="2392"></path>
                            <path
                                d="M350.4128 451.106133a25.6 25.6 0 0 1 0-51.2h306.107733a25.6 25.6 0 0 1 0 51.2H350.4128z"
                                fill="#0086f6" p-id="2393"></path>
                            <path
                                d="M477.866667 428.168533a25.6 25.6 0 0 1 51.2 0v291.2256a25.6 25.6 0 1 1-51.2 0V428.168533z"
                                fill="#0086f6" p-id="2394"></path>
                            <path
                                d="M350.4128 598.289067a25.6 25.6 0 0 1 0-51.2h306.107733a25.6 25.6 0 0 1 0 51.2H350.4128zM547.976533 439.432533a25.6 25.6 0 0 1-39.253333-32.904533l113.527467-135.3728a25.6 25.6 0 0 1 39.253333 32.904533L547.976533 439.432533z"
                                fill="#0086f6" p-id="2395"></path>
                            <path
                                d="M345.429333 303.991467a25.6 25.6 0 0 1 39.185067-32.904534l113.595733 135.3728a25.6 25.6 0 0 1-39.253333 32.904534L345.429333 303.991467z"
                                fill="#0086f6" p-id="2396"></path>
                        </svg>
                        <div style="margin: 0 0px 0 10px;padding:15px 20px">
                            <h2>待支付</h2>
                            <span>建议您尽快支付</span>
                        </div>
                    </div>
                    <div class="buttons">
                        <my-button color="gred" ButtonTitle="取消订票"></my-button>
                        <my-button color="warning" ButtonTitle="取消订票"></my-button>
                    </div>
                </div>
                <ticket-detail></ticket-detail>
            </template>
            <template #right>
                <h3>价格明细</h3>
                <div class="detail">
                    <p>火车票</p>
                    <div class="priceNum">
                        <span>火车票</span>
                        <span>
                            ￥ 553 × 1张
                        </span>
                    </div>
                </div>
                <div class="total">
                    <p>订单总额</p>
                    <span>
                        ￥553
                    </span>
                </div>
            </template>
        </layout>
    </div>


</template>
    
<script setup lang='ts'>
import TicketDetail from '../../components/TicketDetail.vue';
import Layout from '../../components/Layout.vue'
import MyButton from '../../components/MyButton.vue';
</script>
    
<style lang="scss" scoped>
@import './orderPay.scss';
</style>