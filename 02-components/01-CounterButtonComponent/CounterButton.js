import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: ['count'],
  methods: {
    increase() {
      this.$emit('update:count', this.count + 1);
    },
  },
  template: `<button @click="increase" type="button">{{ count }}</button>`,
});
