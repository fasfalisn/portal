<script setup>
import IconSpinner from "@/components/icons/IconSpinner.vue";
import Observer from "@/components/shows/Observer.vue";
import { ref, onMounted, computed, defineAsyncComponent, nextTick } from "vue";
import { useStore } from "vuex";

const ShowList = defineAsyncComponent(() =>
  import("@/components/shows/ShowList.vue")
);

const store = useStore();
const loading = ref(true);
const error = ref(null);
const page = ref(0); 
const genresPerPage = 3; 
const allGenresLoaded = ref(false); 
const visibleGenres = ref([]);


const loadData = async () => {
  loading.value = true;
  try {
    await store.dispatch("shows/loadShows");
    addNextGenres();
  } catch (e) {
    error.value = e.message || "Something went wrong!";
  }
  loading.value = false;
};

const addNextGenres = () => {
  const allGenres = Object.keys(showsByGenre.value);
  const start = page.value * genresPerPage;
  const end = start + genresPerPage;

  const nextGenres = allGenres.slice(start, end);
  visibleGenres.value.push(...nextGenres);
  
  page.value++;
  
  if (end >= allGenres.length) {
    allGenresLoaded.value = true;
  }
};

const sortedShowsByGenre = computed(() => {
  const sorted = {};
  Object.keys(showsByGenre.value).forEach((genre) => {
    sorted[genre] = showsByGenre.value[genre].sort((a, b) => {
      return (b.rating.average || 0) - (a.rating.average || 0);
    });
  });
  return sorted;
});

const showsByGenre = computed(() => {
  return store.getters['shows/shows'];
});

onMounted( async () => {
  loadData();
});
</script>

<template>
  <div class="container">
    <h2>TV Shows by Genre</h2>
    <div v-if="loading">
      <IconSpinner />
    </div>
    <div v-else-if="!loading && error">
      <p>There was an error fetching the shows</p>
    </div>
    <div v-else>
      <div v-for="genre in visibleGenres" :key="genre" class="genre-section">
        <h3>{{ genre }}</h3>
        <ShowList :shows="sortedShowsByGenre[genre]" />
      </div>
      <Observer @intersect="addNextGenres" v-if="!allGenresLoaded && !loading"/>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

.genre-section {
  margin-bottom: 2rem;
}

</style>
