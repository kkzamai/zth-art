<template>
  <section class="hero is-success is-medium">
    <div class="hero-body">
      <div class="">
        <p class="title">Title hero</p>
        <p class="subtitle">Subtitle</p>
        <p class="subtitle">{{ $tc('general.likes', general_likes, { count: general_likes }) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const general_likes = ref(100)
</script>
