<template>
  <div id="app">
    <div class="elem-footer">
      <router-link class="foots" to="/index" tag="div" active-class="on">
        <span class="iconfont icon-changyonglogo40"></span>
        <span>首页</span>
      </router-link>
      <router-link class="foots" to="/find" tag="div" active-class="on">
        <span class="iconfont icon-faxian"></span>
        <span>发现</span>
      </router-link>
      <router-link class="foots" to="/order" tag="div" active-class="on">
        <span class="iconfont icon-tubiao_dingdan"></span>
        <span>订单</span>
      </router-link>
      <router-link class="foots" to="/personal" tag="div" active-class="on">
        <span class="iconfont icon-My"></span>
        <span>我的</span>
      </router-link>
    </div>
    

    <!-- <a href="">
        <span class="iconfont icon-changyonglogo40"></span>
        <span>首页</span>
      </a>
      <a href="">
        <span class="iconfont icon-faxian"></span>
        <span>发现</span>
      </a>
      <a href="">
        <span class="iconfont icon-tubiao_dingdan"></span>
        <span>订单</span>
      </a>
      <a href="">
        <span class="iconfont icon-My"></span>
        <span>我的</span>
      </a> -->

    <!-- 渲染组件 -->
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
html,
body {
  height: 100%;
}
html,
body,
input,
span,
div,
a,
i,p {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 底部 */
.elem-footer {
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  width: 100%;
  height: 1.333333rem;
  background: #fff;
  padding: 0.12rem 0rem 0.12rem 0rem;
  display: flex;
  justify-content: space-around;
}
.elem-footer .foots {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  font-weight:12rem;
}
.on{
  color: #0089dc;
}
p{
  font-size:.666667rem;
  text-align: center;
  color: aqua;
}
</style>
