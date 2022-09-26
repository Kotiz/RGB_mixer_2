const modalMixin = {
  data: () => ({
    modalVisible: false,
    mixtures: [
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
  methods: {
    showModal () {
      this.modalVisible = true
    },
    hideModal () {
      console.log('TO TU JESTESMY')
      this.modalVisible = false
    },
    calculateColour () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))

      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    calculateColourAsArray () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))

      return [redCol, greenCol, blueCol]
    }
  }
}
export default modalMixin
