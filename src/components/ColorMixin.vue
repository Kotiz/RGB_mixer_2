<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
      :mixtures="mixtures" />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import modalMixin from '@/mixin/modalMixin'

export default {
  name: 'ColorMixin',
  mixins: [modalMixin],
  methods: {
    increment (index) {
      const mixture = this.mixtures[index]
      console.log('inc mixture.amount 1', mixture.amount)
      if (mixture.amount === 100) return false
      mixture.amount++
      console.log('inc mixture.amount 2', mixture.amount)
    },

    decrement (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      mixture.amount--
    },

    refresh () {
      this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
