<script setup>
import Nav from './components/layout/Nav.vue'
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 font-niunito scroll-smooth">
    <!-- Sidbar -->
    <Nav/>
    <!-- content -->
    <router-view/>
    
  </div>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
</style>
