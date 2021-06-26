<template>
    <div class="card-body table-responsive">
        <div class="col-12 mt-3">
            <router-link :to="{name: 'push-notification-create' }">
                <button type="button" class="btn btn-success mb-2">
                    <i class="fa fa-plus"></i>&nbsp; Create Push Notification
                </button>
            </router-link>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(value,key) in data.data">
                        <td>{{value.title}}</td>
                        <td>{{value.message}}</td>
                    </tr>
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
</template>

<script src="./index.component.js"></script>
