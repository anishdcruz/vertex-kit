<template>
  <div class="dropdown">
  	<slot name="button" :toggle="toggle">
  		<x-button @click="toggle()" :icon="icon">
        <span v-if="title">{{title}}</span>
      </x-button>
  	</slot>
  	<div :class="`dropdown-inner dropdown-${dir}`" ref="inside">
      <transition name="fade">
  		<slot name="menu" v-if="show"></slot>
    </transition>
  	</div>
  </div>
</template>
<script>
  export default {
  	name: 'XDropdown',
  	props: {
  		icon: {
  			default: null
  		},
  		title: String,
      dir: {
        default: 'left'
      }
  	},
  	data() {
  		return {
  			show: false
  		}
  	},
  	methods: {
  		toggle() {
  			if(this.show) {
          this.close()
        } else {
          this.open()
        }
  		},
      open() {
          this.show = true
          this.$nextTick(() => {
              document.addEventListener('click', this.clickOutEvent)
              document.addEventListener('keydown', this.handleKeyCode)
          })
      },
      close() {
        document.removeEventListener('click', this.clickOutEvent)
        document.removeEventListener('keydown', this.handleKeyCode)
        this.show = false
      },
      clickOutEvent(evt) {
        var $dd = this.$refs.inside
        if (evt.target !== $dd && !$dd.contains(evt.target)) {
          this.close()
        }
      },
      handleKeyCode (evt) {
        if (evt.keyCode === 27) {
          this.close()
        }
      }
  	}
  }
</script>