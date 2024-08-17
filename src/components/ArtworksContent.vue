<template>
  <section class="hero is-success is-medium">
    <div class="hero-body">
      <div class="">
        <p class="title">Artworks</p>
        <p class="subtitle">Subtitle</p>
        <p class="subtitle">Time Format: {{ $d(new Date(), 'timeFormat') }}</p>
        <p class="subtitle">Date long format: {{ $d(new Date(), 'longFormat') }}</p>
        <p class="subtitle">Date full format: {{ $d(new Date(), 'full') }}</p>
        <p class="subtitle">{{ $n(1111.111, 0, { maximumFractionDigits: 2 }) }}</p>
        <p class="subtitle">
          {{ $t('artworks.artInfo', { title: artInfo.title, media: artInfo.media }) }}
        </p>
        <p class="subtitle">
          {{ artDimensions }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, n } = useI18n({})
const general_likes = ref(100)

const artInfo = { title: 'Regreted Monalisa', media: 'acrylic' }
const dimensions = { width: 105, height: 56 }

const artDimensions = computed(() => {
  return t('artworks.dimensions', {
    width: n(dimensions.width, 'decimal'),
    height: n(dimensions.height, 'decimal')
  })
})
</script>
