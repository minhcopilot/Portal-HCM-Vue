<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div v-if="isLoading" class="news-carousel-skeleton">
    <div class="container py-5">
      <nav class="news-categories mb-4">
        <ul class="nav nav-pills nav-fill flex-column flex-md-row">
          <li v-for="i in 4" :key="i" class="nav-item me-3">
            <div class="nav-link skeleton-text"></div>
          </li>
        </ul>
      </nav>

      <section class="featured-news bg-white p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-img-top skeleton-img"></div>
              <div class="card-body">
                <h5 class="card-title skeleton-text"></h5>
                <p class="card-text skeleton-text"></p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4" v-for="i in 2" :key="i">
            <div class="card">
              <div class="card-img-top skeleton-img small"></div>
              <div class="card-body">
                <h5 class="card-title skeleton-text"></h5>
                <p class="card-text skeleton-text"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.news-carousel-skeleton {
  background-color: #720101;
}
.skeleton-img {
  height: 200px;
  background-color: #e0e0e0;
  margin-bottom: 10px;
}
.skeleton-img.small {
  height: 150px;
}
.skeleton-text {
  height: 20px;
  background-color: #e0e0e0;
  margin-bottom: 10px;
}
.nav-link.skeleton-text {
  height: 40px;
  width: 100%;
}
.card-title.skeleton-text {
  width: 70%;
}
.card-text.skeleton-text {
  width: 100%;
}
@keyframes loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
.skeleton-img,
.skeleton-text {
  animation: loading 1.5s infinite;
  background-image: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
}
</style>