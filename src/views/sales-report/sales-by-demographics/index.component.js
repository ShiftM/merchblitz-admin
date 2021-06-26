import {salesReportService} from "../../../services/analytics/sales-report/sales-report.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {cityOptionService} from "../../../services/city-option/city-option.service";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

import BarChart from "../../../components/charts/BarChart.vue";

export default {
  components: {
    'bar-chart': BarChart
  },
  data: () => {
    return {
      data: [],
      datasets: [],
      page_count: 100,
      filter: {
        age_from: null,
        age_to: null,
        date_from: null,
        date_to: null,
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
      chartLoaded: false,
      chartData: {
        labels: ['All Ages'],
        datasets: [],
      },
      chartOptions: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Age Range'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Sales by Gender'
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      },
      filter_options: {
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
        this.chartLoaded = false;
        this.filter = Object.assign(this.filter, data);
        await this.list(this.filter);
      }
    },
    async clear(){
      this.filter  = {
        age_from: null,
        age_to: null,
        date_from: null,
        date_to: null,
        interest_option_id: '',
        city: ''
      };
      await this.list(this.filter);
    },
    async list(data) {
      this.data = await salesReportService.salesByDemographics(data);
      var graphData = [];
      var color = '';
      this.data.forEach(function (value, index) {
        if (value.gender === 'Male') {
          color = '#55a1f2'
        } else if (value.gender === 'Female') {
          color = '#f25562'
        } else if (value.gender === 'Other') {
          color = '#f7db4f'
        } else {
          color = '#a6a5a1'
        }
        graphData.push({
          'label': value.gender,
          'data': [value.total ? value.total : 0],
          'backgroundColor': color
        })
      });
      this.chartData.datasets = graphData;
      this.chartLoaded = true;
    },
    async getInterestOption() {
      this.interestList = await interestOptionService.list(this.filter_options);
    },
    async getCityOption() {
      this.cityList = await cityOptionService.list(this.filter_options);
    }
  }

}
