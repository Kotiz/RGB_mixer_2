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
    DELETE_COLOR: (state, color) => {
      return state.colors.splice(color)
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
