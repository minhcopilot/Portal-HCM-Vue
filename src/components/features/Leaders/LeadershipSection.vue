<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useLeadersStore } from "@/stores/userLeadersStore";
import LeadersSkeleton from "./LeadersSkeleton.vue";
import CustomSnackbar from "@/components/common/CustomSnackbar.vue";
import ChairpersonSection from "./ChairpersonSection.vue";
import ViceChairpersonSection from "./ViceChairpersonSection.vue";
import type { ChairPerson, ViceChairpersons } from "@/types/leadersTypes";

const leadersStore = useLeadersStore();
const isLoading = ref(true);
const error = ref<string | null>(null);

const chairperson = computed<ChairPerson>(() => leadersStore.chairperson);
const viceChairpersons = computed<ViceChairpersons[]>(() => leadersStore.viceChairpersons);

const snackbarRef = ref<InstanceType<typeof CustomSnackbar> | null>(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    const result = await leadersStore.fetchLeaders();
    if (!result?.success) {
      throw new Error(result?.message);
    }
  } catch (err: any) {
    error.value = err.message || "Có lỗi xảy ra khi tải dữ liệu lãnh đạo";
    showSnackbar(error.value || "", false);
  } finally {
    isLoading.value = false;
  }
});

const showSnackbar = (message: string, success: boolean) => {
  snackbarRef.value?.showSnackbar(message, success ? "success" : "error");
};
</script>

<template>
  <div class="leadership-section text-center">
    <LeadersSkeleton v-if="isLoading" />
      <ChairpersonSection :chairperson="chairperson" />
      <ViceChairpersonSection :vice-chairpersons="viceChairpersons" />
    <CustomSnackbar ref="snackbarRef" />
  </div>
</template>

