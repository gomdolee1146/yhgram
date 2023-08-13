<template> 
 <div class="board_form">
	<div class="form__title">
		<h4 class="form__txt title_medium">여행기록하기</h4>
		<i></i>
	</div>
	<div class="board_form__wrap">
		<div class="board_form__cont">
			<input type="text" class="form__input" placeholder="여행에 대한 기록을 남겨보세요." v-model="boardTitle" />
		</div>
		<div class="board_form__cont">
			<textarea class="form__input" placeholder="어떤 여행이었나요?" v-model="boardCont"></textarea>
		</div>

		<div class="board_form__photo">
			<div class="board_form__photo_title">여행 장소에서 찍은 사진들을 공유해보세요!</div>	
			
			<swiper :options="boardPhoto">
				<template v-if="true">
					<swiper-slide v-for="(a, idx) in 3" :key="idx">
						<div class="board_form__photo_box">
							{{ a }}
						</div>
					</swiper-slide>
				</template>
				<template v-if="true">
					<swiper-slide v-for="(photoCont, idx) in photoList" :key="idx">
						<div class="board_form__photo_box">
							<img :src="photoCont" />
						</div>
					</swiper-slide>
				</template>
			</swiper>
		</div>  
		<div class="borad_form__chk">
			<span>
				<input type="checkbox"/>
				<label >어떤 내용에 동의합니다</label>
			</span>
		</div>
		<div class="board_form__btn_wrap">
			<button class="board_form__btn board_form__btn-active" @click="onBoard">글 등록하기</button>
		</div>
	</div>
 </div>
</template>

<script>
export default {
	name:'boardForm',
	components:{},
	layout:'default',  
	props:{},
	data(){
		return{
			boardTitle:'',
			boardCont:'',
			boardPhoto: {
				wrapperClass: 'g_swiper__wrapper',
				slideClass: 'g_swiper__slide',
				slidesPerView: 'auto',
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
		}
	},
	methods:{
		onBoard(){
			console.log('gd')
		}
		
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/form/formComm.scss';
@import '@/assets/scss/components/form/boardForm.scss';
</style>
