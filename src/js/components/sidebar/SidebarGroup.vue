<template>
  <div class="sidebar-group">
  	<div class="sidebar-heading">
  		<strong class="sidebar-title">{{title}}</strong>
  		<span class="sidebar-line"></span>
  	</div>
  	<slot></slot>
  </div>
</template>
<script>
  export default {
  	name: 'SidebarGroup',
  	props: {
  		title: String
  	}
  }
</script>