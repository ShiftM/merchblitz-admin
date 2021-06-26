import {itemService} from "../../services/item/item.service";
import {colorOptionService} from "../../services/color-option/color-option.service";
import {sizeOptionService} from "../../services/size-option/size-option.service";
import {alertService} from "../../services/alert/alert.service";
import {categoryHeaderService} from "../../services/category-header/category-header.service";
import {itemCategoryService} from "../../services/item-category/item-category.service";
import {itemStockService} from "../../services/item-stock/item-stock.service";
import {itemVariantService} from "../../services/item-variant/item-variant.service";
import {uploadService} from "../../services/upload/upload.service";
import {imageService} from "../../services/image/image.service";

export default {
    data: () => {
        return {
            data: {
                status_option_id: 1,
                has_many_item_category: [],
                has_many_item_variant: []
            },
            category_headers: [],
            size_options: [],
            color_options: [],
            item_errors: [],
            stock_errors: [],
            config_error: {
                stock_key: '',
                variant_key: '',
                valid_category: false
            },
          validImage: false
        }

    },
    async mounted() {


        if (this.$route.params.id) {
            await this.show(this.$route.params.id, {with_related_models: true, related_status_option_id: 1});
            await this.validateMainForm();

        } else {
            this.add_variant$();
            // this.add_stock$(0);
            this.category_headers_list();
        }



        this.size_option_list();
        this.color_option_list();
        $('#next-button').click(function() {
            var href = $(this).attr('href');
            var activateTab = href + '-tab';
            var navTabs = $('.nav-tabs').children();
            var tabPanes = $('.tab-content').children();

            navTabs.removeClass('active');
            tabPanes.removeClass('active show');
            $(activateTab).addClass('active');
            $(href).addClass('active show')
        });

    },
    methods: {
        checkSizeAvailability(id,data){
            var valid = true;
            if(!data.find(el => el.size_option_id == id)){
                valid = false;
            }
            return valid;
        },
        isVariantEnabled(){

          var valid = false;
          if(this.data.name && this.data.description && this.config_error.valid_category){
              valid = true;
          }
          return valid;
        },
        validateCategory(){
            var valid = false;
            this.config_error.valid_category = false;
            this.data.has_many_item_category.forEach((value,key) => {
                if(value.category_header_id){
                    valid = true;
                    this.config_error.valid_category = true;
                }
            });
            return valid;
        },
        validateMainForm(){
            if(!this.validateCategory()){
                        this.item_errors.push({"detail": " Please select at least one category. ",
                            "field": "category"});
            }
            if(!this.data.name){
                if(!this.validateCategory()){
                    this.item_errors.push({"detail": "Name required.",
                        "field": "name"});
                }
            }
            if(!this.data.description){
                if(!this.validateCategory()){
                    this.item_errors.push({"detail": "Description required.",
                        "field": "description"});
                }
            }
        },
        validateImage(){
          this.data.validImage = true;
          this.data.has_many_item_variant.forEach((value,key) => {
            if(value.has_many_image.length < 1){
              this.data.validImage = false;
              this.item_errors.push({"detail": "Image required.",
                "field": "image-"+key});
            } else {
              let i = this.item_errors.map(item => item.field).indexOf("image-"+key) // find index of your object
              this.item_errors.splice(i, 1) // remove it from array
            }
          });
          return this.data.validImage;
        },
        async store() {
          if(!this.validateCategory()){
              return false;
          }
          this.data.validImage = false;
          if(!this.validateImage()){
                return false;
            }

          const cb = async () => {
                alertService.loading();
                const response = await itemService.store(this.data);
                if (response.code == 422) {
                    this.item_errors = response.errors;
                    alertService.close();
                } else {
                    await this.store_update_delete_category(response.id);
                    const fn = await this.store_update_variant_stock(this.delete_item_with_child, response.id, "store");
                    alertService.close();
                    if (fn) {
                        this.config_error = {
                            stock_key: '',
                            variant_key: ''
                        }
                        this.data = {
                            status_option_id: 1,
                            has_many_item_category: [],
                            has_many_item_variant: []
                        };
                        this.init_has_many_item_category();
                        this.add_variant$();
                        this.add_stock$(0);
                        alertService.successWithMessage('Success', 'Item created successfully.');
                        this.$router.go(-1);
                    }

                }
            }
            alertService.withConfirmation(cb, 'Are you sure you want to add this record?');

        },
        async update() {

            if(!this.validateCategory()){
                return false;
            }
            this.data.validImage = false;
            if(!this.validateImage()){
              return false;
            }
            const cb = async () => {
                alertService.loading();
                const response = await itemService.update(this.$route.params.id, this.data);
                if (response.code == 422) {
                    this.errors = response.errors;
                    alertService.close();
                } else {

                    await this.store_update_delete_category(response.id);
                    const fn = await this.store_update_variant_stock(this.delete_failed_stock, response.id, "update");
                    alertService.close();
                    if (fn) {
                        await             this.show(this.$route.params.id, {with_related_models: true, related_status_option_id: 1});
                        alertService.successWithMessage('Success', 'Record Successfully Updated.');
                        this.$router.go(-1);
                    }
                }
            }
            alertService.withConfirmation(cb, 'Are you sure you want to update this record?');
        },
        async store_update_delete_category(item_id) {

            var to_remove_ids = [];
            this.data.has_many_item_category.forEach(async (value, key) => {
                if (value.category_header_id) {
                    value.item_id = item_id;
                    if (!value.id) {
                        await itemCategoryService.store(value);
                    } else {
                        await itemCategoryService.update(value.id, value);
                    }
                } else if (!value.category_header_id && value.id) {
                    to_remove_ids.push(value.id);
                }
            });
            to_remove_ids.forEach((value, key) => {
                itemCategoryService.delete(value);
            });

        },

        async store_update_delete_images(table_id, table_type, data) {



        },
        async store_update_variant_stock(cb, item_id, method) {
            var success = true;
            var new_ids = [];
            for (var v = 0; v < this.data.has_many_item_variant.length && success; v++) {
                var variant_input = this.data.has_many_item_variant[v];
                variant_input.item_id = item_id;
                const variant_cb = await itemVariantService.update(variant_input.id, variant_input);

                await imageService.deleteByParent(variant_cb.id, 'item_variants');
                for (var i = 0; i < variant_input.has_many_image.length; i++){
                    var image_input = variant_input.has_many_image[i];
                    image_input.table_id = variant_cb.id;
                    await imageService.store(image_input);
                }
                // this.store_update_delete_images(variant_cb.id, 'item_variants', variant_input.has_many_image);
                for (var s = 0; s < variant_input.has_many_item_stock.length; s++) {
                    var stock_input = variant_input.has_many_item_stock[s];
                    stock_input.item_id = item_id;
                    stock_input.item_variant_id = variant_cb.id;
                    var stock_cb;
                    if (stock_input.is_new) {
                        stock_cb = await itemStockService.store(stock_input);
                        new_ids.push(stock_cb.id);
                        if (stock_cb.code == 422) {
                            var param;
                            this.stock_errors = stock_cb.errors;
                            this.config_error.stock_key = s;
                            this.config_error.variant_key = v;
                            success = false;
                            if (method === "update") {
                                param = new_ids;
                            } else {
                                param = item_id;
                            }
                            cb(param);
                            return success;

                        }

                    } else {
                        stock_cb = await itemStockService.update(stock_input.id, stock_input);
                    }

                }

            }
            return success;
        },
        async delete_item_with_child(id) {
            await itemService.force_delete(id);
        },
        async delete_failed_stock(ids) {
            ids.forEach(async (value, key) => {
                if (value) {
                    await itemStockService.delete(value);
                }
            });
        },
        async show(id, data) {
            this.data = await itemService.show(id, data);

            this.init_has_many_item_category('show');


        },
        async category_headers_list() {
            this.category_headers = await categoryHeaderService.list({paginate: false, status_option_id:1});
            this.init_has_many_item_category();
        },
        async init_has_many_item_category(method = null) {
            if(method == 'show'){
                categoryHeaderService.list({paginate: false, status_option_id:1}).then(categories => {
                    var cats = this.data.has_many_item_category;
                    this.data.has_many_item_category = [];
                    categories.forEach((value, key) => {
                        this.data.has_many_item_category[key] = {};

                        cats.forEach((c, k) => {
                            if (value.id == c.category_header_id) {
                                this.data.has_many_item_category[key] = c;
                            }
                        });

                    });

                    this.category_headers = categories;
                });
            }
            else{
                this.category_headers.forEach((value, key) => {
                    let input = this.data.has_many_item_category.find(el => el.category_header_id == value.id);
                    if (!input) {
                        input = {};
                    }
                    this.data.has_many_item_category[key] = input;

                });
            }


        },
        async size_option_list() {
            this.size_options = await sizeOptionService.list({paginate: false,status_option_id: 1});
        },
        async color_option_list() {
            this.color_options = await colorOptionService.list({paginate: false,status_option_id: 1});
        },
        async upload($event, key) {
          if ($event.target.files.length > 0) {
            alertService.loading();
            var response = await uploadService.image($event, 'items');
            response.table_type = "item_variants";
            const has_primary =    this.data.has_many_item_variant[key].has_many_image.find(el => el.primary == 1);
            response.primary = 1;
            if(has_primary){
                response.primary = 0;
            }
            this.data.has_many_item_variant[key].has_many_image.push(response);
            alertService.close();
            console.log(this.data.has_many_item_variant[key].has_many_image);
          }
        },

        async add_variant$() {
            let input = {
                status_option_id: 1,
                has_many_item_stock: [],
                has_many_image: [],
            };
            this.data.has_many_item_variant.push(input);
            this.add_stock$(this.data.has_many_item_variant.length - 1);
        },
        async add_stock$(key) {
            let input = {
                status_option_id: 1,
                currency_type_id: 1,
                is_new: true
            };
            this.data.has_many_item_variant[key].has_many_item_stock.push(input);
        },
        async remove_variant$(key) {
            this.data.has_many_item_variant[key].status_option_id = 2;
            this.data.has_many_item_variant[key].has_many_item_stock.forEach((value,child_key) => {
                this.remove_stock$(key,child_key);
            });
        },
        async remove_stock$(parent_key, child_key) {
            this.data.has_many_item_variant[parent_key].has_many_item_stock[child_key].status_option_id = 2;
            if(this.data.has_many_item_variant[parent_key].has_many_item_stock[child_key].is_new){
                this.$delete(this.data.has_many_item_variant[parent_key].has_many_item_stock,child_key);
            }

        },
        async check_category$($event, key) {
            this.data.has_many_item_category[key].status_option_id = 1;
            if (!$event.target.checked) {
                this.data.has_many_item_category[key].status_option_id = 2;
            }
            this.validateCategory();

        },
        async set_primary$(key,i_key){


            this.data.has_many_item_variant[key].has_many_image.forEach((value,i) => {
                value.primary = 0;
                if(i_key == i){
                    value.primary = 1;
                }
            });

        },
        async set_primary_variant$(key){

            this.data.has_many_item_variant.forEach((value,i) => {
                value.primary = 0;
                if(key == i){
                    value.primary = 1;
                }
            });

        }

    }

}
