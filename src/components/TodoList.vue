<template>
  <div
    class="todo__list"
  >
    <TodoItem
      v-for="todo of valueTodos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    TodoItem
  },
  computed: mapGetters(['valueTodos']),
  async mounted() {
    this.$store.dispatch('fetchTodos');
    this.fetchTodos();
  },
  methods: mapActions(['fetchTodos'])
};
</script>
