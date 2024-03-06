import { reactive, computed, watch, 
  onMounted, nextTick } from 'vue';


//creating the reactive object outside of the main function makes it global for the app
const counterData = reactive({
  count: 0,
  title: "My counter"
});

export function useCounter() {
  
  watch(() => counterData.count, (newCount, oldCount) => {
    console.log(newCount, oldCount);
    if (newCount === 20) {
      alert("Way to go! You made it to 20!")
    }
  });
  
  const oddOrEven = computed(() => {
    if ((counterData.count % 2) === 0) {
      return "even"
    }
    return "odd"
  });
  
  const increaseCounter = async (amount) => {
    counterData.count += amount;
    await nextTick();
    console.log("do something when the DOM update is finished")
  };
  
  const decreaseCounter = (amount) => {
    counterData.count -= amount
  };

  onMounted(() => {
    console.log("do stuff related to counter")
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }

};