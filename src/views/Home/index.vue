<template>
  <div class="home-container" style="padding-bottom:48px">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in gedanlist" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{item.name}}</p>
      </van-grid-item>
    </van-grid>
    <!-- 最佳匹配 -->
       <van-cell title="最佳匹配" class="title"/>
   <van-cell :label="item.song.artists[0].name" :title="item.name" v-for="item in zuijialist" :key="item.id">
    <template>
      <van-icon color="#000" name="play-circle-o" size="28" />
    </template>
  </van-cell>
  </div>
</template>

<script>
import {getGedanApi,getZuijiaApi} from '@/apis'
export default {
  data(){
   return{
     gedanlist:[],
     zuijialist:[],
   }
  },
  created(){
   this.getGedanList()
   this.getZuijiaList()
  },
  methods:{
   async getGedanList(){
    try{
      const res=await getGedanApi(
         {
             limit: 6,
         }
      );
      console.log(res);
      this.gedanlist=res.data.result
    }catch(e){
     console.log(e);
    }
   },
   async getZuijiaList(){
    try{
      const res=await getZuijiaApi()
      console.log(res);
      this.zuijialist=res.data.result
    }catch(e){
     console.log(e);
    }
   }
  }
  };
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value{
    padding-top:10px;
    flex: 0 0 30px;
  }
}
</style>
