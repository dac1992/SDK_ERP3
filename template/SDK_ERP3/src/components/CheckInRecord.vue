<template>
  <div class="card mb-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-bold">今日打卡记录</h2>
      <button class="bg-primary text-white px-4 py-2 rounded-button flex items-center">
        <i class="fa-regular fa-clock mr-2"></i>
        立即打卡
      </button>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div>
        <div class="text-gray-500 mb-2">上班打卡</div>
        <div class="flex items-center">
          <i class="fa-solid fa-circle-check text-green-500 mr-2"></i>
          <span class="text-lg font-medium">08:56</span>
          <span class="ml-2 text-sm text-gray-500">准时</span>
        </div>
      </div>
      <div>
        <div class="text-gray-500 mb-2">下班打卡</div>
        <div class="flex items-center">
          <i class="fa-solid fa-circle-minus text-gray-300 mr-2"></i>
          <span class="text-lg font-medium">待打卡</span>
        </div>
      </div>
    </div>
  </div>
</template> 