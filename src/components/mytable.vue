<template>
  <div>
      <table border="1">
          <thead>
              <tr >
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <thead>
              <tr v-for="(item,index) in arr" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.age}}</td>
                  <td>
                    <slot :row="item"></slot>
                  </td>
              </tr>
          </thead>
      </table>
  </div>
</template>

<script>
export default {
data(){
  return{
   
  }
},
props:{
    arr:{
        type:Array,
    }
}
}
</script>