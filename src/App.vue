<script setup lang="ts">
import Menu from './components/Menu.vue';
import StudySessions from './views/StudySessions.vue';
</script>

<template>
  <div class="page">
    <Menu />
    <StudySessions class="page__main"/>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  background-color: #F5F7F9;
  color: #2F3144;
  height: 100vh;
}
.page__main{
  margin: 8px 8px 0;
}
</style>
