<template lang="html">
  <div class="main-header">
    <div class="logo-header">
        <a class="brand-img-full" href="/" ><img src="../assets/images/logo.svg" alt="logo"/></a>
        <a class="brand-img-mini" href="/" ><img src="../assets/images/logo-mini.svg" style="width:40px" alt="logo"/></a>
    </div>

    <b-navbar toggleable="sm" type="dark"  id="navbar_start">

    <b-navbar-nav class="nav-toggle-sidebar">
      <b-nav-item @click="toggleSidebar()" class="px-2 "><i class="fa fas fa-bars text-white"></i></b-nav-item> 
    </b-navbar-nav>
    <form class="navbar-left navbar-form nav-search mr-md-3" action="">
      <div class="input-group">
        <input type="text" placeholder="Search ..." class="form-control">
        <div class="input-group-append">
          <span class="input-group-text">
            <i class="la la-search search-icon"></i>
          </span>
        </div>
      </div>
    </form>

    <b-navbar-nav class="ml-auto mr-3">
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="count-indicator">
              <i class="icon mdi mdi-bell-ring"></i>
              <span class="count">7</span>
            </div>
          </template>
          <b-dropdown-item class="preview-item header" href="#">
            <p class="mb-0 font-weight-normal float-left">You have 4 new notifications
            </p>
            <span class="badge badge-pill badge-warning float-right">View all</span>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="mdi mdi-alert-circle-outline mx-0"></i>
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">Application Error</h6>
              <p class="font-weight-light small-text">
                Just now
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <i class="mdi mdi-comment-text-outline mx-0"></i>
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">Settings</h6>
              <p class="font-weight-light small-text">
                Private message
              </p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="flag-list">
          <template slot="button-content" >
            <div class="count-indicator img-flag">
              <img class=" mr-1" src="../assets/images/flags/EN.svg" style="width:30px;" alt="Flag image">
            </div>
          </template>
          <b-dropdown-item href="#" class="flag-item active"><img class=" mr-1" src="../assets/images/flags/EN.svg" style="width:30px;" alt="Flag image">&nbsp;English</b-dropdown-item>
          <b-dropdown-item href="#" class="flag-item "><img class=" mr-1" src="../assets/images/flags/TH.jpg" style="width:30px;" alt="Flag image">&nbsp;Thai</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <div class="count-indicator img-user">
              <img class="img-xs rounded-circle mr-2" src="../assets/images/faces/face4.jpg" style="width:30px;height:30px;" alt="profile image">
              <span>Kittipong</span>
            </div>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  </div>
  
  
</template>

<script>
export default {
  methods: {
    toggleSidebar(){
      this.$sidebar.toggleSidebar()
    }
  }
}
</script>


<style scoped lang="scss">

</style>