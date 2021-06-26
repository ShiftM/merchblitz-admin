<template>
    <div class="card-body table-responsive">
        <div class="col-12">
            <h5>Add Color</h5>
            <hr>
            <form @submit.prevent="$route.params.id ? update() : store()">
                <div class="row">
                    <div class="col-12 mb-2">
                        <label>Name</label>
                        <span class="text-danger"> *</span>
                        <input type="text" v-model="data.name" required class="form-control"  :class="{'error-border': getError(errors,'name')}">
                        <small v-if="getError(errors,'name')" class="text-danger">{{getError(errors,'name').detail}}</small>
                    </div>
                    <div class="col-12 mb-2">
                        <label>Address</label>
                        <span class="text-danger"> *</span>
                        <input type="text" v-model="data.address" class="form-control"
                            :class="{'error-border': getError(errors,'address')}">
                        <small v-if="getError(errors,'address')" class="text-danger">{{getError(errors,'address').detail}}</small>
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
