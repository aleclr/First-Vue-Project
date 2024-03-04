<template>

  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div class="modal" v-if="showModal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perferendis officiis nemo cupiditate commodi natus ipsum at, est accusamus totam repellat illo officia aperiam, accusantium excepturi harum numquam nostrum asperiores!</p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';

// MODALS
const showModal = ref(false);



</script>

<style>

  .modal {
    background-color: beige;
    padding: 10px;
  }

</style>