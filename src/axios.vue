<template>
  <div>
    <h1>1.生命周期</h1>
  <Mylife v-if="isShow" ref="mylife"></Mylife>
  <button @click="clickfn">销毁组件</button>
  <br>
  <h1>2.axios使用</h1>
  <use1></use1>
  <br>
  <h1>3.$refs使用</h1>
  <!-- <most></most> -->
  <br>
  <h1>4.next的使用</h1>
  <tick></tick>
  <br>
  <h1>5.name</h1>
  <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Mylife from './components/Life.vue'
import use1 from './components/UseAxios.vue'
import tick from './components/Tick.vue'
import com from './components/Com.vue'
export default {
data(){
  return {
  isShow: true,
  }
},
components:{
  Mylife,
  use1,
  // most
  tick,
  // com
  ComNameHaHa:com
},
methods: {
  clickfn(){
    this.isShow=false
    // setTimeout(()=>{
    //  console.log(this.$refs.mylife);
    // },3000)
  }
}
}
</script>

<style>

</style>