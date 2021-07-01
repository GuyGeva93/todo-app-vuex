
export const options = {
  strict: true,
  state: {
    //todos:
    count: 0
  },
  mutations: {
    updateCount(state, { val }) {
      state.count += val
    }
  }
}

export const myStore = new Vuex.Store(options)