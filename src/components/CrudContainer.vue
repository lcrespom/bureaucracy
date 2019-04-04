<template>
	<div>
		<!-- Generic home -->
		<div v-if="routerData.route=='/'">
			<h2>Welcome</h2>
		</div>
		<!-- Route found -->
		<template v-else-if="cfg">
			<!-- Table view -->
			<template v-if="routerData.mode == 'table'">
				<div class="entity-title-box">
					<h2 class="entity-title">{{title}}</h2>
          <!-- Table title buttons -->
          <span class="table-title-buttons">
            <button accesskey="B" class="btn btn-info">
              <span aria-hidden="true" class="glyphicon glyphicon-search"></span>
              Search
            </button>
            &nbsp;
            <a class="btn btn-primary" @click="$emit('newRow')">
              <span aria-hidden="true" class="glyphicon glyphicon-plus"></span>
              New
            </a>
          </span>
          <!-- End of table title buttons -->
				</div>
				<crud-table :config="cfg.table" :data="tableData" @edit="editRow" @remove="removeRow" />
			</template>
			<!-- Form view -->
			<template v-else>
				<div class="entity-title-box">
					<h2 class="entity-title">{{title}}</h2>
				</div>
				<crud-form :config="cfg.form" :data="formData" @submit="submitForm"/>
			</template>
		</template>
		<!-- No route found -->
		<span v-else>No config for {{routerData.route}}</span>
	</div>
</template>

<script src="./crud-container.js"></script>

<style>
.entity-title {
	display: inline;
}
.entity-title-box {
	margin-bottom: 1em;
}
.table-title-buttons {
	float: right;
}
</style>