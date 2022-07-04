<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
    <Demo ref="mydemo"></Demo>
    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// ref $refs ==> 获取dom元素/组件
// 目标: 获取组件对象
// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 组件起别名ref 起一个标记的作用
// 3. 恰当时机, 获取组件对象
import Demo from "./Child/Demo.vue";
export default {
  beforeMount() {
    console.log(this.$refs.myP);
    this.$nextTick(() => {
      console.log(this.$refs.myP);
    });
  },
  mounted() {
    // console.log(document.querySelector("#h"));
    console.log(this.$refs.mydemo); // 拿到vue组件 vue实例
    this.$refs.mydemo.fn();
    console.log(this.$refs.myH, this.$refs["myH"]);
  },
  data() {
    return {
      count: 0,
    };
  },
  // ref 获取原生DOM元素
  methods: {
    btn() {
      // count++
      // 获取P的里的内容
      this.count++;
      console.log(this.count);

      // vuedom是异步更新的
      // DOM更新完会挨个触发$nextTick里的函数体
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML);
      }); // 延时触发
    },
  },
  components: {
    Demo,
  },
};
</script>

<style></style>
