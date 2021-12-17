<template>
  <div class="stats_of_player">

    <p class="font-bold text-2xl underline">
      Record of streak is {{general.record_words.record}}
      <br>
      Record of streak 60 second is {{general.record_words.record}}
      <br>
      All you try answer is {{general.all_try}}
    </p>

  </div>
  <div class="list_of_all_verbs">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { inject } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const general = inject('general');

    const tmp = localStorage.getItem('general');

    if (tmp !== null) {
      general.value = JSON.parse(tmp);
    }

    return { general };
  },
};
</script>
