<template> 
 <div class="pc">
  <main-header></main-header>
  <div class="header_on footer_on">
    <nuxt />
  </div>
  <main-footer></main-footer>
 </div> 
</template>

<script>
import MainFooter from './mainFooter.vue'
import MainHeader from './mainHeader.vue'
export default {
  name:'',
  components:{MainHeader, MainFooter},
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
@import '@/assets/scss/components/layouts/default.scss';
</style>
