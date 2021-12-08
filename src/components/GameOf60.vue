<template>
  <div class="game flex justify-center content-center items-center">
    <Chronometer :stop="switchChronometer" :time="60" @chronometerStop="stop()" />
    <div>
        <button type="button"
        class="
        px-4 py-3 bg-yellow-600 rounded-md text-white
        shadow-lg transition-transform"
        @click="toggleSwitch()"
        >{{(switchChronometer ? 'Start' : 'Stop')}}</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  ref, inject, onMounted, onUnmounted,
} from 'vue';
import Chronometer from '@/components/Chronometer.vue';

export default {
  name: 'GameOf60',
  components: {
    Chronometer,
  },
  setup() {
    const switchChronometer = ref(true);
    const general = inject('general');

    onMounted(() => {
      general.value.streak_60.in_game = !switchChronometer.value;
    });

    function resetGame() {
      general.value.streak_60.in_game = false;

      if (general.value.streak_60.in_game === true
         && (general.value.streak_60.current > general.value.streak_60.record)
      ) {
        general.value.streak_60.record = general.value.streak_60.current;
        general.value.streak_60.record_time = new Date();
        general.value.streak_60.current = 0;
      }
    }

    onUnmounted(() => {
      resetGame();
    });

    const stop = () => {
      switchChronometer.value = true;
      resetGame();
    };

    const toggleSwitch = () => {
      switchChronometer.value = !switchChronometer.value;
      general.value.streak_60.in_game = !switchChronometer.value;
    };

    return { switchChronometer, toggleSwitch, stop };
  },
};
</script>
