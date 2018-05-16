<template>
	<div class="content-inner">
		<x-row :key="n" v-for="n in 24/2">
		  <x-col :span="n">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #FFFF66FF;"></div>
		  </x-col>
		  <div :class="`col-${24 - n}`">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #FF8000FF;"></div>
		  </div>
		</x-row>
		<hr>
		<x-row gutter :key="`z${n}`" v-for="n in 24/2">
		  <div :class="`col-${n}`">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #FFFF66FF;"></div>
		  </div>
		  <div :class="`col-${24 - n}`">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #FF8000FF;"></div>
		  </div>
		</x-row>
		<hr>
		<div class="row" v-for="n in 6">
		  <div class="col-2">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #00FF80FF;"></div>
		  </div>
		  <x-col span="2" :offset="n">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #0080FFFF;"></div>
		  </x-col>
		</div>
		<div class="row">
		  <div class="col-2">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #00FF80FF;"></div>
		  </div>
		  <x-col span="2" offset="20">
		  	<div style="margin-bottom: 5px; padding: 15px; background: #0080FFFF;"></div>
		  </x-col>
		</div>
	</div>
</template>