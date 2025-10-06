<template>
  <div class="main-content">
    <div ref="banner">
      <div class="swiper">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../assets/images/banner2.jpg" />
          </el-carousel-item>
        </el-carousel>

      </div>
      <div class="container">
        <LeftContentMenu class="catageList" />

      </div>
      <FeaturedContent />

    </div>
    <div class="goodsList">
      <!-- 
     -->
      <!-- comm -->


      <section>
        <div class="product-section" v-for="i in goodsList" :key="i.id">
          <div class="section-header">
            <div>
              <h2 :id="i.id">{{ i.name }}</h2>
            </div>
            <div class="rightDes">
              <div class="descItem" v-for="item in i.des" :key="item">
                {{item}}
              </div>
            </div>
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
      <botLeftFloatContent/>
     </div>
    </div>
    <!-- -->
</template>

<script setup>
import LeftContentMenu from "./leftContentMenu.vue";
import botLeftFloatContent from "./botLeftFloatContent.vue";
import { ref, onMounted, onUnmounted } from "vue";
import FeaturedContent from './FeaturedContent.vue';

const showFloatingSidebar = ref(false);
const banner = ref(null);

const goodsList = ref([
  {
    name: "1F-01 量器",
    id: "c2F",
    des: [
      '烧杯',
      '量筒',
      '三角瓶/锥形瓶',
      '量杯',
    ]
  },
  {
    name: "2F-01 仪器耗材",
    id: "c2F",
    des: [
      '烧杯',
      '量筒',
      '三角瓶/锥形瓶',
      '量杯',
    ]
  },

  {
    name: "3F-01 安全防护",
    id: "c3F",
    des: [
      '烧杯',
      '量筒',
      '三角瓶/锥形瓶',
      '量杯',
    ]
  },
  {
    name: "4F-01 化学合成",
    id: "c4F",
    des: [
      '烧杯',
      '量筒',
      '三角瓶/锥形瓶',
      '量杯',
    ]
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
    console.log('banner.value', banner.value.offsetHeight);
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


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 定义导航栏高度
  const headerHeight = document.querySelector('#topHeader').offsetHeight; // 或者动态获取: document.querySelector('.my-header').offsetHeight

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
     .catageList {
       position: absolute;
      //  left: 0;
       top: 190px;
     }
.main-content {
  
  .container {
    display: grid;
    
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
  :deep(.el-carousel__container){
    height: 380px;
  }
  .swiper {
    margin-top: 20px;
    height: 400px;
    position: relative;

    .catageList {
        position: absolute;
        left: 0;
        top: -20px;
          margin: 0 auto;
      }
    img{
      height: 100% !important;
    }
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
      // padding: 10px 0;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rightDes{
        display: flex;
        align-items: center;
        // gap: 15px;
  .descItem{
    padding: 0 10px;
    border-right: 1px solid #ccc;
  }        
      }
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;

      .product-card {
        background: #fff;
        // border: 1px solid #e6e6e6;
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


</style>
