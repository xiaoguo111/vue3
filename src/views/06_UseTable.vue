<template>
  <div>
      <!-- <table border="1">
          <thead>
              <tr >
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <thead>
              <tr v-for="(item,index) in list" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.age}}</td>
                  <td>
                    <img :src="item.headImgUrl" alt="">
                  </td>
              </tr>
          </thead>
      </table> -->
      <mytable :arr="list">
      <template v-slot="scope">
      <img :src="scope.row.headImgUrl" alt="" width="40px">
      </template>
      </mytable>
      <mytable :arr="list">
      <template v-slot="scope">
     <a :href="scope.row.headImgUrl">{{scope.row.headImgUrl}}</a>
      </template>
      </mytable>
  
  </div>
</template>

<script>
import mytable from '../components/mytable.vue'
export default {
data(){
  return{
   list: [
    {
        name: "小传同学",
        age: 18,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
    },
    {
        name: "小黑同学",
        age: 25,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
    },
    {
        name: "智慧同学",
        age: 21,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
    },
],
  }
},
 components:{
  mytable
 }
}
</script>