import Vue from 'vue'
import Router from 'vue-router'

// PC端
const PcIndex = () => import('@/pages/pcIndex')
const PcHome = () => import('@/pages/pc/pcHome')

// 移动端
const MobileIndex = () => import('@/pages/mobileIndex')
const MobileHome = () => import('@/pages/mobile/mobileHome')

Vue.use(Router)

// 避免重复路由
const originalPush = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pc',
      name: 'pcIndex',
      component: PcIndex,
      children: [{
        path: 'home',
        name: 'pcHome',
        component: PcHome
      }]
    },
    {
      path: '/mobile',
      name: 'mobileIndex',
      component: MobileIndex,
      children: [{
        path: 'home',
        name: 'mobileHome',
        component: MobileHome
      }]
    }
  ]
})
