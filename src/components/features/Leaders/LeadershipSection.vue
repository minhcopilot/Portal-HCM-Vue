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
    await leadersStore.fetchLeaders();
  } catch (error) {
    showSnackbar("Error fetching news", false);
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
    <template v-else-if="error">
      <div class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </template>
    <template v-else>
      <ChairpersonSection :chairperson="chairperson" />
      <ViceChairpersonSection :vice-chairpersons="viceChairpersons" />
    </template>
    <CustomSnackbar ref="snackbarRef" />
  </div>
</template>

