import { utilService } from './util-service.js'

const defaultTodos = [{
  _id: utilService.makeId(),
  title: 'Wash the car',
  isDone: false
},
{
  _id: utilService.makeId(),
  title: 'Finish exercises',
  isDone: false
},
{
  _id: utilService.makeId(),
  title: 'Buy a chair',
  isDone: true

}
  ,
{
  _id: utilService.makeId(),
  title: 'Buy a table',
  isDone: true
}]

const TODOS_KEY = 'todos'
var gTodos = _createTodos()

export const todoService = {
  query,
  save,
  remove,
  getEmptyTodo,
  getById,
  toggleDone
}


function query() {
  const todos = JSON.parse(JSON.stringify(gTodos))
  return todos
}

function save(todo) {
  const todoToSave = JSON.parse(JSON.stringify(todo))
  const savedTodo = (todoToSave._id) ? _update(todoToSave) : _add(todoToSave)
  utilService.saveToStorage(TODOS_KEY, gTodos)
  return savedTodo;
}

function _add(todo) {
  todo._id = utilService.makeId()
  gTodos.push(todo)
  return todo
}

function _update(product) {
  const idx = gTodos.findIndex(currProduct => currProduct._id === product._id)
  gTodos.splice(idx, 1, product)
  return product
}

function getById({ todoId }) {
  const todo = gTodos.find(todo => todo._id === todoId)
  return todo
}

function toggleDone(todoId) {
  const idx = gTodos.findIndex(todo => todo._id === todoId)
  gTodos[idx].isDone = !gTodos[idx].isDone
  utilService.saveToStorage(TODOS_KEY, gTodos)
}

function getEmptyTodo() {
  return {
    _id: '',
    title: '',
    isDone: false
  }
}


function remove(todoId) {
  const idx = gTodos.findIndex(todo => todo._id === todoId)
  if (idx < 0) {
    console.log(`Didn't find id`)
    return
  }
  gTodos.splice(idx, 1)
  utilService.saveToStorage(TODOS_KEY, gTodos)
}

function _createTodos() {
  var todos = utilService.loadFromStorage(TODOS_KEY)
  if (!todos || !todos.length) {
    todos = defaultTodos
    utilService.saveToStorage(TODOS_KEY, todos)
  }
  return todos;
}

