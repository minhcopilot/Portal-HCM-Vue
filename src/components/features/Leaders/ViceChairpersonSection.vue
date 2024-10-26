<script setup lang="ts">
import type { ViceChairpersons } from "@/types/leadersTypes";

defineProps<{
    viceChairpersons: ViceChairpersons[];
}>();
</script>

<template>
    <div>
        <h2 class="text-uppercase text-center mb-4">Phó Chủ tịch</h2>
        <div class="row text-center justify-content-around g-4">
            <div v-for="(viceChair, index) in viceChairpersons" :key="index"
                class="col-6 col-md-4 col-lg-2 position-relative container-vice-chairperson">
                <img :src="viceChair.bgImage" :alt="`Vice Chairperson ${index + 1}`" class="img-fluid" />
                <div class="position-absolute vice-chairperson">
                    <img :src="viceChair.image" alt="phó chủ tịch" class="img-fluid" />
                </div>
                <div class="text-white custom-secondary-bg w-100">
                    <h5 class="pt-1">{{ viceChair.name }}</h5>
                    <p class="pb-1">{{ viceChair.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
