<template>
    <div class="login">
        <div class="header myFont">
            一起去旅行
        </div>
        <div class="content">
            <div class="title myFont">
                火车票预订与代购<br />高铁票、火车票订购中心
                Ck Travel Me
            </div>

            <div class="loginForm">
                <h1 class="myFont">登录您的账户</h1>
                <div class="register" @click="registe">
                    没有账户？<span>立即注册</span>
                    <svg t="1647575940578" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1152" width="24" height="24">
                        <path
                            d="M512 34.133333C249.173333 34.133333 34.133333 249.173333 34.133333 512s215.04 477.866667 477.866667 477.866667 477.866667-215.04 477.866667-477.866667S774.826667 34.133333 512 34.133333z m174.08 725.333334c-5.12 3.413333-10.24 5.12-15.36 5.12-5.12 0-10.24-1.706667-15.36-5.12l-143.36-102.4-143.36 102.4c-8.533333 6.826667-20.48 6.826667-30.72 0-8.533333-6.826667-11.946667-18.773333-8.533333-29.013334L488.106667 256c3.413333-10.24 13.653333-17.066667 23.893333-17.066667s20.48 6.826667 23.893333 17.066667l158.72 474.453333c3.413333 10.24 0 22.186667-8.533333 29.013334z"
                            fill="#009dff" p-id="1153"></path>
                    </svg>
                </div>
                <div class="form">
                    <div class="inputbox">
                        <svg t="1659662610817" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2261" width="24" height="24">
                            <path
                                d="M498.602667 191.744a204.714667 204.714667 0 0 1 116.906666 372.8c133.162667 47.317333 229.077333 173.290667 231.893334 322.026667l0.085333 6.784h-64c0-157.333333-127.573333-284.885333-284.885333-284.885334-155.136 0-281.301333 123.968-284.821334 278.250667l-0.085333 6.613333h-64c0-151.68 96.810667-280.746667 232-328.810666a204.714667 204.714667 0 0 1 116.906667-372.8z m0 64a140.714667 140.714667 0 1 0 0 281.450667 140.714667 140.714667 0 0 0 0-281.450667z"
                                fill="#009DFF" p-id="2262"></path>
                        </svg>
                        <el-input v-model="username" placeholder="请输入账号" size="large" />
                    </div>
                    <div class="inputbox">
                        <svg t="1659662793314" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3254" width="24" height="24">
                            <path
                                d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z"
                                p-id="3255" fill="#009DFF"></path>
                        </svg>
                        <el-input v-model="password" type="password" placeholder="请输入密码" size="large" />
                    </div>
                </div>

                <button @click="login">
                    登录
                </button>

            </div>
            <Registe @close="closeRegiste" :show="showRegister"></Registe>
        </div>

        <div class="footer">
            © 2022 柴渴.Design Inc. All rights reserved.
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import Registe from '../registe/registe.vue';
const username = ref('')
const password = ref('')
const router = useRouter()
const showRegister = ref(false)
const login = () => {
    if (username.value || password.value) {
        ElMessage({
            type: 'success',
            message: '登录系统成功！'
        })
        router.push('/home/dashbord')
    } else {
        ElMessage({
            type: 'warning',
            message: '登录失败，用户名或密码不可为空！'
        })
    }
}
const registe = () => {
    showRegister.value = true
    console.log(showRegister.value);

}
const closeRegiste = () => {
    showRegister.value = false
}
</script>
    
<style lang='scss' scoped >
@import './login.scss';
</style>