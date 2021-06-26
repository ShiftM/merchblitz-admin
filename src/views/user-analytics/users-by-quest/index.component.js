import {userAnalyticsService} from "../../../services/analytics/user-analytics/user-analytics.service";
import {interestOptionService} from "../../../services/interest-option/interest-option.service";
import {cityOptionService} from "../../../services/city-option/city-option.service";
import {eventService} from "../../../services/event/event.service";
import {questService} from "../../../services/quest/quest.service";
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
              status_option_id: 1,
              age_from: null,
              age_to: null,
              gender: '',
              date_from: null,
              date_to:null,
              interest_option_id: '',
              city: '',
              event_id: '',
              quest_id: ''
            },
            eventFilter: {
              paginate: false,
              page: 0,
              event_id: ''
            },
            date : {},
            filter_options: {
              paginate: false
            },
            interestList: [],
            cityList: [],
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
            events: [],
            quests: []
        }
    },
    async mounted() {
        await this.getInterestOption(this.filter_options);
        await this.getCityOption(this.filter_options);
        this.eventList();
        await this.list(this.filter);
    },
    methods: {
        async search(data){
          if (this.validAge && this.validDate) {
            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
          }
        },
        async list(data) {
            this.data  = await userAnalyticsService.userByQuest(data);

        },
        async clear() {
          this.eventFilter.event_id  = '';
          this.eventFilter.event_detail  = '';
          this.filter.event_id  = '';
          this.filter.quest_id  = '';
          this.search();
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
        },
        async questList() {
            this.filter.event_id = this.eventFilter.event_id;
            this.filter.quest_id = '';
            const response = await questService.list(this.eventFilter);
            this.quests = response.data.data.data;
            // console.log(response.data)
          },
        async eventList(){
            const response = await eventService.list(0,false);
            this.events = response.data.data;
        }
    }

}
