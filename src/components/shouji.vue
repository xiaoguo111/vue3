<template>
<div>
 <input type="checkbox" checked>中国大陆
 <input type="checkbox" checked>中国香港
 <div>手机号码:
    <slot name="jiji"></slot>
    <!-- <input type="text"> -->
 </div>
</div>
</template>

<script>
export default {
 data () {
      return {
       
      };
    }
}
</script>

<style>

</style>