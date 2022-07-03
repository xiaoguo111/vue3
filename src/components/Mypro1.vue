<template>
  <div class="my-product">
    <h3>标题: {{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}</p>
    <p>{{ obj.info }}</p>
    <button @click="change">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // props: ['title','price','info']
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    change(){
        // this.obj.proname='sadsadasdadaddadsad'不推荐
    }
  }
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
