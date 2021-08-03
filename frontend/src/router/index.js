import Vue from 'vue'
import Router from 'vue-router'

// PC端
import PcIndex from '@/pages/pcIndex'
import PcHome from '@/pages/pc/pcHome'

// 移动端
import MobileIndex from '@/pages/mobileIndex'
import MobileHome from '@/pages/mobile/mobileHome'

Vue.use(Router)

// 避免重复路由
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
