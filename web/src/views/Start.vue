<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <StartNavbar/>
      <div class="container-fluid page-body-wrapper px-0 ">
        <StartSidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <!-- content wrapper ends -->
          
        </div>
        <!-- main panel ends -->
      </div>
      <StartFooter/>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StartNavbar from '@/components/StartNavbar.vue'
import StartSidebar from '@/components/StartSidebar.vue'
import StartFooter from '@/components/StartFooter.vue'

export default {
  name: 'start',
  components: {
    StartNavbar,
    StartSidebar,
    StartFooter
  }
}
</script>

