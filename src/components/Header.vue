<template>
    <header>
        <div class="header-imgbox">
                <img src="https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.65/default/image/logo.png" alt="">
            </div>
            <div class="search">
                <div class="inputbox" >
                    <input placeholder="搜索车票" />
                    <button >
                        <svg t="1658839766155" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2288" width="24" height="24"><path d="M400.085333 151.210667c-89.059556 0-172.672 47.616-218.197333 124.273777a14.222222 14.222222 0 1 0 24.462222 14.535112c40.433778-68.067556 114.659556-110.364444 193.735111-110.364445a14.222222 14.222222 0 1 0 0-28.444444zM170.197333 336.298667a14.236444 14.236444 0 0 0-17.080889 10.609777c-4.252444 18.147556-6.656 29.397333-6.656 49.592889a14.222222 14.222222 0 1 0 28.444445 0c0-17.137778 1.92-26.083556 5.902222-43.121777a14.222222 14.222222 0 0 0-10.609778-17.080889z" fill="#ffffff" p-id="2289"></path><path d="M947.384889 821.944889L717.809778 592.384a70.584889 70.584889 0 0 0-16.64-12.472889 346.254222 346.254222 0 0 0 47.36-175.089778c0-192.142222-156.302222-348.444444-348.444445-348.444444-192.128 0-348.444444 156.302222-348.444444 348.444444s156.316444 348.430222 348.444444 348.430223c68.408889 0 132.209778-19.882667 186.083556-54.058667 2.915556 4.821333 6.570667 9.472 10.951111 13.852444l229.575111 229.589334a84.849778 84.849778 0 0 0 60.359111 24.974222 84.821333 84.821333 0 0 0 60.344889-24.974222 84.778667 84.778667 0 0 0 24.974222-60.330667 84.920889 84.920889 0 0 0-24.988444-60.359111zM108.529778 404.835556c0-160.768 130.787556-291.555556 291.555555-291.555556 160.782222 0 291.555556 130.787556 291.555556 291.555556 0 160.782222-130.801778 291.541333-291.555556 291.541333-160.768 0-291.555556-130.759111-291.555555-291.541333z m798.620444 497.578666c-10.766222 10.723556-29.496889 10.723556-40.248889 0L637.340444 672.839111c-1.991111-1.976889-2.730667-3.299556-2.830222-3.299555 0.042667-0.611556 0.824889-6.471111 17.080889-22.698667 16.213333-16.256 22.072889-16.995556 22.257778-17.109333 0.369778 0.113778 1.692444 0.853333 3.740444 2.887111l229.546667 229.560889c5.390222 5.390222 8.334222 12.529778 8.334222 20.138666a28.401778 28.401778 0 0 1-8.32 20.096z" fill="#ffffff" p-id="2290"></path></svg>
                    </button>
                </div>
                
            </div>
            <div class="islogin">
                <el-button class="login">
                    登录
                </el-button>
                <button class="register">
                    注册
                </button>
        </div>
    </header>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 72px;
    }
    .header-imgbox {
        width: 200px;
        height: 40px;
        img {
            width: 100%;
            height: 100%;  
        }
    }
    .search {
        width: 320px;
        height: 32px;
        border-radius: 10px;
        padding: 0 0px 0 10px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #9acefb;
        color: #fff;
        .inputbox {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            input {
                width: 100%;
                border: none;
                padding: 0;
                height: 98%;
                outline: none;
            }
           
            button {
                width: 80px;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                height: 32px;
                border: none;
                background-color: #0086f6;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>