
export default {
  props: ['todo'],

  template: `
  <section class="todo-preview">
    <span @click="toggleDone(todo._id)" :class="{done: todo.isDone}">{{todo.title}}</span>
    <button @click="removeTodo(todo._id)">X</button>
    <router-link :to="'/edit/'+todo._id">Edit</router-link>
  </section>
  `,

  methods: {
    removeTodo(todoId) {
      this.$store.commit({ type: 'removeTodo', todoId })
    },
    toggleDone(todoId) {
      this.$store.commit({ type: 'toggleDone', todoId })
      this.todo.isDone = !this.todo.isDone
    }
  },


}