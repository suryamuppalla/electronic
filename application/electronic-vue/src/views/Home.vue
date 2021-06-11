<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/home/Home";

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>
