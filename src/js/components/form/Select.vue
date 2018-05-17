<template>
  <div class="select-form">
  	<div class="select-input" :tabindex="tabindex" ref="toggle"
			@click="toggle"  @keydown.down.prevent="onDownKey"
			@keydown.enter="onEnter"
			@keydown.up.prevent="onUpKey" @keydown.esc="onBlur"
			@blur="onBlur">
  		<span class="select-text">{{selectedText}}</span>
  		<span :class="[`select-icon icon icon-chevron-${showDropdown ? 'up' : 'down'}`]"></span>
  	</div>
  	<div class="select-dropdown" v-if="showDropdown">
  		<transition name="fade">
  			<div class="select-inner">
  				<div class="select-items" ref="items">
  					<div :class="['select-item', selectIndex === i ? 'select-active':'']"
  						@mouseover.prevent="onMouse(i)"
  						@mousedown.prevent="select(option)"
  						v-for="(option, i) in options"
  						>
  					<span>{{option.value}}</span>
  				</div>
  				</div>
  			</div>
  		</transition>
  	</div>
  </div>
</template>
<script>
  export default {
  	name: 'Select',
  	 model: {
      prop: 'value',
      event: 'input'
    },
    props: {
    	tabindex: {
    		default: 0
    	},
    	value: Object,
    	options: Array
    },
    data() {
    	return {
    		showDropdown: false,
    		selectIndex: -1
    	}
    },
    computed: {
    	selectedText() {
    		return this.value && this.value.value ? this.value.value : 'Select'
    	}
    },
    methods: {
    	select(option) {
    		this.$emit('input', option)
    		this.close()
    	},
    	onEnter() {
    		if(this.selectIndex < 0) return
    		const option = this.options[this.selectIndex]
    		this.select(option)
    	},
    	onBlur() {
    		this.close()
    	},
    	close() {
    		this.showDropdown = false
    		this.selectIndex = -1
    	},
    	open() {
    		this.showDropdown = true
    	},
    	toggle() {
    		if(this.showDropdown) {
    			this.close()
    		} else {
    			this.open()
    		}
    	},
    	onMouse(index) {
    		this.selectIndex = index
    	},
    	onUpKey(e) {
    		if (this.selectIndex > 0) {
    		  this.selectIndex--
    		  if(this.selectIndex > 4) {
	    		  this.$nextTick(() => {
	    		  	// todo: algo to find best scroll position
	    		  	this.$refs.items.scrollTop -= 28
	    		  })
    			}
    		} else {
    			this.selectIndex = this.options.length - 1
    			this.$nextTick(() => {
    		  	this.$refs.items.scrollTop = this.selectIndex * 28
    		  })
    		}
    	},
    	onDownKey(e) {
    		if(!this.showDropdown) {
    			this.open()
    		}
    		if (this.options.length - 1 > this.selectIndex) {
    		  this.selectIndex++
    		  if(this.selectIndex > 4) {
	    		  this.$nextTick(() => {
	    		  	this.$refs.items.scrollTop += 28
	    		  })
    			}
    		} else {
    			this.selectIndex = 0
    			this.$nextTick(() => {
    		  	this.$refs.items.scrollTop = 0
    		  })
    		}

    	},
    	handleKeyOnFocus(e) {
    		const keyCode = e.keyCode || e.which
    		if (!e.shiftKey && keyCode !== 9 && !this.showDropdown) {
    		  this.open()
    		}
    	}
    }
  }
</script>