import { storageService } from "./services/async-storage-service.js"
import { todoService } from "./services/todo-service.js"
import { userService } from "./services/user-service.js"

export const options = {
  strict: true,
  state: {
    todos: null,
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
    setTodos(state, { todos }) {
      state.todos = todos
    },
    // saveTodo(state, { todo }) {
    //   todoService.save(todo)
    //   // state.todos = todoService.query()
    // },
    removeTodo(state, { todoId }) {
      todoService.remove(todoId)
      state.todos = todoService.query()
    },

    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    saveUser(state, { user }) {
      userService.save(user)
      state.user = userService.query()
    },
    toggleDone(state, { todoId }) {
      const idx = state.todos.findIndex(todo => todo._id === todoId)
      state.todos[idx].isDone = !state.todos[idx].isDone
    },
    addTodo(state, { todo }) {
      state.todos.push(todo)
    }
  },
  actions: {
    loadTodos(context) {
      return todoService.query()
        .then(todos => {
          context.commit({ type: 'setTodos', todos })
          return todos
        })
        .catch(err => {
          console.log(`Can't load todos`, err)
          throw err
        })
    },
    toggleDone({ commit }, payload) {
      todoService.toggleDone(payload.todoId)
        .then(() => {
          commit(payload)
        })
      // state.todos = todoService.query()
    },
    addTodo({ commit }, { todo }) {
      todoService.save(todo)
        .then(todo => {
          commit({ type: 'addTodo', todo })
        })
    }
  }
}

export const myStore = new Vuex.Store(options)