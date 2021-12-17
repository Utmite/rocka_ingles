import { ref, inject } from 'vue';
import docs from '../docs/verbs';

function getRandomInt(m, ma) {
  const min = Math.ceil(m);
  const max = Math.floor(ma);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
  const array = a;
  let currentIndex = array.length; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function setup() {
  const general = inject('general');
  const selectedVerb = ref('Loading');
  const tested = ref([]);
  const success = ref(null);
  const lastWord = localStorage.getItem('general');
  const currentVerbStr = ref('Loading');

  const getRandomVerb = ({
    reset = false,
  }) => {
    // reset the after test verbs
    general.value.tested_verb = [];
    success.value = null;
    // reset random index of all verbs
    let r = null;

    if (!reset || lastWord === null) {
      do {
        r = getRandomInt(1, docs.verbs[0].length - 1); // get random index
        if (general.value.list_after_verbs.length === docs.verbs[0].length - 1) {
        // if all index had used, reset
          general.value.list_after_verbs = [];
        }
      } while (general.value.list_after_verbs.includes(r)); // if verb is used after next verb

      general.value.list_after_verbs.push(r); // add to list the verbs used
      general.value.current_verb = r;
      selectedVerb.value = docs.verbs[
        general.value.mode.original
      ][r]; // get verb of array with index

      while (general.value.tested_verb.length <= 2) {
      // get 3 index for exam and not be index of current verb
        const temp = getRandomInt(1, docs.verbs[0].length - 1);

        if (temp !== general.value.current_verb) {
          general.value.tested_verb.push(temp);
        }
      }

      tested.value = [ // get verbs for test of index
        docs.verbs[general.value.mode.test][general.value.tested_verb[0]],
        docs.verbs[general.value.mode.test][general.value.tested_verb[1]],
        docs.verbs[general.value.mode.test][general.value.tested_verb[2]],
        docs.verbs[general.value.mode.test][r],
      ];

      tested.value = shuffle(tested.value); // shuffle array

      localStorage.setItem('general', JSON.stringify(general.value));
    } else {
      general.value = JSON.parse(lastWord); // LAST WORD in string to obj

      // console.log(general.value);

      selectedVerb.value = docs.verbs[
        general.value.mode.original
      ][
        general.value.current_verb
      ]; // get verb of array with index

      tested.value = [ // get verbs for test of index
        docs.verbs[general.value.mode.test][general.value.tested_verb[0]],
        docs.verbs[general.value.mode.test][general.value.tested_verb[1]],
        docs.verbs[general.value.mode.test][general.value.tested_verb[2]],
        docs.verbs[general.value.mode.test][general.value.current_verb],
      ];
    }
  };

  const verifyVerb = (
    {
      verb = 'nothing',
    },
  ) => {
    currentVerbStr.value = docs.verbs[general.value.mode.test][general.value.current_verb];
    if (verb.toLowerCase() === currentVerbStr.value.toLowerCase()) {
      success.value = true;
      general.value.record_words_current += 1;

      if (general.value.streak_60.in_game === true) {
        general.value.streak_60.current += 1;
      }
    } else {
      success.value = false;

      if (general.value.record_words_current > general.value.record_words.record) {
        general.value.record_words.record = general.value.record_words_current;
        general.value.record_words.record_time = new Date();
      }

      if (general.value.streak_60.in_game === true
         && (general.value.streak_60.current > general.value.streak_60.record)
      ) {
        general.value.streak_60.record = general.value.streak_60.current;
        general.value.streak_60.record_time = new Date();
        general.value.streak_60.current = 0;
      }

      general.value.record_words_current = 0;
    }

    general.value.all_try += 1;

    setTimeout(() => {
      getRandomVerb({});
    }, 1000);
  };

  return {
    getRandomVerb, selectedVerb, tested, verifyVerb, success, currentVerbStr,
  };
}
