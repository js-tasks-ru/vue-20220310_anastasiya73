import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    increase() {
      this.$emit('update:count', this.count + 1);
    },
  },
  template: `<button @click="increase" type="button">{{ count }}</button>`,
});
