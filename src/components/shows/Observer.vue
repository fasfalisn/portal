<script setup>

import { ref, onMounted } from 'vue';
import IconSpinner from '../icons/IconSpinner.vue';

const observer = ref(null);
const root = ref(null);

const emits = defineEmits(["intersect"]);

onMounted(() => {
  observer.value = new IntersectionObserver(([entry])=> {
    if (entry && entry.isIntersecting) {
    emits("intersect");
  }
  })

  observer.value.observe(root.value);
  
})
  
</script>

<template>
  <div
    ref="root"
    class="observer"
  >
    <IconSpinner/>
  </div>
</template>

<style scoped>
.observer {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
