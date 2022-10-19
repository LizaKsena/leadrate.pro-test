<!-- eslint-disable vue/require-explicit-emits -->
<template>
  <div>
    <div class="todo__head">
      <h2 class="todo__head-title">
        Мой день
      </h2>

      <button
        class="btn"
        :class="{'btn--closed': isClosed}"
        @click="isClosed = !isClosed"
      >
        <PlusIcon />
      </button>
    </div>

    <form
      v-show="isClosed"
      v-if="isClosed"
      class="todo__form"
      @keydown.enter.prevent="onSubmit"
    >
      <input
        v-model="title"
        type="text"
        class="form-control"
        placeholder="Текст задания..."
      >
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mapMutations } from 'vuex';
import PlusIcon from './icons/PlusIcon';
export default {
  components: {
    PlusIcon
  },
  setup() {
    const isClosed = ref(false);
    return {
      isClosed
    };
  },
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapMutations(['createTodo']),
    onSubmit() {
      this.createTodo({
        title: this.title,
        id: Date.now(),
        completed: true
      });
      this.title = '';
    }
  }
};

</script>
