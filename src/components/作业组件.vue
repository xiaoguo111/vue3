<template>
  <div>
    <p>1. 查询某本书籍信息</p>
    <input
      type="text"
      placeholder="请输入要查询 的书名"
      v-model.trim="shuming"
    />
    <button @click="chaxun">查询</button>
    <p>2. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="add">发布</button>
    <br />
    <table border="1" width="700" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>序列号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>
            {{ item.publisher }}<a href="#" @click="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      shuming: '',
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  created() {
    this.$axios({
      url: '/api/getbooks',
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    chaxun() {
      if (this.shuming == '') {
        return alert('请输入书名');
      }
      this.$axios({
        url: '/api/getbooks',
        params: {
          bookname: this.shuming,
        },
      }).then((res) => {
        if (res.data.data.length == 0) {
          return alert('没有这本书哟');
        }
        console.log(res.data.data);
      });
      this.shuming = '';
    },
    add() {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...this.bookObj,
        },
      }).then((res) => {
        this.$axios({
          url: '/api/getbooks',
        }).then((res) => {
          console.log(res);
          this.list = res.data.data;
        });
      });
       this.bookObj.bookname='';
      this.bookObj.author='';
      this.bookObj.publisher=''
    },
    del(val) {
      const index = this.list.findIndex((ele) => ele.id === val);
      this.list.splice(index, 1);
    },
  },
};
</script>

<style></style>
