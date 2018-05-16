import "@/scss/app.scss"

import Row from '@/js/components/grid/Row.vue'
import Col from '@/js/components/grid/Col.vue'
import Panel from '@/js/components/panel/Panel.vue'
import Button from '@/js/components/button/Button.vue'
import ButtonGroup from '@/js/components/button/ButtonGroup.vue'
import Icon from '@/js/components/icon/Icon.vue'

const components = {
	Row,
	Col,
	Panel,
	Button,
	ButtonGroup,
	Icon
}

const prefix = 'X';

function install(Vue) {
	if(install.installed) return

	for(const item in components) {
		if(components[item].name) {
			Vue.component(`${prefix}${components[item].name}`, components[item])
		}
	}
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	...components
}