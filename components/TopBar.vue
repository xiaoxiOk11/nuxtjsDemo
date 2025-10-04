<template>
  <div class="top-bar">
    <div class="container">
      <div class="left">
        <span class="item"><span class="icon">☎</span> 400-111-6333</span>
        <span class="item"><span class="icon">📍</span> 上海市</span>
      </div>
      <div class="right">
        <a href="#">注册有惊喜</a>
        <a href="#">我的账户</a>
        <a href="#">帮助中心</a>
        <a href="#">手机版探索</a>
      </div>
    </div>
  </div>
</template>

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
  }
  .left .item {
    margin-right: 18px;
  }
  .left .icon {
    margin-right: 6px;
  }

  .right a {
    margin-left: 15px;
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
}
</style>
