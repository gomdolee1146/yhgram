<template> 
 <div class="card">
  <!-- 회원정보 영역 -->
  <div class="user card__user">
    <div class="user__thumb">
      <img src="" />
    </div>
    <div class="user__info">
      <p class="user__nick">아이디영역</p>
    </div>
  </div>
  <div class="card__content">
    <div class="card__photolist"></div>
    <div class="card__txt">글내용이 길게길게 들어가지 않을까여</div>
  </div>
  <div class="card__btn_wrap">
    <button class="card__btn card__btn-active">텍스트</button>
    <button class="card__btn card__btn-inactive">텍스트</button>
  </div>
 </div>
</template>

<script>
export default {
  name:'cardBoard',
  components:{},
  layout:'default',  
  props:{},
  data(){
    return{
    }
  },
  methods:{
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/user/userComm.scss';
@import '@/assets/scss/components/card/cardBoard.scss';
</style>
