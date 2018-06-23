<template>
	<div class="content-inner">
		<x-panel margin>
			<div slot="title">Dropdown</div>
			<x-row>
				<x-col span="6">
					<x-dropdown icon="more-vertical">
						<x-dropdown-menu slot="menu">
							<x-dropdown-item>Mark as sent</x-dropdown-item>
							<x-dropdown-item>Convert to Invoice</x-dropdown-item>
							<x-dropdown-item>View something</x-dropdown-item>
							<x-dropdown-item>Edit</x-dropdown-item>
							<x-dropdown-item divide>Clone</x-dropdown-item>
							<x-dropdown-item>
								<a href="#">Delete</a>
							</x-dropdown-item>
						</x-dropdown-menu>
					</x-dropdown>
				</x-col>
				<x-col span="6">
					<x-dropdown title="default" dir="right">
						<strong slot="button" slot-scope="{ toggle }" @click="toggle()">Custom Trigger</strong>
						<x-dropdown-menu slot="menu">
							<x-dropdown-item>Form</x-dropdown-item>
						</x-dropdown-menu>
					</x-dropdown>
				</x-col>
			</x-row>
		</x-panel>
		<x-panel margin>
			<div slot="title">Buttons</div>
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
			<hr>
			<div>
				<x-button-group>
					<x-button icon="users"></x-button>
					<x-button icon="users"></x-button>
					<x-button icon="users"></x-button>
				</x-button-group>
			</div>
			<hr>
			<x-button-group>
				<x-button icon="users" type="primary">Primary</x-button>
				<x-button icon="users" type="secondary">Secondary</x-button>
				<x-button icon="users" type="success">Success</x-button>
			</x-button-group>
		</x-panel>
	</div>
</template>

<script type="text/javascript">
	export default {

		components: {

		}
	}
</script>