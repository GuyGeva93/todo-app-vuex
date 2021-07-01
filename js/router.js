import todoApp from "./pages/todo-app.js"


const routes = [
  {
    path: '/',
    component: todoApp
  }



]

export const router = new VueRouter({ routes })