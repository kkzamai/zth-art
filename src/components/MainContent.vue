<template>
  <section class="hero is-success is-medium">
    <div class="hero-body">
      <div class="">
        <p class="title">Title hero</p>
        <p class="subtitle">Subtitle</p>
        <p class="subtitle">{{ $t('general.likes', general_likes, { count: general_likes }) }}</p>
        <p class="subtitle">
          <span class="text-details">currency with Name:</span>
          {{ $n(7854, 'currency', { currencyDisplay: 'name' }) }}
        </p>
      </div>
      <div><charts-content /></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ChartsContent from './ChartsContent.vue'

const general_likes = ref(100)
</script>
