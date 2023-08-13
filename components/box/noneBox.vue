<template> 
 <div class="none_box">
    <slot name="none_txt">
        <p>리스트가 없습니다.</p>
    </slot>
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
  }

}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/components/box/noneBox.scss';
</style>
