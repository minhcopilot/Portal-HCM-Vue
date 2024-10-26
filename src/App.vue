<script setup lang="ts">
import { RouterView } from "vue-router";
import "./assets/styles/index.css";
import Header from "./components/common/Header.vue";
import Navigation from "./components/common/Navigation.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <Navigation />
    <RouterView />
    <Footer />
  </div>
</template>
