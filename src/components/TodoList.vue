<template>
  <ul id="todo-list-item">
    <li id="todo-text">{{ todo.task }}</li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todo: {
      id: Number,
      task: String
    }
  }

}
</script>

<style scoped>

</style>