<template>
  <div class="columns mt-2">
    <div class="column"><BarChart /></div>
    <div class="column"><GaugeChart /></div>
  </div>
  <div class="columns mt-2">
    <div class="column"><HeatTreeMapChart /></div>
  </div>
</template>

<script setup>
import BarChart from './charts/BarChart.vue'
import GaugeChart from './charts/GaugeChart.vue'
import HeatTreeMapChart from './charts/HeatTreeMapChart.vue'
</script>
