<template>
    <div class="card-body table-responsive">
        <div class="col-12">
            <h5>Create Push Notification</h5>
            <hr>
            <form @submit.prevent="store()">
                <div class="row">
                    <div class="col-12 mb-2">
                        <label>Title</label>
                        <span class="text-danger"> *</span>
                        <input type="text" v-model="data.title" required class="form-control"  :class="{'error-border': getError(errors,'title')}">
                        <small v-if="getError(errors,'title')" class="text-danger">{{getError(errors,'title').detail}}</small>
                    </div>
                    <div class="col-12 mb-2">
                        <label>Message</label>
                        <span class="text-danger"> *</span>
                        <textarea class="form-control" rows="3" v-model="data.message" :class="{'error-border': getError(errors,'message')}"></textarea>
                        <small v-if="getError(errors,'message')" class="text-danger">{{getError(errors,'message').detail}}</small>
                    </div>
                    <div class="col-12 mt-2">
                        <button type="submit" class="btn btn-success float-right">Submit</button>
                        <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./form.component.js"></script>
