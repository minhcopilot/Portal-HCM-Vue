<template>
    <div class="multimedia-skeleton">
        <div class="skeleton-tabs mb-3"></div>
        <div class="row">
            <div class="col-lg-7">
                <div class="skeleton-main-content"></div>
            </div>
            <div class="col-lg-5">
                <div class="skeleton-sub-content mb-3"></div>
                <div class="skeleton-sub-content"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.multimedia-skeleton {
    width: 100%;
}

.skeleton-tabs,
.skeleton-main-content,
.skeleton-sub-content {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

.skeleton-tabs {
    height: 50px;
    border-radius: 4px;
}

.skeleton-main-content {
    height: 400px;
    border-radius: 4px;
}

.skeleton-sub-content {
    height: 180px;
    border-radius: 4px;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}
</style>