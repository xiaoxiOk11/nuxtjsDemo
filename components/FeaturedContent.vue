<template>
  <div class="featured-content">
    <!-- 左侧面板保持不变 -->
    <div class="left-panel">
      <div class="overlay">
        <div class="tags">
          <span>分析纯</span><span>优级纯</span><span>色谱纯</span><span>电子纯</span><span>化学纯</span><span>环保级</span>
        </div>
      </div>
    </div>

    <!-- 右侧面板 -->
    <div class="right-panel">
      <!-- 给每个 grid-item 添加一个唯一的 class 用于定位 -->
      <div class="centerBorderBox">
        <div class="row1">
          <div class="grid-item video-promo item-video center">
            <h3>企业宣传视频</h3>
          </div>
          <div class="gridBox2">
            <div class="grid-item gridBigItem">
              <p>会员中心</p>
              <div class="goodsImg">
                <img src="../assets/images/goods.jpeg" alt="会员中心">
              </div>
            </div>
            <div class="grid-item  gridBigItem ">
              <p>电子化学词典</p>
              <div class="goodsImg">
                <img src="../assets/images/goods.jpeg" alt="电子化学词典">
              </div>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="row2GridItem grid-item">
            <p>一键配货</p>
            <div class="goodsImg">
              <img src="../assets/images/goods.jpeg" alt="一键配货">
            </div>
          </div>
          <div class="row2GridItem grid-item">
            <p>积分商城</p>
            <div class="goodsImg">
              <img src="../assets/images/goods.jpeg" alt="积分商城">
            </div>
          </div>
        </div>
      </div>
      <div class="row3">
        <div class="grid-item bg-pink ">
          <div class="text-content">
            <p>免费领样</p>
          </div>
          <div class="goodsImg">
            <span class="line"></span>

            <img src="../assets/images/goods.jpeg" alt="免费领样">
          </div>
        </div>
        <div class="grid-item bg-beige ">
          <div class="text-content">
            <p>专家定制</p>
          </div>
          <div class="goodsImg">
            <span class="line"></span>

            <img src="../assets/images/goods.jpeg" alt="专家定制">
          </div>
        </div>
        <div class="grid-item bg-light-green ">
          <div class="text-content">
            <p>独立实验室</p>
          </div>
          <div class="goodsImg">
            <span class="line"></span>
            <img src="../assets/images/goods.jpeg" alt="独立实验室">
          </div>
        </div>
        <div class="grid-item bg-light-brown ">
          <div class="text-content">
            <p>领券中心</p>
          </div>
          <div class="goodsImg">
            <span class="line"></span>
            <img src="../assets/images/goods.jpeg" alt="领券中心">
          </div>
        </div>
        <div class="grid-item bg-light-blue ">
          <div class="text-content">
            <p>限时秒杀</p>
          </div>
          <div class="goodsImg">

            <span class="line"></span>
            <img src="../assets/images/goods.jpeg" alt="限时秒杀">
          </div>
        </div>
        <div class="grid-item bg-light-mint ">
          <div class="text-content">
            <p>更多</p>
          </div>
          <div class="goodsImg">
            <span class="line"></span>
            <img src="../assets/images/goods.jpeg" alt="更多">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.featured-content {
  display: flex;
  height: 450px; // 建议给一个固定高度，让 grid 布局更稳定
  max-width: 1200px;
  min-width: 1190px;
  margin: 20px auto;
}

.left-panel {
  position: relative;
  width: 320px;
  background: url('../assets/images/globalG.jpeg') no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    padding: 0 20px;

    .tags {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0 10px;
      gap: 10px;
      justify-content: center;

      span {
        padding: 5px 10px;
        border-radius: 1px;
        font-size: 12px;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
        transition: .3s linear all;
        cursor: pointer;
        text-align: center;
      }

      span:hover {
        background: rgba(255, 255, 255, 0.4);

      }
    }
  }
}

.right-panel {
  flex: 1;
  display: grid;
  grid-template-columns: 66% 34%;
  .centerBorderBox{
    display: grid;
    grid-template-columns: 66% 34%;
    border: 4px solid #B86030;
    border-left: none;
.gridBox2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    // height: calc(50% - 20px);
    .gridBigItem {
      padding: 20px 20px 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      border-top: 1px solid #B86030;

      &:nth-child(1) {
        border-right: 1px solid #B86030;
      }

    }
  }

  .goodsImg {
    margin-top: 10px;
    text-align: right;

    img {
      width: 140px;
      height: 140px;
    }
  }

  .row1 {
    border-right: 1px solid #B86030;
  }

  .row2 {
    .row2GridItem {
      height: calc(50% - 20px);
      padding: 20px 20px 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:nth-child(1) {
     
        border-bottom: 1px solid #B86030;
      }

      img {
        height: 140px;
        width: 140px;
      }
    }
  }
  }
  .row3{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    .grid-item{
      height: 150px;
      p{
        padding: 10px 20px; 
      }
    }
    .goodsImg{
      display: flex;
      justify-content: space-between;
      padding: 0  0 0 20px;
      .line{
        display: block;
        width: 15px;
        height: 2px;
        opacity: 1;
        background:currentColor;
      }
      img{
        width: 100px;
          height: 100px;
      }
      
    }
  }
  .video-promo {
    // 继承 .grid-item 的样式，这里只写覆盖的部分
    background-color: #0099ff;
    color: white;
    font-size: 24px;
    height: 50%;
  }

  .bg-pink {
    background-color: #ffe6ee;
    color: #f06291;
   
  }

  .bg-beige {
    background-color: #f5f5dc;
    color: #ee9832;
  }

  .bg-light-green {
    color: #ee9832;
    background-color: #e6f7e6;
  }

  .bg-light-brown {
    color: #ad7d62;
    background-color: #f0e6e6;
  }

  .bg-light-blue {
    color: #468bcb;
    background-color: #e6f2ff;
  }

  .bg-light-mint {
    color: #54a472;
    background-color: #e6f7f7;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col_between {
    display: flex;
    // justify-content: space-between;
    flex-direction: column;

  }
}
.row3{
.grid-item {
    transition: .3s linear all;
    // background: #fff;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 5px 1px #ccc;
    }
  }
}


</style>