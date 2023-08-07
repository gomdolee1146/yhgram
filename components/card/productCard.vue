<template> 
 <div class="card">
    <div class="card__bg">
        <img src="@/assets/imgs/bg_travel01.png" />
    </div>
    <div class="card__cont">
        <div class="card__cont_box">
            <div class="card__cont-top">
                <p class="large_samll">{{ '제주항공' }}</p>
                <p class="title_small">{{ 'Again 홍콩 재운항 기념' }}</p>
            </div>
            <div class="card__cont-mid">
                <div class="title_large">{{ '홍콩' }}</div>
                <div class="card__cont_badge">
                    <span class="body_small">{{ '편도' }}</span>
                    <span class="title_small">{{ '79,900원~' }}</span>
                </div>
            </div>
        </div>
        <div class="card__cont-sales_date">
            <p class="label_small">판매기간</p>
            <p class="label_large">{{ '2023.07.19 ~ 07.31' }}</p>
        </div>
        <div class="card__cont-trip_date">
            <p class="label_small">여행기간</p>
            <p class="label_large">{{ '2023.09.01 ~ 10.28' }}</p>
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
  props:{},
  data(){
    return{
    }
  },
  computed: {
    productData() {
        // return this.$store.state.product.productList
        return this.$store.state.product.productList[1]
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/card/productCard.scss';
</style>
