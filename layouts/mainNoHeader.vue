<template> 
  <div class="pc__bg">
    <div class="pc__wrap">
      <div class="footer_fix">
        <nuxt />
      </div>
      <mainFooter />
    </div>
  </div>
</template>

<script>
import mainFooter from '@/components/layouts/mainFooter.vue'

export default {
  name:'mainLayout',
  components:{ mainFooter },
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
@import '@/assets/scss/layouts/mainLayout.scss';
@import '@/assets/scss/layouts/pcLayout.scss';
</style>
