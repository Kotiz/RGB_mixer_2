<template>
  <div>
    <header-page>
      <template v-slot:header >My Colors</template>
    </header-page>
    <MyColorList/>
</div>
</template>
<script>
import HeaderPage from '@/components/shared/HeaderPage.vue'
import MyColorList from '@/components/MyColorList.vue'
// import { mapState } from 'vuex'
import 'animate.css'

export default {
  name: 'MyColorsPage',
  components: {
    HeaderPage,
    MyColorList
  }
  // computed: mapState(['colors']),
  // calculateColour2 () {
  //   const [redCol, greenCol, blueCol] = this.mixtures2.map(item => Math.floor(item.amount * 2.5))

  //   const color = `rgb(${redCol}, ${greenCol}, ${blueCol})`

  //   console.log('calcular 222', color)

  //   return color
  // }
}
</script>
