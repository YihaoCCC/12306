<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView></RouterView>
  <footer>
            Copyright©2022-2022, ctrip.com. All rights reserved. | ICP证：京B2-123456789 |京ICP备123456789号-1 CK
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
footer {
    color: #999;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
}
</style>
