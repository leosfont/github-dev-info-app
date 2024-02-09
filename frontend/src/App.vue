<template>
  <div id="app">
    <DeveloperList />
  </div>
</template>

<script>
import DeveloperList from './components/DeveloperList.vue';

export default {
  components: {
    DeveloperList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 150px;
  height: 150px;
}
</style>