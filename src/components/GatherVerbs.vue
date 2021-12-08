<template>
    <section class="learn_verbs">
        <div class="py-4">
            <h1 class="font-bold text-4xl underline">{{selectedVerb}}</h1>
        </div>
        <div class="flex justify-evenly ">
            <button type="button" v-for="(e,i) in tested" :key="i"
            class="
            md:px-4 md:py-3 px-1 py-1 bg-blue-600 rounded-md text-white
            outline-none focus:ring-4 shadow-lg transform
            active:scale-75 transition-transform"
            @click="verifyVerb({
                verb: e,
                mode: 3
            })"
            >{{e}}</button>
        </div>
        <div>
        <section class="py-6 transition-high duration-100">
        <div v-if="success === true">
            <h2 class="font-bold text-4xl underline text-green-500">Exito!!</h2>
        </div>
        <div v-else-if="success === false">
          <h2 class="font-bold text-4xl underline text-red-400">Para la proxima!!</h2>
          <h2 class="font-bold text-4xl underline text-red-400">{{currentVerbStr}}</h2>
        </div>
        </section>
        </div>
    </section>
</template>
<script>
import { onMounted } from 'vue';
import useGameVerbs from '../composables/useGameVerb';

export default {
  name: 'GatherVerbs',
  setup() {
    const {
      getRandomVerb, selectedVerb, tested, verifyVerb, success, currentVerbStr,
    } = useGameVerbs();

    onMounted(() => {
      getRandomVerb({
        reset: true,
      });
    });

    return {
      getRandomVerb, selectedVerb, tested, verifyVerb, success, currentVerbStr,
    };
  },
};
</script>
