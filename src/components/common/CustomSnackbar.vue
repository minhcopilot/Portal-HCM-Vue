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

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "error",
    };
  },
  methods: {
    showSnackbar(message, color = "error") {
      this.message = message;
      this.color = color;
      this.show = true;
    },
  },
};
</script>