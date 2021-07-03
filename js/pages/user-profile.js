
export default {
  template: `
  <section class="user-profile" :style="{backgroundColor:user.prefs.bgc,color:user.prefs.color}">
    <form @submit.prevent="saveUser(user)">
      <input type="text" placeholder="Your name" v-model="user.prefs.fullName">
      <label for="setColor">Color:</label>
      <input type="color" name="setColor" v-model="user.prefs.color">
      <label for="setBgc">Background color:</label>
      <input type="color" id="setBgc" v-model="user.prefs.bgc">
      <button>Save</button>
    </form>
    <article class="user-profile-prefs" v-for="prefs in user.activities">
      <span>{{prefs.txt}}</span>
      <span>at {{prefs.at}}</span>
    </article>
  </section>
  `,

  data() {
    return {
      user: null
    }
  },

  methods: {
    getUser() {
      this.user = JSON.parse(JSON.stringify(this.$store.getters.getUser))
    },
    saveUser(user) {
      this.$store.commit({ type: 'saveUser', user })
    }
  },

  created() {
    this.getUser();
  },

}