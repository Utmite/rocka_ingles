<template>
  <div class="hello">
  <section class="verbs flex justify-center w-full">
    <table class="border-4 border-black w-9/12">
      <thead class="bg-black flex text-white">
        <tr class="flex w-full mb-4">
        <th class="p-4 w-1/4">{{listV.verbs[0][0]}}</th>
        <th class="p-4 w-1/4">{{listV.verbs[1][0]}}</th>
        <th class="p-4 w-1/4">{{listV.verbs[2][0]}}</th>
        <th class="p-4 w-1/4">{{listV.verbs[3][0]}}</th>
        </tr>
      </thead>
      <!--<tr v-for="(e,i) in listV.verbs[0].length - 1" :key="i">
        <th>{{listV.verbs[0][i+1]}}</th>
        <th>{{listV.verbs[1][i+1]}}</th>
        <th>{{listV.verbs[2][i+1]}}</th>
        </tr>-->
    <tbody
    class="bg-grey-500 flex flex-col items-center justify-between overflow-y-scroll w-full"
    style="height: 50vh;">
      <tr class="flex w-full mb-4" v-for="(e,i) in listV.verbs[0].length - 1" :key="i">
        <td class="p-4 w-1/4">{{listV.verbs[0][i+1]}}</td>
        <td class="p-4 w-1/4">{{listV.verbs[1][i+1]}}</td>
        <td class="p-4 w-1/4">{{listV.verbs[2][i+1]}}</td>
        <td class="p-4 w-1/4">{{listV.verbs[3][i+1]}}</td>
      </tr>
    </tbody>
    </table>
  </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import verbs from '../docs/verbs';

export default {
  name: 'HelloWorld',
  setup() {
    const listV = ref(verbs);

    return { listV };
  },
};
</script>
