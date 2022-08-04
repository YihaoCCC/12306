<template>
    <div>
        <Header></Header>
        <search-header 
            :width="searchboxwidth" 
            :showImgBox='showImgBox' 
            :transitonY='transitonY' 
            :radius="radius"
            :shadow="boxShadow"
            ></search-header>
        <div class="placehoder" v-if="showPlaceHoder"></div>   
            <router-view></router-view>
            <Service></Service>
        
    </div>
</template>
    
<script setup lang='ts'>
    import SearchHeader from '../../components/SearchHeader.vue'
    import Header from '../../components/Header.vue'
    import { onMounted, watch,ref } from 'vue';
    import {useRoute} from 'vue-router'
    import { testapi } from './homehttp'
    import Service from '../../components/service.vue';
    const route = useRoute()

    onMounted(() => {
        testapi().then((res:any) => {
            localStorage.setItem('name', res.name)
            localStorage.setItem('age', res.age)
        })        
    })
    const searchboxwidth = ref('66%')
    const showImgBox = ref('block')
    const transitonY = ref('110px')
    const radius = ref('10px')
    const showPlaceHoder = ref(true)
    const boxShadow = ref('0 4px 16px rgb(69 88 115 / 20%)')
    watch(() => route.fullPath, (value, oldValue) => {
        if(value !== '/home/dashbord') {
            searchboxwidth.value = '100%'
            showImgBox.value = 'none'
            transitonY.value = '0px'
            radius.value = '0px'
            showPlaceHoder.value = false
            boxShadow.value = 'none'
        } else {
            searchboxwidth.value = '66%'
            showImgBox.value = "block"
            transitonY.value = '110px'
            radius.value = '20px'
            showPlaceHoder.value = true
            boxShadow.value = '0 4px 16px rgb(69 88 115 / 20%)'
        }        
    })
</script>
    
<style scoped lang="scss">
    @import './home.scss';
    
</style>