<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Navigation data
const navItems = ref([
  {
    title: "TRANG CHỦ",
    link: "/",
    isDropdown: false,
  },
  {
    title: "GIỚI THIỆU",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Lịch sử hình thành", link: "#!" },
      { title: "Địa lý tự nhiên", link: "#!" },
      { title: "Văn hóa - Xã hội", link: "#!" },
    ],
  },
  {
    title: "TIN TỨC - SỰ KIỆN",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Tin thành phố", link: "#!" },
      { title: "Tin quận huyện", link: "#!" },
      { title: "Sự kiện nổi bật", link: "#!" },
    ],
  },
  {
    title: "CHÍNH QUYỀN",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Cơ cấu tổ chức", link: "#!" },
      { title: "Lãnh đạo thành phố", link: "#!" },
      { title: "Quận huyện", link: "#!" },
    ],
  },
  {
    title: "CÔNG DÂN",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Dịch vụ công", link: "#!" },
      { title: "Thủ tục hành chính", link: "#!" },
      { title: "Hỏi đáp", link: "#!" },
    ],
  },
  {
    title: "DOANH NGHIỆP",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Đầu tư", link: "#!" },
      { title: "Hỗ trợ doanh nghiệp", link: "#!" },
      { title: "Dự án kêu gọi đầu tư", link: "#!" },
    ],
  },
  {
    title: "DU KHÁCH",
    link: "#!",
    isDropdown: true,
    dropdownItems: [
      { title: "Địa điểm du lịch", link: "#!" },
      { title: "Ẩm thực", link: "#!" },
      { title: "Lễ hội - Sự kiện", link: "#!" },
    ],
  },
]);

// Language data
const selectedLanguage = ref("VIE");
const languages = ref([
  {
    code: "vie",
    label: "Tiếng Việt",
    display: "VIE",
  },
  {
    code: "eng",
    label: "English",
    display: "ENG",
  },
]);

// Language change handler
const changeLanguage = (lang: { display: string }) => {
  selectedLanguage.value = lang.display;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-primary-bg py-0">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li
            v-for="item in navItems"
            :key="item.title"
            :class="{ 'nav-item': true, 'custom-dropdown': item.isDropdown }"
          >
            <RouterLink
              v-if="!item.isDropdown"
              :to="item.link"
              class="nav-link custom-nav-link"
            >
              {{ item.title }}
            </RouterLink>
            <a
              v-else
              class="nav-link custom-nav-link d-flex align-items-center"
              href="#!"
            >
              <span class="me-1">{{ item.title }}</span>
              <i class="fa-solid fa-chevron-down ms-2"></i>
            </a>
            <ul v-if="item.isDropdown" class="custom-dropdown-menu">
              <li
                v-for="dropdownItem in item.dropdownItems"
                :key="dropdownItem.title"
              >
                <a :href="dropdownItem.link">{{ dropdownItem.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="custom-secondary-bg py-5 ps-3">
          <ul class="navbar-nav me-auto py-2">
            <li class="nav-item custom-dropdown">
              <a
                class="nav-link custom-nav-link d-flex align-items-center"
                href="#!"
                id="languageDropdown"
              >
                <span>{{ selectedLanguage }}</span>
                <i class="fa-solid fa-chevron-down ms-2"></i>
              </a>
              <ul class="custom-dropdown-menu">
                <li v-for="lang in languages" :key="lang.code">
                  <a href="#!" @click.prevent="changeLanguage(lang)">
                    <i class="fa-solid fa-language me-2"></i>{{ lang.label }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-nav-link" href="#!">LIÊN HỆ</a>
            </li>
            <li class="nav-item">
              <RouterLink to="/search" class="nav-link custom-nav-link">
                <i class="fas fa-search text-white"></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* navbar */
.custom-nav-link {
  position: relative;
  padding-right: 15px !important;
  padding-left: 15px !important;
}

/* add line after navbar item */
.custom-nav-link::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 1em;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}
.navbar-nav .nav-link {
  color: white;
  font-weight: 500;
}
.navbar-nav .nav-item:last-child .custom-nav-link::after {
  display: none;
}

.navbar-nav .nav-link .fa-chevron-down {
  font-size: 10px;
}
/* custom dropdown menu */
.custom-dropdown {
  position: relative;
}

.custom-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #b61313;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.custom-dropdown:hover .custom-dropdown-menu {
  display: block;
}

.custom-dropdown-menu li {
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-dropdown-menu li:last-child {
  border-bottom: none;
}

.custom-dropdown-menu a {
  color: white;
  text-decoration: none;
  display: block;
}

.custom-dropdown-menu li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
/* language change */
#languageDropdown {
  width: 70px;
  text-align: left;
}

#selectedLanguage {
  display: inline-block;
  width: 30px;
}
</style>
