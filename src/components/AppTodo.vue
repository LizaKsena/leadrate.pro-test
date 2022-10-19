<script>

import TodoList from './TodoList.vue';
import AddTodos from './AddTodos.vue';

export default {
  name: 'App',
  components: {
    TodoList, AddTodos
  }
  // data() {
  //   return {
  //     todos: [
  //       {
  //         id: 1,
  //         title: 'repellendus sunt dolores architecto voluptatum',
  //         completed: false
  //       },
  //       {
  //         id: 4,
  //         title: 'repellendus sunt dolores architecto voluptatum',
  //         completed: true
  //       },
  //       {
  //         id: 2,
  //         title: 'repellendus sunt dolores architecto voluptatum',
  //         completed: false
  //       },
  //       {
  //         id: 3,
  //         title: 'repellendus sunt dolores architecto voluptatum',
  //         completed: true
  //       }
  //     ]
  //   };
  // },
  // methods: {
  //   AddTodo(todo) {
  //     this.todos.push(todo);
  //   }
  // }
};
</script>

<template>
  <div class="todo">
    <AddTodos />
    <TodoList />
  </div>
</template>
