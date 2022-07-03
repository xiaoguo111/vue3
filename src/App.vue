<template>
  <div>
    <TodoHeader @add="addfn"></TodoHeader>
    <TodoMain :list="list" @delfn="delX"></TodoMain>
    <TodoFooter :arr1="showArr" @changeType="typeFn"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 101, name: '睡觉', isDone: false },
        { id: 102, name: '打豆豆', isDone: true },
      ],
        getSel: "all" 
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addfn(val) {
      // console.log(val);
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id: id,
      });
    },
    delX(id) {
      // console.log(id);
      const index = this.list.findIndex((ele) => {
        ele.id == id;
      });
      this.list.splice(index, 1);
    },
    typeFn(str) {
      // 'all' 'yes' 'no' // 修改类型
      this.getSel = str;
    },
  },
  computed: {
    showArr() {
      if (this.getSel === 'yes') {
        // 显示已完成
        return this.list.filter((obj) => obj.isDone === true);
      } else if (this.getSel === 'no') {
        // 显示未完成
        return this.list.filter((obj) => obj.isDone === false);
      } else {
        return this.list; // 全部显示
      }
    },
  },
};
</script>

<style></style>
