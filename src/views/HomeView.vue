<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar />
    </template>
    <template v-slot:breadcrumbs>
      <p>Breadcrumbs</p>
    </template>
    <template v-slot:content>
      <mainContent />
    </template>

    <template v-slot:footer>
      <FooterContent />
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import NavBar from '@/components/NavBar.vue'
import MainContent from '@/components/MainContent.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>
