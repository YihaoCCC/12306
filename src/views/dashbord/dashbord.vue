<template>
        <div class="dashbord">
            <div class="hotel floor">
                <h1>优惠酒店</h1>
                <div class="HotelChange">
                    <div class="citys">
                        <button v-for="item in citys" :key="item.id" @click="cityChange(item.id)" :class="active === item.id ? 'active' : ''">
                            {{item.name}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>
    
<script setup lang='ts'>
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
    const active = ref(1)
    const cityChange = (porps:any) => {
        active.value = porps
    }
</script>
    
<style lang="scss" scoped>
    .dashbord {
        width: 100%;
        height: 600px;
        margin: 10px 0;
        .citys {
            text-align: center;
            button {
                margin: 0 10px;
                height: 45px;
                width: 80px;
                box-sizing: border-box;
                border: 1px solid #b0b0b0;
                border-radius: 10px;
                padding: 10px 24px;
                color: #8f8f8f;
                background-color: #F8FAFD;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover {
                    transform: scale(1.2);
                    background-color: #60b5fa;
                    color: #fff;
                }
            }
            .active {
                background-color: #60b5fa;
                color: #fff;
            }
        }
    }
    .floor {
        max-width: 1200px;
        margin: auto;   
        height: 1200px;   
        h1 {
            text-align: center;
        }
    }
</style>