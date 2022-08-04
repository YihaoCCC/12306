<template>
    <div class="card-box">
        <div class="hotel-img">
            <div class="tag" v-if="recommed">
               <svg t="1659577611510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10159" width="16" height="16"><path d="M336 972.8c-60.8-128-28.8-201.6 19.2-268.8 51.2-76.8 64-150.4 64-150.4s41.6 51.2 25.6 134.4c70.4-80 83.2-208 73.6-256 160 112 230.4 358.4 137.6 537.6 492.8-281.6 121.6-700.8 57.6-745.6 22.4 48 25.6 128-19.2 166.4-73.6-281.6-256-336-256-336 22.4 144-76.8 300.8-172.8 419.2-3.2-57.6-6.4-96-38.4-153.6-6.4 105.6-86.4 188.8-108.8 294.4C89.6 758.4 140.8 860.8 336 972.8L336 972.8z" p-id="10160" fill="#ffffff"></path></svg>
               <span>推荐</span>
            </div>
            <img :src="img" alt="">
            
            <h3 class="imgtext" v-if="showImgText">{{city}}</h3>
            <span class="imgtext" v-if="showImgText">{{describe}}</span>
        
        </div>
        <div class="hotel-detail" v-if="showDetail">
            <div class="name">
                {{name}}
            </div>
            <div class="score">
                <span>{{score}}</span><em>/5</em>
            </div>
            <div class="price">
               {{price}}
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    defineProps({
        img: {
            require: true,
            type: String,
            default: 'https://dimg04.c-ctrip.com/images/02071120008putruh5FDD_C_400_600_R5_Q70.png'
        },
        name: {
            type: String,
            default: '上海交通大学'
        },
        score: {
            type: Number,
            default: 4.6
        },
        recommed: {
            type: Boolean,
            default: false
        },
        price: {
            type: Number,
            default: 209
        },
        // 图上文字
        showImgText: {
            type: Boolean,
            default: false
        },
        // 详情
        showDetail: {
            type: Boolean,
            default: false
        },
        city: {
            type: String,
            default: '京沪高铁'
        },
        describe: {
            type: String,
            default: '千里京沪一日还'
        }
    })
</script>
    
<style lang="scss" scoped>
    .card-box {
        width: 260px;
        border-radius: 20px;
        box-shadow: 2px 2px 5px rgba(72, 140, 235, 0.351);
        .hotel-img {
            width: 100%;
            height: 164px;
            border-radius: 13px;
            overflow: hidden;
            position: relative;
            .tag {
                color: #fff;
                width: 84px;
                height: 34px;
                background-color: #f55a4a;
                line-height: 34px;
                padding: 0 12px;
                font-weight: 700;
                font-size: 17px;
                border-radius: 12px 0;
                box-sizing: border-box;
                position: absolute;  
                z-index: 10;
                svg {
                    margin-right: 5px;
                }
            }
            h3 {
                color: #fff;
                position: absolute;
                bottom: 24px;
                left: 260px;
                width: 100%;
                padding: 10px 20px;
                transition: all .5s;
                margin-bottom: 10px; 
                font-weight: 700; 
            }
            span {
                color: #fff;
                position: absolute;
                bottom: 0;
                left: 260px;
                width: 100%;
                font-size: 14px;
                padding: 10px 20px;
                transition: all .5s;
                margin-bottom: 10px;
                transition-delay: 0.3s; 
            }
            img {
                width: 100%;
                height: 100%;
                transition: all .5s ease-in-out;
            }
            &:hover {
                img {
                    transform: scale(1.2);
                }
                .imgtext {
                    left: 0;
                }
            }
        }
        .hotel-detail {
            margin: 10px 0;
            padding: 0 15px;
            .name {
                margin: 6px 0;
                font-size: 16px;
                font-weight: bolder;
            }
            .score {
                text-align: center;
                width: 40px;
                font-size: 12px;
                background-color: #4978CE;
                padding: 2px 3px;
                font-weight: bolder;
                color: #fff;
                border-radius: 5px;
                margin: 5px 0;
                span {
                    font-size: 16px;
                }
                em {
                    opacity: .5;
                    font-style: normal;
                    margin-left: 3px;
                }
            }
            .price{
                color: #0086f6;
                font-size: 18px;
                font-weight: 800;
                &::before {
                    content: "\00A5";
                    font-size: 14px;
                    margin-right: 2px;
                }
            }
        }
    }
</style>