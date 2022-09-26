<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
    :key="index"
    v-for="(mixture, index) in mixtures"
    :buttonTrashVisible="true"
    :variant="mixture.variant"
    :amount="mixture.amount"
    @increment="$emit('increment', index)"
    @decrement="$emit('decrement', index)" />
    </ul>
</template>

<script>
// import MixtureItem from './MixtureItem'
import FlaskItem from './shared/FlaskItem.vue'

export default {
  name: 'Mixtures-list',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  components: {
    FlaskItem
  }
}
</script>
<style lang="scss">
  @import '@/styles/variables'
</style>
