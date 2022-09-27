<template>
  <ul class="mixtures animate__animated animate__bounce">
  <FlaskItem
    v-for="color in colors" :key="color"
    :buttonsTrashVisible="true"
    :buttonsVisible="false"
    @click="DELETE_COLOR(color)"
    :size="8"
    :amount="100"
    :color="color"/></ul>
    <!-- {{ colors }} -->
    <hr>

</template>
<script>
import FlaskItem from './shared/FlaskItem.vue'
import 'animate.css'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MyColorList',
  //   computed: mapState(['colors']),
  computed: mapGetters({ colors: 'RGBColors' }),
  components: { FlaskItem },
  methods: {
    ...mapMutations(['DELETE_COLOR'])
  }
}
</script>
<style lang="scss">
@import '@/styles/variables'
</style>
