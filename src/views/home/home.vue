<template>
    <div>
        <Header></Header>
        <search-header :showBackImg="true" :width="searchboxwidth"></search-header>
            <router-view></router-view>
        <footer >
            footer
        </footer>
    </div>
</template>
    
<script setup lang='ts'>
    import SearchHeader from '../../components/SearchHeader.vue'
    import Header from '../../components/Header.vue'
    import { onMounted, watch,ref } from 'vue';
    import { testapi } from './homehttp'
    components: {
        Header
        SearchHeader
    }

    onMounted(() => {
        testapi().then((res:any) => {
            localStorage.setItem('name', res.name)
            localStorage.setItem('age', res.age)
        })
    })
    const searchboxwidth = ref('60%')
</script>
    
<style scoped lang="scss">
    @import './home.scss';
    
</style>