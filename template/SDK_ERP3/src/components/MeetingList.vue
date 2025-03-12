<template>
  <div class="card mb-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-bold">进行中的会议</h2>
      <button class="text-primary">查看全部</button>
    </div>
    <div class="space-y-4">
      <div v-for="(meeting, index) in meetings" 
           :key="index"
           class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4">
            <i class="fa-solid fa-users"></i>
          </div>
          <div>
            <div class="font-medium">{{ meeting.title }}</div>
            <div class="text-sm text-gray-500">主持人：{{ meeting.host }} | {{ meeting.room }}</div>
          </div>
        </div>
        <div class="text-sm text-gray-500">
          <i class="fa-regular fa-clock mr-2"></i>
          {{ meeting.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const meetings = ref([
  {
    title: '产品规划评审会议',
    host: '张总监',
    room: '3号会议室',
    time: '10:00 - 11:30'
  },
  {
    title: '技术部周会',
    host: '李经理',
    room: '5号会议室',
    time: '14:00 - 15:30'
  }
])
</script> 