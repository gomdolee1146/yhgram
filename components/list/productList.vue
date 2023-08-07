<template> 
 <ul class="product__list">
    <li class="product__lst" v-for="(product, idx) in productData" :key="idx">
        <product-card :product="product" />
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
  },
  computed: {
     productData() {
        // return this.$store.state.product.productList
        return this.$store.state.product.productList
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/list/productList.scss';
</style>
