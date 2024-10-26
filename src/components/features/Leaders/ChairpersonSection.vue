<script setup lang="ts">
import type { ChairPerson } from "@/types/leadersTypes";

defineProps<{
    chairperson: ChairPerson;
}>();
</script>

<template>
    <div class="chairperson-section row mb-5">
        <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
            <div class="row mb-2">
                <h5 class="text-danger text-uppercase fw-bold">
                    THƯỜNG TRỰC UỶ BAN NHÂN DÂN
                </h5>
                <h2 class="text-uppercase fw-bold">THÀNH PHỐ HỒ CHÍ MINH</h2>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-12 mb-3 mb-md-0">
                    <img :src="chairperson.image" alt="Chairperson" class="img-fluid w-100" />
                </div>
                <div class="col-md-7 col-sm-12 text-start px-md-5 px-3">
                    <h5 class="text-uppercase fw-bold mt-2">
                        {{ chairperson.title }}
                    </h5>
                    <h3 class="text-uppercase text-danger fw-bold my-3">
                        {{ chairperson.name }}
                    </h3>
                    <p class="fw-bold small lh-base">
                        {{ chairperson.description }}
                    </p>
                    <button class="btn btn-danger p-2">Tìm hiểu thêm</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <img src="https://i.ibb.co/Mp5mK9P/bando.png" alt="Map" class="w-100 h-auto d-block" />
        </div>
    </div>
</template>