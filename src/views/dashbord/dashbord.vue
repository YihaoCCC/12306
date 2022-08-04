<template>
        <div class="dashbord">
            <div class="hotel floor">
                <h1>优惠酒店</h1>
                <div class="citys">
                    <button v-for="item in citys" :key="item.id" @click="cityChange(item.id)" :class="active === item.id ? 'active' : ''">
                        {{item.name}}
                    </button>
                </div>
                
                <div class="hotelList">
                    <card v-for="item in 4" :key="item" :show-img-text="true">
                        
                    </card>        
                </div>

            </div>
        </div>
</template>
    
<script setup lang='ts'>
    import Card from '../../components/Card.vue'
    import { ref, reactive } from 'vue'
    components: {
        Card
    }
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
    const active = ref(1)
    const cityChange = (porps:any) => {
        active.value = porps
    }
</script>
    
<style lang="scss" scoped>
    @import './dashbord.scss';
</style>