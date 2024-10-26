<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" :color="color" location="top">
      {{ message }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="show = false"> Đóng </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      show: false,
      message: "",
      color: "error" as "error" | "success" | "info" | "warning",
    };
  },
  methods: {
    showSnackbar(message: string, color: "error" | "success" | "info" | "warning" = "error"): void {
      this.message = message;
      this.color = color;
      this.show = true;
    },
  },
});
</script>