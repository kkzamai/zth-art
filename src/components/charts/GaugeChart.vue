<template>
  <div>
    <Chart :options="chartOptions" />
  </div>
</template>

<script setup>
import Highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'
import More from 'highcharts/highcharts-more'
import { ref, onMounted } from 'vue'

More(Highcharts)

const chartOptions = ref({
  credits: {
    enabled: false
  },
  accessibility: {
    enabled: false
  },
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
    height: '350px'
  },

  title: {
    text: 'Artdometer'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FFF'],
            [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
      },
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#333'],
            [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      },
      {
        // default background
      },
      {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }
    ]
  },

  yAxis: {
    min: 0,
    max: 200,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: 'art/day'
    },
    plotBands: [
      {
        from: 0,
        to: 120,
        color: '#55BF3B' // green
      },
      {
        from: 120,
        to: 160,
        color: '#DDDF0D' // yellow
      },
      {
        from: 160,
        to: 200,
        color: '#DF5353' // red
      }
    ]
  },
  series: []
})

function fetchData() {
  let chart = chartOptions.value
  let series = []

  series.push({
    name: 'Art',
    data: [80],
    tooltip: {
      valueSuffix: ' num/day'
    }
  })

  chart.series = series
}

onMounted(() => fetchData())
</script>
