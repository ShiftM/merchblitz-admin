import {alertService} from "../../../services/alert/alert.service";
import {eventAnalyticsService} from "../../../services/analytics/event-analytics/event-analytics.service";
import {eventService} from "../../../services/event/event.service";

export default {
  data: () => {
    return {
      data: {
        total: 0
      },
      page_count: 100,
      filter: {
        paginate: true,
        per_page: 10,
        page: 1,
        status_option_id: 1,
        type: 1,
        eventId: ''
      },
      filterEvent : {
        paginate: false
      },
      events: []
    }
  },
  async mounted() {

    await this.list(this.filter, this.type);
    this.event_list(this.filterEvent);

  },
  methods: {
    async search(data) {
      this.type = data.type;
      this.filter = Object.assign(this.filter, data);
      await this.list(this.filter);
    },
    async list(data) {
      var response;
      if (data.type == 1) {
        response = await eventAnalyticsService.interest(data);
      }
      if (data.type == 2) {
         response = await eventAnalyticsService.checkInWithQuest(data);
      }
      if (data.type == 3) {
         response = await eventAnalyticsService.checkIn(data);
      }
      this.data = response;
    },
    async clear(type) {
      this.filter.eventId  = '';
      this.search(type);
    },
    async paginate(page) {
      this.filter.page = page;
      await this.list(this.filter);
    },
    async event_list(data){
      const  response = await eventService.list(data);

      this.events = response.data.data;
    }
  }

}
