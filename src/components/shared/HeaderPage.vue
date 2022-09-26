<template>
      <header>
        <h1 class="page-title animate__animated animate__fadeInLeft">
          <slot name="header" />
        </h1>
      </header>
      <header>
        <h4 class="page-title-small">
          <slot name="header-small" />
        </h4>
      </header>
  </template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style lang="scss">
@import '@/styles/variables'
</style>
