<template>
  <div class="featured-content">
    <!-- 左侧面板保持不变 -->
    <div class="left-panel">
      <div class="leftImg"></div>
      <div class="overlay">
        <h2>全球名品聚集</h2>
        <div class="tags">
          <span>分析纯</span><span>优级纯</span><span>色谱纯</span><span>电子纯</span><span>化学纯</span><span>环保级</span>
        </div>
      </div>
    </div>

    <!-- 右侧面板 -->
    <div class="right-panel">
      <!-- 给每个 grid-item 添加一个唯一的 class 用于定位 -->
      <div class="grid-container">
        <div class="grid-item video-promo item-video center">
          <h3>企业宣传视频</h3>
        </div>
        <div class="grid-item item-one-click">
          <p>一键配货</p>
          <img src="../assets/images/goodsImg.jpg" alt="一键配货">
        </div>
        <!-- 彩色格子：修改内部结构以支持水平布局 -->
        <div class="grid-item bg-pink item-free-sample  col_between">
          <div class="text-content">
            <p>免费领样</p><span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="免费领样">
        </div>
        <div class="grid-item bg-beige item-expert-custom  col_between">
          <div class="text-content">
            <p>专家定制</p><span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="专家定制">
        </div>
        <div class="grid-item item-member-center col_between">
          <p>会员中心</p>
          <img src="../assets/images/goodsImg.jpg" alt="会员中心">
        </div>
        <div class="grid-item item-e-dict col_between">
          <p>电子化学词典</p>
          <img src="../assets/images/goodsImg.jpg" alt="电子化学词典">
        </div>
        <div class="grid-item item-integral-mall col_between">
          <p>积分商城</p>
          <img src="../assets/images/goodsImg.jpg" alt="积分商城">
        </div>
        <div class="grid-item bg-light-green item-lab  col_between">
          <div class="text-content">
            <p>独立实验室</p>
            <span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="独立实验室">
        </div>
        <div class="grid-item bg-light-brown item-coupon-center  col_between">
          <div class="text-content">
            <p>领券中心</p><span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="领券中心">
        </div>
        <div class="grid-item bg-light-blue item-time-kill  col_between">
          <div class="text-content">
            <p>限时秒杀</p><span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="限时秒杀">
        </div>
        <div class="grid-item bg-light-mint item-more-link  col_between">
          <div class="text-content">
            <p>更多</p><span class="line"></span>
          </div>
          <img src="../assets/images/goodsImg.jpg" alt="更多">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style  lang="scss" scoped>
.featured-content {
  display: flex;
  height: 450px; // 建议给一个固定高度，让 grid 布局更稳定
  max-width: 1200px;
  min-width: 1190px;
  margin: 20px auto;
}

.left-panel {
  position: relative;
  width: 300px;
  .leftImg{
      height: 100%;
      background: pink;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      span {
        border: 1px solid white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 12px;
      }
    }
  }
}
.right-panel {
  flex: 1;

  .grid-container {
    display: grid;
    height: 450px;
    gap: 1px; // 保持间隙
    background-color: #e0e0e0;

    // --- 核心改动 1: 定义网格的列、行和区域 ---
    grid-template-columns: 2fr 2fr 1.5fr 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "video video one-click free-sample expert-custom"
      "video video one-click lab coupon-center"
      "e-dict integral-mall member-center more-link time-kill";
  
    }

  // --- 核心改动 2: 将每个 item 放置到指定的 grid-area ---
  .item-video {
    grid-area: video;
  }

  .item-one-click {
    grid-area: one-click;
  }

  .item-free-sample {
    grid-area: free-sample;
  }

  .item-expert-custom {
    grid-area: expert-custom;
  }

  .item-member-center {
    grid-area: member-center;
  }

  .item-e-dict {
    grid-area: e-dict;
    // height: 120%;
  }

  .item-integral-mall {
    grid-area: integral-mall;
  }

  .item-lab {
    grid-area: lab;
  }

  .item-coupon-center {
    grid-area: coupon-center;
  }

  .item-time-kill {
    grid-area: time-kill;
  }

  .item-more-link {
    grid-area: more-link;
  }

  .grid-item {
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 10px;
      font-size: 14px;
    }

    img {
      max-width: 70px;
      max-height: 70px;
    }
  }
  .center { 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .col_between{
    display: flex;
      justify-content: space-between;
      flex-direction: column;
     
  }
  .video-promo {
    // 继承 .grid-item 的样式，这里只写覆盖的部分
    background-color: #0099ff;
    color: white;
    font-size: 24px;
  }
    .line {
      display: block;
      width: 15px;
      height: 2px;
      background-color: #ccc;
      opacity: 1;
  
    }
  // --- 核心改动 3: 为水平布局的彩色格子添加样式 ---
  .grid-item.horizontal {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 5px 10px;

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-bottom: 5px;
      }

   
    }

    img {
      max-width: 50px;
      max-height: 50px;
    }
  }
  .bg-pink { background-color: #ffe4e1; }
  .bg-beige { background-color: #f5f5dc; }
  .bg-light-green { background-color: #e6f7e6; }
  .bg-light-brown { background-color: #f0e6e6; }
  .bg-light-blue { background-color: #e6f2ff; }
  .bg-light-mint { background-color: #e6f7f7; }
}

</style>