<template>
	<div class="container">
		<div class="navbar">

		</div>
		<div class="container-main">
			<x-sidebar>
				<x-sidebar-item link="/grid" icon="home">Grid</x-sidebar-item>
				<x-sidebar-item link="/icon" icon="arrow-right">Icon Fonts</x-sidebar-item>
				<x-sidebar-item link="/button" icon="anchor">Button</x-sidebar-item>
				<x-sidebar-group title="Sales">
					<x-sidebar-item link="/" icon="align-center">Panel</x-sidebar-item>
					<x-sidebar-item link="/tag" icon="arrow-right">Tag</x-sidebar-item>
					<x-sidebar-item link="/form" icon="anchor">Form</x-sidebar-item>
					<x-sidebar-item link="/Alert" icon="arrow-right">Alert</x-sidebar-item>
					<x-sidebar-item link="/table" icon="anchor">Table</x-sidebar-item>
				</x-sidebar-group>
				<x-sidebar-group title="Inventory">
					<x-sidebar-item link="/panel" icon="align-center">Items</x-sidebar-item>
					<x-sidebar-item link="/icon" icon="arrow-right">Icon Fonts</x-sidebar-item>
				</x-sidebar-group>
				<x-sidebar-group title="Purchase">
					<x-sidebar-item link="/panel" icon="align-center">Panel</x-sidebar-item>
					<x-sidebar-item link="/icon" icon="arrow-right">Icon Fonts</x-sidebar-item>
					<x-sidebar-item link="/button" icon="anchor">Button</x-sidebar-item>
					<x-sidebar-item link="/icon" icon="arrow-right">Icon Fonts</x-sidebar-item>
					<x-sidebar-item link="/button" icon="anchor">Button</x-sidebar-item>
				</x-sidebar-group>
				<x-sidebar-group title="Accounts">
					<x-sidebar-item link="/panel" icon="align-center">Panel</x-sidebar-item>
					<x-sidebar-item link="/icon" icon="arrow-right">Icon Fonts</x-sidebar-item>
				</x-sidebar-group>
			</x-sidebar>
			<div class="content">
				<router-view :key="$route.path"></router-view>
			</div>
		</div>
	</div>
</template>
