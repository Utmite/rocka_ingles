<template>
  <div class="notes">
      <div class="flex w-full px-8">
          <div class="w-1/3 px-4">
            <input type="text" class="bg-gray-300 rounded-md w-full px-3"
            placeholder="English" v-model="wordEnglish">
          </div>
          <div class="w-1/3 px-4">
            <input type="text" class="bg-gray-300 rounded-md w-full px-3" placeholder="Spanish"
            v-model="wordSpanish">
          </div>
          <div class="w-1/3 px-4">
            <button type="button" class="bg-blue-300 rounded-md w-full"
            @click="saveWord" >Add word</button>
          </div>
      </div>
    <section class="w-full flex justify-center">
    <table class="border-4 border-black mt-12 w-9/12">
      <thead class="bg-black flex text-white">
        <tr class="flex w-full mb-4">
        <th class="p-4 w-1/4">English</th>
        <th class="p-4 w-1/4">Spanish</th>
        </tr>
      </thead>
    <tbody
    class="bg-grey-500 flex flex-col items-center justify-between overflow-y-scroll w-full">
      <tr class="flex w-full mb-4" v-for="(e,i) in notes[0].length" :key="i">
        <td class="p-4 w-1/4">{{notes[0][i]}}</td>
        <td class="p-4 w-1/4">{{notes[1][i]}}</td>
        <td class="p-4 w-1/4" >
            <button type="button"  @click="deleteWord(i)"> Borrar</button>
        </td>
      </tr>
    </tbody>
    </table>
    </section>
    </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, ref } from 'vue';

export default {
  name: 'Notes',
  setup() {
    const notes = ref([[], []]);

    const wordSpanish = ref(null);
    const wordEnglish = ref(null);

    onMounted(() => {
      const recover = localStorage.getItem('notes');

      if (recover === null) return;

      notes.value = JSON.parse(recover);
    });

    const saveWord = () => {
      if (wordSpanish.value === null && wordEnglish.value === null) return;

      notes.value[0].push(wordEnglish.value);
      notes.value[1].push(wordSpanish.value);

      localStorage.setItem('notes', JSON.stringify(notes.value));

      wordEnglish.value = null;
      wordEnglish.value = null;
    };

    const deleteWord = (index) => {
      notes.value[0].splice(index, 1);
      notes.value[1].splice(index, 1);

      localStorage.setItem('notes', JSON.stringify(notes.value));
    };

    return {
      notes, wordSpanish, wordEnglish, saveWord, deleteWord,
    };
  },
};
</script>
