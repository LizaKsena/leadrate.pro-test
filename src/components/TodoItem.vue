<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters(['valueTodos']),

  methods: {
    ...mapMutations(['changeTodos']),
    ...mapMutations(['deleteTodos']),
    onClick(id) {
      this.changeTodos(id);
    },
    remove() {
      this.deleteTodos();
    }
  }
};
</script>
<template>
  <div
    role="button"
    class="todo__list-item"
    :class="{'todo__list-item_completed': !todo.completed}"
    @click="onClick(todo.id)"
  >
    <div
      class="todo__list-item-info"
    >
      <h4 class="todo__list-item-info-title">
        {{ todo.title }}
      </h4>
      <h6 class="todo__list-item-info-description">
        {{ todo.title }}
      </h6>
    </div>
    <!-- <button
      @click="remove"
    >
      x
    </button> -->
  </div>
</template>
