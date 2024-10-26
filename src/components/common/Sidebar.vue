<script setup lang="ts">
const officialGazetteItems = [
  "Văn bản quy phạm pháp luật",
  "Văn bản pháp luật khác",
  "Văn bản quản lý hành chính",
];

const quickLinks = [
  {
    title: "DANH BẠ ĐIỆN THOẠI",
    image: "https://i.ibb.co/3N5ZrwM/Group.png",
    alt: "phone",
  },
  {
    title: "LỊCH LÀM VIỆC",
    image: "https://i.ibb.co/HGq1qwC/calendar.png",
    alt: "calendar",
  },
];
</script>

<template>
  <div class="col-lg-3 col-md-12">
    <div class="sidebar">
      <h5 class="text-white text-center py-3 mb-0 custom-secondary-bg">
        CÔNG BÁO THÀNH PHỐ
      </h5>
      <div class="list-group">
        <a
          v-for="(item, index) in officialGazetteItems"
          :key="index"
          href="#"
          class="list-group-item list-group-item-action d-flex align-items-center bg-custom-gray"
        >
          <i class="fas fa-circle text-danger me-3"></i>
          {{ item }}
        </a>
      </div>

      <div class="quick-links mt-4">
        <a
          v-for="(item, index) in quickLinks"
          :key="index"
          href="#"
          class="card mb-3 text-decoration-none"
          :class="{ 'mb-3': index === 0 }"
        >
          <div class="card-body d-flex align-items-center border border-danger">
            <img :src="item.image" :alt="item.alt" class="img-fluid me-2" />
            <h5 class="card-title mb-0 fw-bold">{{ item.title }}</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar .list-group-item:hover {
  background-color: #f8f9fa;
}

.quick-links .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>