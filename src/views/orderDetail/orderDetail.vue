<template>
    <div class="orderPay">
        <layout>
            <template #left>
                <div class="waitingPay">
                    <div class="status" v-if="orderStatus === 1">
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
                        <div style="margin: 0 0px 0 10px;padding:15px 20px;box-sizing: border-box;">
                            <h2>待支付</h2>
                            <span>建议尽快支付，<em style="color: red;">10分钟</em>未支付将自动取消订单</span>
                        </div>
                        <div class="buttons">
                            <my-button color="gred" ButtonTitle="取消订票" @click="cancelBook"></my-button>
                            <my-button color="warning" ButtonTitle="确认订票" @click="goOrder"></my-button>
                        </div>
                    </div>
                    <div class="status" v-if="orderStatus === 2">
                        <div style="display:flex;align-items:center;justify-content:space-between">
                            <svg t="1660034767817" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2273" width="40" height="40">
                                <path
                                    d="M511.08977778 1021.26933333c280.91733333 0 509.49688889-228.57955555 509.49688889-509.49688888S792.00711111 2.16177778 511.08977778 2.16177778 1.47911111 230.74133333 1.47911111 511.65866667s228.57955555 509.61066667 509.61066667 509.61066666z m0-948.33777778c241.89155555 0 438.72711111 196.83555555 438.72711111 438.72711112s-196.83555555 438.72711111-438.72711111 438.72711111c-241.89155555 0-438.72711111-196.83555555-438.72711111-438.72711111s196.72177778-438.72711111 438.72711111-438.72711112zM301.51111111 536.12088889c-13.76711111-13.76711111-13.76711111-36.18133333 0-50.06222222 13.76711111-13.76711111 36.18133333-13.76711111 50.06222222 0l118.32888889 118.32888888 247.46666667-247.46666666c13.76711111-13.76711111 36.18133333-13.76711111 50.06222222 0 13.76711111 13.76711111 13.76711111 36.18133333 0 50.06222222L494.81955555 679.36711111c-6.94044445 6.94044445-15.92888889 10.35377778-25.0311111 10.35377778s-18.09066667-3.41333333-25.03111112-10.35377778L301.51111111 536.12088889z"
                                    fill="#0086f6" p-id="2274"></path>
                            </svg>
                            <div style="margin: 0 0px 0 10px;padding:15px 20px;box-sizing: border-box;">
                                <h2>已支付</h2>
                                <span>祝您旅途愉快！</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <my-button color="warning" ButtonTitle="退票" @click="cancelBook"></my-button>
                            <my-button color="default" ButtonTitle="改签" @click="goOrder"></my-button>
                        </div>
                    </div>
                    <div class="status" v-if="orderStatus === 3">
                        <div style="display:flex;align-items:center;justify-content:space-between">
                            <svg t="1660035712343" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3385" width="60" height="60">
                                <path
                                    d="M648.8 675c-6.9 0-13.8-2.6-19.1-7.9L358.1 395.4c-10.5-10.5-10.5-27.6 0-38.2 10.5-10.5 27.6-10.5 38.2 0L668 628.9c10.5 10.5 10.5 27.6 0 38.2-5.3 5.2-12.2 7.9-19.2 7.9z"
                                    p-id="3386" fill="#0086f6"></path>
                                <path
                                    d="M377.2 675c-6.9 0-13.8-2.6-19.1-7.9-10.5-10.5-10.5-27.6 0-38.2l271.7-271.7c10.5-10.5 27.6-10.5 38.2 0 10.5 10.5 10.5 27.6 0 38.2L396.2 667c-5.2 5.3-12.1 8-19 8z"
                                    p-id="3387" fill="#0086f6"></path>
                                <path
                                    d="M511.3 858.7c-47 0-92.6-9.2-135.6-27.4-41.5-17.5-78.7-42.7-110.7-74.6s-57-69.2-74.6-110.7c-18.2-43-27.4-88.6-27.4-135.6s9.2-92.6 27.4-135.6c17.5-41.5 42.7-78.7 74.6-110.7 32-32 69.2-57.1 110.7-74.6 43-18.2 88.6-27.4 135.6-27.4s92.6 9.2 135.6 27.4c41.5 17.5 78.7 42.7 110.7 74.6 32 32 57.1 69.2 74.6 110.7 18.2 43 27.4 88.6 27.4 135.6 0 48.8-9.9 96.1-29.5 140.4-6 13.6-22 19.8-35.6 13.8-13.6-6-19.8-22-13.8-35.6 16.5-37.4 24.9-77.3 24.9-118.6 0-162.3-132-294.3-294.3-294.3S217 348.1 217 510.4s132 294.3 294.3 294.3c64 0 124.8-20.2 175.8-58.3 11.9-8.9 28.9-6.5 37.8 5.5 8.9 11.9 6.5 28.9-5.5 37.8-60.4 45.2-132.4 69-208.1 69z"
                                    p-id="3388" fill="#0086f6"></path>
                            </svg>
                            <div style="margin: 0 0px 0 10px;padding:15px 20px;box-sizing: border-box;">
                                <h2>已取消</h2>
                                <span>请重新购买车票！</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <my-button color="default" ButtonTitle="重新购买" @click="goIndex"></my-button>
                        </div>
                    </div>


                </div>
                <ticket-detail></ticket-detail>
            </template>
            <template #right>
                <div class="borderbox">
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
                </div>
                <div class="borderbox">
                    <h3 style="margin-bottom: 20px;">温馨提示</h3>
                    <span>支付越早，成功率越高喔！</span>
                </div>
            </template>
        </layout>
    </div>


</template>
    
<script setup lang='ts'>
import TicketDetail from '../../components/TicketDetail.vue';
import Layout from '../../components/Layout.vue'
import MyButton from '../../components/MyButton.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
const router = useRouter()
const orderStatus = ref(3)
const goOrder = () => {
    router.push('/home/order')
}
const cancelBook = () => {
    router.push('/home/orderDetail')
}
const goIndex = () => {
    router.push('/')
}
</script>
    
<style lang="scss" scoped>
@import './orderDetail.scss';
</style>