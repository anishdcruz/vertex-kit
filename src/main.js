import Vue from "vue"
import Router from "vue-router"
import Vertex from "@/js/app"

Vue.use(Vertex)
Vue.use(Router)

import App from "@/App.vue"

const router = new Router({
	routes: [
		{path: '/', component: () => import('./demo/Index.vue')},
		{path: '/grid', component: () => import('./demo/Grid.vue')},
		{path: '/button', component: () => import('./demo/Button.vue')},
		{path: '/icon', component: () => import('./demo/Icon.vue')},
		{path: '/tag', component: () => import('./demo/Tag.vue')},
		{path: '/form', component: () => import('./demo/Form.vue')},
		{path: '/alert', component: () => import('./demo/Alert.vue')},
		{path: '/table', component: () => import('./demo/Table.vue')}
	]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount("#app")
