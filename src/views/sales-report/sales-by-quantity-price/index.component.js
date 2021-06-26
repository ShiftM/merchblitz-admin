import {salesReportService} from "../../../services/analytics/sales-report/sales-report.service";
import {alertService} from "../../../services/alert/alert.service";

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
                status_option_id: 1,
                type: 1
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
                }
            ]
        }
    },
    async mounted() {

        await this.list(this.filter);

    },
    methods: {
        async search(data) {
          if (this.validAge && this.validDate) {
            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
          }
        },
        async list(data) {
            this.data  = await salesReportService.list(data);
            console.log(this.data);
        },
    }

}
