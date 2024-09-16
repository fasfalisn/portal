<script setup>
import IconSearch from "../icons/IconSearch.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';  

const searchTerm = ref('');
const router = useRouter();

const handleSearch = () => {
  if (searchTerm.value.trim()) {
    router.push({ path: '/search', query: { query: searchTerm.value } });
  }
};

const handleEnter = (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
};
</script>

<template>
  <div class="input-container">
        <input placeholder="Search"
          v-model="searchTerm" 
          @keyup="handleEnter" >
        <IconSearch class="search-icon" @click="handleSearch"/>
        </input>
      </div>
</template>

<style scoped>

.input-container {
  position: relative;
  width: fit-content;
}

input {
  background-color: var(--color-background);
  padding: 10px 40px 10px 10px;
  color: var(--color-text);
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: large;
  position: relative;
}

input:focus {
  outline: none;
}

.search-icon{
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>