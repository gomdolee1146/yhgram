<template> 
  <div class="pc">
    <div class="footer_fix">
      <nuxt />
    </div>
    <mainFooter />
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
</style>
