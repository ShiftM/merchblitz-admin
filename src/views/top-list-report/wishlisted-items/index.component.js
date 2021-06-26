import {topListReportService} from "../../../services/analytics/top-list-report/top-list-report.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {cityOptionService} from "../../../services/city-option/city-option.service";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {provinceOptionService} from "../../../services/province-option/province-option.service";

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

export default {
  data: () => {
    return {
      data: [],
      page_count: 100,
      filter: {
        paginate: true,
        per_page: 10,
        page: 1,
        age_from: null,
        age_to: null,
        gender: '',
        date_from: null,
        date_to:null,
        interest_option_id: '',
        city: ''
      },
      date: {},
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
          // options: {
          //   format: 'YYYY-MM-DD h:mm a',
          //   minuteInterval: '15',
          //   id: 'DateTimePicker',
          // }
        }
      ],
      filter_options:{
        paginate: false
      },
      interestList: [],
      cityList: []
    }
  },
  async mounted() {
    await this.list(this.filter);
    await this.getInterestOption(this.filter_options);
    await this.getCityOption(this.filter_options);
  },
  methods: {
    async search(data) {
      if (this.validAge && this.validDate) {
        this.filter = Object.assign(this.filter, data);
        await this.list(this.filter);
      }
    },
    async list(data) {
      this.data = await topListReportService.topWishlistedItem(data);
    },
    async paginate(page) {
      this.filter.page = page;
      await this.list(this.filter);
    },
    async getInterestOption() {
      this.interestList = await interestOptionService.list(this.filter_options);
    },
    async getCityOption() {
      this.cityList = await cityOptionService.list(this.filter_options);
    }
  }

}
