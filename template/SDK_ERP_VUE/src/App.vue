<template>
  <div class="flex">
    <Sidebar />
    <div class="main-content">
      <Header />
      <div class="grid grid-cols-4 gap-6 mb-6">
        <StatCard title="本周会议" value="24" trend="12%" />
        <StatCard title="打卡率" value="98.5%" trend="2.1%" />
        <StatCard title="文档数量" value="1,286" trend="126" />
        <StatCard title="车辆使用率" value="76.8%" trend="5.3%" />
      </div>
      <MeetingList />
      <CheckInRecord />
      <div class="grid grid-cols-2 gap-6">
        <StorageUsage />
        <VehicleStats />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import StatCard from './components/StatCard.vue'
import MeetingList from './components/MeetingList.vue'
import CheckInRecord from './components/CheckInRecord.vue'
import StorageUsage from './components/StorageUsage.vue'
import VehicleStats from './components/VehicleStats.vue'
</script> 