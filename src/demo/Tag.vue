<template>
  <div class="content-inner">
  	<h1>Tag</h1>
    <br>
  	<div>
  		<x-tag type="default">One Tag</x-tag>
  		<x-tag type="primary">One Tag</x-tag>
  		<x-tag type="success" closable>One Tag</x-tag>
  		<x-tag type="error">One Tag</x-tag>
  		<x-tag type="warning">One Tag</x-tag>
  		<x-tag type="default" closable>One Tag</x-tag>
  		<x-tag type="default" v-if="show" @close="show = false" closable>One Tag</x-tag>
  	</div>
  </div>
</template>
<script>
  export default {
  	data() {
  		return {
  			show: true
  		}
  	}
  }
</script>
<style lang="scss">
</style>