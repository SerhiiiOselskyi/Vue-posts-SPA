<template>
  <div class="app" id="app">
    <todo-page />
  </div>
</template>

<script>
import TodoPage from './components/TodoPage.vue'
export default {
  name: 'App',
  component: [
    TodoPage
  ],
  data() {}
}
</script>>

<style scoped>

</style>