<template>
	<transition name="move-up">
  <div class="message-wrap">
  	<div class="message-item">
  		<div :class="['message-content', `message-${item.type}`]">
  		  <div class="message-icon">
  		    <i :class="['icon', `icon-${iconClass}`]"></i>
  		  </div>
  		  <div class="message-text">
  		    {{item.text}}
  		  </div>
  		  <div class="message-close" @click="close" v-if="item.duration === 0">
  		  	<span class="icon icon-x"></span>
  		  </div>
  		</div>
  	</div>
  </div>
</transition>
</template>
<script>
  export default {
  	name: 'XMessageItem',
  	props: {
  	  item: {
  	    required: true
  	  }
  	},
  	computed: {
  	  iconClass () {
  	    const classArr = {
  	      'success': 'check-circle',
          'error': 'x-circle',
          'warning': 'alert-circle',
          'info': 'info'
  	    }

  	    return this.icon || classArr[this.item.type]
  	  }
  	},
  	mounted () {
  	  this.startTimer()
  	},
  	methods: {
  	  startTimer () {
  	    if(this.item.duration === 0) return
  	    setTimeout(() => {
  	      this.$emit('close', this.item.id)
  	    }, this.item.duration)
  	  },
  	  close() {
  	  	this.$emit('close', this.item.id)
  	  }
  	}
  }
</script>