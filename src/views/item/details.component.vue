<template>
    <div class="card-body table-responsive">
        <table class="table table-borderless">
            <tbody>
                <tr>
                    <td width="20%"><strong>Item Name</strong></td>
                    <td>{{data.name}} <i class="fa fa-star featured-item-label pl-2" title="Featured Item" v-if="data.has_one_featured_item"></i></td>
                </tr>
                <tr>
                    <td width="20%"><strong>Description</strong></td>
                    <td>{{data.description}}</td>
                </tr>
                <tr>
                    <td width="20%"><strong>Category</strong></td>
                    <td><template v-for="(value,key) in data.has_many_item_category" v-if="value.category_header && value.category_header.name">{{value.category_header.name}}</template></td>
                </tr>
            </tbody>
        </table>
        <div class="col-12">
            <!-- <h4>Stocks and Variants</h4> -->
            <div class="table-responsive">  
                <table class="table item-view-table">
                    <thead>
                        <tr>
                            <th width="20%">Variant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value,key) in data.has_many_item_variant">
                            <tr>
                                <td class="collapse-title" data-toggle="collapse" :data-target="'#collapse'+key" @click="toggleCollapse()">
                                    {{value.color_option.name}}
                                    <span class="collapse-icon" v-if="value.has_many_item_stock.length > 0"><i :class="[key == 0 ? 'fa-chevron-down' : 'fa-chevron-right', 'fa']"></i></span>
                                    <span class="primary-variant-label" v-if="value.primary == 1"><small>Primary Variant</small></span>
                                </td>
                                <td class="p-0 collapse" v-if="value.has_many_item_stock.length > 0" :id="'collapse'+key" :class="{'show': key == 0}">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th width="25%">Size</th>
                                                <th width="25%">SKU</th>
                                                <th width="25%">Quantity</th>
                                                <th width="25%">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="(s_value,s_key) in value.has_many_item_stock">
                                                <tr>
                                                    <td>{{s_value.size_option.name}}</td>
                                                    <td>{{s_value.sku}}</td>
                                                    <td>{{s_value.quantity}}</td>
                                                    <td>{{s_value.price}}</td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr class="item-image-row collapse" :id="'collapse'+key" :class="{'show': key == 0}">
                                <td></td>
                                <td>
                                    <div class="row">
                                        <div class="col-3" v-for="(i_value,i_key) in value.has_many_image">
                                            <div class="item-image">
                                                <img :src="i_value.full_path" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script src="./details.component.js"></script>
