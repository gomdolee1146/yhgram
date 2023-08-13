<template> 
 <div class="card">
	<!-- 회원정보 영역 -->
	<div class="user card__user">
		<div class="user__thumb">
			<img src="@/assets/imgs/img_profile_f01.png" />
		</div>
		<div class="user__info">
			<p class="user__nick">아이디영역</p>
		</div>
		<div class="card__date">{{ '2 weeks ago' }}</div>
	</div>

	<!-- 카드영역 -->
	<div class="card__content">
		<div class="card__photo">
			<swiper :options="cardPhoto" class="card__photo_box">
				<swiper-slide v-for="(photoCont, idx) in photoList" :key="idx">
					<img :src="photoCont" />
				</swiper-slide>
			</swiper>
			<div class="card__photo_pagination"></div>
		</div>
		<div class="card__title">타이틀 영역입니다</div>
		<div class="card__txt" :class="$route.path === '/' ? 'card__txt-cut' : ''">글내용이 길게길게 들어가지 않을까여</div>
		<div class="card__info">
			<p class="card__info-dis">제주특별자치도, 제주시</p>
			<p class="card__info-cmt">12개의 댓글</p>
		</div>
		<div class="card__like">
			<ul class="card__like_list">
				<li class="card__like_lst" v-for="(likeLst, idx) in likeList" :key="idx">
					<img class="card__like_thumb" :src="likeLst" />
				</li>
			</ul>
			<p class="card__like_txt">외 120명이 좋아해요!</p>
		</div>
	</div>
	<div class="card__btn_wrap">
		<button class="card__btn card__btn-active">좋아요</button>
		<button class="card__btn card__btn-inactive">댓글달기</button>
	</div>
 </div>
</template>

<script>
export default {
	name:'cardBoard',
	components:{},
	layout:'default',  
	props:{},
	data(){
		return{
			cardPhoto: {
				freeMode:true,
				slidesPerView: 'auto',
				pagination:{
					el: 'card__photo_pagination',
				}
			},
			photoList: [
				require(`~/assets/imgs/bg_travel01.png`),
				require(`~/assets/imgs/bg_travel02.png`),
				require(`~/assets/imgs/bg_travel03.png`),
				require(`~/assets/imgs/bg_travel04.png`),
				require(`~/assets/imgs/bg_travel05.png`),
				require(`~/assets/imgs/bg_travel06.png`),
				require(`~/assets/imgs/bg_travel07.png`),
			],
			likeList: [
				require(`~/assets/imgs/img_profile_f01.png`),
				require(`~/assets/imgs/img_profile_f02.png`),
				require(`~/assets/imgs/img_profile_f03.png`),
				require(`~/assets/imgs/img_profile_f04.png`),
			]
		}
	},
	methods:{
	}

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/user/userComm.scss';
@import '@/assets/scss/components/card/boardCard.scss';
</style>
