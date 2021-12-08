<template>
  <div class="selected">
    <ChangesMode/>
    <GatherVerbs/>
  </div>
  <hr class="mt-4 border-black border-2"/>
  <div class="writting">
    <WriteVerbs/>
  </div>
  <hr class="mt-4 border-black border-2"/>
  <div class="game">
    <GameOf60/>
  </div>
</template>

<script>
// @ is an alias to /src
import GatherVerbs from '@/components/GatherVerbs.vue';
import ChangesMode from '@/components/ChangesMode.vue';
import WriteVerbs from '@/components/WriteVerbs.vue';
import GameOf60 from '@/components/GameOf60.vue';

export default {
  name: 'About',
  components: {
    GatherVerbs,
    ChangesMode,
    WriteVerbs,
    GameOf60,
  },
};
</script>
