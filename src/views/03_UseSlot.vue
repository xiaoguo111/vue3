<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <panel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <slot></slot>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
      <img src="../assets/a.jpg" alt="">
      </panel>
    </div>
  </div>
</template>

<script>
import panel from '../components/Panel.vue'
export default {
  components: {
    panel,
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