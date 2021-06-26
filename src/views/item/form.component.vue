<template>
    <div class="card-body table-responsive">

        <div class="col-12">
            <form id="main"  @submit.prevent="$route.params.id ? update() : store()">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                        role="tab" aria-controls="nav-home" aria-selected="true">Main</a>
                    <button @click="validateMainForm" v-if="!isVariantEnabled()" type="button" class="nav-item nav-link">Stocks and Variants</button>
                    <a v-if="isVariantEnabled() "  class="nav-item nav-link" id="nav-stock-tab" data-toggle="tab" href="#nav-stock"
                        role="tab" aria-controls="nav-stock" aria-selected="false">Stocks and Variants</a>

                </div>
            </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Item Name</label>
                                    <span class="text-danger"> *</span>
                                    <input name="name" type="text" v-model="data.name" required class="form-control"
                                            :class="{'error-border': getError(item_errors,'name')}">

                                    <small v-if="getError(item_errors,'name')" class="text-danger">{{getError(item_errors,'name').detail}}
                                    </small>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Description</label>
                                    <span class="text-danger"> *</span>
                                    <textarea name="description" type="text" required v-model="data.description"
                                                class="form-control"
                                                :class="{'error-border': getError(item_errors,'description')}">
                                </textarea>
                                    <small v-if="getError(item_errors,'description')" class="text-danger">{{getError(item_errors,'description').detail}}</small>
                                </div>
                            </div>
                            <div class="col-12">
                                <label>Categories</label>
                                <span class="text-danger"> *</span> <small v-if="getError(item_errors,'category')"  class="text-danger">{{getError(item_errors,'category').detail}}</small>
                                <div class="row">
                                    <div class="col-lg-2" v-for="(value,key) in category_headers">
                                        <div class="form-check">
                                            <input type="checkbox" :name="'category'+key" :true-value="value.id"
                                                    :fasle-value="0"
                                                    v-model="data.has_many_item_category[key].category_header_id"
                                                    class="form-check-input" :id="'exampleCheck1'+key"
                                                    @change="check_category$($event,key)">
                                            <label class="form-check-label" :for="'exampleCheck1'+key">{{value.name}}</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 mt-3">
                                <button @click="validateMainForm"  class="btn btn-primary float-right" v-if="!isVariantEnabled()" type="button">Next <i class="fa fa-arrow-right pl-2"></i></button>
                                <button v-show="isVariantEnabled()" type="button" id="next-button" data-toggle="tab" href="#nav-stock" role="tab" aria-controls="nav-stock" aria-selected="false" class="btn btn-primary float-right">Next <i class="fa fa-arrow-right pl-2"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-stock" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <button @click="add_variant$" type="button" class="btn btn-primary">
                                    <i class="fa fa-plus"></i>
                                    Add Variant
                                </button>
                            </div>
                            <div class="col-12">
                                <template v-if="value.status_option_id == 1"
                                            v-for="(value,key) in data.has_many_item_variant">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between">
                                            <h4>Variant</h4>
                                            <button type="button" v-if="data.has_many_item_variant.length > 1" @click="remove_variant$(key)" class="btn btn-danger">Remove Variant</button>
                                        </div>
                                        <div class="card-body table-responsive">
                                            <div class="col-12">
                                                <div class="form-group set-primary-variant">
                                                    <div class="form-check">
                                                        <input @click="set_primary_variant$(key)"v-model="value.primary" class="form-check-input" type="radio"
                                                                name="exampleRadios"
                                                                :id="'exampleRadios'+key" value="1" required>
                                                        <label class="form-check-label" :for="'exampleRadios1'+key">
                                                            Set as Primary Variant
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Color</label>
                                                    <span class="text-danger"> *</span>
                                                    <select name="color" v-model="value.color_option_id" required
                                                            class="form-control">
                                                        <option v-for="(value,key) in color_options" :value="value.id">
                                                            {{value.name}}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-12">
                                                <div class="form-group">
                                                    <label>Image/s</label>
                                                    <div class="alert alert-success" role="alert">
                                                        <input type="file" id="variantImage" ref="variantImage"
                                                                @change="upload($event,key)"/>
                                                    </div>
                                                  <small v-if="getError(item_errors,'image-'+key)"  class="text-danger">{{getError(item_errors,'image-'+key).detail}}</small>
                                                  <small class="d-block">Upload a copy of your logo. Max file size: 5mb</small>
                                                  <small class="d-block">Recommended Dimensions: (300x600)</small>
                                                    <small class="d-block text-info">(File types: jpg, png)</small>
                                                </div>
                                                <div class="row" v-if="value.has_many_image.length > 0">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 image-wrapper"
                                                            v-for="(i_value,i_key) in value.has_many_image">
                                                        <div class="image-cont">
                                                            <img :src="i_value.full_path" alt="..." class="img-thumbnail">
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                                                                <div class="form-group">
                                                                    <div class="form-check">

                                                                        <input required v-model="i_value.primary"
                                                                                class="form-check-input" type="radio"
                                                                                :name="'imageRadios'+key"
                                                                                :id="'imageRadios'+i_key+key" value="1" @click="set_primary$(key,i_key)">
                                                                        <label class="form-check-label" :for="'imageRadios'+i_key+key">
                                                                            Primary
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                                <div class="form-group">
                                                                    <a href="#" class="text-danger" @click="$delete(value.has_many_image, i_key)">Remove</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="row my-4">
                                                    <div class="col-lg-12">
                                                        <button @click="add_stock$(key)" type="button" class="btn btn-outline-primary btn-block">
                                                            <i class="fa fa-plus"></i>
                                                            Add Size</button>
                                                    </div>
                                                </div>
                                                <hr>

                                                <template v-if="s_value.status_option_id == 1"
                                                            v-for="(s_value,s_key) in value.has_many_item_stock">
                                                    <div class="row">
                                                        <div v-if="value.has_many_item_stock.length > 1" class="col-lg-12">
                                                            <div class="form-group">
                                                                <a @click="remove_stock$(key,s_key)"
                                                                        class="text-danger remove-size">
                                                                    Remove Size</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label>Size</label>
                                                                <span class="text-danger"> *</span>
                                                                <select name="size" v-model="s_value.size_option_id" required
                                                                        class="form-control"
                                                                        :class="{'error-border': key === config_error.variant_key &&  s_key === config_error.stock_key  && getError(stock_errors,'size_option_id')}">
                                                                    <option :disabled="checkSizeAvailability(s.id,value.has_many_item_stock)" v-for="(s,key) in size_options"
                                                                            :value="s.id">
                                                                        {{s.name}}
                                                                    </option>
                                                                </select>
                                                                <small v-if="key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'size_option_id')"
                                                                        class="text-danger">{{getError(stock_errors,'size_option_id').detail}}</small>
                                                            </div>
                                                        </div>


                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label>SKU</label>
                                                                <span class="text-danger"> *</span>
                                                                <input :disabled="!s_value.is_new" name="sku" type="text"
                                                                        v-model="s_value.sku" required
                                                                        class="form-control"
                                                                        :class="{'error-border': key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'sku')}">
                                                                <small v-if="key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'sku')"
                                                                        class="text-danger">{{getError(stock_errors,'sku').detail}}</small>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label>Quantity</label>
                                                                <span class="text-danger"> *</span>
                                                                <input min="0" name="quantity" type="number" v-model="s_value.quantity"
                                                                        required
                                                                        class="form-control"
                                                                        :class="{'error-border': key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'quantity')}">
                                                                <small v-if="key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'quantity')"
                                                                        class="text-danger">{{getError(stock_errors,'quantity').detail}}</small>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label>Price</label>
                                                                <span class="text-danger"> *</span>
                                                                <input min="0" name="price" type="number" v-model="s_value.price"
                                                                        required
                                                                        class="form-control"
                                                                        :class="{'error-border': key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'price')}">
                                                                <small v-if="key === config_error.variant_key &&  s_key === config_error.stock_key && getError(stock_errors,'price')"
                                                                        class="text-danger">{{getError(stock_errors,'price').detail}}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success float-right">Submit</button>
                                <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
</template>

<script src="./form.component.js"></script>
