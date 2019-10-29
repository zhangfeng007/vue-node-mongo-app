<template>
  <div id="ShoppingMall">
    <div class="search-bar">
        <van-row gutter="5">
            <van-col span="3"><van-icon name="arrow-left" class="myIconStyle"/></van-col>
            <van-col span="16">
              <input type="text" class="search-input"/>
            </van-col>
            <van-col span="5"><van-button size="mini">查找</van-button></van-col>
          
        </van-row>
        <div class="swiper-area">
          <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                  <img :src="banner.imageUrl" width="100%"/>
              </van-swipe-item>
          </van-swipe>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerPicArray:[
            {imageUrl:require('@/assets/images/image1.jpg')},
            {imageUrl:require('@/assets/images/image2.jpg')},
            {imageUrl:require('@/assets/images/image1.jpg')},
        ]
      }
    },
    methods: {

      test(a,b) {

        
      }
    },
    created(){
      this.$get('/index').then(res=>{
        this.category=response.data.data.category;
        console.log(res);
      })
    }
  }
</script>

<style scoped>
#ShoppingMall {
  font-size: 24px;
}
.search-bar{
    height:60px;
    background-color: #e5017d;
    line-height:60px;

}
.search-input{
    width:100%;
    height: 40px;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 1px solid 1px !important ;
    background-color: #e5017d;
    color:#fff;
}
.location-icon{
    padding-top: 10px;
    padding-left: 30px;
}
.myIconStyle{
  font-size: 20px;
  color: #fff;
}
.swiper-area{
    /* width:20rem; */
    clear:both;
}
</style>