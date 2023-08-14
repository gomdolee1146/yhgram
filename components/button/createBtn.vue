<template> 
 <div class="create" @click="goToCreate">
    <p class="create__txt">멋진 여행에 다녀오셨나요?</p>
    <p class="create__title">새로운 여행 기록하기</p>
    <i class="create__ico"></i>
 </div>
</template>

<script>
export default {
  name:'',
  components:{},
  layout:'default',  
  props:{},
  data(){
    return{
    }
  },
  methods:{
    goToCreate() {
        this.$router.push('/board/create')
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/box/createBox.scss';
</style>
