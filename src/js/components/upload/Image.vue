<template>
  <div class="upload-image">
  	<div v-if="uploadedFile" class="upload-image-preview">
  		<div class="upload-image-close" @click.prevent="close">
  			<span class="icon icon-x"></span>
  		</div>
  		<img :src="uploadedFile" class="upload-image-img">
  	</div>
  	<div class="upload-image-inner" tabindex="0" v-else
  		@dragover.prevent="onDragOver"
  		@drop.prevent="handleDrop">
  		<div class="upload-image-content">
  			<span class="upload-image-icon icon icon-image"></span>
  			<small>Click or drag files here to upload</small>
  		</div>
  	</div>
  </div>
</template>
<script>
  export default {
  	name: 'XImageUpload',
  	data() {
  		return {
  			uploadedFile: null
  		}
  	},
  	methods: {
  		close() {
  			this.uploadedFile = null
  		},
  		onDragOver(e) {

  		},
  		handleDrop(e) {
  			this.upload(e.dataTransfer.files[0])
  		},
  		upload(file) {
				if (!file || !file.type.match(/image.*/)) return
				const fileReader = new FileReader()

				fileReader.onload = (event) => {
				    this.uploadedFile = event.target.result
				}

				fileReader.readAsDataURL(file)
  		}
  	}
  }
</script>