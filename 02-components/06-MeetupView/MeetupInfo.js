import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },
  computed: {
    datetime() {
      return this.getDateObject().toLocaleDateString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric' });
    },
    localedDatetime() {
      return this.getDateObject().toLocaleDateString('en-En', { month: 'short', day: 'numeric', year: 'numeric' });
    },
  },
  methods: {
    getDateObject() {
      return new Date(this.date);
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="datetime">{{ localedDatetime }}</time>
      </li>
    </ul>`,
});
