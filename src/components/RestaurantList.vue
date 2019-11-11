<template>
    <section class="shopList">
        <div class="container" v-for="(items, idx) in list" :key="idx">
            <div class="shopInfo">
                <div class="logo-container">
                    <img src="../assets/images/boke.png" alt="波客派">
                </div>
                <div class="shopMain">
                    <section>
                       <span>
                            <b>品牌</b> 
                            <b v-text="items.restaurant.name"></b>
                       </span>
                       <span><b class="omit">···</b></span>
                    </section>
                    <div class="rateWrap">
                        <span><img src="../assets/images/star.jpg" alt="星星"></span>
                        <span v-text="items.restaurant.rating"></span>
                        <span v-text="'月销售'+items.restaurant.recent_order_num+'单'"></span>
                    </div>
                    <div class="line">
                        <span class="line-le">
                            <i v-text="'¥'+items.restaurant.piecewise_agent_fee.extra_fee+'起送'"></i>
                            <i>|</i>
                            <i v-text="items.restaurant.piecewise_agent_fee.description">配送费¥0.5</i>
                        </span>
                        <span class="line-ri">
                            <i v-text="items.restaurant.distance/1000+'km'"></i>
                            <i>|</i>
                            <i v-text="items.restaurant.order_lead_time+'分钟'"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="activityWrap">
                <div class="wrapline">
                    <span v-for="(eles, idx) in items.restaurant.support_tags" :key="idx" v-text="eles.text">汉堡薯条</span>
                </div>
                <span class="warpspan"></span>
                <div class="actives">
                    <div class="active-le">
                        <div class="actRow">
                            <!-- <span><b v-text="items.restaurant.activities[0].icon_name">首</b></span>
                            <span v-text="items.restaurant.activities[0].tips">新用户下单立减17元</span> -->
                            <span><b>首</b></span>
                            <span>新用户下单立减17元</span>
                        </div>
                        <div class="actRow cut">
                            <!-- <span><b v-text="items.restaurant.activities[1].icon_name">折</b></span>
                            <span v-text="items.restaurant.activities[1].tips">折扣商品8折起</span> -->
                            <span><b>折</b></span>
                            <span>折扣商品8折起</span>
                        </div>
                    </div>
                    <div class="active-ri">
                        <span class="actDrop">5个活动</span>
                        <span class="iconfont icon-drop-down"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    neme:"restaurantlist",
    props:{
        shopList: {  //属性传值及验证
            type: Object,   //指定类型
            required: false  //指定为必须要传入字段
        }
    },
    data() {
        return{
            list:[],
        }
    },
    mounted() {
    this.getRestaurants();
  },
  methods: {
    getRestaurants() {
        var that = this;
      let url =
        "http://localhost:8080/restapi/shopping/v3/restaurants?latitude=22.626049&longitude=113.837908&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5";
      axios({
        url: url,
        method: "GET"
      })
        .then(res => {
          console.log("餐馆列表", res.data.items);
          that.list = res.data.items;
        })
        .catch(err => {
          console.log("列表获取失败", err);
        });
    }
  }
}

</script>

<style scoped>
i{
    font-style: normal;
}
.shopList{
    width: 100%;
    height: 29.546667rem;
}
.shopList .container{
    height: 4.746667rem; 
    padding: .4rem 0rem;
    color: #666;
    border-bottom: .013333rem solid #ccc;
}
.shopList .container .shopInfo{
    height: 2rem;
    font-size: .32rem;
    padding: 0rem .2rem;
    /* background: salmon; */
    display: flex;
    justify-content: space-around;
}
.shopList .container .shopInfo>.logo-container{
    height: 1.96rem;
    width: 1.97rem;
    font-size: .32rem;
    float: left;
    border: .026667rem solid #ccc;
}
.shopList .container .shopInfo>.logo-container>img{
    width: 100%;
    height: 100%;
}
.shopList .container .shopInfo>.shopMain{
    height: 2rem;
    padding: 0rem 0rem 0rem .266667rem;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.shopList .container .shopInfo>.shopMain>section{
    width: 7.466667rem;
    height: .533333rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.shopInfo>.shopMain>section>span:nth-child(1){
    width: 466px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shopInfo>.shopMain>section>span>b:nth-child(1){
    padding: .053333rem .133333rem;
    background: yellow;
    color: #6f3f15;
    text-align: center;
}
.shopInfo>.shopMain>section>span>b:nth-child(2){
    padding: .053333rem .133333rem;
    color: #333;
    
    font-size: .4rem;
}
.shopInfo>.shopMain>section>span:nth-child(2)>.omit{
    margin: 0rem 0rem 0rem .266667rem;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .4rem;
    background: rgba(0, 0, 0, 0)
}
.shopInfo>.shopMain>.rateWrap{
    height: .426667rem;
    font-size: .32rem;
    color: #666;
}
.shopInfo>.shopMain>.rateWrap>span:nth-child(1){
    width: 1.493333rem;
    height: .426667rem;
    font-size: .266667rem;
    color: #666;
    margin-right: .106667rem
}
.shopMain>.rateWrap>span>img{
    width: 1.493333rem;
    height: .266667rem;
}
.shopInfo>.shopMain>.rateWrap>span:nth-child(2){
    width: .453333rem;
    height: .373333rem;
    font-size: .32rem;
    margin: 0rem .106667rem 0rem 0rem;
    color: #666;
}
.shopInfo>.shopMain>.rateWrap>span:nth-child(3){
    width: 1.653333rem;
    height: .426667rem;
    font-size: .32rem;
    color: #666;
}
.shopInfo>.shopMain>.line{
    height: .386667rem;
    display: flex;
    justify-content: space-between;
    font-size: .293333rem;
}
.shopInfo>.shopMain>.line>.line-le{
    height: .386667rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.shopInfo>.shopMain>.line>.line-le>i{
    margin-right:.133333rem; 
    font-size: .293333rem;
    color: #666;
}
.shopInfo>.shopMain>.line>.line-ri{
    height: .386667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shopInfo>.shopMain>.line>.line-ri>i{
    margin-right:.133333rem; 
    font-size: .293333rem;
    color: #666;
}
.shopList .container .activityWrap{
    height: 2.6rem;
    font-size: .32rem;
    padding: 0rem 0rem 0rem 2.266667rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
 .activityWrap>.wrapline{
    height: 1.5rem;
    font-size: .32rem;
    margin: .3rem .266667rem 0rem 0rem;
    color: #666; 
}
.activityWrap>.wrapline>span:nth-child(1){
    width: 1.493333rem;
    height: 1rem;
    color: #333;
    font-size:.16rem;
    padding: 0rem .093333rem;
    border: .026667rem solid #ddd;
    margin-right: .2rem;
}
.activityWrap>.wrapline>span:nth-child(2){
    width: 1.493333rem;
    height: 1rem;
    color: #333;
    font-size:.16rem;
    padding: 0rem .093333rem;
    border: .026667rem solid #ddd;
}
.activityWrap>.warpspan{
    width: 7.733333rem;
    height: .72rem;
    /* background: #333; */
}
.activityWrap>.actives{
   width: 7.733333rem;
   height: 2rem;
   display: flex;
   border-top:.026667rem solid #ccc; 
}
.activityWrap>.actives>.active-le{
    width: 6.146667rem;
    height: 1.5rem;
    color: #999;
    font-size: .266667rem;
    padding: 0rem .266667rem 0rem 0rem;
    /* background: #cccccc; */
    display: flex;
    flex-direction:column;
    justify-content: space-around;
}
.activityWrap>.actives>.active-le>.actRow{
    width: 5.88rem;
    height: .48rem;
    display: flex;
    justify-content: flex-start;
}
.activityWrap>.actives>.active-le>.actRow>span:nth-child(1){
    color: #fff;
    margin-right: .133333rem;
    background: #70bc46;
}
.activityWrap>.actives>.active-le>.cut>span:nth-child(1){
    background: #f07373;
}
.activityWrap>.actives>.active-le>.actRow>span:nth-child(2){
    width: 5.36rem;
    height: .48rem;
    color: #666;
}
.activityWrap>.actives>.active-ri{
    width: 1.573333rem;
    height: 1.1rem;
    color: #999;
    font-size: .266667rem;
    padding: .08rem .266667rem 0rem 0rem;
    display: flex;
    justify-content:center;
    overflow: hidden;
}
.activityWrap>.actives>.active-ri>.actDrop{
    color: #999;
}
.activityWrap>.actives>.active-ri>span:nth-child(2){
    width: .173333rem;
}
.activityWrap>.actives>.active-ri>.icon-drop-down:before{
    margin: -0.2rem;
}
</style>

