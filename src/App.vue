<template>
	<div class="container">
		<div class="navbar">
			NAV
		</div>
		<div class="container-main">
			<div class="sidebar">
				SIDE
			</div>
			<div class="content">
				<router-view :key="$route.path"></router-view>
			</div>
		</div>
	</div>
</template>
