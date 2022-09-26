<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />
      <!-- menu bar-->
      <menu-bar-view-vue class=""/>
      <!--router-->
      <router-view />
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import MenuBarViewVue from './components/MenuBarView.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    MenuBarViewVue
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
