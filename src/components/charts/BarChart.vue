<template>
  <div>
    <Chart :options="chartOptions" />
  </div>
</template>

<script setup>
import Highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'
import { ref, onMounted } from 'vue'

const chartOptions = ref({
  credits: {
    enabled: false
  },
  accessibility: {
    enabled: false
  },
  chart: {
    type: 'column',
    height: '350px'
  },

  title: {
    text: 'Arts Data'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Artworks'
    }
  },
  series: []
})

function fetchData() {
  let chart = chartOptions.value
  let series = []

  series.push({
    name: 'Artworks',
    data: [100, 200, 150, 250, 180, 220, 170, 280, 210, 260, 230, 290]
  })

  chart.series = series
}

onMounted(() => fetchData())
</script>
