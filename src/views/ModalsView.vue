<template>

  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">
      <!-- # ao invés de v-slot: -->
      <template v-slot:title>New Modal Title</template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perferendis officiis nemo cupiditate commodi natus ipsum at, est accusamus totam repellat illo officia aperiam, accusantium excepturi harum numquam nostrum asperiores!</p>
    </Modal>
  </div>

</template>

<script setup>

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

// MODALS
const showModal = ref(false);



</script>