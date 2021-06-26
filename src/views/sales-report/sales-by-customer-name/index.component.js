import {salesReportService} from "../../../services/analytics/sales-report/sales-report.service";
import {userAnalyticsService} from "../../../services/analytics/user-analytics/user-analytics.service";
import {searchService} from "../../../services/search/search.service";
import {debounce} from "debounce";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
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
                date_from: null,
                date_to: null,
                type: 'Item',
                user_detail: null
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
            suggestions: [],
        }
    },
    async mounted() {

        await this.list(this.filter);
        await this.suggest({});
    },
    methods: {
        async search(data){

          if (this.validDate){
            this.filter = Object.assign(this.filter,data);

            await this.list(this.filter);
          }
        },
        async clear(){
            this.filter  = {
                paginate: true,
                per_page: 10,
                page: 1,
                date_from: null,
                date_to: null,
                type: 'Item',
                user_detail: null
            };
            await this.list(this.filter);
        },
        async list(data) {
            this.data  = await salesReportService.salesByCustomerName(data);
            // console.log(this.data);
        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        suggest: debounce(async function (data) {
            var filter = {
                paginate: true,
                per_page: 10,
                status_option_id: 1,
                order_by: 'ASC',
                order_by_key: 'phone_number',
                user_detail: this.filter.user_detail
            };

            filter = Object.assign(filter, data);
            this.suggestions = await searchService.searchCustomer(filter);
            console.log(this.suggestions);
        }, 800),
    }

}
