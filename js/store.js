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
    removeTodo(state, { todoId }) {
      const idx = state.todos.findIndex(todo => todo._id === todoId)
      state.todos.splice(idx, 1)
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
    addTodo(context, { todo }) {
      return todoService.save(todo)
        .then(todo => {
          context.commit({ type: 'addTodo', todo })
          return todo
        })
        .catch(err => {
          console.log('Cannot save todo:', todo, err)
          throw err
        })
    },
    removeTodo(context, { todoId }) {
      return todoService.remove(todoId)
        .then(() => {
          context.commit({ type: 'removeTodo', todoId })
        })
        .catch(err => {
          console.log('Cannot remove todo:', todoId, err)
        })
    },
    toggleDone(context, payload) {
      todoService.toggleDone(payload.todoId)
        .then(() => {
          context.commit(payload)
        })
      // state.todos = todoService.query()
    },
  }
}

export const myStore = new Vuex.Store(options)