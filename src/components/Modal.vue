<template>
  <Teleport to=".modals-container">
      <div class="modal">
        <h1>{{ title }}</h1>
        <slot></slot>
        <button @click="handleButtonClick">Hide modal</button>
      </div>
    </Teleport>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified'
  }
});

const emit = defineEmits([
  'hideModal'
]);

const handleButtonClick = () => {
  emit('hideModal')
};

</script>

<style>

  .modal {
    background-color: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

</style>