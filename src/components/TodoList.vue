<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
    >
      {{ todo.label }}
      <button @click="onDelete(todo.id)">Delete {{ todo.id }}</button>
      <todo-item @onDelete="onDelete" /> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoPage',
  props: ['todos'],

  methods: {
    onDelete (id) {
      this.$emit('onDelete', id)
    }
  }
}
</script>

<style>

</style>