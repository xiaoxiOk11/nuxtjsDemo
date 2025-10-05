<template>
  <div class="navigation-bar">

    <div class="container">
      <div class="all-categories" @mouseenter="showCaFalg = true" @mouseleave="showCaFalg = false">

        全部商品分类
        <LeftContentMenu class="catageList" v-if="showCaFalg" />

        <!--  -->
      </div>
      <nav class="main-nav">
        <div class="title">首页</div>
        <div class="title">化学词典</div>
        <el-dropdown placement="bottom">
          <div class="title dropDown">行业资讯</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>公开标准</el-dropdown-item>
              <el-dropdown-item>能力验证</el-dropdown-item>
              <el-dropdown-item>产品目录</el-dropdown-item>
              <el-dropdown-item>专题资料</el-dropdown-item>
              <el-dropdown-item>其他资料</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="title">技术文档</div>
        <div class="title">专家定制</div>
        <div class="title">独立实验室</div>
        <div class="title">关于我们</div>
      </nav>
      <div class="my-cart">
        <a href="#" class="cart-pill"><span class="icon">🛒</span> 我的购物车
          <span class="count">0</span></a>
      </div>
    </div>
  </div>
</template>

<script setup >
import LeftContentMenu from "./leftContentMenu.vue";

const showCaFalg = ref(false)
</script>
<style scoped lang="scss">
*:focus-visible {
  outline: none !important;
}
.navigation-bar {
  background: #fff; // background-color: #0b7bff;
  border-bottom: 3px solid #006ecd;

  color: #fff;
  // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

  .container {
    display: grid;
    grid-template-columns: 220px 1fr 220px;
    align-items: center;
    max-width: 1200px;
    min-width: 1190px;
    margin: 0 auto;
    gap: 30px;
    // height: 56px;
  }

  .all-categories {
    position: relative;
    background-color: #006ecd;
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    border-radius: 8px 8px 0 0;
    position: relative;
    .catageList{
      position: absolute;
      left: 0;
      bottom: -390px;
    }
  }

  .main-nav {
    display: flex;
    justify-content: space-between;

    gap: 20px;
    flex: 1;
    .title {
      color: #000;
      text-decoration: none;
      position: relative;
      font-size: 16px;
      display: flex;
      align-items: center;
      &:hover {
        opacity: 0.9;
      }

      .badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 6px;
        font-size: 10px;
        border-radius: 10px;
        background: #d90000;
        color: #fff;
        position: absolute;
        top: -15px;
        right: -5px;
      }
    }
  }

  .my-cart {
    display: flex;
    // justify-content: flex-end;
    align-items: center;
    justify-content: center;
    background: #f3f3f3;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    max-width: 150px;

    .cart-pill {
      // display: inline-flex;
      // align-items: center;
      gap: 8px;
      color: #000;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.15);
      padding: 10px 0px;
      border-radius: 24px;

      .count {
        background: #ff2b2b;
        border-radius: 12px;
        padding: 0 8px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
</style>
