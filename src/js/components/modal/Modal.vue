<template>
	<transition name="fade">
	  <div class="modal-container">
	    	<div class="modal-mask" @click="handleMaskClick"></div>
	     	<div class="modal-wrapper" @click.self="handleWrapperClick">
	     		<div class="modal">
	     			<div class="modal-heading">
	     			  <div class="modal-title" v-if="$slots.title">
	     			  	<slot name="title"></slot>
	     			  </div>
	     			  <div class="modal-close" @click="close">
	     			    <span class="icon icon-x"></span>
	     			  </div>
	     			</div>
	     			<div class="modal-body">
	     				<slot></slot>
	     			</div>
	     			<div :class="[
	     				'modal-footer',
	     				alt ? 'modal-alt' : ''
	     			]">
	     				<template v-if="$slots.footer">
	     					<slot name="footer"></slot>
	     				</template>
	     				<div class="modal-actions" v-else>
	     					<x-button @click="cancel">{{cancelText}}</x-button>
                <x-button @click="ok" type="primary">{{okText}}</x-button>
	     				</div>
	     			</div>
	     		</div>
	     	</div>
	  </div>
  </transition>
</template>
<script>
  export default {
  	name: 'XModal',
  	props: {
  		alt: {
  			type: [Boolean, String],
  			default: false
  		},
  		loading: {
  		  type: Boolean,
  		  default: false
  		},
  		okText: {
  			default: 'Ok'
  		},
  		cancelText: {
  			default: 'Cancel'
  		}
  	},
  	methods: {
  		handleMaskClick(e) {
  			this.close()
  		},
  		cancel() {
  			this.$emit('cancel')
  		},
  		ok() {
  			this.$emit('ok')
  		},
  		close () {
        this.cancel()
      },
      handleWrapperClick () {
        this.close()
      },
      handleKeyCode (evt) {
        if (evt.keyCode === 27) { // esc
          this.close()
        }
      },
  	},
  	mounted () {
  	  document.addEventListener('keydown', this.handleKeyCode)
  	},
  	beforeDestory () {
  	  document.removeEventListener('keydown', this.handleKeyCode)
  	}
  }
</script>