<template>
    <Menubar :model="items" class="menuBar" />
</template>
<script>
import Menubar from 'primevue/menubar'

export default {
  name: 'MenuBarView',
  components: {
    Menubar
  },
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-filter',
          to: 'mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-info-circle',
          to: 'about'
        },
        {
          label: 'My Colors',
          icon: 'pi pi-sliders-v',
          to: 'myColors'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables'
</style>
