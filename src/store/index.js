import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 },
      { red: 20, green: 120, blue: 190 }
    ]
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    lengthColors: (state) => {
      return state.colors.length
    }
  },
  mutations: {
    ADD_COLOR (state, color) {
      console.log('fdf', color)
      state.colors.push(color)
    },
    DELETE_COLOR: (state, colorAsString) => {
      const colorComponents = colorAsString.substr(4).slice(0, -1).split(/[, ]+/)
      const colorIndex = state.colors.findIndex((color) => color.red === parseInt(colorComponents[0]) && color.green === parseInt(colorComponents[1]) && color.blue === parseInt(colorComponents[2]))

      return state.colors.splice(colorIndex, 1)
    }
  },
  actions: {
    addColores ({ commit }, colors) {
      console.log('222', colors)
      if (colors.length === 3) {
        const [red, green, blue] = colors
        commit('ADD_COLOR', { red, green, blue })
      }
    }
  }
})
