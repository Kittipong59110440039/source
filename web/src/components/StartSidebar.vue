<template lang="html">

  <section >
    <nav class="sidebar sidebar-offcanvas" id="sidebar-start">
      <ul class="nav py-0 ">
        <!-- <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img src="../assets/images/faces/face4.jpg" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">Richard V.Welsh</p>
              <p class="designation">Manager</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li> -->
        <li class="nav-item nav-menu"><router-link class="nav-link" to="/start"><img class="menu-icon" style="width:20px" src="../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Templates</span></router-link></li>
        <li class="nav-item nav-menu"><router-link class="nav-link" to="/start/widgets"><img class="menu-icon" style="width:20px" src="../assets/images/sidebar/shapes.svg" alt="menu icon"><span class="menu-title">Widgets</span></router-link></li>
        <!-- <li class="nav-item nav-menu">
          <span class="nav-link" v-b-toggle="'sample-pages'">
            <img class="menu-icon" src="../assets/images/menu_icons/08.png" alt="menu icon"><span class="menu-title">Sample Pages</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/login/">login</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/register/">register</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/404/">404</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/500/">500</router-link></li>
            </ul>
          </b-collapse>
        </li> -->
        <li class="nav-item nav-menu"><router-link class="nav-link" to="/tables/"><img class="menu-icon" style="width:20px" src="../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Tables</span></router-link></li>
        <li class="nav-item nav-menu"><router-link class="nav-link" to="/icons/"><img class="menu-icon" style="width:20px" src="../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Icons</span></router-link></li>
        <li class="nav-item nav-menu"><router-link class="nav-link" to="/forms/"><img class="menu-icon" style="width:20px" src="../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Forms</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  
}
</script>

<style scoped lang="scss">
  
</style>