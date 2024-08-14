<template>
  <BaseLayout>
    <template v-slot:header>
      <Header />
    </template>

    <p>This content will be injected into the default slot.</p>

    <template v-slot:content>
      <Content />
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
</script>
