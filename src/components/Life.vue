<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <button @click="arr.push('1000')">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: "LifeAxiosLife",

  data() {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
    };
  },
  created(){
 console.log('created===执行');
 console.log(this.msg);
//  this.fn()
//  this.timer=setInterval(()=>{
//   console.log(111);
//  },1000)
  },
  mounted(){
    console.log('mounted===');
    console.log(document.getElementById('myP'));
  },
  beforeUpdate(){
    console.log('beforeUpdate==执行');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL>li')[4]);
  },
  updated(){
    console.log('updated==执行');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL>li')[4]);
  },
  beforeDestroy(){
    console.log('beforeDestroy==执行');
    console.log(this.msg);
    clearInterval(this.timer)
  },
  destroyed () {
    console.log('destroyed==执行');
    console.log(this.msg);
  }
};
</script>

<style scoped></style>
