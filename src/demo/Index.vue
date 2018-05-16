<template>
	<div class="content-inner">
		<x-panel margin alt>
			<div slot="title">Color & Typography</div>
			<div>
				<h1>Hello World</h1>
				<h2>Hello World</h2>
				<h3>Hello World</h3>
				<h4>Hello World</h4>
				<h5>Hello World</h5>
				<h6>Hello World</h6>
				<hr>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<hr class="hr2">
				<pre>hello world<br>my world
				</pre>
				<hr class="hr1">
				<strong>Hello world</strong>
				<small>Small åworld</small>
				<a disabled href="#" title="lorem">lorem</a>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<small slot="footer">footer</small>
		</x-panel>
		<x-panel :loading="true">
			<div slot="title">Card volla Title</div>
			<div slot="extra">
				<a href="#" title="Create">Create</a>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<small slot="footer">lorem 1</small>
		</x-panel>
	</div>
</template>

<style type="text/css">


</style>