<template>
  <div class="home">

    <h3>
      {{ counterData.title }}:
    </h3>
    
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>
        Edit counter title:
      </h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>
</template>


<!-- SCRIPT SETUP PATTERN -->
<script setup>
  import { ref, reactive } from 'vue';

  const counter = ref(0),
        counterTitle = ref("My counter");

  const counterData = reactive({
    count: 0,
    title: "My counter"
  });

  const increaseCounter = () => {
    counterData.count++
  };

  const decreaseCounter = () => {
    counterData.count--
  };
</script>

<!-- SETUP FUNCTION PATTERN -->
<!-- <script>

  import { ref } from 'vue';

  export default {
    setup() {
      const counter = ref(0)

      const increaseCounter = () => {
        counter.value++
      }

      const decreaseCounter = () => {
        counter.value--
      }

      return {
        counter,
        increaseCounter,
        decreaseCounter
      }
    }
  }
</script> -->

<!-- OPTIONS API PATTERN -->
<!-- <script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increseCounter() {
        this.counter++
      },
      decreaseCounter() {
        this.counter--
      }
    }
  }
</script> -->

<style>
  .home {
    text-align: center;
    padding: 20px;
  }

  .btn, .counter {
    font-size: 40px;
    margin: 10px;
  }

  .edit {
    margin-top: 6px;
  }
</style>