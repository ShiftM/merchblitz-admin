<template>
    <div class="card-body table-responsive">
        <div class="nav-tabs custom-tabs">
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 1}), toggleTab()"
                        :class="{'active': filter.type == 1 }">Most Sold by Price
                </button>
            </div>
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 2}), toggleTab()"
                        :class="{'active': filter.type == 2 }">Most Sold by Quantity
                </button>
            </div>
        </div>
        <div class="tab-content">
            <div class="container-fluid mt-3 px-3">
                <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse" @click="toggleFilterCollapse()">
                     <h5 class="mb-0" v-if="filter.type == 1">Most Sold Item by Price</h5>
                    <h5 class="mb-0" v-if="filter.type == 2">Most Sold Item by Quantity</h5>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                         <!-- <div>
                            <small>Filters: </small>
                            <div>Ages 18-40</div>
                            <div>Male</div>
                            <div>Manila</div>
                        </div> -->
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="25%">Item name</th>
                                    <th width="25%">Category</th>
                                    <th width="10%">Variant</th>
                                    <th width="10%">Size</th>
                                    <template v-if="filter.type == 1">
                                        <th width="10%">Price</th>
                                        <th width="10%">Total Amount</th>
                                    </template>
                                    <th width="20%" v-if="filter.type == 2">Total Quantity Sold</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value,key) in data">
                                        <tr>
                                            <td class="collapse-title cell-ellipsis" data-toggle="collapse" :data-target="'#collapse'+key" @click="toggleCollapse()">
                                                {{value.name}}
                                                <span class="collapse-icon"><i :class="[key == 0 ? 'fa-chevron-down' : 'fa-chevron-right', 'fa']"></i></span>
                                                <i class="fa fa-star featured-item-label pl-2" title="Featured Item"
                                                v-if="value.has_one_featured_item"></i>
                                            </td>
                                            <td class="cell-ellipsis">
                                                <div class="cell-wrapper">
                                                    <span v-for="(c_value,c_key) in value.has_many_item_category">
                                                        {{c_value.category_header.name}}
                                                    </span>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <template v-if="filter.type == 1">
                                                <td></td>
                                                <td><strong>{{value.total_price}}</strong></td>
                                            </template>
                                            <td v-if="filter.type == 2"><strong>{{value.total_quantity}}</strong></td>
                                        </tr>
                                        <template v-for="(s_value,s_key) in value.has_many_item_stock">
                                            <tr :id="'collapse'+key" class="collapse " :class="{'show': key == 0 }">
                                                <td></td>
                                                <td></td>
                                                <td>{{s_value.item_variant.color_option.name}}</td>
                                                <td>{{s_value.size_option.name}}</td>
                                                <td v-if="filter.type == 1">{{s_value.price}}</td>
                                                <td></td>
                                            </tr>
                                        </template>
                                    </template>
                                </tbody>
                            </table>
                          <paginate v-if="toPageCount(data.total, data.per_page ) > 1"
                                    v-model="filter.page"
                                    :page-count="toPageCount(data.total, data.per_page )"
                                    :prev-text="'Prev'"
                                    :next-text="'Next'"
                                    :container-class="'pagination'"
                                    :next-class="'page-link'"
                                    :prev-class="'page-link'"
                                    :page-class="'page-item'"
                                    :page-link-class="'page-link'"
                                    :click-handler="paginate"
                          ></paginate>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.component.js"></script>
