import {salesReportService} from "../../../services/analytics/sales-report/sales-report.service";
import {alertService} from "../../../services/alert/alert.service";

import Vue from "vue";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {cityOptionService} from "../../../services/city-option/city-option.service";
import {categoryHeaderService} from "../../../services/category-header/category-header.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {debounce} from "debounce";
import {searchService} from "../../../services/search/search.service";

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
            cities_options: [],
            category_options: [],
            interest_options: [],
            suggestions: []
        }
    },
    async mounted() {

        await this.list(this.filter, this.type);

        this.city_list();
        this.category_list();
        this.interest_list();
        await this.suggest({});
    },
    methods: {

        async search(data) {
            if (this.validAge && this.validDate){
              this.filter = data;
              await this.list(this.filter);
            }
        },
        async list(data) {
            this.data = await salesReportService.salesByItem(data);
            this.data.total_sales = 0;
            this.data.data.forEach((value,key) => {
                this.data.total_sales = value.total_sales +    this.data.total_sales;
            });


        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await salesReportService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async city_list() {
          this.cities_options = await cityOptionService.list({paginate: false});

        },
        async category_list() {
          this.category_options = await categoryHeaderService.list({paginate: false, status_option_id: 1});
        },
        async interest_list() {
          this.interest_options =await interestOptionService.list({paginate: false});
        },
        suggest: debounce(async function (data) {
          var filter = {
            paginate: true,
            per_page: 10,
            status_option_id: 1,
            order_by: 'ASC',
            order_by_key: 'phone_number',
            item_detail: this.filter.name
          };

          filter = Object.assign(filter, data);
          this.suggestions = await searchService.searchItem(filter);
          console.log(this.suggestions);
        }, 800),
    }

}
