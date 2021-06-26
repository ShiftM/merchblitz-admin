import {sampleService} from "../../services/sample/sample.service";
import {alertService} from "../../services/alert/alert.service";

import LineChart from "../../components/charts/LineChart.vue";
import BarChart from "../../components/charts/BarChart.vue";

export default {
    components: {
        'bar-chart': BarChart
    },
    data: () => {
        return {
            data: [],
            page_count: 100,
            filter: {
                paginate: true,
                per_page: 10,
                page: 1,
                status_option_id: 1
            },
            chartData: {
                labels: ['0-20', '21-40', '41-60', '61-80'],
                datasets: [
                    {
                        label: 'Male',
                        backgroundColor: '#55a1f2',
                        data: [12, 19, 3, 10],
                    },
                    {
                        label: 'Female',
                        backgroundColor: '#f25562',
                        data: [5, 10, 3, 8],
                    },
                    {
                        label: 'Other',
                        backgroundColor: '#f7db4f',
                        data: [18, 5, 8, 13],
                    },
                    {
                        label: 'Rather Not Say',
                        backgroundColor: '#a6a5a1',
                        data: [8, 4, 5, 17],
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
            }
        }
    },
    async mounted() {

        await this.list(this.filter);
        console.log(this.$route)

    },
    methods: {
        async search(data){

            this.filter = Object.assign(this.filter,data);
            await this.list(this.filter);
        },
        async list(data) {
            this.data  = await sampleService.list(data);

        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async ()  => {
                await sampleService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        }
    }

}
