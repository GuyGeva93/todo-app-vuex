import { showMsg } from "../services/event-bus-service.js"

export default {
  props: ['todo'],

  template: `
  <section class="todo-preview">
    <span @click.stop="toggleDone(todo._id)" :class="{done: todo.isDone}">{{todo.title}}</span>
    <button @click.stop="removeTodo(todo._id)">X</button>
    <router-link :to="'/edit/'+todo._id">Edit</router-link>
  </section>
  `,

  methods: {
    removeTodo(todoId) {
      this.$store.dispatch({ type: 'removeTodo', todoId })
        .then(() => {
          showMsg('Todo was succesfully removed')
        })
        .catch(() => {
          showMsg('Cannot remove todo, try again later', 'danger')
        })
    },
    toggleDone(todoId) {
      this.$store.dispatch({ type: 'toggleDone', todoId })
      this.todo.isDone = !this.todo.isDone
    }
  },
}