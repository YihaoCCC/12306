<template>
    <div>
        <Header></Header>
            
            <router-view></router-view>
        
        <footer>
            footer
        </footer>
    </div>
</template>
    
<script setup lang='ts'>
    import Header from '../../components/Header.vue'
    import { onMounted } from 'vue';
    import { testapi } from './homehttp'
    components: {
        Header
    }
    onMounted(() => {
        testapi().then((res) => {
            console.log(res);
        })
    })
</script>
    
<style scoped lang="scss">
    @import './home.scss';
    
</style>