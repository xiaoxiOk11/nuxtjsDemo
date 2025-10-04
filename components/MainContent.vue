<template>
  <div class="main-content">
    <div class="container">
      <div>
        <LeftContentMenu />
      </div>
      <div
        class="banner-placeholder"
        role="img"
        aria-label="Banner 占位图"
        ref="banner"
      >
        <img src="../assets/images/banner.jpg" alt="" />
      </div>
    </div>

    <div class="goodsList">
      <div class="swiper">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../assets/images/banner2.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <section>
        <div class="product-section" v-for="i in goodsList" :key="i.id">
          <div class="section-header">
            <h2 :id="i.id">{{ i.name }}</h2>
          </div>
          <div class="product-grid">
            <div class="product-card">
              <img src="../assets/images/goodsImg.jpg" alt="" />

              <div class="caption">试管</div>
            </div>
            <div class="product-card">
              <img src="../assets/images/goodsImg.jpg" alt="" />

              <div class="caption">烧杯</div>
            </div>

            <div class="product-card">
              <img src="../assets/images/goodsImg.jpg" alt="" />

              <div class="caption">量筒</div>
            </div>

            <div class="product-card">
              <img src="../assets/images/goodsImg.jpg" alt="" />

              <div class="caption">刻度吸管</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="floating-sidebar" v-if="showFloatingSidebar">
      <ul>
        <li><a href="#c2F">2F仪器耗材</a></li>
        <li><a href="#c3F">3F安全防护</a></li>
        <li><a href="#c4F">4F化学合成</a></li>
        <li><a href="#c5F">5F生命科学</a></li>
        <li><a href="#c6F">6F高纯材料</a></li>
        <li><a href="#c7F">7F分析标物</a></li>
        <li><a href="#c8F">8F通用仪器</a></li>
        <li><a href="#c9F">9F分析仪器</a></li>
        <li><a href="#c10F">10F科研软件</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LeftContentMenu from "./leftContentMenu.vue";

const showFloatingSidebar = ref(false);
const banner = ref(null);

const goodsList = ref([
  {
    name: "2F-01 仪器耗材",
    id: "c2F",
  },

  {
    name: "3F-01 安全防护",
    id: "c3F",
  },
  {
    name: "4F-01 化学合成",
    id: "c4F",
  },
  {
    name: "5F-01 生命科学",
    id: "c5F",
  },
  {
    name: "6F-01 高纯材料",
    id: "c6F",
  },
  {
    name: "7F-01 分析标物",
    id: "c7F",
  },
  {
    name: "8F-01 通用仪器",
    id: "c8F",
  },
  {
    name: "9F-01 分析仪器",
    id: "c9F",
  },
  {
    name: "10F-01 科研软件",
    id: "c10F",
  },
]);
const handleScroll = () => {
  if (banner.value) {
    const bannerHeight = banner.value.offsetHeight;
    showFloatingSidebar.value = window.scrollY > bannerHeight;
  }
};

const categories = ref([
  {
    id: 1,
    name: "计量器具 · 实验器具 · 常规耗材",
    subGroups: [
      {
        id: 101,
        title: "细胞培养",
        items: [
          "细胞培养基",
          "细胞培养皿",
          "细胞培养板",
          "玻璃培养皿",
          "细胞筛网",
        ],
      },
      {
        id: 102,
        title: "微生物学",
        items: ["细菌培养皿", "接种环", "接种针", "涂布棒", "灭菌袋·牛皮纸"],
      },
    ],
  },
  {
    id: 2,
    name: "生物耗材 · 分析耗材 · 特殊耗材",
    subGroups: [
      {
        id: 201,
        title: "分子生物",
        items: ["冻存管", "离心管盒", "PCR封板膜", "PCR板", "离心管"],
      },
      {
        id: 202,
        title: "组织学·生物通用耗材",
        items: ["载玻片·存储盒", "盖玻片", "深孔板", "透析袋", "病理刀片"],
      },
    ],
  },
  // ... 其他主分类数据
]);

// 用一个 ref 来追踪当前鼠标悬停在哪一个主分类上
const activeCategory = ref(categories.value[0]); // 默认显示第一个

// 更新当前激活的分类
const handleCategoryHover = (category) => {
  activeCategory.value = category;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 定义导航栏高度
  const headerHeight = 200; // 或者动态获取: document.querySelector('.my-header').offsetHeight

  document.addEventListener("click", (event) => {
    // 检查点击的是否是锚点链接
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    // 阻止默认行为
    event.preventDefault();

    const hash = link.getAttribute("href");
    const targetElement = document.querySelector(hash);

    if (targetElement) {
      // 计算目标位置
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      // 平滑滚动到目标位置
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.main-content {
  .container {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 16px;
    max-width: 1200px;
    min-width: 1190px;
    margin: 0 auto;
  }
  .goodsList {
    max-width: 1200px;
    min-width: 1190px;
    margin: 16px auto;
  }
  .swiper {
    margin-top: 60px;
  }
  .category-panel {
    // border: 1px solid #e6e6e6;
    background: #fff;

    .category-title {
      background: #0b7bff;
      color: #fff;
      padding: 12px 16px;
      font-weight: 600;
    }

    .category-list {
      list-style: none;
      margin: 0;
      padding: 8px 0;

      li {
        padding: 5px 10px;
        border-top: 1px solid #f2f2f2;
        font-size: 12px;
        a {
          color: #333;
          text-decoration: none;
        }

        &:hover {
          background: #f7fbff;
        }
      }
    }
  }

  .banner-placeholder {
    width: 100%;
    height: 320px;
    // height: auto;
    margin-top: 20px;
    border: 1px solid #e6e6e6;
    img {
      width: 100%;
    }
  }
  .product-section {
    margin-top: 16px;

    .section-header {
      border-bottom: 2px solid #0b7bff;
      padding: 10px 0;
      margin-bottom: 12px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;

      .product-card {
        background: #fff;
        border: 1px solid #e6e6e6;
        transition: box-shadow 0.2s ease;
        width: 100%;
        height: 240px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }

        .caption {
          position: absolute;
          color: #333;
          bottom: 10px;
          width: 100%;
          text-align: center;
        }

        &:hover {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
}

.floating-sidebar {
  position: fixed;
  top: 180px;
  left: 0;
  width: 120px;
  background-color: #006ecd;
  // border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      border-bottom: 1px solid #fff;

      &:last-child {
        border-bottom: none;
      }

      a {
        display: block;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        text-align: center;
        font-size: 14px;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
}
</style>
