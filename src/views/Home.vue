<template>
  <div>
    <input
        id="todo-input"
        type="text"
        v-model="task"
        placeholder="add task"
    />
    <button id="add-todo">Add</button>
    <TodoList/>
  </div>
</template>

<script>


import TodoList from "@/components/TodoList";
export default {
  name: 'Home',
  data() {
    return {
      task: ''
    }
  },
  components: {TodoList},
}
</script>
