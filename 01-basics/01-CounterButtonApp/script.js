import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  name: 'Root',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addValueToCounter(event, value = 1) {
      this.counter += value;
    },
  },
}).mount('#app');
