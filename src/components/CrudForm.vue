<template>
	<form class="form-horizontal" @submit="submit">
		<template v-for="(field, idx) of config.fields">
		<div class="form-group form-row" :key="idx">
			<label class="col-sm-3 col-form-label text-right font-weight-bold">
				{{config.labels[idx]}}
			</label>
			<div class="col-sm-9">
				<crud-input :data="data" :field="field" :config="config"
					:focus="idx == 0" />
			</div>
		</div>
		</template>

		<div class="form-group">
			<div class="col-sm-12 text-center">
				<button class="btn btn-primary" type="submit">
					<i class="fas fa-check"></i>
					Save
				</button>
				&nbsp;&nbsp;
				<a class="btn btn-info text-white" @click="cancel">
					<i class="fas fa-times"></i>
					Cancel
				</a>
			</div>
		</div>
	</form>
</template>

<script>
import { validateTypes } from '../utils/cmp-helpers'
import { backRoute } from '../utils/router'
import CrudInput from './crud-input'


export default {
	components: { CrudInput },
	props: {
		data: Object,
		config: {
			validator:
				cfg => validateTypes('CrudForm', 'config', cfg, {
					fields: {
						required: true,
						type: 'Array'
					},
					labels: { type: 'Array' },
				})
		}
	},
	methods: {
		cancel() {
			backRoute()
		},
		submit(event) {
			event.preventDefault()
			this.$emit('submit', this.data)
		}
	}
}
</script>

<style>
</style>
