import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HansRouters from '../router/kk-hans'
// import ZwlRouters from '../router/kk-zwl'
// import HuoRouters from '../router/kk-huo'
// import YuanRouters from '../router/kk-yuan'

// var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
  // kkRouters
})
