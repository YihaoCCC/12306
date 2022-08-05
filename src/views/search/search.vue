<template>
    <div class="SafeContent">
        <div class="searchDetail">
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
        <div class="listBox">
            <TicketCard v-for="item in 10 " :key="item"></TicketCard>

        </div>
    </div>
</template>
    
<script setup lang='ts'>
import TicketCard from '../../components/TicketCard.vue';

</script>
    
<style lang="scss" scoped>
.searchDetail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    padding: 30px 0 6px 0;
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

.listBox {

}
</style>