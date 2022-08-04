<template>
        <div class="login"> 
            <div class="header">
                人事管理系统
            </div>
            <div class="content">
                <div class="title">
                    在同一个地方，构思、设计、<br>
                    协作，让你和团队更加高效
                </div>
                
                <div class="loginForm">
                    <h1>登录您的账户</h1>
                    <!-- <div class="register">
                        没有账户？<span>立即注册</span>
                        <svg t="1647575940578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1152" width="24" height="24"><path d="M512 34.133333C249.173333 34.133333 34.133333 249.173333 34.133333 512s215.04 477.866667 477.866667 477.866667 477.866667-215.04 477.866667-477.866667S774.826667 34.133333 512 34.133333z m174.08 725.333334c-5.12 3.413333-10.24 5.12-15.36 5.12-5.12 0-10.24-1.706667-15.36-5.12l-143.36-102.4-143.36 102.4c-8.533333 6.826667-20.48 6.826667-30.72 0-8.533333-6.826667-11.946667-18.773333-8.533333-29.013334L488.106667 256c3.413333-10.24 13.653333-17.066667 23.893333-17.066667s20.48 6.826667 23.893333 17.066667l158.72 474.453333c3.413333 10.24 0 22.186667-8.533333 29.013334z" fill="#009dff" p-id="1153"></path></svg>
                    </div> -->
                    <div class="form">
                        <!-- <n-input size="large" round v-model:value="formValue.username" placeholder="请输入用户名" >
                        <template #prefix>
                            <n-icon :component="PersonOutline" />
                        </template>
                        </n-input>
                        <n-input size="large" round v-model:value="formValue.password" placeholder="请输入密码" type="password" show-password-on="mousedown" >
                            <template #prefix>
                                <n-icon :component="BagRemoveOutline" />
                            </template>
                        </n-input>
                        <n-button @click="login" style="width:100%;margin-top:40px;height:50px;font-size:18px;font-weight:bolder;letter-spacing:10px" strong secondary  type="info">
                            登录
                        </n-button> -->
                    </div>
                </div>
            </div>
            <div class="footer">
                © 2022 柴渴.Design Inc. All rights reserved.
            </div>
        </div>
</template>
    

    
<style lang='scss' scoped>
   @import './login.scss';
</style>