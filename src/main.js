// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import VResource from 'vue-resource'
import IndexPage from './pages/index'
import proDetail from 'components/productdetails/prodetails'

Vue.use(VRouter)
Vue.use(VResource)
Vue.config.productionTip = false

let router = new VRouter({
	mode:'history',//去掉#
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/prodetails',
			component:proDetail
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
