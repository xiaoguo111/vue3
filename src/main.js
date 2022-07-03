import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import PannelG from './components/折叠面板.vue'
import './assets/styles/base.css'
import './assets/styles/index.css'

Vue.config.productionTip = false;
Vue.filter('toLowerCase', (val) => {
  return val.toLowerCase();
});
Vue.filter('toReverse', (val, f) => {
  // val 字符串
  return val
    .split('')
    .reverse()
    .join(f || '');
});
Vue.filter('formatDate', (val) => {
  // val 字符串
  return moment(val).format('YYYY-MM-DD');
});
Vue.filter('fnn', (val, num) => {
  const arr1 = val.split('');
  arr1.splice(num, 1, '.');
  return arr1.join('');
});
Vue.filter('time', (val,ss) => {
  // val 字符串
  return moment(val).format('YYYY'+ss+'MM'+ss+'SS');
});
Vue.component("PannelG", PannelG)
new Vue({
  render: (h) => h(App),
}).$mount('#app');
