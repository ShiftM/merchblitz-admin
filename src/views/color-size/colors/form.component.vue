<template>
    <div class="card-body table-responsive">
        <div class="col-12">
            <h5>Add Color</h5>
            <hr>
            <form @submit.prevent="$route.params.id ? update() : store()">
                <div class="row">
                    <div class="col-12 mb-2">
                        <label>Color Name</label>
                        <span class="text-danger"> *</span>
                        <input type="text" v-model="data.name" required class="form-control"
                               :class="{'error-border': getError(errors,'name')}">
                        <small v-if="getError(errors,'name')"
                               class="text-danger">{{getError(errors,'name').detail}}</small>
                    </div>
                    <div class="col-12 mb-2">
                        <label>Hex Code</label>
                        <span class="text-danger"> *</span>
                        <input type="color" v-model="data.hex" required class="form-control" placeholder="000000"
                               :class="{'error-border': getError(errors,'hex')}">
                        <small v-if="getError(errors,'hex')"
                               class="text-danger">{{getError(errors,'hex').detail}}</small>
                    </div>
                    <div class="col-12 mt-2">
                        <button type="submit" class="btn btn-success float-right">Submit</button>
                        <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./form.component.js"></script>
