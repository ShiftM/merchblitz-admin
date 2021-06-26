<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <i class="icon-drawer"></i>&nbsp;&nbsp;{{$route.meta.title}}
              </div>
            </div>
          </div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
