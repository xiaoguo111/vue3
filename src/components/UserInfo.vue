<!--UserInfo.vue -->
<template>
  <div>
      <div>
          <span>人生格言:</span>
          <input type="text">
      </div>
      <div>
          <span>个人简介:</span>
          <textarea></textarea>
      </div>
  </div>
</template>
<script>
export default {
    created(){
        console.log('userinfo');
    },
    activated(){
        console.log('userinfo--激活');
    },
    deactivated(){
        console.log('deactivated--失去激活');
    }
}
</script>