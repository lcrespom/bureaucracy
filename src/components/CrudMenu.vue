<template>
  <div :class="cssClass">
    <template v-for="item of items">
      <a v-if="item.route" :href="item.route" @click="itemClicked(item, $event)"
        :class="{ active: isActive(item) }" class="list-group-item list-group-item-action bg-light">
        {{item.text}}
      </a>
      <a v-if="item.url" :href="item.url"
      :class="{ active: isActive(item) }" class="list-group-item list-group-item-action bg-light">
        {{item.text}}
      </a>
    </template>
  </div>
</template>


<style>
a.list-group-item {
  border: 0;
}
a.list-group-item.active {
  font-weight: bold;
  background: #007bff !important;
}
</style>


<script>
import { routerData, setRoute } from '../utils/router'

export default {
  props: {
    cssClass: String,
    items: Array
  },
  data() {
    return { routerData }
  },
  methods: {
    isActive(item) {
      return item.route && routerData.routeName == item.route.slice(1)
    },
    itemClicked(item, event) {
      setRoute(event, item.route)
    }
  }
}
</script>
