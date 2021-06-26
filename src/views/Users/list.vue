<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row h-100 align-items-center">
              <div class="col-6">
                <i class="icon-people"></i> Users
              </div>
            </div>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Quest Points</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.data">
                    <td>{{d.username}}</td>
                    <td>{{d.phoneNumber}}</td>
                    <td>{{d.points}}</td>
                  <td><router-link :to="{ name: 'UserEdit', params: { id: d.id }}">Edit</router-link> | <a href="javascript:void(0)" @click="changeStatus(d.id, d.username, d.deletedAt ? 'Activate' : 'Deactivate')">{{ d.deletedAt ? 'activate' : 'deactivate'}}</a></td>
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
              :click-handler="getUsers"
            ></paginate>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserService from "../../services/user/user.service";
  const user = new UserService();

  export default {
    data: () => {
      return {
        data: {},
        page_count: 0,
        currentPage: 1
      }
    },
    methods: {
      getUsers() {
        return user.getUsers(this.currentPage).then(success => {
            this.data = success.data.data;
            this.page_count = Math.ceil(this.data.total / this.data.perPage);
        }, fail => {
            // console.log(fail)
        })
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
              return user.changeStatus(id).then(success => {
                location.reload();
              })
            }
            else{
              this.$swal.close();
            }
          })
        
      }

    },
    mounted() {
        this.getUsers()
    }

  }
</script>
