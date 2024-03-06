<template>
  <div class="home">

    <h2 ref="appTitleRef">
      {{ appTitle }}
    </h2>

    <h3>
      {{ counterData.title }}:
    </h3>

    <div>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
    </div>

    <p>
      This counter is {{ oddOrEven }}.
    </p>

    <div class="edit">
      <h4>
        Edit counter title:
      </h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>

  </div>
</template>


<!-- SCRIPT SETUP PATTERN -->
<script setup>
import { ref, 
  onBeforeMount, onBeforeUnmount, onUnmounted, onMounted, 
  onActivated, onDeactivated, 
  onBeforeUpdate, onUpdated } from 'vue';

//importing global directive
import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = "My Counter App";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${ appTitleRef.value.offsetWidth } px wide.`);
});



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