<template>
    <section class="learn_verbs">
        <div class="py-4">
            <h1 class="font-bold text-4xl underline">{{selectedVerb}}</h1>
        </div>
        <div class="justify-evenly">
            <div>
            <input type="text" class="border-black border-b-4 | w-1/3
            focus:outline-none focus:border-purple-800
            transition-color duration-500"
            v-model="writeVerb"
            :placeholder="'Write the '+ idToMode[general.mode.test] + ' of the verb'"
            >
            </div>
            <button type="button"
            class="
            px-4 py-3 bg-green-600 rounded-md text-white
            outline-none focus:ring-4 shadow-lg transform
            active:scale-75 transition-transform mt-4"
            @click="checkWord"
            >Click For Check!!!</button>
        </div>
        <div>
        <section class="py-6">
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
import { onMounted, ref, inject } from 'vue';
import useGameVerbs from '../composables/useGameVerb';

export default {
  name: 'WriteVerbs',
  setup() {
    const {
      getRandomVerb, selectedVerb, tested, verifyVerb, success, currentVerbStr,
    } = useGameVerbs();

    const writeVerb = ref('');

    const idToMode = ref([
      'Verb',
      'Past',
      'Participle',
      'Spanish',
    ]);

    const general = inject('general');

    const checkWord = () => {
      verifyVerb({
        verb: writeVerb.value,
      });

      writeVerb.value = '';
    };

    onMounted(() => {
      getRandomVerb({
        reset: true,
      });

      window.addEventListener('keypress', (key) => {
        if (key.code === 'Enter') checkWord();
      });
    });
    return {
      getRandomVerb,
      selectedVerb,
      tested,
      checkWord,
      success,
      currentVerbStr,
      writeVerb,
      idToMode,
      general,
    };
  },
};
</script>
