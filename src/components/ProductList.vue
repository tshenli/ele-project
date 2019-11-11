<template>
<div class="listBanner">
    <div class="product-list">
       <div class="list1">
            <a href=""> 
                <img src="../assets/images/1.jpeg" alt="美食">
                <span>美食</span>
            </a>
            <a href=""> 
                <img src="../assets/images/2.jpeg" alt="">
                <span>大牌惠吃</span>
            </a>
            <a href=""> 
                <img src="../assets/images/3.jpeg" alt="">
                <span>商超便利</span>
            </a>
            <a href=""> 
                <img src="../assets/images/4.jpeg" alt="">
                <span>水果</span>
            </a>
            <a href=""> 
                <img src="../assets/images/5.jpeg" alt="">
                <span>医药健康</span>
            </a>
            <!-- <a href=""> 
                <img src="../assets/images/11.jpeg" alt="">
                <span>速食简餐</span>
            </a>
            <a href=""> 
                <img src="../assets/images/12.jpeg" alt="">
                <span>地方小吃</span>
            </a>
            <a href=""> 
                <img src="../assets/images/2.jpeg" alt="">
                <span>大牌惠吃</span>
            </a>
            <a href=""> 
                <img src="../assets/images/14.jpeg" alt="">
                <span>速食简餐</span>
            </a> -->
       </div>
        <div class="list2">
            <a href=""> 
                <img src="../assets/images/6.jpeg" alt="">
                <span>浪漫鲜花</span>
            </a>   
            <a href=""> 
                <img src="../assets/images/7.jpeg" alt="">
                <span>跑腿代购</span>
            </a> 
            <a href=""> 
                <img src="../assets/images/8.jpeg" alt="">
                <span>汉堡披萨</span>
            </a>
            <a href=""> 
                <img src="../assets/images/9.jpeg" alt="">
                <span>厨房生鲜</span>
            </a>
            <a href=""> 
                <img src="../assets/images/10.jpeg" alt="">
                <span>甜品饮品</span>
            </a>
        </div>
    </div>
    <div class="banner">
        <img src="../assets/images/banner.png" alt="">
    </div>
    <div class="recommend">—— <span>推荐商家</span> ——</div>
    <div class="home-filter">
        <!-- <a href="">
            <span class="filter1">综合排序</span>
            <span class="iconfont icon-drop-down"></span>
        </a>
        <a href="">距离最近</a>
        <a href="">品质联盟</a>
        <a href="">
            <span class="filter2">筛选</span>
            <span class="iconfont icon-shaixuan"></span>
        </a> -->
        <router-link class="filter" to="/index/screening" tag="div" active-class="on">
            <span class="filter1">综合排序</span>
            <span class="iconfont icon-drop-down"></span>
        </router-link>
        <router-link class="filter" to="/index/distance" tag="div" active-class="on">距离最近</router-link>
        <router-link class="filter" to="/index/union" tag="div" active-class="on">品质联盟
        </router-link>
        <router-link class="filter" to="/index/sorting" tag="div" active-class="on">
            <span class="filter2">筛选</span>
            <span class="iconfont icon-shaixuan"></span>
        </router-link>
    </div>

    <!-- 渲染二级路由组件 -->
     <router-view></router-view>
    <!-- <RestaurantList></RestaurantList> -->
</div>
</template>

<script>
// import RestaurantList from "./RestaurantList.vue";
export default {
  name: "productlist",
//   components: {
//     RestaurantList
//   }
};
</script>

<style scoped>
.product-list {
  width: 100%;
  height: 4.72rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list2 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  text-decoration: none;
  display: block;
  width: 2rem;
  height: 1.706667rem;
  margin: 0.146667rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
a > img {
  width: 1.2rem;
  height: 1.2rem;
}
a > span {
  font-size: 0.16rem;
  text-align: center;
  color: #666;
}
.banner {
  height: 2.933333rem;
  padding: 0.32rem 0rem 0rem 0rem;
  display: flex;
  justify-content: center;
}
.banner > img {
  width: 100%;
  height: 100%;
}
.recommend {
  height: 0.96rem;
  text-align: center;
  font-size: 0.4rem;
  background: #ffffff;
  color: #000000;
  line-height: 0.96rem;
}
.recommend > span {
  margin: 0rem 0.266667rem;
}
.home-filter {
  height: 1.053333rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.home-filter .filter {
  width: 2.613333rem;
  height: 1.053333rem;
  color: #666;
  font-size: 0.373333rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.home-filter .filter:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.home-filter .filter:nth-child(4) {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-filter .filter .filter1 {
  font-size: 0.373333rem;
}
.home-filter .filter:nth-child(1)>.iconfont{
    width: .173333rem;
}
.home-filter .filter .filter2 {
  font-size: 0.373333rem;
}
.on {
  color: #0089dc;
  box-sizing: border-box;
  border-bottom: 0.053333rem solid #0089dc;
}
</style>


