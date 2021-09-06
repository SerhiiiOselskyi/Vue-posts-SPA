<template>
  <div>
    <todo-list
      :todos="todos"
      @onDelete="onDelete"
    />
  </div>
</template>

<script>
import TodoList from './TodoList.vue'
export default {
  name: 'TodoPage',

  components: {
    TodoList
  },

  data () {
    return {
      todos: [
        {
          label: 'test1',
          id: 1,
          completed: false
        },
        {
          label: 'test2',
          id: 2,
          completed: false
        },
        {
          label: 'test3',
          id: 3,
          completed: false
        },
        {
          label: 'test4',
          id: 4,
          completed: false
        },
      ]
    }
  },

  methods: {
    onDelete (id) {
      console.log('parent', id)
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style>

</style>