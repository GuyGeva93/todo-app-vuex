import todoList from "../cmps/todo-list.js"


export default {
  template: `
  <section class="todo-app">
    <button @click="inc(1)">+</button>
    <todo-list :todos="todosForDisplay"></todo-list>
    <span>{{countForDisplay}}</span>
    <input type="text" v-model="newTodo.title">
    <!-- <span>{{todosForDisplay}}</span> -->
    <button @click="inc(10)">+10</button>
  </section>
  
  `,

  data() {
    return {
      newTodo: {
        title: '',
        severity: ''
      }
    }
  },

  methods: {
    inc(val) {
      this.$store.commit({ type: 'updateCount', val })
    },
    addTodo() {
      this.$store.commit({ type: 'addtodo', newTodo: this.newTodo })
    }
  },

  computed: {
    todosForDisplay() {
      return this.$store.state.todos
    },
    countForDisplay() {
      return this.$store.state.count
    }
  },

  components: {
    todoList,
  },

}
