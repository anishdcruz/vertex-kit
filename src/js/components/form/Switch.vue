<template>
	<transition name="fade">
	<div class="switch" :class="[{'switch-checked': value, 'switch-disabled': disabled}]"
    @click="toggleSwitch">
  </div>
</transition>
</template>
<script>
  export default {
  	name: 'XSwitch',
  	model: {
  	  prop: 'value',
  	  event: 'input'
  	},
  	props: {
  	  value: [Boolean, Number],
  	  disabled: {
  	    type: Boolean,
  	    default: false
  	  }
  	},
  	methods: {
  	  toggleSwitch(e) {
  	  	if(this.disabled) return
  	    this.$emit('input', !this.value)
  	  }
  	}
  }
</script>