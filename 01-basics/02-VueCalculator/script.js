import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  name: 'Root',
  data() {
    return {
      leftOperand: 0,
      rightOperand: 0,
      operationType: null,
    };
  },
  computed: {
    result() {
      switch (this.operationType) {
        case 'sum':
          return this.leftOperand + this.rightOperand;
        case 'subtract':
          return this.leftOperand - this.rightOperand;
        case 'multiply':
          return this.leftOperand * this.rightOperand;
        case 'divide':
          return this.leftOperand / this.rightOperand;
        default:
          return 0;
      }
    },
  },
}).mount('#app');
