<template>
  <div class="sidebar">
    <div class="p-6 border-b border-gray-200">
      <div class="text-2xl font-bold text-primary">企业管理系统</div>
    </div>
    <div class="py-4">
      <div v-for="(item, index) in menuItems" 
           :key="index"
           :class="['nav-item', { active: item.active }]">
        <i :class="['icon mr-3', item.icon]"></i>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { title: '工作台', icon: 'fa-solid fa-house', active: true },
  { title: '会议管理', icon: 'fa-solid fa-calendar', active: false },
  { title: '考勤打卡', icon: 'fa-solid fa-clock', active: false },
  { title: '工具库', icon: 'fa-solid fa-wrench', active: false },
  { title: '标准库', icon: 'fa-solid fa-book', active: false },
  { title: '知识库', icon: 'fa-solid fa-graduation-cap', active: false },
  { title: '车辆管理', icon: 'fa-solid fa-car', active: false }
])
</script> 