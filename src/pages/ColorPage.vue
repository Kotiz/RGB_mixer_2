<template>
    <div>
        <header-page>
            <template v-slot:header>Color</template>
        </header-page>
        <header-page>
            <template v-slot:header-small>You`ve picked a great color!</template>
        </header-page>
        <center>
          <flask-item
            :buttonsVisible="false"
            :size="15"
            :amount="100"
            :color="calculateColour2()"/></center>
        </div>
        <button-item
          :text="test"
          @click="$emit('')"
          :size="2"
          :movement="-0.5"
          :font-size="0.9"
          icon="pi pi-share-alt" />
    <InputText type="text" v-model="$route.fullPath" />
  <!-- <p @click="$router.go(-1)">go back</p>
  <p @click="goBack()">go back</p> -->
</template>
<script>
import FlaskItem from '@/components/shared/FlaskItem.vue'
import ButtonItem from '@/components/shared/ButtonItem.vue'
import HeaderPage from '@/components/shared/HeaderPage.vue'
import InputText from 'primevue/inputtext'
import modalMixin from '@/mixin/modalMixin'

export default {
  name: 'ColorPage',
  components: {
    FlaskItem, InputText, ButtonItem, HeaderPage
  },
  mixins: [modalMixin],
  data: () => ({
    mixtures2: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]

  }),
  created () {
    this.mixtures2[0].amount = this.$route.params.red
    this.mixtures2[1].amount = this.$route.params.green
    this.mixtures2[2].amount = this.$route.params.blue
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    mixtureEffectFill () {
      return this.calculateColour2(this.mixtures2)
    },
    calculateColour2 () {
      const [redCol, greenCol, blueCol] = this.mixtures2.map(item => Math.floor(item.amount * 2.5))

      const color = `rgb(${redCol}, ${greenCol}, ${blueCol})`

      console.log('calcular 222', color)

      return color
    }

  }
}
</script>
