import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      error: null,
      isPending: false,
    };
  },
  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.isPending = true;
        this.meetup = null;

        fetchMeetupById(this.meetupId)
          .then((data) => {
            this.meetup = data;
            this.error = null;
            this.isPending = false;
          })
          .catch((error) => {
            this.error = error.message;
            this.isPending = false;
          });
      },
    },
  },
  template: `
    <div class="page-meetup">
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>

      <ui-container v-else-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>

      <ui-container v-else-if="isPending">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
    </div>`,
});
