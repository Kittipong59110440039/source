<template>
  <div id="app">
    <div class="container-scroller">
      <StartNavbar/>
      <div class="container-fluid px-3 bg-home">
          <router-view></router-view>
        <!-- main panel ends -->
      </div>
      <StartFooter/>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-home{
    background: #f4f4f4!important;
    padding-top: 70px!important;
  }
</style>


<script>
// @ is an alias to /src
import StartNavbar from '@/components/StartNavbar.vue'
import StartFooter from '@/components/StartFooter.vue'

export default {
  name: 'home',
  components: {
    StartNavbar,
    StartFooter
  }
}
</script>
