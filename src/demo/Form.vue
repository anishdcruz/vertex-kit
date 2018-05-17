<template>
  <div class="content-inner">
    <x-panel margin>
      <div slot="title">Select</div>
      <x-row>
        <x-col span="8">
          <div class="form-group">
            <label class="form-label">Selection 1</label>
            <x-select v-model="form.sel1" :options="opt.sel1"></x-select>
          </div>
        </x-col>
      </x-row>
      <x-row>
        <x-form-group col="10" source="select" v-model="form.sel1" :options="opt.sel1" label="Is Ok?" :errors="['A', 'B']" optional></x-form-group>
        <x-col span="10">
          <div class="form-group">
            <label class="form-label">Selection 2</label>
            <x-select v-model="form.sel1" :options="opt.sel1"></x-select>
          </div>
        </x-col>
      </x-row>
    </x-panel>

  	<x-panel>
  		<div slot="title">Form Inputs</div>
  		<x-row>
  			<x-col span="8">
            <label class="form-label">Label 1</label>
            <x-input v-model="form.inp1"></x-input>
            <small class="error-input">Please clear the errors.</small>
        </x-col>
        <x-col span="8">
            <label class="form-label">Label 2</label>
            <x-input v-model="form.inp2" placeholder="place"></x-input>
            <small class="error-input">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</small>
        </x-col>
        <x-col span="8">
            <label class="form-label">
              Customer
              <small class="form-optional">(optional)</small>
            </label>
            <x-input v-model="form.inp3" disabled></x-input>
            <small class="error-input">Please clear the errors.</small>
        </x-col>
  		</x-row>
      <hr>
      <x-row>
        <x-col span="8">
            <x-form-group v-model="form.inp1" label="Username" :errors="['A', 'B']" optional></x-form-group>
        </x-col>
        <x-form-group textarea col="4" offset="4" v-model="form.inp1" label="Whoami"></x-form-group>
        <x-form-group col="4" v-model="form.inp1" label="Whoami"></x-form-group>
        <x-col span="4">
            <label class="form-label">
              Customer
              <small class="form-optional">(optional)</small>
            </label>
            <x-input v-model="form.inp3" disabled></x-input>
            <small class="error-input">Please clear the errors.</small>
        </x-col>
      </x-row>
       <x-row>
        <x-col span="8">
          <div class="form-group">
            <label class="form-label">
                Description
              </label>
            <x-input v-model="form.inp3"></x-input>
          </div>
          <div class="form-group">
            <label class="form-label">
                Description
              </label>
            <x-input v-model="form.inp3"></x-input>
          </div>
        </x-col>
        <x-col span="8">
            <label class="form-label">
              Description 2
            </label>
            <x-textarea v-model="form.inp3"></x-textarea>
            <small class="error-input">Please clear the errors.</small>
        </x-col>
      </x-row>
  	</x-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          inp1: 'ok',
          inp2: null,
          inp3: 'disabled',
          sel1: {name: 'apple', value: 'Apple'}
        },
        opt: {
          sel1: [
            {name: 'apple', value: 'Apple'},
            {name: 'mango', value: 'Mango'},
            {name: 'orange', value: 'Orange'}
          ]
        }
      }
    }
  }
</script>
<style lang="scss">
</style>