<template>
  <div class="navigation-bar">
    <div class="container">
      <div class="all-categories">全部商品分类</div>
      <nav class="main-nav">
        <a href="#">首页</a>
        <a href="#">匠心精选 <span class="badge hot">HOT</span></a>
        <a href="#">知识专区</a>
        <a href="#">论文评述</a>
        <a href="#">开学季大促 <span class="badge boom">BOOM</span></a>
        <a href="#">分销专区 <span class="badge boom">BOOM</span></a>
        <a href="#">清仓专区 <span class="badge new">NEW</span></a>
        <a href="#">关于探索</a>
      </nav>
      <div class="my-cart">
        <a href="#" class="cart-pill"
          ><span class="icon">🛒</span> 我的购物车
          <span class="count">0</span></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation-bar {
  background: #fff; // background-color: #0b7bff;
  border-bottom: 3px solid #007bff;

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
    background-color: #007bff;
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    border-radius: 4px;
  }

  .main-nav {
    display: flex;
    justify-content: space-between;

    gap: 20px;
    flex: 1;
    a {
      color: #000;
      text-decoration: none;
      position: relative;
      font-size: 16px;
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
