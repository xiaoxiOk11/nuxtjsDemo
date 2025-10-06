<template>
  <div class="top-bar">
    <div class="container">
      <div class="left center">
        <img src="../assets/images/phone.png" style="height: 20px;">
        <!-- <span class="item">全国热线: 400-111-6333</span> -->
      </div>
      <div class="right">
        <div class="rightTitle">注册有惊喜 [登录]</div>
        <div class="rightTitle">报价栏</div>
        <!-- <a href="#">用户中心</a> -->
        <el-dropdown>
          <div class="rightTitle center">用户中心</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的订单</el-dropdown-item>
              <el-dropdown-item>我的评价</el-dropdown-item>
              <el-dropdown-item>心愿单</el-dropdown-item>
              <el-dropdown-item>收货地址</el-dropdown-item>
              <el-dropdown-item>浏览历史</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="rightTitle">帮助中心</div>
        <el-dropdown>
          <div class="rightTitle center">手机版</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <ClientOnly>
                  <Qrcode :value="textToEncode" :size="250" render-as="img" />
                </ClientOnly>

              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="rightTitle">ZH</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Qrcode from './Qrcode.vue'
const textToEncode = ref('https://nuxt.com');
</script>
<style scoped lang="scss">
.top-bar {
  background-color: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 12px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    min-width: 1190px;
    margin: 0 auto;
  }

  .left {
    color: #666;
    .phone {
      color: #f65432;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .left .item {
    margin-right: 18px;
  }
  .left .icon {
    margin-right: 6px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right .rightTitle {
    // margin-left: 15px;
    text-decoration: none;
    color: #333;
    // border-right: 2px solid #ccc;
    padding: 0 10px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: #006ecd;
    }
  }
}
</style>
