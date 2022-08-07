<template>
    <div class="ticketDetail padding">
        <h2>车票信息</h2>
        <div class="time baseFlex">
            <div class="starDate">
                08月06日
            </div>
            <div class="endDate">
                08月07日
            </div>
        </div>
        <div class="startEnd baseFlex">
            <div class="startTime">
                <div class="time">
                    23:12
                </div>
                <div class="city">
                    北京南
                </div>
            </div>
            <div class="checi">
                <div class="name">
                    k402
                </div>

                <el-popover placement="bottom" :width="400" trigger="click">
                    <template #reference>
                        <div class="stopCity">
                            经停信息
                        </div>
                    </template>
                    <el-table :data="gridData" table-layout="fixed">
                        <el-table-column property="date" label="date" />
                        <el-table-column property="address" label="address" />
                    </el-table>
                </el-popover>
            </div>
            <div class="endCity">
                <div class="time">
                    08:46
                </div>
                <div class="city">
                    上海虹桥
                </div>
            </div>
        </div>
        <div class="trainType">
            <span>二等座</span>
            ￥ <em>533</em>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { onMounted, reactive } from 'vue';
const gridData = reactive([
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
])
</script>
    
<style lang="scss" scoped>
.baseFlex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.padding {
    padding: 30px 30px;
    box-sizing: border-box;
}
.ticketDetail {
    height: 260px;
    border-radius: 10px;
    background-color: #fff;

    h2 {
        margin: 0 0 20px 0;
        padding: 0 0 10px 0;
        border-bottom: 1px solid #eef1f6;
    }

    .time {
        font-size: 14px;
        color: #999;
    }

    .startEnd {
        border-bottom: 1px solid #999;
        padding-bottom: 30px;

        .time {
            color: #000;
            font-weight: 600;
            font-size: 22px;
            margin: 5px 0 10px 0;
        }

        .city {
            color: #000;
            font-size: 14px;
            font-weight: 600;
        }

        .checi {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;

            .name {
                color: #999;
            }

            .stopCity {
                width: 100%;
                color: #0076f5;
                padding: 2px 6px;
                border-radius: 20px;
                border: 1px solid #999;
                text-align: center;
                position: relative;

                &::after {
                    content: '|';
                    position: absolute;
                    right: -10px;
                    transform: rotate(90deg);
                    color: #999;
                }

                &::before {
                    content: '|';
                    position: absolute;
                    left: -8px;
                    transform: rotate(90deg);
                    color: #999;
                }
            }
        }
    }

    .trainType {
        margin-top: 20px;
        color: #999;
        font-size: 14px;

        em {
            font-size: 20px;

        }
    }
}
</style>