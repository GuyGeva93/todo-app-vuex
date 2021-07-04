import { utilService } from "./util-service.js"
import { storageService } from "./async-storage-service.js"

const USER_KEY = 'user'
const gUser = utilService.loadFromStorage(USER_KEY) || _createUser()

export const userService = {
  query,
  save
}

function query() {
  storageService.query(USER_KEY)
  // return gUser
}

function save(user) {
  utilService.saveToStorage(USER_KEY, user)
}

function _createUser() {
  const user = {
    fullName: 'Buki Dalala',
    activities: [{
      txt: 'Added a todo: Wash the dishes',
      at: Date.now(),
    },
    {
      txt: 'Removed the todo: Talk to grandma',
      at: Date.now()
    }],
    prefs: {
      color: '#000000',
      bgc: '#d3d3d3'
    }
  }
  utilService.saveToStorage(USER_KEY, user)
  return user
}