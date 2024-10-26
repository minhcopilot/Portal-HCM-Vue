<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useNewsStore } from "@/stores/useNewsStore";
import NewsItem from "./NewsItem.vue";
import NewsSkeletonLoader from "./NewsSkeleton.vue";
import CustomSnackbar from "@/components/common/CustomSnackbar.vue";

const newsStore = useNewsStore();
const isLoading = ref(true);
const activeCategory = ref<string>("");
const snackbarRef = ref<InstanceType<typeof CustomSnackbar> | null>(null);

const categories = computed(() => newsStore.categories);
const newsContent = computed(() => newsStore.newsContent);

const isActiveCategory = (categoryId: string) => activeCategory.value === categoryId;

const getNewsForCategory = (categoryId: string) =>
  newsContent.value[categoryId] || { main: {}, secondary: [] };

const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId;
};

onMounted(async () => {
  try {
    isLoading.value = true;
    await newsStore.fetchNews();
    activeCategory.value = categories.value[0]?.id || "";
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
  <div class="news-carousel ">
    <NewsSkeletonLoader v-if="isLoading || !!newsStore.error" />
    <div v-else class="container-news-carousel">
      <div class="container py-5">
        <nav class="news-categories">
          <ul class="nav nav-pills nav-fill flex-column flex-md-row">
            <li v-for="category in categories" :key="category.id" class="nav-item me-3">
              <a class="nav-link" href="#!" :id="category.id" @click.prevent="setActiveCategory(category.id)"
                :class="{ active: isActiveCategory(category.id) }">
                {{ category.name }}
              </a>
            </li>
          </ul>
        </nav>

        <section class="featured-news bg-white p-4 mobile-adjust">
          <div v-for="category in categories" :key="category.id" :id="category.contentId" class="news-category-content"
            :class="{ active: isActiveCategory(category.id) }" v-show="isActiveCategory(category.id)">
            <div class="row">
              <NewsItem :news="getNewsForCategory(category.id).main" class="col-lg-6 col-md-12 mb-4 mb-lg-0"
                type="main" />
              <NewsItem v-for="(secondary, index) in getNewsForCategory(category.id).secondary" :key="index"
                :news="secondary" class="col-lg-3 col-md-6 mb-4 mb-lg-0" type="secondary" />
            </div>
          </div>
        </section>
      </div>
    </div>
    <CustomSnackbar ref="snackbarRef" />
  </div>
</template>

<style scoped>
.container-news-carousel {
  background-color: #720101;
  height: 400px;
  padding-top: 50px;
}

.news-carousel {
  margin-bottom: 150px;
}

.nav-pills .nav-link {
  background-color: var(--primary-color);
  color: white;
  font-weight: 400;
  border-radius: 5px 5px 0 0;
}

.nav-pills .nav-link.active {
  background-color: #ffffff;
  color: var(--primary-color);
  font-weight: 700;
}

.featured-news :deep(.bg-custom-gray) {
  background-color: #f1efef;
}
</style>