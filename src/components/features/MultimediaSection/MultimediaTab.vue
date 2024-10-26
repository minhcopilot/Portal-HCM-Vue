<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { MultimediaItem } from "../../../types/multimediaTypes";

const props = defineProps<{
  multimediaData: MultimediaItem[];
  activeTab: string;
}>();

const emit = defineEmits<{
  (e: "switchTab", tabId: string): void;
}>();

const switchTab = (tabId: string) => {
  emit("switchTab", tabId);
};
</script>

<template>
  <div class="custom-nav bg-custom-gray px-3 py-3 rounded-top">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div
        class="nav-item text-danger fw-bold border-danger border-3 fs-5 mb-2 mb-md-0"
      >
        ĐA PHƯƠNG TIỆN
      </div>
      <div class="nav-items d-flex flex-wrap fw-bold">
        <div
          v-for="item in multimediaData"
          :key="item.id"
          class="nav-item me-3 mb-2"
        >
          <a
            href="#"
            @click.prevent="switchTab(item.id)"
            class="multimedia-link text-black text-decoration-none"
            :class="{ active: activeTab === item.id }"
          >
            <span
              class="bg-danger text-white px-2 py-1 rounded-1"
              :class="{ 'd-none': activeTab !== item.id }"
              >{{ item.title }}</span
            >
            <span
              class="normal-text"
              :class="{ 'd-none': activeTab === item.id }"
              >{{ item.title }}</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.multimedia-link.active {
  font-weight: bold;
}
</style>