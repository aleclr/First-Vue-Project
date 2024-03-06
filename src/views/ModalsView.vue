<template>

  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">
        Show dark modal?
        <input
          v-model="showDarkModals"
          type="checkbox"
        />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My Modal Title via Prop">
      <!-- # ao invés de v-slot: -->
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perferendis officiis nemo cupiditate commodi natus ipsum at, est accusamus totam repellat illo officia aperiam, accusantium excepturi harum numquam nostrum asperiores!</p>
    </component>
  </div>

</template>

<script setup>

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

// MODALS
const showModal = ref(false);
const showDarkModals = ref(false);



</script>