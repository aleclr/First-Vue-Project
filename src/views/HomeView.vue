<template>
  <div class="home">

    <h2 ref="appTitleRef">
      {{ appTitle }}
    </h2>

    <h3>
      {{ counter.title }}
    </h3>

    <div>
      <button class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn">+</button>
    </div>

    <p>
      This counter is odd/even.
    </p>

    <div class="edit">
      <h4>
        Edit counter title:
      </h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      >
    </div>

  </div>
</template>


<!-- SCRIPT SETUP PATTERN -->
<script setup>
import { ref, 
  onBeforeMount, onBeforeUnmount, onUnmounted, onMounted, 
  onActivated, onDeactivated, 
  onBeforeUpdate, onUpdated } from 'vue';

//removing composable import to manage with state
//import { useCounter } from '@/use/useCounter';

//importing global directive
import { vAutofocus } from "@/directives/vAutofocus";

import { useCounterStore } from '@/stores/counter';

const appTitle = "My Counter App";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${ appTitleRef.value.offsetWidth } px wide.`);
});

const counter = useCounterStore();

//destructuring the methods used by the template from the newly added composable
// const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();

//LIFECYCLE HOOKS

//mounted hooks
onBeforeMount(() => {
  console.log("onBeforeMount")
});

onMounted(() => {
  console.log("onMounted")
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount")
});

onUnmounted(() => {
  console.log("onUnmounted")
});

//activated hooks
onActivated(() => {
  console.log("onActivated")
});

onDeactivated(() => {
  console.log("onDeactivated")
});

//updated hooks
onBeforeUpdate(() => {
  console.log("onBeforeUpdate")
});

onUpdated(() => {
  console.log("onUpdated")
});

//DIRECTIVES

//local custom directives
// const vAutofocus =  { //becomes v-autofocus on the template
//   //hook inside
//   //different name
//   mounted: (el) => {
//     console.log("autofocus")
//     el.focus()
//   }
// };

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

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 6px;
}
</style>