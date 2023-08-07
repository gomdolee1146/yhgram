<template> 
 <ul class="product__list">
    <li class="product__lst">
        <product-card />
    </li>
 </ul>
</template>

<script>
import productCard from "@/components/card/productCard.vue"

export default {
  name:'',
  components: { productCard },
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
@import '@/assets/scss/components/list/productList.scss';
</style>
