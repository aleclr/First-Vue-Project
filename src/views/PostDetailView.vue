<template>
  <div class="post-detail">
    <h1>
      This is a post page
    </h1>
    <p>
      Display the content of post with id of {{ $route.params.id }} here!
    </p>
    <div>
      <button @click="showPostID">
        Show Post ID
      </button>
    </div>
    <div>
      <button @click="toHomePage">
        Go to home page in 3 seconds
      </button>
    </div>
    <p>
      <RouterLink to="/posts">
        &lt; Back
      </RouterLink>
    </p>
  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const showPostID = () => {
    alert(`The id of this post is: ${ route.params.id }`)
  };

  const toHomePage = () => {
    setTimeout(() => {
      router.push({ name: 'home' })
    }, 3000)
  };
</script>