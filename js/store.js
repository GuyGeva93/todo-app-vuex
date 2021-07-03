import { todoService } from "./services/todo-service.js"
import { userService } from "./services/user-service.js"

export const options = {
  strict: true,
  state: {
    todos: todoService.query(),
    filterBy: 'all',
    user: userService.query(),
  },

  getters: {
    todosForDisplay(state) {
      let todosToShow = JSON.parse(JSON.stringify(state.todos))
      if (state.filterBy === 'all') return todosToShow

      if (state.filterBy === 'active') {
        todosToShow = state.todos.filter(todo => !todo.isDone)
      } else {
        todosToShow = state.todos.filter(todo => todo.isDone)
      }
      return todosToShow
    },
    getUser(state) {
      return JSON.parse(JSON.stringify(state.user))
    }
  },

  mutations: {
    saveTodo(state, { todo }) {
      todoService.save(todo)
      state.todos = todoService.query()
    },
    removeTodo(state, { todoId }) {
      todoService.remove(todoId)
      state.todos = todoService.query()
    },
    toggleDone(state, { todoId }) {
      todoService.toggleDone(todoId)
      state.todos = todoService.query()
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    saveUser(state, { user }) {
      userService.save(user)
      state.user = userService.query()
    }
  }
}

export const myStore = new Vuex.Store(options)