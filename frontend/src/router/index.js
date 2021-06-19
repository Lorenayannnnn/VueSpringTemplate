import Vue from 'vue'
import Router from 'vue-router'

// PC端
import PcIndex from '@/components/pcIndex'
import PcHome from '@/components/pc/pcHome'

// 移动端
import MobileIndex from '@/components/mobileIndex'
import MobileHome from '@/components/mobile/mobileHome'

Vue.use(Router)

// 避免重复路由
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
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
