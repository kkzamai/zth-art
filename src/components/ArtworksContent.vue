<template>
  <section class="hero is-success is-medium">
    <div class="hero-body">
      <p class="title">Artworks</p>
      <p class="subtitle">Subtitle</p>

      <div class="columns">
        <div class="column">
          <p><img src="https://picsum.photos/400/300?random=1&grayscale" /></p>
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

        <div class="column">
          <div v-for="(photo, index) in photos" :key="index">
            <p>
              <img :src="photo.download_url" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import imageService from '@/services/imageService.js'

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

const photos = ref()
async function fetchImages() {
  let limit = 4
  let page = 10
  photos.value = await imageService.get(page, limit)
  console.log(photos.value)
}

onMounted(() => {
  fetchImages()
})
</script>
