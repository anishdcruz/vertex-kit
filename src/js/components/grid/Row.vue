<template>
	<div :class="[
		'row',
		gutter ? 'row-no-gutter' : ''
	]">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Row',
		props: {
			gutter: {
				type: [Boolean, String],
				default: false
			}
		}
	}
</script>