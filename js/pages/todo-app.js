import todoList from "../cmps/todo-list.js"


export default {
  template: `
  <section class="todo-app">
    <button @click="inc(1)">+</button>
    <span>{{countForDisplay}}</span>
    <button @click="inc(10)">+10</button>
  </section>
  
  `,

  methods: {
    inc(val) {
      this.$store.commit({ type: 'updateCount', val })

    }
  },

  computed: {
    countForDisplay() {
      return this.$store.state.count
    }
  },

  components: {
    todoList,
  },

}
