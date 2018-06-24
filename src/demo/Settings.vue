<template>
	<div class="settings">
		<div class="settings-sidebar">
			<div class="settings-sidebar-inner">
			    <strong class="settings-title">Settings</strong>
			    <ul class="settings-list">
			        <li>
			        	<router-link to="#" class="settings-link">
			        		<span class="settings-text">General</span>
			        		<i class="settings-icon icon icon-chevron-right"></i>
			        	</router-link>
			        </li>
			        <li>
			        	<router-link to="#" class="settings-link">
			        		<span class="settings-text">CSS Stylesheet</span>
			        		<i class="settings-icon icon icon-chevron-right"></i>
			        	</router-link>
			        </li>
			        <li class="settings-break"></li>
              <li>
  		        	<router-link to="#" class="settings-link">
  		        		<span class="settings-text">Page Header</span>
  		        		<i class="settings-icon icon icon-chevron-right"></i>
  		        	</router-link>
  		        </li>
  		        <li>
  		        	<router-link to="#" class="settings-link">
  		        		<span class="settings-text">Page Footer</span>
  		        		<i class="settings-icon icon icon-chevron-right"></i>
  		        	</router-link>
  		        </li>
			        <li class="settings-break"></li>
			        <li>
	            	<span class="settings-control">
	            		<strong>Pages</strong>
	            		<x-button type="success" size="sm">Add</x-button>
	            	</span>
	            </li>
	            <li class="settings-no">
	            	<small>No Pages added!</small>
	            </li>
			    </ul>
			</div>
		</div>
		<div class="settings-content">
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
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

		components: {

		},
		data () {
		    return {
		        items: [
		            {to: '/settings', title: 'General'},
		            {to: '/settings', title: 'Stylesheet'},
		            {to: '/settings', title: 'Header'},
		            {to: '/settings', title: 'Footer'},
		            {to: '/settings', title: 'Pages', break: true}
		        ]
		    }
		}
	}
</script>