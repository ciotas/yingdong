import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"

//解决使用this.$router.push,跳转向同一个页面会发生报错的问题
//同时能够解决使用this.$router.push,跳转时发生重定向报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
})

export default router