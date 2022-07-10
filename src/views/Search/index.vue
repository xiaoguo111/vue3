<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <van-cell title="热门搜索" />
    <template v-if="list.length==0">
      <div style="padding: 10px 16px">
        <van-tag
          color="black"
          size="large"
          plain
          round
          type="primary"
          v-for="item in sousuolist"
          :key="item.first"
          style="margin-right: 6px"
          @click="clickfn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <!-- 最佳匹配 -->
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id" :title="item.name" :label="`${item.ar[0].name}-${item.name}`"/>
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTagApi, getSearchListApi } from '@/apis';
export default {
  data() {
    return {
      sousuolist: [],
      value: '',
      loading: false,
      finished: false,
      list: [],
    };
  },
  created() {
    this.loadHotList();
  },
  methods: {
    async loadHotList() {
      try {
        const res = await getSearchTagApi();
        console.log(res);
        this.sousuolist = res.data.result.hots;
      } catch (err) {
        console.log(err);
      }
    },
    async clickfn(val) {
      try {
        this.value = val;
        const res = await getSearchListApi({
          keywords: this.value,
        });
        this.loading=false,
        console.log(res);
        this.list = res.data.result.songs;
         this.$toast.success('提示成功')
      } catch (e) {
        console.log(e);
         this.$toast.fail('提示失败')

      }
    },
    onLoad() {},
  },
};
</script>

<style></style>
