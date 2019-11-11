<template>
  <div class="elem">
    <div class="elem-header">
      <div class="header">
        <div class="adress">
          <span class="iconfont icon-dingwei-xianxing"></span>
          <span>禧福阁深圳西部硅谷</span>
          <span class="iconfont icon-drop-down"></span>
        </div>
      </div>
      <div class="search">
        <div class="searchIpt">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="搜索饿了么商家、商品名称">
        </div>
      </div>
    </div>
    <div class="elem-content">
      <ProductList></ProductList>
    </div>
   
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
export default {
  name: "elem",
  props: {
    msg: String
  },
  components:{
    ProductList
  },
};
</script>

<style scoped>
.elem {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.elem-header {
  display: flex;
  flex-wrap: wrap;
}
/* 头部地址栏 */
.header {
  width: 100%;
  height: 1rem;
  background: rgb(0, 138, 255);
  color: #fff;
  padding: 0.266667rem 0.373333rem 0rem;
}
.header .adress {
  height: 0.92rem;
  display: flex;
  align-items: center;
}
.header .adress span:nth-child(1) {
  width: 0.346667rem;
}
.header .adress > span:nth-child(2) {
  width: 4.08rem;
  font-size: 0.453333rem;
  margin: 0rem 0.133333rem;
}
.header .adress span:nth-child(3) {
  width: 0.346667rem;
}
/* 头部搜索栏 */
.search {
  width: 100%;
  height: 1rem;
  background: rgb(0, 134, 255);
  padding: 0.2rem 0.373333rem;
  display: flex;
  justify-content: center;
}
.search .searchIpt {
  width: 9.253333rem;
  height: 0.9rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search .searchIpt>span {
  width: 0.426667rem;
  height: 0.426667rem;
  margin: 0rem 0.133333rem 0rem 0rem;
}
.search .searchIpt input {
  border: none;
  outline: none;
}
.search .searchIpt input:-webkit-input-placeholder {
  color: #999;
  font-size: 0.373333rem;
}
/* 主内容区 */
.elem-content {
  flex: 1;
  overflow: auto;
}



</style>
