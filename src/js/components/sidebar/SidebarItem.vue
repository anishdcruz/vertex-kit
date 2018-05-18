<template>
  <router-link :to="link" class="sidebar-item">
  	<div class="sidebar-icon" v-if="icon">
  		<span :class="`icon icon-${icon}`"></span>
  	</div>
  	<div class="sidebar-text">
  		<slot></slot>
  	</div>
  	<div class="sidebar-arrow">
  		<span class="icon icon-chevron-right"></span>
  	</div>
  </router-link>
</template>
<script>
  export default {
  	name: 'XSidebarItem',
  	props: {
  		link: String,
  		icon: {
  			default: null
  		}
  	}
  }
</script>