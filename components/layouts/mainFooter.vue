<template> 
	<div class="main_footer">
		<button class="main_footer__btn main_footer__btn-home" @click="goToHome"><i></i>홈</button>
		<!-- <button class="main_footer__btn main_footer__btn-mylist" @click="goToMyList"><i></i>내글보기</button> -->
		<button class="main_footer__btn main_footer__btn-product" @click="goToProduct"><i></i>여행상품</button>
		<button class="main_footer__btn main_footer__btn-mypage" @click="goToMypage"><i></i>마이페이지</button>
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
		goToHome() {
			this.$router.push('/');
			console.log('홈으로 이동함니당')
		},

		goToMyList() {
			// this.$router.push('/mypage/mypageList');
			console.log('내글목록으로이동')
		},

		goToProduct() {
			this.$router.push('/product/productMain')
		},
		
		goToMypage() {
			this.$router.push('/mypage/mypageMain');
			console.log('마이페이지로 이동합니다.');
		},
		
	}

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/layouts/mainFooter.scss';
</style>
