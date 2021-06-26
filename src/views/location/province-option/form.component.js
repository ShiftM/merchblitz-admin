import {provinceOptionService} from "../../../services/province-option/province-option.service";
import {alertService} from "../../../services/alert/alert.service";
import {countryOptionService} from "../../../services/country-option/country-option.service";
import {regionOptionService} from "../../../services/region-option/region-option.service";

export default {
  data: () => {
    return {
      data: {
        status_option_id: 1,
        region_option_id: '',
        country_option_id: ''
      },
      filter: {
        paginate: false,
        status_option_id: 1
      },
      is_new: true,
      errors: [],
      regionList: [],
      countryList: []
    }
  },
  async mounted() {

    if (this.$route.params.id) {
      this.show(this.$route.params.id);
      this.is_new = false;
    }
    console.log(this.provinceList)
    await this.getCountry(this.filter);
    await this.getRegion(this.filter);
  },
  methods: {
    async store() {
      const cb = async () => {
        const response = await provinceOptionService.store(this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        } else {
          this.data = {
            status_option_id: 1
          };
          alertService.successWithMessage('Success', 'Record Successfully saved.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb, 'Are you sure you want to add this record?');

    },
    async update() {
      const cb = async () => {
        const response = await provinceOptionService.update(this.$route.params.id, this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        } else {
          this.data = {
            status_option_id: 1
          };
          alertService.successWithMessage('Success', 'Record Successfully Updated.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb, 'Are you sure you want to update this record?');
    },
    async show(id) {
      this.data = await provinceOptionService.show(id);
    },
    async getCountry() {
      this.countryList = await countryOptionService.list(this.filter);
    },
    async getRegion() {
      if (this.data.country_option_id) {
        this.filter.country_option_id = this.data.country_option_id;
        this.regionList = await regionOptionService.list(this.filter);
      } else {
        this.regionList = [];
      }
      this.data.region_option_id = '';
    }
  }

}
