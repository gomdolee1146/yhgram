<template> 
 <div class="card">
    <div class="card__bg">
        <img :src="product.bg" />
    </div>
    <div class="card__cont">
        <div class="card__cont_box">
            <div class="card__cont-top">
                <p class="large_small">{{ product.airline }}</p>
                <p class="title_small">{{ product.title }}</p>
            </div>
            <div class="card__cont-mid">
                <div class="title_large">{{ product.countryInfo }}</div>
                <div class="card__cont_badge">
                    <span class="body_small">{{ product.priceType }}</span>
                    <span class="title_small">{{ product.priceInfo }}</span>
                </div>
            </div>
        </div>
        <div class="card__cont-sales_date">
            <p class="label_small">판매기간</p>
            <p class="label_large">{{ product.salesPeriod }}</p>
        </div>
        <div class="card__cont-trip_date">
            <p class="label_small">여행기간</p>
            <p class="label_large">{{ product.travelPeriod }}</p>
        </div>
        <button class="card__btn-like"></button>
    </div>
 </div>
</template>

<script>
export default {
  name:'',
  components:{},
  layout:'default',  
  props:{
    product: {type:Object, default: () => {}}
  },
  data(){
    return{
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/card/productCard.scss';
</style>
