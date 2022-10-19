/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
export default {
  actions: {
    async fetchTodos(ctx) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=15'
      );
      const todos = await res.json();
      ctx.commit('updateTodos', todos);
    }
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    createTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    changeTodos(state, id) {
      state.todos.map(el => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      });
    },
    deleteTodos(state) {
      return state.todos.filter(el => el.completed !== false);
    }
  },

  state: {
    todos: []
  },
  getters: {
    valueTodos(state) {
      return state.todos.filter(t =>{
        return t.title;
      });
    },
    allTodos(state) {
      return state.todos;
    }
  }
};
