<template>
  <div>
  
    <ul>
        <li><router-link to="/contacts/all">All_contacts</router-link></li>
        <li><router-link to="/contacts/alice" >Alice</router-link></li>
        <li><router-link to="/contacts/bob" >Bob</router-link></li>
    </ul>
      <button @click="btn">随机显示</button>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
     return{
     }
    },
methods:{
    btn(){
        const num=Math.floor(Math.random()*3+1)
        console.log(num);
    }
}
}
</script>

<style>

</style>