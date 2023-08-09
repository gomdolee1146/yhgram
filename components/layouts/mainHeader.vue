<template> 
  <div class="main_header">
    <div class="main_header__logo" @click="goToMain">
      <img src="@/assets/imgs/Logo_b.png" />
    </div>
    <div class="main_header__btn_wrap">
      <button class="main_header__btn main_header__btn-alarm">알람버튼</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'mainHeader',
  components:{},
  layout:'default',  
  props:{},
  data(){
    return{
    }
  },
  methods:{
    goToMain(){
      $this.router.push('/'); // router.push 인지 replace인지 확인
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/layouts/mainHeader.scss';
</style>
