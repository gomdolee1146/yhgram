<template> 
  <div class="main_header">
    <div class="main_header__logo" @click="on">
      <img src="" />
    </div>
    <div class="main_header__btn_wrap">
      <button class="main_header__btn btn-alarm">알람버튼</button>
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
    toMain(){
      $this.router.push('/'); // router.push 인지 replace인지 확인
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/layouts/mainHeader.scss';
</style>
