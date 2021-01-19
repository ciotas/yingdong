import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';
import {
  Carousel,
  CarouselItem,
  MessageBox,
  Dialog,
  // Dialog,
} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
// Vue.use(Dialog);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')