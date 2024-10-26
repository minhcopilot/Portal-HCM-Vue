<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="container">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div
          class="col-lg-6 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-start mb-lg-0">
          <RouterLink to="/" class="text-decoration-none custom-primary-text d-flex align-items-center">
            <img src="https://i.ibb.co/JsMLHQj/logo.png" alt="Logo" class="img-fluid me-2" style="max-height: 100px" />
            <span class="fs-5 fs-lg-4 fw-bold">THÀNH PHỐ HỒ CHÍ MINH</span>
          </RouterLink>
        </div>
        <div
          class="col-lg-6 col-md-12 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center px-0">
          <div class="social-links d-flex mb-3 mb-lg-0 me-lg-3">
            <a href="#!" class="me-2"><img src="https://i.ibb.co/GHXLqKJ/facebook.png" alt="Facebook"
                style="width: 40px; height: 40px" /></a>
            <a href="#!" class="mx-2 border-start border-end"><img src="https://i.ibb.co/ZGzJ34K/youtube.png"
                alt="Youtube" style="width: 40px; height: 40px" /></a>
            <a href="#!" class="ms-2"><img src="https://i.ibb.co/VS3ssM2/zalo.png" alt="Zalo"
                style="width: 40px; height: 40px" /></a>
          </div>
          <div class="date-weather d-flex text-white">
            <div class="d-flex flex-column text-center me-3">
              <span class="fw-bold mb-1 title-date">THỨ BẢY</span>
              <span class="small secondary-text-date">19 tháng 10, 2024</span>
            </div>
            <div class="d-flex flex-column text-end">
              <a href="#!" class="text-white text-decoration-underline fw-bold mb-1 title-date">24 - 34 °C</a>
              <span class="small secondary-text-date">24Hr PSI:
                <a href="#!" class="text-white fw-bold text-decoration-underline ">53-72PSI</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.date-weather {
  background-color: rgba(255, 129, 113, 0.8);
  background-image: url(https://i.ibb.co/QkfyF8g/weather-bg.png);
  background-size: 70% auto;
  background-position: right;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  display: inline-block;
  max-width: 300px;
  text-align: center;
  color: white;
  padding: 24px 20px;
}
.title-date {
  font-size: 20px;
}
.secondary-text-date {
  font-size: 14px;
}
</style>
