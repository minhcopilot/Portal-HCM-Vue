<script setup lang="ts">
import NewsCarousel from "../components/features/NewsCarousel/NewsCarousel.vue";
import LeadershipSection from "../components/features/Leaders/LeadershipSection.vue";
import MultimediaSection from "../components/features/MultimediaSection/MultimediaSection.vue";
import ServicesSection from "../components/features/ServicesSection.vue";
</script>

<template>
  <div>
    <NewsCarousel />
    <main class="container">
      <LeadershipSection />
      <MultimediaSection />
      <ServicesSection />
    </main>
  </div>
</template>
