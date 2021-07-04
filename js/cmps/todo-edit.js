import { todoService } from "../services/todo-service.js"

export default {
  template: `
  <form @submit.prevent="updateTodo(todo)" class="todo-edit">
    <input placeholder="Title" type="text" v-model="todo.title">
    <button>Edit</button>
  </form>
  `,

  data() {
    return {
      todo: ''
    }
  },
  created() {
    todoService.getById(this.$route.params)
      .then(todo => this.todo = todo)
  },

  methods: {
    updateTodo(todo) {
      this.$store.dispatch({ type: 'addTodo', todo })
      this.$router.push('/')
    }
  },



}