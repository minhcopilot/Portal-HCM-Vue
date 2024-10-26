<template>
  <div class="leaders-skeleton">
    <!-- Chairperson skeleton -->
    <div class="chairperson-skeleton row mb-5">
      <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
        <div class="row mb-2">
          <div class="skeleton-text w-75 mb-2"></div>
          <div class="skeleton-text w-50"></div>
        </div>
        <div class="row">
          <div class="col-md-5 col-sm-12 mb-3 mb-md-0">
            <div class="skeleton-image"></div>
          </div>
          <div class="col-md-7 col-sm-12 px-md-5 px-3">
            <div class="skeleton-text w-50 mb-2"></div>
            <div class="skeleton-text w-75 mb-3"></div>
            <div class="skeleton-text w-100 mb-2"></div>
            <div class="skeleton-text w-100 mb-2"></div>
            <div class="skeleton-text w-75 mb-3"></div>
            <div class="skeleton-button"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="skeleton-image"></div>
      </div>
    </div>

    <!-- Vice Chairpersons skeleton -->
    <div class="skeleton-text w-25 mx-auto mb-4"></div>
    <div class="row justify-content-around g-4">
      <div v-for="i in 4" :key="i" class="col-6 col-md-4 col-lg-2">
        <div class="skeleton-image mb-2"></div>
        <div class="skeleton-text w-75 mx-auto mb-1"></div>
        <div class="skeleton-text w-50 mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-text,
.skeleton-image,
.skeleton-button {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.5rem;
}

.skeleton-image {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.skeleton-button {
  width: 120px;
  height: 40px;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>