<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
     <iddd>
      <template v-slot:idd>
        <img src="../assets/a.jpg" alt="">
        小郭
      </template>
      <template v-slot:iddd>
        <img src="../assets/mm.gif" alt="">
        小李
      </template>
     </iddd>
    </div>
  </div>
</template>

<script>
import iddd from '../components/Panel.vue'
export default {
  components: {
    iddd
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>