<template>
  <section class="dashboard">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="12">
        <vs-card>
            <div class="container px-3 py-3">
                <h2 class="text-center font-weight-bold">{{ $t('lbl_signin') }}</h2>
                <p class="text-center text-dark">{{ $t('lbl_with_social') }}</p>
                <vs-row vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12" class="px-3 py-1">
                        <b-button  class="btn-facebook w-100  px-0 text-center">
                            <i class="fa fab fa-facebook-f fa-lg"></i> 
                            <span class="font-weight-bold">FACEBOOK</span>
                        </b-button>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12" class="px-3 py-1">
                        <b-button variant="danger" class="btn-google w-100 px-0">
                            <i class="fa fab fa-google fa-lg"></i> 
                            <span class="font-weight-bold">GOOGLE</span>
                        </b-button>
                    </vs-col>
                    <vs-divider position="center" class="px-3">{{ $t('lbl_hr_or') }}</vs-divider>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="px-3 py-1">
                        <vs-input :label="$t('lbl_input_username')" icon="person_outline" :placeholder="$t('lbl_input_username')" class="w-100" v-model="username" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="px-3 py-1">
                        <vs-input :label="$t('lbl_input_password')" icon="lock" type="password" size="nolmal" :placeholder="$t('lbl_input_password')" class="w-100" v-model="password"/>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="start" vs-align="start" vs-lg="6" vs-sm="6" vs-xs="6" class="px-3 py-2">
                        <vs-checkbox v-model="remember_me" class="mx-0">{{$t('lbl_remember_me')}}</vs-checkbox>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="end" vs-lg="6" vs-sm="6" vs-xs="6" class="px-3 pt-0">
                        <button class="btn btn-link px-0">{{$t('lbl_forgot_password')}}</button>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="end" vs-lg="12" vs-sm="12" vs-xs="12" class="px-3 py-2">
                        <vs-button color="primary" type="filled" class="font-weight-bold w-100">{{$t('lbl_login')}}</vs-button>
                    </vs-col>
                </vs-row>
            </div>
            
        </vs-card>
      </vs-col>
    </vs-row>
  </section>
</template>

<script lang="js">
export default {
  name: 'login',
  data(){
    return {
      username:'',
      password:'',
      remember_me:false
    }
  }
}
</script>

<style scoped lang="scss">
    .btn-facebook:hover{
        color:#fff;
    }
</style>
