<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>Edit User</strong>
          </div>
          <div class="card-body">
            <form @submit.prevent="updateUser">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="organizer">Username</label>
                    <input type="text" v-model="data.username" class="form-control" :class="{'error-border' : error && error.errors && error.errors.username}" id="organizer" />
                    <p class="text-danger" v-if="error && error.errors && error.errors.username">{{error.errors.username[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" v-model="data.phoneNumber" class="form-control" :class="{'error-border' : error && error.errors && error.errors.phoneNumber}" id="phone" />
                    <p class="text-danger" v-if="error && error.errors && error.errors.phoneNumber">{{error.errors.phoneNumber[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="points">Points</label>
                    <input type="text" v-model="data.points" class="form-control" :class="{'error-border' : error && error.errors && error.errors.points}" id="points" />
                    <p class="text-danger" v-if="error && error.errors && error.errors.points">{{error.errors.points[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-success float-right">
                    Submit
                  </button>
                  <button type="button" class="btn btn-danger mr-3 float-right" @click="cancelQuest">Cancel</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import UserService from "../../services/user/user.service";
    import AlertService from "../../services/alert/alert.service";
    const user = new UserService();
    const alert = new AlertService();

    export default {
      data:() => {
        return {
          data: {},
          error : {}
        }
      },
      methods: {
          editUser() {
            var id = this.$route.params.id;
            return user.editUser(id).then(success => {
              this.data = success.data.data;
            });
          },

          updateUser() {
            var id = this.$route.params.id;
            return user.updateUser(id, this.data).then(success => {
              this.data = success.data.data;
              this.error = {};
              alert.update();
            },
            fail =>{
                  this.$swal("Warning!", "Please fill up all required fields.", "warning")
                  this.error = fail; 
            });
          },
          cancelQuest(){
             location.href = '/users';
           }
      },
      mounted() {
        this.editUser();
      }
    }
</script>
