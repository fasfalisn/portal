<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import IconSpinner from "@/components/icons/IconSpinner.vue";
import { fetchShow } from "@/services/showsService";

const ShowDetailsCard = defineAsyncComponent(() => 
  import("@/components/shows/ShowDetailsCard.vue")
);
const route = useRoute();
const show = ref(null);
const error = ref(null);

const fetchShowDetails = async () => {
  try {
    const response = await fetchShow(route.params.id)
    if (response.ok) {
      show.value = await response.json();
    } else {
      error.value = response.status;
    }
  } catch (e) {
    error.value = e;
  }
};

onMounted(() => {
  fetchShowDetails(); 
});
</script>

<template>
  <div v-if="show" class="container">
    <ShowDetailsCard :show="show"/>
  </div>
  <div v-else-if="error" class="container">
    <p>Sorry, there was an error fetching the show or the show doesn't exist</p>
  </div>
  <div v-else class="container">
    <IconSpinner/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-self: center;
  gap: 20px;
  color: var(--color-text);
}

@media screen and (max-width: 1280px) {
  .container {
    flex-direction: column;
    padding: 120px 20px 20px 20px;
  }
}

</style>
