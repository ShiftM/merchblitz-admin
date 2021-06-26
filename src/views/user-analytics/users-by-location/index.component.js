import {userAnalyticsService} from "../../../services/analytics/user-analytics/user-analytics.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {cityOptionService} from "../../../services/city-option/city-option.service";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

import LineChart from "../.././../components/charts/LineChart.vue";
import BarChart from "../.././../components/charts/BarChart.vue";

export default {
    components: {
        'bar-chart': BarChart
    },
    data: () => {
        return {
            data: [
            ],
            page_count: 100,
            filter: {
                paginate: true,
                per_page: 10,
                page: 1,
                status_option_id: 1,
                age_from: null,
                age_to: null,
                gender: '',
                date_from: null,
                date_to:null,
                interest_option_id: '',
                city: ''
            },
            date : {},
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
                        label: 'Users by Location',
                        backgroundColor: '#55a1f2',
                        data: [],
                    },
                ],
            },
            chartOptions: {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Cities'
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
        await this.list(this.filter);
        await this.getInterestOption(this.filter_options);
        await this.getCityOption(this.filter_options);
    },
    methods: {
        async search(data){
          if (this.validAge && this.validDate) {
            this.chartLoaded = false;
            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
          }
        },
        async list(data) {
            this.data  = await userAnalyticsService.userByLocation(data);
            var graphData = [];
            var graphLabel = [];
            this.data.forEach(function (value, index) {
              graphLabel.push(value.city?value.city:'')
              graphData.push(value.count)
            });
          this.chartData.labels = graphLabel;
          this.chartData.datasets[0].data = graphData;
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
