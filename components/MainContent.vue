<template>
  <div class="main-content">
    <div class="container">
      <aside class="category-panel">
        <div class="category-title">全部商品分类</div>
        <ul class="category-list">
          <li><a href="#">计量器具、实验常规耗材</a></li>
          <li><a href="#">生物耗材、分析耗材、特殊耗材</a></li>
          <li><a href="#">安全防护、办公用品、装修设备</a></li>
          <li><a href="#">化学合成、催化反应、分子砌块</a></li>
          <li><a href="#">生命科学、生物制药、体外诊断</a></li>
          <li><a href="#">高纯试剂、材料科学、电池储能</a></li>
          <li><a href="#">分析检测、标准物质、管制试剂</a></li>
          <li><a href="#">通用仪器、称量仪器、生物仪器</a></li>
          <li><a href="#">检测仪器、分析仪器、特种装置</a></li>
          <li><a href="#">ELN、ChemDraw 化学绘图软件</a></li>
        </ul>
      </aside>
      <section class="content-area">
        <div
          class="banner-placeholder"
          role="img"
          aria-label="Banner 占位图"
          ref="banner"
        ></div>
      </section>
    </div>
    <div class="goodsList">
      <section>
        <div class="product-section" v-for="i in 3" :key="i">
          <div class="section-header">
            <h2>1F-01 量器</h2>
          </div>
          <div class="product-grid">
            <div class="product-card">
              <div
                class="thumb"
                style="
                  background-image: url('https://via.placeholder.com/280x180?text=%E8%AF%95%E7%AE%A1');
                "
              ></div>
              <div class="caption">试管</div>
            </div>
            <div class="product-card">
              <div
                class="thumb"
                style="
                  background-image: url('https://via.placeholder.com/280x180?text=%E6%8B%BE%E5%9D%97%E7%9B%98%E7%AD%89');
                "
              ></div>
              <div class="caption">搁瓷盘·桶</div>
            </div>
            <div class="product-card">
              <div
                class="thumb"
                style="
                  background-image: url('https://via.placeholder.com/280x180?text=%E4%B8%8D%E9%94%88%E9%92%A2%E7%9B%92%E7%9B%98');
                "
              ></div>
              <div class="caption">不锈钢方盘</div>
            </div>
            <div class="product-card">
              <div
                class="thumb"
                style="
                  background-image: url('https://via.placeholder.com/280x180?text=%E5%88%86%E6%A1%B6');
                "
              ></div>
              <div class="caption">分隔塑料盒</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="floating-sidebar" v-if="showFloatingSidebar">
      <ul>
        <li><a href="#">2F仪器耗材</a></li>
        <li><a href="#">3F安全防护</a></li>
        <li><a href="#">4F化学合成</a></li>
        <li><a href="#">5F生命科学</a></li>
        <li><a href="#">6F高纯材料</a></li>
        <li><a href="#">7F分析标物</a></li>
        <li><a href="#">8F通用仪器</a></li>
        <li><a href="#">9F分析仪器</a></li>
        <li><a href="#">10F科研软件</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showFloatingSidebar = ref(false);
const banner = ref(null);

const handleScroll = () => {
  if (banner.value) {
    const bannerHeight = banner.value.offsetHeight;
    showFloatingSidebar.value = window.scrollY > bannerHeight;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
    margin: 16px auto;
  }
  .goodsList {
    max-width: 1200px;
    min-width: 1190px;
    margin: 16px auto;
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

  .content-area {
    min-width: 0;

    .banner-placeholder {
      width: 100%;
      height: 320px;
      // height: auto;
      background: url("https://via.placeholder.com/1200x280?text=Banner")
        center/cover no-repeat #eef5ff;
      border: 1px solid #e6e6e6;
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

        .thumb {
          width: 100%;
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .caption {
          padding: 10px;
          text-align: center;
          color: #333;
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
  top: 200px;
  left: 0;
  width: 120px;
  background-color: #007bff;
  border-radius: 5px;
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
        padding:  10px;
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
