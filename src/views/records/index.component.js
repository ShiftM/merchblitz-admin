import { alertService } from "../../services/alert/alert.service";
import { recordService } from "../../services/record/record.service";

import VueExcelXlsx from "vue-excel-xlsx";
import Vue from "vue";

Vue.use(VueExcelXlsx);


export default {
    data: () => {
        return {
            data: [],
            filter: {
                paginate: true,
                per_page: 500,
                page: 1,
                status_option_id: 1,
                related_status_option_id: 1,
                with_related_models: true,
                order_by: 'DESC',
                order_by_key: 'id',
                has_featured: false
            },
            suggestions: {},
            columns: [
                {
                    label: "Id",
                    field: "id",
                },
                {
                    label: "Store_id",
                    field: "store_id",
                },
                {
                    label: "store_branch",
                    field: "store_branch",
                },
                {
                    label: "store_name",
                    field: "store_name",
                },
                {
                    label: "store_owner_name",
                    field: "store_owner_name",
                },
                {
                    label: "contact_number",
                    field: "contact_number",
                },
                {
                    label: "age",
                    field: "age",
                },
                {
                    label: "street",
                    field: "street",
                },
                {
                    label: "town_city",
                    field: "town_city",
                },
                {
                    label: "banner",
                    field: "banner",
                },
                {
                    label: "poster",
                    field: "poster",
                },
                {
                    label: "grill_talker",
                    field: "grill_talker",
                },
                {
                    label: "wall_sticker",
                    field: "wall_sticker",
                },
                {
                    label: "cash_mat",
                    field: "cash_mat",
                },
                {
                    label: "awning",
                    field: "awning",
                },
                {
                    label: "store_signage",
                    field: "store_signage",
                },
                {
                    label: "products",
                    field: "products",
                },
                {
                    label: "report_by",
                    field: "report_by",
                },
                {
                    label: "long",
                    field: "long",
                },
                {
                    label: "lat",
                    field: "lat",
                },
                {
                    label: "created_at",
                    field: "created_at",
                },
                {
                    label: "updated_at",
                    field: "updated_at",
                },



                // {
                //     label: 'CHESTERFIELD',
                //     field: 'CHESTERFIELD',
                // },

            ],
        }
    },
    async mounted() {

        await this.list(this.filter);
        // FORMAT DATA 

        this.data.data.map((val) => {
            val.report_by = JSON.parse(val.report_by)
            val.created_at = new Date(val.created_at).toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' })
            return val;
        })

    },
    methods: {
        async test(value) {
            console.log(value);
        },
        async search(data) {

            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
        },
        async list(data) {
            this.data = await recordService.list(data)
            this.data.data = this.data.data.reverse()
        },
        // async iterate() {
        //     // REFERENCE TO TEMPORARY SHEET
        //     let tempSheet = []
        //     let myObject1 = [{ One: "One" }];
        //     myObject1.merge(
        //         { One: "One" }
        //     )
        //     this.data.data.map((val) => {
        //         // Add this to temp
        //         // let temp = { 'CHESTERFIELD': 'N/A' }

        //         // val = val.merge(temp)


        //         // temp.push({ 'CHESTERFIELD': 'N/A' })
        //         // let tempVal = [...val,
        //         // { 'CHESTERFIELD': 'N/A' },

        //         // ]

        //         console.log(val)

        //         // // ITERATE THROUGH EACH PRODUCT
        //         // val.products[0].map((product) => {
        //         //     // ITERATE THROUGH COLUMN DATA
        //         //     this.columns.map((col) => {
        //         //         // FIND A MATCH
        //         //         if (col.label == product.title) {
        //         //             // Add Product toclumn
        //         //             tempVal['CHESTERFIELD'] = product
        //         //         }
        //         //     })
        //         // })

        //         // tempSheet.push(tempVal)
        //     })

        //     console.log(tempSheet)
        // },

        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await recordService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await recordService.update(id, inputs);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
        },
        async clear() {
            this.filter.name = '';
            this.search();
        },
        async set_featured$(data) {

            var cb = async () => {

                const response = await featuredItemService.store(data);
                if (response.code == 422) {

                    alertService.failWithMessage('Error', response.errors[0].detail);
                }
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to set this record as featured?');
        },

        async unset_featured$(id) {

            var cb = async () => {

                await featuredItemService.delete(id);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to remove this record as featured?');
        },

    }

}
