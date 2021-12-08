<template>
  <main class="">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Games</router-link>
  </div>
  <router-view/>
  </main>
</template>
<script>
import { ref, provide } from 'vue';

export default {
  setup() {
    const general = ref({
      list_after_verbs: [],
      current_verb: null,
      tested_verb: [],
      mode: {
        original: 0,
        test: 1,
      },
      record_words: {
        record: 0,
        record_time: null,
      },
      record_words_current: 0,
      all_try: 0,
      streak_60: {
        current: 0,
        record: 0,
        record_time: null,
        in_game: false,
      },
    });

    provide('general', general);

    return { general };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
