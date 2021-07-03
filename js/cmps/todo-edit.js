import { todoService } from "../services/todo-service.js"

export default {
  template: `
  <form @submit.prevent="addTodo(todo)" class="todo-edit">
    <input placeholder="Title" type="text" v-model="todo.title">
    <button>Edit</button>
  </form>
  `,

  data() {
    return {
      todo: null
    }
  },
  created() {
    this.todo = todoService.getById(this.$route.params);
  },

  methods: {
    addTodo(todo) {
      this.$store.commit({ type: 'saveTodo', todo })
      this.$router.push('/')
    }
  },



}