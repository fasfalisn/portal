<script setup>
import IconStar from "@/components/icons/IconStar.vue";
const props = defineProps(["show"]);

</script>

<template>
    <img :src="show.image.original" :alt="show.name" :v-if="show.image.original"/>
    <div class="content">
      <h1>{{ show.name }}</h1>
      <div class="content-genre-container"><p class="content-genre" v-for="genre in show.genres" :key="genre">{{ genre }}</p></div>
      <p> {{ show.language }}</p>
      <p> Status: {{ show.status }}</p>
      <div class="rating-container">
        <IconStar class="rating-icon"/>
        <p> {{ show.rating.average }}</p>
      </div>
      <p> <span v-html="show.summary"></span></p>
    </div>
</template>

<style scoped>
img {
  width: 300px;
  height: auto;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.content-genre-container {
  display: flex;
  gap: 10px;
  justify-items: left;
}

.content-genre {
  background-color: var(--color-text);
  color: var(--color-background-secondary);
  flex-grow: 0;
  border-radius: 10px;
  padding: 5px;
}

p {
  font-weight: bold;
}

.rating-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

.rating-icon{
  color: var(--color-text-tertiary);
}


@media screen and (max-width: 425px) {
  img {
    margin: 0 auto;
  }
}
</style>
