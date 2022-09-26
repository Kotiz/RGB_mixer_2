<template>
  <header-page>
    <template v-slot:header>Mixin</template>
  </header-page>
  <ColorMixin />
</template>
<script>
import ColorMixin from '@/components/ColorMixin.vue'
import HeaderPage from '@/components/shared/HeaderPage.vue'

export default {
  name: 'MixinPage',
  components: {
    ColorMixin, HeaderPage
  }
}
</script>
