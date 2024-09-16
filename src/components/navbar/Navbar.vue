<script setup>
import IconMovie from "../icons/IconMovie.vue";
import Search from "./Search.vue";
</script>

<template>
  <header>
    <div class="logo">
      <IconMovie class="icon" />
      <router-link to="/"> Portal </router-link>
    </div>
    <div class="search-container">
      <Search/>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: start;
  position: fixed;
  z-index: 20;
  background-color: var(--color-background-secondary);
  padding: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: left;
}
a {
  width: fit-content;
  height: fit-content;
  color: var(--color-text);
  font-weight: bold;
}

.logo-icon {
  color: var(--color-text);
  height: 20px;
  width: 20px;
}

.search-container {
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
}

</style>
