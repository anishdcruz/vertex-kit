<template>
	<div class="content-inner">
		<div>
			<x-button type="primary">Primary</x-button>
			<x-button type="secondary">Secondary</x-button>
			<x-button type="success">Success</x-button>
			<x-button type="error">Error</x-button>
			<x-button type="link">Link</x-button>
			<x-button>Default</x-button>
			<x-button disabled>okk</x-button>

			<a href="#" class="btn btn-primary">Primary</a>
			<x-button type="primary" size="sm">Primary</x-button>
		</div>
		<div>
			<x-button-group>
				<x-button type="primary">Primary</x-button>
				<x-button type="secondary">Secondary</x-button>
				<x-button type="success">Success</x-button>
			</x-button-group>
		</div>
		<x-button-group>
			<x-icon name="user"></x-icon>
			<x-button icon="user" type="primary">Primary</x-button>
			<x-button icon="user" type="secondary">Secondary</x-button>
			<x-button icon="user" type="success">Success</x-button>
		</x-button-group>
	</div>
</template>

<script type="text/javascript">
	export default {

		components: {

		}
	}
</script>