<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/NavBar.vue'
</script>

<template>
  <KeepAlive>
    <RouterView />
  </KeepAlive>
</template>

<script setup lang="ts"></script>
<style scoped></style>
