<template>
  <div class="wrapper">
    <div class="position">
      <div class="iconfont position__icon">&#xe7f1;</div>
      <div class="position_address">北京理工北京理工</div>
      <div class="iconfont position_notice">&#xe7c4;</div>
    </div>
  </div>
  <div class="docker">
    <div class="docker_item docker_item-active">
      <div class="iconfont">&#xe867;</div>
      <div class="docker_title">首页</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe670;</div>
      <div class="docker_title">购物车</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe713;</div>
      <div class="docker_title">订单</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe640;</div>
      <div class="docker_title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  .position {
    display: flex;
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    @include ellipsis;
    .position__icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    .position_address{
      width: 3rem;
    }
    .position_notice {
      position: absolute;
      right: 0;
      top: 0.17rem;
      font-size: 0.2rem;
    }
    color: $content-fontcolor;
  }
}
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid #f1f1f1;
  color: $content-fontcolor;
  .docker_item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }

    .docker_title {
      font-size: 0.1rem;
    }
  }
  .docker_item-active {
    color: #1fa4fc;
  }
}
</style>
