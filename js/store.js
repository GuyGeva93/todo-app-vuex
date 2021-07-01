
export const options = {
  strict: true,
  state: {
    //todo-serivce => gTodos
    todos: [{
      title: 'sdfsdfsdf', editor: 'jdflkksd'
    }],
    user: getUser(),
    count: 0
  },
  mutations: {
    addTodo({ newTodo }) {
      // todoService.addTodo(newTodo)
    }

  }
}

export const myStore = new Vuex.Store(options)