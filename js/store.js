import { todoService } from "./services/todo-service.js"

export const options = {
  strict: true,
  state: {
    todos: todoService.query(),
    filterBy: 'all',
    user: {
      fullname: '',
      activities: [{
        txt: '',
        at: ''
      }],

    }
    // user: getUser(),
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
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    toggleDone(state, { todoId }) {
      todoService.toggleDone(todoId)
      state.todos = todoService.query()
    }
  }
}

export const myStore = new Vuex.Store(options)