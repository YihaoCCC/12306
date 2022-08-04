<template>
    <div class="service">
        <li>
            <img src="https://images3.c-ctrip.com/train/activity/ctrip-order-static/icon-server-1.png" alt="">
            <h4>安心服务</h4>
            <span>7X24小时可预订</span>
        </li>
        <li>
            <img src="https://images3.c-ctrip.com/train/activity/ctrip-order-static/icon-server-2.png" alt="">
            <h4>放心价格</h4>
            <span>专享携程优惠券礼品卡等</span>
        </li>
        <li>
            <img src="https://images3.c-ctrip.com/train/activity/ctrip-order-static/icon-server-3.png" alt="">
            <h4>退改无忧</h4>
            <span>工作时间内发车前25分钟可退票/改签</span>
        </li>
    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style lang="scss" scoped>
.service {
        margin-top: 20px;
        background-color: #fff;
        padding: 50px 220px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
            width: 270px;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
            }
        }
    }
</style>