import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login, redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }

]

const router = new VueRouter({
  routes
})

// 挂在路由导航首位
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  if (to.path=='/login') {
    return next();
  }
  if(!window.sessionStorage.getItem('token')){
    return next('/login');
  }
  next();
  
})
export default router
