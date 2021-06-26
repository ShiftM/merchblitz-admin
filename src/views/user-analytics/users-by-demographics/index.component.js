import {userAnalyticsService} from "../../../services/analytics/user-analytics/user-analytics.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {cityOptionService} from "../../../services/city-option/city-option.service";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

import BarChart from "../.././../components/charts/BarChart.vue";

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
                gender: '',
                date_from: null,
                date_to: null,
                interest: '',
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
                        dateFrom : 'From',
                        dateTo : 'To',
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
                labels: [],
              datasets: [
                {
                  label: 'Male',
                  backgroundColor: '#55a1f2',
                  data: [0],
                },
                {
                  label: 'Female',
                  backgroundColor: '#f25562',
                  data: [0],
                },
                {
                  label: 'Other',
                  backgroundColor: '#f7db4f',
                  data: [0],
                },
                {
                  label: 'Rather Not Say',
                  backgroundColor: '#a6a5a1',
                  data: [0],
                }
              ],
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
                    labelString: 'No. of Users'
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
        await this.getInterestOption(this.filter_options);
      await this.getCityOption(this.filter_options);
      await this.list(this.filter);
    },
    methods: {
        async search(data) {
          if (this.validAge && this.validDate) {
            this.chartLoaded = false;
            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
          }
        },
        async list(data) {
            this.data = await userAnalyticsService.userByDemographics(data);
            var graphLabel = [];
            var graphMale = [];
            var graphFemale = [];
            var graphOther = [];
            var graphRatherNotSay = [];
            this.data.forEach(function (value, index) {
              graphLabel.push(value.range);
              console.log(value.hasOwnProperty("male"))
              if (value.hasOwnProperty("male")){
                graphMale.push(value.male);
              }
              if (value.hasOwnProperty("female")){
                graphFemale.push(value.female);
              }
              if (value.hasOwnProperty("other")){
                graphOther.push(value.other);
              }
              if (value.hasOwnProperty("rather_not_say")){
                graphRatherNotSay.push(value.rather_not_say);
              }
            });
              this.chartData.datasets[0].data = graphMale;
              this.chartData.datasets[1].data = graphFemale;
              this.chartData.datasets[2].data = graphOther;
              this.chartData.datasets[3].data = graphRatherNotSay;
              this.chartData.labels = graphLabel;
              console.log(this.chartData.datasets)
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
