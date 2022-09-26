<template>
  <header-page>
    <template v-slot:header >About</template>
  </header-page>
  <header-page>
    <template v-slot:header-small>This app was builit with Vue.js</template>
  </header-page>
    <img src="@/assets/logoVue.png" class="animate__animated animate__fadeInLeft">
</template>
<script>
import HeaderPage from '@/components/shared/HeaderPage.vue'
import 'animate.css'

export default {
  name: 'AboutPage',
  components: {
    HeaderPage
  }
}
</script>
