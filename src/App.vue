<template>
  <div id="app">
    <Home/>
  </div>
</template>

<style>
#app {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
<script>
import Home from "@/views/Home";
export default {
  components: {Home}
}
</script>