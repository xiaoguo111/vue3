<template>
  <div>{{msg}}
  <h1>{{obj.name}}</h1>
  <h1>{{obj.age}}</h1>
  <h1>{{obj.age>=18?'成年':'未成年'}}</h1>
  <a :href="href">百度一下</a>
  <img src="./assets/logo.png" alt="">
  <img :src="imgl" alt="">
  <p>商品总数 {{count}}</p>
  <button v-on:click="count++">+1</button>
  <button v-on:click="addFn">+1</button>
  <button v-on:click="addFn1(5)">+5</button>
  <button @click="subFn">-1</button>
  </div>
  
</template>

<script>
import imgl from './assets/logo.png'
export default {
   name:'App',
   data(){
    return{
      msg:'hello world',
      obj:{
        name:'小郭',
        age:7
      },
      href:'https://www.baidu.com/?tn=62095104_19_oem_dg',
      imgUrl:'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgl,
      count:0
    }
   },
  methods:{
    addFn(){
      this.count++;
    },
    addFn1(val) {
      // console.log(val);
      this.count += 5;
      // this.count = this.count + 5
    },
    subFn() {
      this.count--;
    }
  }
}
</script>

<style>

</style>