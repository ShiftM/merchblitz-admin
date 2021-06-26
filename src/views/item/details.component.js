import {itemService} from "../../services/item/item.service";
import {categoryHeaderService} from "../../services/category-header/category-header.service";
import {alertService} from "../../services/alert/alert.service";

export default {
    data: () => {
        return {
            data: {
                status_option_id: 1,
                with_related_models: true,
                has_many_item_category: [],
                has_many_item_variant: [],
            },
            category_headers: [],
            errors: [],
        }
    },
    async mounted() {
        
        if (this.$route.params.id) {
            this.show(this.$route.params.id, {with_related_models: true, related_status_option_id: 1});
        }

    },
    methods: {
        async category_headers_list() {
            this.category_headers = await categoryHeaderService.list({paginate: false, status_option_id: 1});
        },
        async show(id, data) {
            const response = await itemService.show(id, data);
            this.data = response;
            console.log(response);
            // console.log(response.has_many_item_category);
        }
    }

}
