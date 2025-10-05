<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/images/topLotgo.gif" alt="Logo" />
      </div>
      <div class="search-area">
        <div class="search-row">
          <div class="inputBox">
            <div class="center beforeTitle">产品</div>
            <input type="text" placeholder="货号、中文名、英文名、CAS号" />
          </div>
          <div>
            <button class="btn btn-primary">搜索</button>
            <button class="btn btn-primary">一件配货</button>
          </div>
        </div>
        <div class="hot-searches">
          <span class="label">热门搜索：</span>
          <a href="#" class="hot">开学季大促</a>
          <a href="#">离心管</a>
          <a href="#">Adamas®色谱乙腈</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background: #fff;
  padding: 20px 0;
  // box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);

  .container {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 100px;
    max-width: 1200px;
    min-width: 1190px;
    margin: 0 auto;
  }

  .logo img {
    height: 56px;
  }

  .search-row {
    display: flex;
    align-items: center;
    // gap: 12px;
    width: 100%;
    // gap: 2px;

    .inputBox {
      height: 40px;

      border: 2px solid #0b7bff;
      border-radius: 2px 0 0 2px;
      display: flex;
      align-items: center;
      overflow: hidden;
      .beforeTitle {
        background: #ccc;
        color: #000;
        height: 100%;
        padding: 0 15px;
        font-size: 14px;
      }
    }
    input {
      outline: none;
      // flex: 1 1 820px;
      // height: 52px;
      border: none;
      padding: 0 4px;
      border-radius: 2px;
      outline: none;
      font-size: 14px;
      min-width: 400px;
    }
    div {
      display: flex;
      gap: 10px;
    }
    .btn {
      height: 44px;
      padding: 0 22px;
      border-radius: 2px;
      border: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
      font-size: 14px;
    }
    .btn:nth-child(1) {
      // border-radius: 0 2px 2px 0;
      border-radius: 0;
    }
    .btn-primary {
      background: #0b7bff;
      color: #fff;
      border-color: #0b7bff;
    }

    .btn-accent {
      background: #38b000;
      color: #fff;
      border-color: #38b000;
    }
  }

  .hot-searches {
    margin-top: 8px;
    font-size: 12px;
    color: #666;

    .label {
      margin-right: 8px;
    }

    a {
      margin-right: 14px;
      text-decoration: none;
      color: #666;

      &.hot {
        color: #d90000;
      }

      &:hover {
        color: #0b7bff;
      }
    }
  }
}
</style>
