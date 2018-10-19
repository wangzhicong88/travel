import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import City from '@/page/city/city'
import Detail from '@/page/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'home',
    	component: home
    },{
    	path:'/city',
    	name:'City',
    	component: City
		},
		{
    	path:'/detail/:id',
    	name:'Detail',
    	component: Detail
    }
	],
	// 点击跌幅 定位问题
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
