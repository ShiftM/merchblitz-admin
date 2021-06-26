<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row h-100 align-items-center">
              <div class="col-6">
                <i class="icon-location-pin"></i> Booth
              </div>
              <div class="col-6 text-right">
                <router-link :to="{name: 'BoothCrud' }">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-plus"></i>&nbsp; Add Booth
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Booth/Exhibitor name</th>
                  <th>Username</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(booth, kb) in data.data" :key="kb">
                  <td>{{booth.name}}</td>
                  <td>{{booth.username}}</td>
                  <td>
                    <router-link :to="{ name: 'questFrom', params: { id: booth.id }}">Add Quest</router-link>
                     | <router-link :to="{ name: 'BoothEdit', params: { id: booth.id }}">Edit</router-link> | 
                    <a
                      href="javascript:void(0)"
                      @click="changeStatus(booth.id, booth.name, booth.deletedAt ? 'activate' : 'deactivate')"
                    >{{ booth.deletedAt ? 'activate' : 'deactivate'}}</a> | <a href="javascript:void(0)" @click="forgotPassword(booth.id)">Forgot Password</a>
                    
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="data.data.length == 0" class="text-center">
              <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
            </p>

            <paginate
              v-if="page_count > 1"
              v-model="currentPage"
              :page-count="page_count"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination'"
              :next-class="'page-link'"
              :prev-class="'page-link'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :click-handler="getBooths"
            ></paginate>
          </div>

        </div>
        </div>
      </div>
    </div>


  
</template>
<script>
import BoothService from "../../services/booth/booth.service";
import AlertService from "../../services/alert/alert.service";
const alert = new AlertService();
const booth = new BoothService();

export default {
  data: () => {
    return {
      data: [],
      page_count: 0,
      currentPage: 1
    };
  },
  methods: {
    getBooths() {
      // console.log(data)
      return booth.list(this.currentPage).then(success => {
        this.data = success.data.data;
        this.page_count = Math.ceil(this.data.total / this.data.perPage);
      });
    },
    changeStatus(id, name, status) {
      this.$swal({title: 'Are you sure ',
      text: "You want to " + status + " " + name + '?',
      icon: 'warning',
      buttons: [
            'No',
            'Yes'
          ]}).then(response => {
            if(response){
              return booth.changeStatus(id).then(success => {
                location.reload();
              });
            }
            else{
              this.$swal.close();
            }
          })
      
    },
    forgotPassword(id){
      this.$swal({title: 'Forgot Password? ',
      content: {
    element: "input",
    attributes: {
      placeholder: "Type your new password",
      type: "password",
    },
  },
      // icon: 'warning',
      buttons: [
            true,
            'Submit'
          ]}).then(response => {
            
            if(response){
              return booth.forgoutPassword(id, {'password' : response}).then(success => {
                  this.$swal.close();
                  alert.update();
              }).catch(error =>{
                console.log(error);
                return swal('You must enter password');
              });
            }
            else{
              this.$swal.close();
            }
          })
    }
  },
  mounted() {
    this.getBooths();
  }
};
</script>
