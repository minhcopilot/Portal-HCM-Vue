<script setup lang="ts">
import type { NewsItem } from "../../../types/newsTypes";

interface Props {
  news: NewsItem;
  type: "main" | "secondary";
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="['news-item', `news-item-${type}`, 'position-relative', 'h-100']"
  >
    <a
      href="#!"
      class="text-decoration-none text-black d-flex flex-column h-100 position-relative"
    >
      <img
        :src="news.image"
        :alt="news.title"
        class="w-100 d-block h-100 object-fit-cover"
      />
      <h4
        :class="[
          type === 'main'
            ? 'position-absolute bottom-0 start-0 w-100 p-3 m-0'
            : 'bg-custom-gray secondary-news-item-title px-3 flex-grow-1 d-flex align-items-center mb-0',
        ]"
      >
        {{ news.title }}
      </h4>

      <div
        v-if="type === 'main'"
        class="custom-primary-bg opacity-75 position-absolute bottom-0 start-0 w-100 h-25"
      ></div>
    </a>
  </div>
</template>

<style scoped>
.news-item-main h4 {
  color: white;
  z-index: 1;
}
.secondary-news-item-title {
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
}
</style>

