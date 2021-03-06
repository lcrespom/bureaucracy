<template>
	<table class="table table-hover crud-table">
		<colgroup v-if="hasButtons">
			<col style="width: 1px" />
		</colgroup>
		<thead>
			<tr>
				<th v-if="hasButtons" class="text-center border-top-0">Action</th>
				<th
					v-for="(col, idx) of config.labels" :key="idx"
					:class="getHeaderClass(idx)"
					class="border-top-0">
					{{col}}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, rownum) of data" :key="rownum">
				<td v-if="hasButtons" class="text-center nowrap">
					<template v-for="button of config.buttons">
						<a
							:key="button.text + rownum"
							@click="action(button.event, row)"
							:class="`btn btn-${button.style} btn-sm text-white`">
							<i :class="button.icon"></i>
							{{button.text}}
						</a>
						<span class="mr-1" :key="'span-' + button.text + rownum"/> <!-- some breathing space between buttons -->
					</template>
				</td>
				<crud-table-cell v-for="(col, idx) of config.fields" :key="idx"
					:row="row" :col="col" :config="config" :idx="idx" />
			</tr>
		</tbody>
	</table>
</template>

<script>
import { validateTypes } from '../utils/cmp-helpers'
import CrudTableCell from './crud-table-cell'


export default {
	components: { CrudTableCell },
	props: {
		data: Array,
		config: {
			validator:
				cfg => validateTypes('CrudTable', 'config', cfg, {
					fields: {
						required: true,
						type: 'Array'
					},
					labels: { type: 'Array' },
					buttons: { type: 'Array' }
				})
		}
	},

	computed: {
		hasButtons() {
			return this.config.buttons.length > 0
		}
	},

	methods: {
		action(event, row) {
			this.$emit(event, row)
		},
		getHeaderClass(idx) {
			let hdrClasses = this.config.hdrClasses || []
			return hdrClasses[idx] || ''
		}
	},

	helpers: {
		editButton: {
			style: 'warning', icon: 'fas fa-pen', text: 'Edit', event: 'edit'
		},
		removeButton: {
			style: 'danger', icon: 'far fa-trash-alt', text: 'Remove', event: 'remove'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	table.crud-table > tbody > tr> td {
		vertical-align: middle;
	}
	.nowrap {
		white-space: nowrap;
	}
</style>
