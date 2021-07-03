import todoPreview from "./todo-preview.js"


export default {
  props: ['todos'],

  template: `
  <section class="todo-list" >
    <section class="todo-list-container" v-for="todo in todos" :key="todo._id">
      <todo-preview @addTodo="addTodo(todo._id)" :todo="todo"/>
    </section>
  </section>
  
  `,
  components: {
    todoPreview,
  },

  methods: {
    addTodo(todo) {
      this.$emit('addTodo', todo)
    }
  },

}