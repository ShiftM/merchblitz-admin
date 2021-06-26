import Vue from "vue";
import EventService from "../../services/event/event.service";

const event = new EventService();

import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {debounce} from "debounce";
import {searchService} from "../../services/search/search.service";

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

export default {
  data: () => {
    return {
      demo: [
        {
          options: {
            format: 'h:mm a',
            formatted: 'h:mm a',
            onlyTime: true,
            color: 'firebrick',
            minuteInterval: '15',
            label: 'Select time',
            id: 'TimePicker',
            noLabel: true,
            onlyDate: true,
            dateFormat: 'YYYY-MM-DD',
            dateFormatted: 'YYYY-MM-DD',
            title: 'Select date',
            dateFrom: 'From',
            dateTo: 'To',
          }
        }
      ],
      data: [],
      date: {},
      filter: {
        paginate: true,
        per_page: 25,
        page: 1,
      },
      // search: '',
      loading: true,
      suggestions: {},
    }
  },

  async mounted() {
    await this.list(this.filter);
    await this.suggest({});
  },
  methods: {
    async search(data) {
      this.filter = Object.assign(this.filter, data);
      await this.list(this.filter);
    },
    async list(data) {
      var response = await event.list(data);
      this.data = response.data.data;
      this.loading = false;
      console.log(this.data)
    },
    async paginate(page) {
      this.filter.page = page;
      await this.list(this.filter);
    },
    async changeStatus(id, name, status) {
      this.$swal({
        title: 'Are you sure ',
        text: "You want to " + status + " " + name + '?',
        icon: 'warning',
        buttons: [
          'No',
          'Yes'
        ]
      }).then(response => {
        if (response) {
          return event.changeStatus(id).then(success => {
            // location.reload();
            this.list(this.filter);
          }, fail => {
            console.log(fail);
          })
        }
        else {
          this.$swal.close();
        }
      })
    },
    clearFilter() {
      this.filter = {
        paginate: true,
        per_page: 25,
        page: 1,
        status_option_id: 1,
        name: '',
        date_from: '',
        date_to: ''
      };

      return this.search(this.filter);
    },
    suggest: debounce(async function (data) {
      var filter = {
        paginate: true,
        per_page: 10,
        page: 1,
        name: this.filter.name
      };

      filter = Object.assign(filter, data);
      // var lists = await event.list(filter);
      this.suggestions = await searchService.searchEvent(filter);
      // this.suggestions = lists.data.data;

    }, 800),
  }
}
