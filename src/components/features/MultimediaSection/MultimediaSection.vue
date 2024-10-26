<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMultimediaStore } from "../../../stores/useNewsStore";
import CustomSnackbar from "@/components/common/CustomSnackbar.vue";
import MultimediaTab from "./MultimediaTab.vue";
import MultimediaContent from "./MultimediaContent.vue";
import Sidebar from "../../../components/common/Sidebar.vue";
import MultimediaSkeleton from "./MultimediaSkeleton.vue";
const multimediaStore = useMultimediaStore();
const multimediaData = computed(() => multimediaStore.multimediaContent);
const isLoading = ref(true);
const snackbarRef = ref<InstanceType<any> | null>(null);
const activeTab = ref("");
const error = ref<string | null>(null);
onMounted(async () => {
  try {
    isLoading.value = true;
    const result = await multimediaStore.fetchMultimedia();
    if (!result?.success) {
      throw new Error(result?.message);
    }
    activeTab.value = multimediaData.value[0]?.id || "";
  } catch (err: any) {
    error.value = err.message || "Có lỗi xảy ra khi tải dữ liệu multimedia";
    showSnackbar(error.value || "", false);
  } finally {
    isLoading.value = false;
  }
});

const showSnackbar = (message: string, success: boolean) => {
  snackbarRef.value?.showSnackbar(message, success ? "success" : "error");
};

const switchTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<template>
  <div class="multimedia-news row my-5">
    <CustomSnackbar ref="snackbarRef" />
    <div class="col-lg-9 col-md-12 pe-lg-4 mb-4 mb-lg-0">
      <template v-if="isLoading">
        <MultimediaSkeleton />
      </template>
      <template v-else>
        <MultimediaTab :multimedia-data="multimediaData" :active-tab="activeTab" @switch-tab="switchTab" />
        <MultimediaContent :multimedia-data="multimediaData" :active-tab="activeTab" />
      </template>
    </div>
    <Sidebar />
  </div>
</template>