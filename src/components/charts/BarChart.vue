<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderBarChart()
  },
  methods: {
    renderBarChart() {
      this.renderChart(this.chartdata, this.options)
    }
  },
  watch: {
    chartData: {
      handler: function (val) {
        if (this.chartData.datasets.length === 100) {
          this._chart.destroy()
          this.renderChart(this.chartData, this.options)
        }
      },
      deep: true
    }
  }
};
</script>
