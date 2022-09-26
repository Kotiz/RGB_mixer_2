<template>
  <button
  @click="$emit('click')"
  :style="btnStyles"
  class="btn">
    <span
      v-if="icon"
      :class="`${iconSet} ${icon}`" />
    <span
      v-if="text"
      v-text="text" />
      <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ButtonItem',
  props: {
    icon: {
      type: String
    },
    size: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 1
    },
    movement: {
      type: Number,
      default: 0.5
    },
    iconSet: {
      type: String,
      default: 'pi pi-sort-alt'
    },
    text: {
      type: String
    }
  },
  computed: {
    btnStyles () {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        fontSize: `${this.fontSize}rem`,
        movement: `${this.movement}rem`
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables'
</style>
