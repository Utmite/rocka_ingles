<template>
  <div class="changes_mode">
    <div>
        <label for="original">Verbo Original: </label>
        <select id="original" v-model="original">
        <option value="0">Verb</option>
        <option value="1">Past</option>
        <option value="2">Participle</option>
        <option value="3">Spanish</option>
        </select>
    </div>
    <div>
        <label for="mode" class="changes_mode ml-4">Verbos de la poll: </label>
        <select id="mode" v-model="mode">
        <option value="0">Verb</option>
        <option value="1">Past</option>
        <option value="2">Participle</option>
        <option value="3">Spanish</option>
        </select>
    </div>
  </div>
</template>

<script>
import {
  ref, inject, watch, onMounted,
} from 'vue';

export default {
  name: 'ChangeOptions',
  setup() {
    const general = inject('general');

    const original = ref(general.value.mode.original);
    const mode = ref(general.value.mode.test);

    onMounted(() => {
      original.value = general.value.mode.original;
      mode.value = general.value.mode.test;
    });

    watch([mode, original], () => {
      general.value.mode.test = parseInt(mode.value, 10);
      general.value.mode.original = parseInt(original.value, 10);

      localStorage.setItem('general', JSON.stringify(general.value));

      console.log(JSON.parse(localStorage.getItem('general')));
    });

    return { original, mode, general };
  },
};
</script>
