<template>
  <div >
     <!-- 1. 变量准备-静态页面铺设 -->
   <input type="text" v-model="val">
     <input type="text" v-bind:value='val1' @input='inputfn'/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      val:'7768979897',
     val1:''
    };
  },
  methods: {
    inputfn(e){
      this.val1=e.target.value;
    }
  }
};
</script

<style>

</style>