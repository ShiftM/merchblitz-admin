import {eventAnalyticsService} from "../../../services/analytics/event-analytics/event-analytics.service";
import {questService} from "../../../services/quest/quest.service";
import {eventService} from "../../../services/event/event.service";

import Vue from "vue";
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
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
                type: 1,
                quest_id: '',
                event_id: ''
            },
            eventFilter: {
              paginate: false,
              page: 0,
              event_id: ''
            },
            events: [],
            quests: [],
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
        // this.eventList();
      await this.list(this.filter);
      await this.suggest({});
      await this.loadSuggestions();
    },
    methods: {
        async search(data) {
            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
        },
        async list(data) {
          if(this.filter.type === 1){
            this.data  = await eventAnalyticsService.questViewed(data);
          } else {
            this.data  = await eventAnalyticsService.questFinish(data);
          }

          // this.data  = await eventAnalyticsService.questViewed(data);

        },
        async clear() {
          this.eventFilter.event_id  = '';
          this.eventFilter.event_detail  = '';
          this.filter.event_id  = '';
          this.filter.quest_id  = '';
          this.suggest({});
          this.search();
        },
        async questList() {
          this.filter.event_id = this.eventFilter.event_id;
          var response = await questService.list(this.eventFilter);
              this.quests = response.data.data;
        },
        async paginate(page) {
          this.filter.page = page;
          await this.list(this.filter);
        },
        async eventList(){
          const response = await eventService.list(0,false);

          this.events = response.data.data;
        },
        suggest: debounce(async function (data) {
          var filter = {
            paginate: true,
            per_page: 10,
            status_option_id: 1,
            order_by: 'ASC',
            order_by_key: 'phone_number',
            event_detail: this.eventFilter.event_detail
          };
          filter = Object.assign(filter, data);

          var item = this.suggestions.find(item => item.suggestion === this.eventFilter.event_detail);

          if(item){
            this.eventFilter.event_id = item.id;
          } else {
            this.eventFilter.event_id = '';
          }
          this.questList();

        }, 800),
        async loadSuggestions(){
            this.suggestions = await searchService.searchEvent({paginate: false});
        }
    }

}
