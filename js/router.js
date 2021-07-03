import todoApp from "./pages/todo-app.js"
import todoEdit from "./cmps/todo-edit.js"
import userProfile from './pages/user-profile.js'


const routes = [
  {
    path: '/',
    component: todoApp
  },
  {
    path: '/edit/:todoId?',
    component: todoEdit
  },
  {
    path: '/profile',
    component: userProfile
  }



]

export const router = new VueRouter({ routes })