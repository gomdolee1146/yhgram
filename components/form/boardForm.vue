<template> 
 <div class="board_form">
  <div class="form__title">
    <h4 class="form__txt">여행기록하기</h4>
    <i></i>
  </div>
  <div class="board_form__wrap">
    <div class="board_form__title">
      <input type="text" class="form__input" placeholder="제목을 입력해주세요." v-model="boardTitle" />
    </div>
    <div class="board_form__cont">
      <textarea class="form__input" v-model="boardCont"></textarea>
    </div>

    <template v-if="false"><!-- 여행 글쓰기 일때 -->
      <div class="board_form__photo">
        <p class="board_form__photo_title">여행 장소에서 찍은 사진을 어쩌구 </p>
        <template>
          <swiper :options="boardPhoto">
            <template v-if="1"><!-- 사진이 있을 때 -->
              <swiper-slide v-for="(photoSlide, idx) in photoList" :key="idx">
                <div class="board_form__photo_box">
                  <img :src="photoSlide.src" />
                </div>
              </swiper-slide>
            </template>
            <template v-if="2"> <!-- 사진이 없을 때 -->
              <swiper-slide v-for="(photoSlide, idx) in photoList" :key="idx">
                <div class="board_form__photo_box  board_form__photo_box-none">
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </template>
      </div>  
      <div class="borad_form__chk">
        <span>
          <input type="checkbox" class="" />
          <label class="">어떤 내용에 동의합니다</label>
        </span>
      </div>
      <div class="board_form__btn">
        <button class="board_form__btn-active" @click="onBoard">글 등록하기</button>
      </div>
    </template>
    <template v-if="true"> <!-- 그룹초대 게시글일때 -->
      <div class="board_form__invite">
        <h4 class="board_form__title">하이하이</h4>
        <ul class="board_form__list">
          <li class="board_form__lst">
            <div class="board_form__user">
              <div class="user__thumb"></div>
              <div class="user__info"></div>
              <div class="user__badge"></div>
            </div>
          </li>
        </ul>
      </div>
    </template>
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
        wrapperClass: '',
        slideClass: '',
        freeMode: true,
        slidesPerView: 'auto'
      },
      photoList: [
        {},
      ]

    }
  },
  methods:{
    onBoard() {
      console.log('gg')
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/form/formComm.scss';
@import '@/assets/scss/components/form/boardForm.scss';
</style>
