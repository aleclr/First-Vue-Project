<template>
  <Teleport to=".modals-container">
      <div
        v-if="modelValue"
        class="modal-dark"
      >
        <h1>{{ title }}</h1>
        <slot></slot>
        <button @click="$emit('update:modelValue', false)">Hide modal</button>
        <div>
          username is: {{ userData.username }}
        </div>
      </div>
    </Teleport>
</template>

<script setup>
import { inject } from 'vue';


const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No title specified'
  }
});

const emit = defineEmits([
  'update:modelValue',
  'hideModal'
]);

// const handleButtonClick = () => {
//   emit('update:modelValue', false)
// };

const userData = inject('userData');

</script>

<style>

  .modal-dark {
    background-color: #333;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

</style>