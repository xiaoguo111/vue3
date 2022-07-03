<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters" @click="fn">
      <li>
        <a :class="{ selected: (isDone = 'all') }" href="javascript:;">全部</a>
      </li>
      <li>
        <a :class="{ selected: (isDone = 'no') }" href="javascript:;">未完成</a>
      </li>
      <li>
        <a :class="{ selected: (isDone = 'yes') }" href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
       isSel: 'all' ,
    };
  },
  props: ['arr1'],
  methods: {
    fn(){ // 切换筛选条件
      // 6.3 子 -> 父 把类型字符串传给App.vue 
      this.$emit("changeType", this.isSel)
    }
  },
  computed: {
    count() {
      return this.arr1.length;
    },
  
  },
};
</script>
