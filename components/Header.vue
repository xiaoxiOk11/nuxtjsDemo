<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/images/topLotgo.gif" alt="Logo" />
      </div>
      <div class="search-area">
        <div class="search-row">
          <input
            type="text"
            placeholder="搜索编号、原始编号、中文名、分子式、CAS号、MDL号"
          />
          <div>
            <button class="btn btn-primary">搜索</button>
            <button class="btn btn-primary outline">结构式搜索</button>
            <button class="btn btn-accent">高级搜索</button>
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
    justify-content: space-between;
    gap: 24px;
    max-width: 1200px;
    min-width: 1190px;
    margin: 0 auto;
  }

  .logo img {
    height: 56px;
  }

  .search-area {
    // flex: 1;
  }

  .search-row {
    display: flex;
    align-items: center;
    // gap: 12px;
    width: 100%;
    gap: 2px;
    input {
      // flex: 1 1 820px;
      // height: 52px;
      padding: 0 4px;
      height: 40px;
      border: 2px solid #0b7bff;
      border-radius: 2px;
      outline: none;
      box-shadow: 0 0 0 2px rgba(11, 123, 255, 0.08) inset;
      font-size: 14px;
      min-width: 400px;
    }
    div {
      display: flex;
      gap: 10px;
    }
    .btn {
      height: 42px;
      padding: 0 22px;
      border-radius: 2px;
      border: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
      font-size: 14px;
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
