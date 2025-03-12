<template>
  <div class="card">
    <div class="text-gray-500 mb-2">{{ title }}</div>
    <div class="text-3xl font-bold">{{ value }}</div>
    <div class="text-secondary text-sm mt-2">
      <i class="fa-solid fa-arrow-up mr-1"></i>
      {{ trend.includes('%') ? `较上周增长 ${trend}` : `本月新增 ${trend} 份` }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  trend: {
    type: String,
    required: true
  }
})
</script> 