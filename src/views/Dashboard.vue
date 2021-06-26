<template>
  <div class="container-fluid animated fadeIn h-100">
  <div class="row h-100 align-items-center">
    <div class="col-12 ">
<!--      <h1 class="text-center">Welcome back, {{data.data.name}}</h1>-->
    </div>
  </div>
  </div>
</template>


<script>
import AdminServices from '../../src/services/admin/login.service';
const admin = new AdminServices();
export default{
  data:() =>{
    return {
      data : {}
    }
  },
  methods:{
    profile(){
        return admin.profile().then(response =>{
            this.data = response.data;
        }, fail =>{

        })
    }
  },
  mounted(){
    this.profile();

  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
