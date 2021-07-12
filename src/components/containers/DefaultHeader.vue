<template>
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" :src="base_url+'img/qr-logo.png'" width="50" height="auto" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" :src="base_url+'img/qr-logo.png'" width="30" height="30" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard"></b-nav-item>
        <b-nav-item class="px-3" to="/users" exact></b-nav-item>
        <b-nav-item class="px-3"></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
       
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
         
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
        
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
    
      </b-navbar-nav>
      <!-- <AsideToggler class="d-none d-lg-block" /> -->
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
</template>
<script>
import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultHeader',
  components: {
    AsideToggler,
    AppHeader,
    DefaultHeaderDropdownAccnt,
    SidebarToggler
  },
  data () {
    return {
      base_url: process.env.VUE_APP_BASE_URL
    }
  },
}
</script>
