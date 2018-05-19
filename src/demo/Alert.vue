<template>
  <div class="content-inner">
    <x-panel margin>
      <div slot="title">Message</div>
      <div>
        <x-button @click="handleClick('info')">Info</x-button>
        <x-button @click="handleClick('success')">Success</x-button>
        <x-button @click="handleClick('warning')">Warning</x-button>
        <x-button @click="handleClick('error')">Error</x-button>
      </div>
    </x-panel>
    <x-panel margin>
      <div slot="title">Modal</div>
      <div>
        <x-modal v-if="a.s1" @cancel="hide('s1')">
          <div slot="title">Project Title</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </x-modal>
        <x-modal v-if="a.s2" @cancel="hide('s2')" @ok="hide('s2')"
          cancelText="Close" okText="Save" alt>
          <div slot="title">Project Title2</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </x-modal>
        <button @click="show('s1')">Show</button>
        <button @click="hide('s1')">Hide</button>
        <button @click="show('s2')">2 Show</button>
        <button @click="hide('s2')">2 Hide</button>
      </div>
    </x-panel>
    <x-panel margin>
      <div slot="title">Loading Bar</div>
      <div>
        <button @click="$bar.start()">Start</button>
        <button @click="$bar.finish()">Finish</button>
      </div>
    </x-panel>
  	<x-panel margin>
  		<div slot="title">Alerts</div>
  		<div>
  			<x-alert message="Here is the information~Here"></x-alert>
  			<br>
  			<x-alert message="Here is the information~Here is the information" type="error"></x-alert>
  			<br>
  			<x-alert message="Here is the information~Here" type="warning"></x-alert>
  			<br>
  			<x-alert message="Here is the information~" type="info" v-if="a1" @close="a1 = false" closable></x-alert>
  		</div>
  	</x-panel>
  </div>
</template>
<script>
  export default {
  	data() {
  		return {
  			a1: true,
        a: {
          s1: false,
          s2: false
        }
  		}
  	},
    methods: {
      show(id) {
        this.a[id] = true
      },
      hide(id) {
        this.a[id] = false
      },
      handleClick(type) {
        if (type === 'info') {
          this.$message.info('This is a info message!')
        } else if (type === 'success') {
          this.$message.success('This is a success message!')
        } else if (type === 'warning') {
          this.$message.warning('This is a warning message!')
        } else if (type === 'error') {
          this.$message.error('This is a error message!', 0)
        }
      }
    }
  }
</script>
<style lang="scss">
</style>