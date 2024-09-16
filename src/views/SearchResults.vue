<script setup>
import { ref, onMounted, watch, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import IconSpinner from '@/components/icons/IconSpinner.vue';
import { findShows } from '@/services/showsService.js';

const ShowList = defineAsyncComponent(() =>
  import("@/components/shows/ShowList.vue")
);
const searchResults = ref([]);
const route = useRoute(); 
const searchTerm = ref(route.query.query || '');
const loading = ref(true);
const error = ref(null);

const fetchSearchResults = async () => {
  loading.value = true;
  searchResults.value = [];
  error.value = null;
  if (searchTerm.value) {
    try {
      const response = await findShows(searchTerm.value);
      if (response.ok) {
        const data = await response.json();
        searchResults.value = data.map(item => item.show);  
      }
    } catch (e) {
      error.value = e;
    }
    loading.value = false;
  }
};

watch(
  () => route.query.query, 
  (newQuery) => {
    searchTerm.value = newQuery; 
    fetchSearchResults(); 
  }
);

onMounted(() => {
  fetchSearchResults();
});
</script>

<template>
  <div class="container">
    <h1>Search Results for "{{ searchTerm }}"</h1>
    <div v-if="loading">
      <IconSpinner />
    </div>
    <div v-else-if="searchResults.length > 0">
      <ShowList :shows="searchResults"/>
    </div>
    <div v-else-if="error">
      <p>There was an error fetching the shows</p>
    </div>
    <div v-else>
        <p>No results found for "{{ searchTerm }}".</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}


</style>
