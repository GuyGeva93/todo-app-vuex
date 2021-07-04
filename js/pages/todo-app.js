import todoList from "../cmps/todo-list.js"
import todoFilter from "../cmps/todo-filter.js"
import { todoService } from "../services/todo-service.js"
import { showMsg } from "../services/event-bus-service.js"



export default {
  template: `
  <section class="todo-app">
    <section class="todo-app-list">
      <todo-filter @filter="setFilter"/>
      <todo-list :todos="todos" />
    </section>
    <section class="add-todo">
      <h2>Add todo</h2>
      <form @submit.prevent="addTodo(todoToAdd)">
        <input placeholder="Title" type="text" v-model="todoToAdd.title">
        <button>Add</button>
      </form>
    </section>
  </section>
  `,

  data() {
    return {
      todoToAdd: todoService.getEmptyTodo()
    }
  },

  methods: {
    addTodo(todo) {
      this.$store.dispatch({ type: 'addTodo', todo })
        .then(todo => {
          showMsg(`Todo ${todo._id} saved`)
          this.todoToAdd = todoService.getEmptyTodo()
        })
    },
    setFilter(filterBy) {
      this.$store.commit({ type: 'setFilter', filterBy })
    }
  },

  created() {
    this.$store.dispatch({ type: 'loadTodos' });
  },

  computed: {
    todos() {
      return this.$store.getters.todosForDisplay
    },
  },

  components: {
    todoList,
    todoFilter
  },

}
