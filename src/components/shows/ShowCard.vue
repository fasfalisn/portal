<script setup>
const props = defineProps(["show"]);
</script>

<template>
  <img
    v-if="show.image"
    :src="show.image.medium"
    :alt="show.name"
    class="show-img"
  />
  <img v-else src="../assets/no-image.jpg" class="show-img" />
  <router-link :to="'/show/' + show.externals.thetvdb">
    {{ show.name }} ({{ show.rating.average }})
  </router-link>
</template>

<style scoped>
a {
  color: var(--color-background-secondary);
  font-weight: bold;
}

a:hover {
  color: var(--color-text-secondary);
}
.show-img {
  width: 100%;
  height: 180px;
  border-radius: 5px;
  /* width: 150px;
  height: 210px; */
  border: 10px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
}
</style>
