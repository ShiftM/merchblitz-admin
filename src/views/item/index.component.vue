<template>
    <div class="card-body table-responsive">
        <router-link :to="{name: 'item-create' }">
            <button type="button" class="btn btn-success mb-2 add-button">
                <i class="fa fa-plus"></i>&nbsp; Add Item
            </button>
        </router-link>
        <div class="nav-tabs custom-tabs">
            <div class="nav-item primary">
                <button type="button" @click="search({status_option_id: 1, page: 1,  has_featured: false}), toggleTab()"
                        class="nav-link "
                        :class="{'active': !filter.has_featured && filter.status_option_id == 1 }">Items
                </button>
            </div>
            <!--<div class="nav-item featured">-->
                <!--<button type="button" @click="search({status_option_id: 1, page: 1,  has_featured: true}), toggleTab()"-->
                        <!--class="nav-link"-->
                        <!--:class="{'active': filter.has_featured && filter.status_option_id == 1 }">Featured-->
                <!--</button>-->
            <!--</div>-->
            <div class="nav-item archive">
                <button type="button" @click="search({status_option_id: 2, page: 1,  has_featured: false}), toggleTab()"
                        class="nav-link "
                        :class="{'active': !filter.has_featured && filter.status_option_id == 2 }">Archive
                </button>
            </div>

        </div>
        <div class="tab-content">
            <div class="col-12 mt-3">
                <div class="input-group">
                    <input v-model="filter.name" class="form-control" id="item" name="items" size="16" placeholder="Item name" list="items"
                           @input="suggest({name: $event.target.value})" @change="suggest({name: $event.target.value})" @keyup.enter="search()">
                    <span class="input-group-append">
                        <button class="btn btn-secondary" type="button" @click="search({})"><i
                                class="icon-magnifier"></i></button>
                      <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
                    </span>
                    <datalist id="items" width="100%">
                        <option v-for="(value,key) in suggestions.data" :value="value.name" @click="search({})"/>
                    </datalist>
                </div>
            </div>
            <div class="col-12 mt-3">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th width="25%">Item name</th>
                            <th width="25%">Category</th>
                            <th width="9%">Variant</th>
                            <th width="10%">Size</th>
                            <th width="8%">SKU</th>
                            <th width="8%">Stock</th>
                            <th width="15%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value,key) in data.data">
                                <tr>
                                    <td class="collapse-title cell-ellipsis" data-toggle="collapse" :data-target="'#collapse'+key" @click="toggleCollapse()">
                                        {{value.name}}
                                        <span class="collapse-icon"><i :class="[key == 0 ? 'fa-chevron-down' : 'fa-chevron-right', 'fa']"></i></span>
                                        <!--<i class="fa fa-star featured-item-label pl-2" title="Featured Item"-->
                                        <!--v-if="value.has_one_featured_item"></i>-->
                                    </td>
                                    <td class="cell-ellipsis">
                                        <div class="cell-wrapper">
                                            <span v-for="(c_value,c_key) in value.has_many_item_category">
                                                <span v-if="c_key > 0">,</span> {{c_value.category_header ? c_value.category_header.name : ''}}
                                            </span>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <template v-if="value.has_one_featured_item && filter.status_option_id != 2 && filter.has_featured">
                                            <!-- <a href="#">Set As Featured</a> -->
                                            <a href="#" class="text-danger"
                                            @click="unset_featured$(value.has_one_featured_item.id)"> Remove Featured</a>
                                        </template>

                                        <template v-if="!value.has_one_featured_item && filter.status_option_id != 2 && filter.has_featured">
                                            <!-- <a href="#">Set As Featured</a> -->
                                            <a href="#" class="text-warning" @click="set_featured$({item_id: value.id})">
                                                Set Featured</a>
                                        </template>


                                        <template v-if="!filter.has_featured && filter.status_option_id == 1">
                                            <router-link :to="{ name: 'item-details', params: { id:value.id }}" tag="a">
                                                View
                                            </router-link>
                                            |
                                            <router-link :to="{ name: 'item-edit', params: { id:value.id }}" tag="a"> Edit
                                            </router-link>
                                            | <a href="#" @click="archive(value.id)" class="text-danger"> Archive</a>
                                        </template>

                                        <template v-if="filter.status_option_id == 2">
                                            <a href="#" @click="restore(value.id)"> Restore</a>
                                        </template>
                                    </td>
                                </tr>
                                <template v-for="(v_value,v_key) in value.has_many_item_variant">
                                    <template v-for="(s_value,s_key) in v_value.has_many_item_stock">
                                        <tr :id="'collapse'+key" class="collapse " :class="{'show': key == 0 }">
                                            <td></td>
                                            <td></td>
                                            <td>{{v_value.color_option.name}}</td>
                                            <td>{{s_value.size_option.name}}</td>
                                            <td>{{s_value.sku}}</td>
                                            <td>{{s_value.quantity}}</td>
                                            <td></td>
                                        </tr>
                                    </template>
                                </template>
                            </template>
                        </tbody>
                    </table>
                    <p v-if="data.data.length == 0" class="text-center">
                        <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
                    </p>

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
</template>

<script src="./index.component.js"></script>
