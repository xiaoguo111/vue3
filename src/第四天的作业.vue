<template>
  <div>
  <h1>国内网站粉丝数量：{{arr |fnn(3) }}万</h1>
  <h1>外网站粉丝数量：{{arr |fnn(4) }}千</h1>
  <h2>时间：{{list | time('-',)}}</h2>
  <h2>时间：{{list | time('/')}}</h2>
  </div>
</template>

<script>
import moment from 'moment'

export default {
data () {
  return {
    arr:'1876986',
    list:'1636450540055'
  }
},
filters: {
  time(val,ss){
    // console.log(ss);
    const l= val.number
    return moment(l).format('YYYY'+ss+'MM'+ss+'SS')
  }
}
}
</script>

<style>

</style>