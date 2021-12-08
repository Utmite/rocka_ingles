<template>
<section class="chronometer">
    <div
      class="flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
    >
      <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ -->
      <svg class="w-40 h-40">
        <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="60"
          cx="80"
          cy="80"
        />
        <circle
          class="text-blue-600"
          stroke-width="5"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - percent / 100 * circumference"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="60"
          cx="80"
          cy="80"
        />
      </svg>
      <span class="absolute text-xl font-bold text-blue-700">{{dif}} Seconds</span>
    </div>
</section>
</template>
<script>
import {
  ref, toRefs, onMounted, onUnmounted,
} from 'vue';

export default {
  name: 'Chronometer',
  props: {
    time: {
      default: 60,
      type: Number,
    },
    stop: {
      default: false,
      type: Boolean,
    },
  },
  emits: [
    'chronometerStop',
  ],
  setup(props, { emit }) {
    const circumference = ref(60 * 2 * Math.PI);
    const percent = ref(100);
    const { time, stop } = toRefs(props);
    const currentTime = ref(0);
    const dif = ref(time.value - currentTime.value);
    let interval = null;

    onMounted(() => {
      interval = setInterval(() => {
        if (stop.value === false) {
          if (time.value - currentTime.value < 0) currentTime.value = 0;

          dif.value = time.value - currentTime.value;

          percent.value = Math.floor((dif.value * 100) / time.value);

          currentTime.value += 1;

          if (currentTime.value > time.value) {
            emit('chronometerStop');
          }
        }
      }, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });
    return { circumference, percent, dif };
  },
};
</script>
