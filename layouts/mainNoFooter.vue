<template> 
  <div class="pc">
    <mainHeader />
    <div class="header_fix">
      <nuxt />
    </div>
  </div>
</template>

<script>
import mainHeader from '@/components/layouts/mainHeader.vue'

export default {
  name:'mainLayout',
  components:{ mainHeader },
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
