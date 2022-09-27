<template>
    <div class="flask fadeIn" :style="flaskStyle" ref="anime">
        <!-- decrement btn -->
        <button-item
          v-if="buttonsVisible"
          class="flask__btn flask__btn--left"
          icon="pi pi-sort-down"
          @click="animeFlask(); $emit('decrement')" />
        <div
          :class="fillClasses"
          :style="fillStyle" />
        <!-- increment btn -->
        <button-item
          v-if="buttonsVisible"
          class="flask__btn flask__btn--right"
          icon="pi pi-sort-up"
          :movement="-0.5"
          @click="animeFlask(); $emit('increment')" />
        <!-- Cancel button color in list-->
        <button-item
          v-if="buttonsTrashVisible"
          class="flask__btn flask__btn--center"
          icon="pi pi-trash"
          :movement="-0.5"
          />
    </div>
</template>
<script>
import ButtonItem from './ButtonItem.vue'
import modalMixin from '@/mixin/modalMixin'
import 'animate.css'

export default {
  name: 'FlaskItem',
  mixins: [modalMixin],
  props: {
    size: {
      type: Number,
      default: 10
    },
    amount: {
      type: Number,
      default: 50
    },
    color: {
      type: String
    },
    variant: {
      type: String
    },
    buttonsVisible: {
      type: Boolean,
      default: true
    },
    buttonsTrashVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    flaskStyle () {
      return {
        height: `${this.size}rem`,
        width: `${this.size}rem`
      }
    },
    fillClasses () {
      return ['flask__fill', this.variant && `flask__fill--${this.variant}`]
    },
    fillStyle () {
      const style = { height: this.amount + '%' }
      if (!this.variant) {
        style.backgroundColor = this.color || '#fff'
      }
      return style
    }
  },
  methods: {
    animeFlask () {
      console.log('animeFlask 1 ')
      this.$refs.anime.classList.add('zoomIn')
      console.log('animeFlask 2 ')
      setTimeout(() => {
        console.log('animeFlask 3 ')
        this.$refs.anime.classList.remove('zoomIn')
        console.log('animeFlask 4 ')
      }, 50)
    }
  },
  components: {
    ButtonItem
  }
}
</script>
<style lang="scss">
@import '@/styles/variables'
</style>
