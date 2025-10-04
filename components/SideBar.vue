<template>
  <div class="side-bar">
    <a class="icon-item green" href="#">在线客服</a>
    <a class="icon-item green" href="#">线下渠道</a>
    <a class="icon-item green normal" href="#">购物车</a>
    <a class="icon-item green" href="#">样品申请</a>
    <a class="icon-item green normal" href="#">查货存</a>
    <a class="icon-item green" href="#">技术支持</a>
  </div>
</template>

<style scoped lang="scss">
.side-bar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-25%);
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .icon-item {
    display: block;
    text-align: center;
    color: #fff;
    text-decoration: none;
    padding: 5px 8px;
    margin: 6px 0;
    font-size: 12px;
    border-radius: 4px 0 0 4px;
    // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  .normal {
    padding: 5px;
  }
  .icon-item.green {
    background: #09bb07;
  }
}
</style>
