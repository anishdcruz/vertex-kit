<template>
	<button :class="[
			'btn',
      type ? `btn-${type}` : '',
      size ? `btn-${size}` : ''
    ]"
    :disabled="disabled"
    type="button"
		@click="handleClick">
		<span :class="`btn-icon icon icon-${icon}`" v-if="icon"></span>
		<span class="btn-text" v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>
<script>
	export default {
		name: 'Button',
		props: {
			type: {
			  type: String,
			  default: 'default'
			},
			size: String,
			icon: {
				default: null
			},
			disabled: {
			  type: Boolean,
			  default: false
			},
			loading: {
			  type: Boolean,
			  default: false
			}
		},
		methods: {
		  handleClick (evt) {
		    this.$emit('click', evt)
		  }
		}
	}
</script>