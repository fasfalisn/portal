<script setup>
import ShowCard from "./ShowCard.vue";
import { ref, onMounted } from "vue";

const props = defineProps(["shows"]);
const visibleShows = ref([]);
const pageSize = 6;
const page = ref(0);

const scrollContainer = ref(null);

const loadShows = () => {
  const start = page.value * pageSize;
  if(start > props.shows.length){
    return;
  }
  let end = start + pageSize;
  if(end > props.shows.length){
    end = props.shows.length;
  }
  const moreShows = props.shows.slice(start, end);
  visibleShows.value.push(...moreShows);
  page.value++;
};


const onScroll = () => {
  const scrollLeft = scrollContainer.value.scrollLeft;
  const scrollWidth = scrollContainer.value.scrollWidth;
  const clientWidth = scrollContainer.value.clientWidth;

  if (scrollLeft + clientWidth >= scrollWidth - 100) {
    loadShows();
  }
};

onMounted(() => {
  loadShows();
});
</script>

<template>
  <div class="shows-container" 
      ref="scrollContainer"
      @scroll="onScroll">
    <div
      v-for="show in visibleShows"
      :key="show.id"
      class="show-item"
    >
      <ShowCard :show="show" />
    </div>
  </div>
</template>

<style scoped>

.shows-container {
  flex-grow: 1;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-bottom: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.shows-container::-webkit-scrollbar {
  display: none;
}

.show-item {
  padding: 10px;
  flex: 0 0 auto;
  width: 150px;
  margin-right: 1rem;
  text-align: center;
  background-color: var(--color-text);
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
}
</style>
