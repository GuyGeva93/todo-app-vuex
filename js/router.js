import todoApp from "./pages/todo-app.js"
import todoEdit from "./cmps/todo-edit.js"


const routes = [
  {
    path: '/',
    component: todoApp
  },
  {
    path: '/edit/:todoId?',
    component: todoEdit
  }



]

export const router = new VueRouter({ routes })