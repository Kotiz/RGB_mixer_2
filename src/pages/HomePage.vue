<template>
  <header-page>
    <template v-slot:header>Home</template>
  </header-page>
<div class="animate__animated animate__bounce animate__delay-2s">
  <message
  :closable="false"
  severity="warn" >Warning! This app is still development</message>
</div>
</template>
<script>
import HeaderPage from '@/components/shared/HeaderPage.vue'
import Message from 'primevue/message'
import 'animate.css'
export default {
  name: 'HomePage',
  components: {
    HeaderPage, Message
  }
}
</script>
