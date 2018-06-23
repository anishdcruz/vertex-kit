<template>
  <div class="content-inner">
  	<x-panel multiple>
  		<div slot="title">Table of Vue.js</div>
  		<div>
  			<x-table class="item-table">
  				<x-thead>
  					<x-tr>
  						<th class="w-12">Description</th>
  						<x-table-cell type="th" size="2">U.O.M</x-table-cell>
  						<x-table-cell type="th" size="3">Unit Price</x-table-cell>
  						<x-table-cell type="th" size="3">Qty</x-table-cell>
  						<x-table-cell type="th" size="4">Total</x-table-cell>
  					</x-tr>
  				</x-thead>
  				<x-tbody>
  					<x-tr v-for="x in 2">
  						<td>
  							<x-typeahead-array v-model="f.b" :options="[]"></x-typeahead-array>
  						</td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  					</x-tr>
  				</x-tbody>
  				<x-tfoot>
  					<tr>
  						<td colspan="3"></td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  						<td>
  							<x-input v-model="f.a"></x-input>
  						</td>
  					</tr>
  				</x-tfoot>
  			</x-table>
  		</div>
  	</x-panel>
  </div>
</template>
<script>
  export default {
  	data() {
  		return {
  			f: {
  				a: 'ok',
  				b: null
  			}
  		}
  	}
  }
</script>
<style lang="scss">
</style>