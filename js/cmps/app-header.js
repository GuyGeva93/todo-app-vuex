import userMsg from './user-msg.js'

export default {
  template: `
   <header class="app-header">
      <div class="logo">
        <h1>My Todos</h1>
      </div>
      <nav class=nav-bar>
        <user-msg />
        <span>Hello</span>
        <router-link to='/'>Home</router-link> |
        <router-link to='/profile'>My profile</router-link>
      </nav>
  </header>
  `,
  components: {
    userMsg,
  },
}