<template>
	<transition name="fade">
	  <div :class="[
				'tag',
	      type ? `tag-${type}` : ''
	    ]">
	  	<span class="tag-text">
	  		<slot></slot>
	  	</span>
	  	<span class="icon icon-x tag-close" v-if="closable" @click="handleClose"></span>
	  </div>
	</transition>
</template>
<script>
  export default {
  	name: 'Tag',
  	props: {
  		type: {
			  type: String,
			  default: 'default'
			},
			closable: {
			  type: Boolean,
			  default: false
			}
  	},
  	methods: {
  		handleClose(e) {
  			this.$emit('close', e)
  		}
  	}
  }
</script>