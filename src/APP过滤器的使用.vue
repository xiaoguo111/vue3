<template>
  <div>
    {{ msg | fn }}
    <h1>{{ msg | toLowerCase | toReverse }}</h1>
    <h1 :title="msg | toLowerCase | toReverse">{{ msg | toReverse('*') }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world',
    };
  },
  filters: {
    fn(val) {
      console.log(val);
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
