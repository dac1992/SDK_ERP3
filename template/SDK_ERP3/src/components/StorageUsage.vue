<template>
  <div class="card">
    <h2 class="text-lg font-bold mb-6">存储空间使用情况</h2>
    <div class="space-y-4">
      <div>
        <div class="flex justify-between text-sm mb-2">
          <span>已使用 1775.06 MB</span>
          <span class="text-gray-500">总容量 2 GB</span>
        </div>
        <div class="progress-bar">
          <div class="progress-value"></div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-sm text-gray-500">文档</div>
          <div class="text-lg font-medium mt-1">895 MB</div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-sm text-gray-500">图片</div>
          <div class="text-lg font-medium mt-1">379 MB</div>
        </div>
      </div>
    </div>
  </div>
</template> 