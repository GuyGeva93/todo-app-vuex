
export default {
  template: `
  <section class="todo-filter">
    <select v-model="filterBy" @change="filterTodos">
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="done">Done</option>
    </select>
  </section>
  `,

  data() {
    return {
      filterBy: 'all'
    }
  },

  methods: {
    filterTodos() {
      this.$emit('filter', this.filterBy)
    }
  },


}