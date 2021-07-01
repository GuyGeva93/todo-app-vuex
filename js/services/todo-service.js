import utilService from './util-service.js'


const TODOS_KEY = 'todos'
const gTodos = [{
  title: 'Wash the car',
  createdAt: Date.now(),
  active: true
}]
// utilService.loadFromStorage(TODOS_KEY)

export const todoService = {
  query,
  save,
  remove
}

function query() {
  return gTodos
}

function save(newTodo) {

}

function remove(todoId) {

}