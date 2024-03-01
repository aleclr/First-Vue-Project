<template>
  <div class="posts">
    <h1>
      Posts
    </h1>

    <ul>
      <li 
        v-for="post in posts"
        :key="post.id"
        >
        <RouterLink :to="`/postDetail/${ post.id }`">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>

    <textarea name="" id="" cols="30" rows="10" v-autofocus></textarea>

  </div>
</template>

<script setup>

import { vAutofocus } from '@/directives/vAutofocus';
import { ref } from 'vue';

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
]);

</script>

<style scoped>

  ul {
    margin-bottom: 20px;
  }

</style>