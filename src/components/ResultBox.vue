<template>
  <div>
    <!-- text between -->
    <p
      v-text="'And the result...'" />
    <!-- nowy komponent FlaskItem-->
    <center><flask-item
      :buttonsVisible="false"
      :size="15"
      :amount="100"
      :color="mixtureEffectFill2(mixtures)"/></center>

    <p>value of {{ mixtureEffectFill2(mixtures) }}</p>
    <p>There are {{ lengthColors }} color in your pocket // jak się dostać do store length</p>

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="0.9"
      icon="pi pi-refresh"
      class="refresh-btn" />

      <button-item
      @click="showModal()"
      :size="4"
      :movement="-0.5"
      :font-size="0.9"
      icon="pi pi-question"
      class="refresh-btn" />

      <transition name="slide-fade">
      <rabarbar-modal-component v-if="modalVisible" @cancel="hideModal()">
          <template v-slot:header>
          </template>

          <template v-slot:body>
            Mix three colors to create the perfect one!
          </template>

          <template v-slot:footer />

      </rabarbar-modal-component>
    </transition>

      <router-link :to="'/color/'+ mixtures[0]['amount'] +
        '/' + mixtures[1]['amount'] + '/' + mixtures[2]['amount'] ">
        <button-item
          @click="$emit('')"
          :size="4"
          :movement="-0.5"
          :font-size="0.9"
          icon="pi pi-share-alt"
          class="refresh-btn" />
      </router-link>
{{ returnLinkRgb(mixtures) }}
      <router-link :to="'/MyColors'">
        <button-item
          @click="addColores(returnLinkRgb(mixtures))"
          :size="4"
          :movement="-0.5"
          :font-size="0.9"
          icon="pi pi-pencil"
          class="refresh-btn" />
      </router-link>
  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem.vue'
import FlaskItem from './shared/FlaskItem.vue'
import RabarbarModalComponent from '@/components/modals/rabarbar.modal.vue'
import modalMixin from '@/mixin/modalMixin'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ResultsBox',
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['addColores']),
    ...mapMutations(['ADD_COLOR']),

    mixtureEffectFill2 (mixtures) {
      const [redCol, greenCol, blueCol] = mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    returnLinkRgb (mixtures) {
      const [redCol, greenCol, blueCol] = mixtures.map(item => Math.floor(item.amount * 2.5))
      return [redCol, greenCol, blueCol]
    }
  },
  computed: {
    ...mapGetters(['lengthColors'])
  },
  components: {
    RabarbarModalComponent,
    ButtonItem,
    FlaskItem
  }
}
</script>

<style lang="scss">
@import '@/styles/variables'
</style>
