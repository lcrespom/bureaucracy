<template>
  <div id="app">
    <crud-popup></crud-popup>
    <!-- Top navbar -->
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <b>Bureaucracy</b>
          </a>
        </div>
      </div>
    </nav>
    <!-- Container form menu and main -->
    <div id="crud-main" class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <!-- Menu goes here -->
          <div id="crud-menu" class="card bg-light mt-3">
            <crud-menu
              :items="menuItems"
              cssClass="list-group list-group-flush"
            />
          </div>
        </div>
        <div class="col-sm-9">
          <!-- Main goes here -->
          <div id="crud-content" class="card bg-light mt-3 p-3">
            <crud-container :config="appConfig" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.navbar-header,
.navbar-brand {
  width: 100%;
  text-align: center;
}
.navbar-brand {
  color: white !important;
  font-size: 150%;
}
</style>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import CrudMenu from './components/CrudMenu.vue'
import CrudContainer from './components/CrudContainer.vue'
import CrudPopup from './components/CrudPopup.vue'
import { routerData } from './utils/router'
import appConfig from './app-config'


function getMenuItems() {
  return [
    { text: 'Books', route: '/books' },
    { text: 'Authors', route: '/authors' },
    { text: 'Members', route: '/members' },
    { text: 'Book items', route: '/items' },
    { text: 'Rentals', route: '/rentals' }
  ]
}

export default {
  name: 'App',
  components: {
    CrudMenu,
    CrudContainer,
    CrudPopup
  },
  data() {
    return {
      menuItems: getMenuItems(),
      appConfig,
      routerData
    }
  }
}
</script>
