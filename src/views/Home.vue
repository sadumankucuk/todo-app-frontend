<template>
  <div>
    <input
        id="todo-input"
        type="text"
        v-model="task"
        placeholder="add task"
    />
    <button id="add-todo">Add</button>
    <div id="todo-list">
      <TodoList
          v-for="todo in todoList"
          :key="todo.id"
          :todo="todo"

      />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import API from "@/api";
export default {
  name: 'Home',
  data() {
    return {
      task: '',
      todoList: []
    }
  },
  components: {TodoList},
  async created() {
    try {
      this.todoList = await API.getTodoList()

    } catch (e) {
      console.error(e)
    }
  }

}
</script>
