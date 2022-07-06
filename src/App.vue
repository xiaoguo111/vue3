<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <usename></usename>
    <hr />
    <h1>2. 组件缓存</h1>
    <usename1></usename1>
    <hr />
    <h1>3. 组件-插槽</h1>
    <usepanel> wo aadsd </usepanel>
    <hr />
    <h1>4. 组件-具名插槽</h1>
    <usepanel2></usepanel2>
    <hr />
    <h1>5. 组件-作用域插槽</h1>
    <usepanel3></usepanel3>
    <hr />
    <h1>6. 作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    <usepanel4></usepanel4>
    <hr />
    <hr />
    <h1>7. 作业1</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    <usepanel5>
      <template v-slot:id="scope">
        {{ scope.row.id }}
      </template>
      <template v-slot:ming="scope">
        {{ scope.row.name }}
      </template>
      <template v-slot:age="scope">
        <input type="text" v-model="scope.row.age" />
      </template>
      <template v-slot:tu="scope">
        <div v-if="scope.row.type == 0">
          <a href="">{{ scope.row.headImgUrl }}</a>
        </div>
        <div v-else-if="scope.row.type == 1">
          <img :src="scope.row.headImgUrl" alt="" width="40px" />
        </div>
        <div v-else-if="scope.row.type == 2">
          <input type="text" v-model="scope.row.headImgUrl" />
        </div>
      </template>
    </usepanel5>
    

    <h1>8.作业2</h1>
    <button @click="conname = 'usepanel6'">手机注册</button> -->
    <button @click="conname = 'usepanel7'">邮箱注册</button>
     <keep-alive>
      <component :is="conname"> 
          <template v-slot:jiji>
            <input type="text" placeholder="输入手机号">
          </template>
          <template v-slot:gigi>
            <input type="text" placeholder="输入邮箱">
          </template>
      </component>
     </keep-alive>
    <br />
    <h1>9. 自定义指令</h1>
  </div>
</template>

<script>
import usename from './views/01_UseDynamic.vue';
import usename1 from './views/02_UseDynamic.vue';
import usepanel from './views/03_UseSlot.vue';
import usepanel2 from './views/04_UseSlot.vue';
import usepanel3 from './views/05_UseSlot.vue';
import usepanel4 from './views/06_UseTable.vue';
import usepanel5 from './components/shiji.vue';
import usepanel6 from './components/shouji.vue';
import usepanel7 from './components/youxiang.vue';
export default {
  data() {
    return {
      conname: 'usepanel6',
    };
  },
  components: {
    usename,
    usename1,
    usepanel,
    usepanel2,
    usepanel3,
    usepanel4,
    usepanel5,
    usepanel6,
    usepanel7,
  },
};
</script>

<style></style>
