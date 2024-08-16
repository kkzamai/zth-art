<template>
  <section class="hero is-success is-medium">
    <div class="hero-body">
      <div class="">
        <p class="title">Artworks</p>
        <p class="subtitle">Subtitle</p>
        <p class="subtitle">Time Format: {{ $d(new Date(), 'timeFormat') }}</p>
        <p class="subtitle">Date long format: {{ $d(new Date(), 'longFormat') }}</p>
        <p class="subtitle">{{ $n(1111.111, 0, { maximumFractionDigits: 2 }) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const general_likes = ref(100)
</script>
