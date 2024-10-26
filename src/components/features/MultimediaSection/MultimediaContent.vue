<script setup lang="ts">
import { defineProps } from "vue";
import type { MultimediaContent } from "../../../types/multimediaTypes";

const props = defineProps<{
  multimediaData: MultimediaContent[];
  activeTab: string;
}>();
</script>

<template>
    <div class="row">
        <div class="col-md-7 position-relative mb-4 mb-md-0">
            <div v-for="item in multimediaData" :key="item.id" :class="['multimedia-content', 'h-100']"
                :style="{ display: activeTab === item.id ? 'block' : 'none' }">
                <div class="position-relative h-100">
                    <a href="#">
                        <img :src="item.mainContent.image" :alt="item.title"
                            class="w-100 d-block h-100 object-fit-cover" />
                    </a>
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between">
                        <div class="livestream-content-text w-100 custom-secondary-bg text-white py-3">
                            <h3 class="text-start ps-5 text-uppercase">
                                {{ item.title }}
                            </h3>
                        </div>
                        <a v-if="item.mainContent.hasPlayButton" href="#"
                            class="play-button position-absolute top-50 start-50 translate-middle">
                            <i class="fas fa-play-circle text-danger fa-4x"></i>
                        </a>
                        <div class="position-absolute bottom-0 start-0 w-100 py-4 text-start ps-5">
                            <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
                            <h3 class="position-relative text-white text-uppercase m-0 px-1">
                                {{ item.mainContent.title }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-5 sub-content">
            <div v-for="item in multimediaData" :key="`sub-${item.id}`" class="multimedia-subcontent"
                :style="{ display: activeTab === item.id ? 'block' : 'none' }">
                <div v-for="(subItem, index) in item.subContent" :key="index" class="position-relative"
                    :class="{ 'mb-3': index === 0 }">
                    <a href="#">
                        <img :src="subItem.image" class="card-img-top" :alt="`${item.title} ${index + 1}`" />
                        <div class="position-absolute bottom-0 left-0 w-100 py-2 px-2">
                            <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
                            <h5 class="position-relative text-white text-start pb-1 m-0">
                                {{ subItem.title }}
                            </h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.play-button {
  z-index: 10;
}
</style>