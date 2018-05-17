import Vue from "vue"
import Router from "vue-router"
import Vertex from "@/js/app"

Vue.use(Vertex)
Vue.use(Router)

import App from "@/App.vue"
import Index from "@/demo/Index.vue"
import Grid from "@/demo/Grid.vue"
import Button from "@/demo/Button.vue"
import Icon from "@/demo/Icon.vue"
import Tag from "@/demo/Tag.vue"
import Form from "@/demo/Form.vue"

const router = new Router({
	routes: [
		{path: '/', component: Index},
		{path: '/grid', component: Grid},
		{path: '/button', component: Button},
		{path: '/icon', component: Icon},
		{path: '/tag', component: Tag},
		{path: '/form', component: Form}
	]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount("#app")
