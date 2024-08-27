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
          <p>
            <fa-icon icon="fa-regular fa-hand-point-up" class="pr-2" size="lg" />
            <fa-icon icon="fa-solid fa-user" class="pr-1" size="xs" />
            <fa-icon icon="fa-solid fa-search" class="pr-1" size="lg" />
            <fa-icon icon="fa-solid fa-heart" class="pr-1" size="6x" beat />
            <fa-icon icon="fa-solid fa-heart" class="pr-1" size="6x" />
            <fa-icon icon="fa-solid fa-heart" class="pr-1" size="3x" rotation="180" />
            <fa-icon
              icon="fa-solid fa-heart"
              class="pr-1"
              size="2x"
              rotation="90"
              style="--fa-animation-duration: 2s"
            />
            <fa-icon icon="fa-solid fa-circle-info" class="pr-1" beat-fade />
            <fa-icon icon="fa-solid fa-basketball" class="pr-1" bounce />
            <fa-icon icon="fa-solid fa-triangle-exclamation" class="pr-1" fade />
            <fa-icon icon="fa-solid fa-compact-disc" class="pr-1" flip />
            <fa-icon icon="fa-solid fa-bell" class="pr-1" shake />
            <fa-icon icon="fa-solid fa-cog" class="pr-1" spin />
            <fa-icon icon="fa-solid fa-compass" class="pr-1" spin spin-reverse />
            <fa-icon icon="fa-solid fa-spinner" class="pr-1" spin-pulse />
          </p>
          <h1>Icon sizing</h1>
          <fa-icon icon="wrench" size="xs" class="pr-2" />
          <fa-icon icon="coffee" size="lg" class="pr-2" />
          <fa-icon icon="spinner" size="4x" class="pr-2" />
          <fa-icon :icon="['fab', 'vuejs']" size="2x" class="pr-2" />

          <h1>Rotation</h1>
          <fa-icon icon="spinner" rotation="90" class="pr-2" />
          <fa-icon icon="spinner" rotation="180" size="lg" class="pr-2" />
          <fa-icon icon="spinner" rotation="270" size="2x" class="pr-2" />
          <fa-icon :icon="['fab', 'vuejs']" rotation="270" size="2x" class="pr-2" />

          <h1>Flips</h1>
          <fa-icon icon="ambulance" flip="horizontal" size="lg" class="pr-4" />
          <fa-icon icon="ambulance" flip="vertical" size="lg" class="pl-4 pr-4" />
          <fa-icon icon="ambulance" flip="both" size="lg" class="pl-4 pr-4" />
          <fa-icon :icon="['fab', 'vuejs']" flip="vertical" size="lg" class="pr-2" />

          <h1>Animation</h1>
          <fa-icon icon="spinner" class="pr-2" spin />
          <fa-icon icon="spinner" class="pr-2" pulse />
          <fa-icon :icon="['fab', 'vuejs']" size="lg" class="pr-2" spin />
          <fa-icon :icon="['fab', 'vuejs']" size="lg" class="pr-2" pulse />

          <h1 style="clear: both">Power transforms</h1>
          <fa-icon icon="spinner" transform="shrink-6 left-4" />
          <fa-icon icon="ambulance" size="lg" :transform="{ rotate: 42 }" />

          <h1>Masking</h1>
          <fa-icon
            icon="pencil-alt"
            transform="shrink-10 up-.5"
            style="background: MistyRose"
            size="4x"
            class="pr-2"
          />

          <fa-icon
            icon="pencil-alt"
            transform="shrink-10 up-.5"
            mask="comment"
            style="background: MistyRose"
            size="4x"
            class="pr-2"
          />

          <fa-icon
            :icon="['fab', 'facebook-f']"
            transform="shrink-3.5 down-1.6 right-1.25"
            style="background: MistyRose"
            size="4x"
            class="pr-2"
          />

          <fa-icon
            :icon="['fab', 'facebook-f']"
            transform="shrink-3.5 down-1.6 right-1.25"
            mask="circle"
            style="background: MistyRose"
            size="4x"
            class="pr-2"
          />

          <fa-icon icon="headphones" transform="shrink-6" style="background: MistyRose" size="4x" />

          <fa-icon
            icon="headphones"
            transform="shrink-6"
            mask="square"
            style="background: MistyRose"
            size="4x"
            class="pr-2"
          />

          <h1>Layers</h1>
          <font-awesome-layers class="fa-4x">
            <fa-icon icon="circle" />
            <fa-icon icon="check" transform="shrink-6" style="color: white" />
          </font-awesome-layers>

          <font-awesome-layers class="fa-4x" style="background: MistyRose">
            <fa-icon icon="circle" style="color: Tomato" />
            <fa-icon icon="times" class="fa-inverse" transform="shrink-6" />
          </font-awesome-layers>

          <font-awesome-layers class="fa-4x" style="background: MistyRose">
            <fa-icon icon="bookmark" />
            <fa-icon
              icon="heart"
              class="fa-inverse"
              transform="shrink-10 up-2"
              style="color: Tomato"
            />
          </font-awesome-layers>

          <font-awesome-layers class="fa-4x" style="background: MistyRose">
            <fa-icon icon="play" transform="rotate--90 grow-2" />
            <fa-icon icon="sun" class="fa-inverse" transform="shrink-10 up-2" />
            <fa-icon icon="moon" class="fa-inverse" transform="shrink-11 down-4.2 left-4" />
            <fa-icon icon="star" class="fa-inverse" transform="shrink-11 down-4.2 right-4" />
          </font-awesome-layers>

          <h1>Layers text</h1>

          <font-awesome-layers full-width class="fa-4x" style="background: MistyRose">
            <fa-icon icon="calendar" />
            <font-awesome-layers-text
              class="fa-inverse"
              transform="shrink-8 down-3"
              value="27"
              style="font-weight: 900"
            />
          </font-awesome-layers>

          <font-awesome-layers full-width class="fa-4x" style="background: MistyRose">
            <fa-icon icon="certificate" />
            <font-awesome-layers-text
              class="fa-inverse"
              transform="shrink-11.5 rotate--30"
              value="NEW"
              style="font-weight: 900"
            />
          </font-awesome-layers>

          <font-awesome-layers full-width class="fa-4x" style="background: MistyRose">
            <fa-icon icon="envelope" />
            <span class="fa-layers-counter" style="background: Tomato">1,419</span>
          </font-awesome-layers>
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
<style scoped>
h1 {
  border-bottom: solid 1px black;
}
</style>
