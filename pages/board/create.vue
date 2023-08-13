<template>
  <board-form>
    <!-- 글쓰기 페이지 / 글수정하기 페이지
      파라미터로 ins / upd 체크하기 -> 화면 다르게 보일 수 있게
      데이터 있으면 데이터 채우고 없으면 데이터 없는 빈값 / ins 로 파라미터 체크
      페이지에 파라미터 전달해야 하니까 다르게 값 전달하기

      pageNo. 값이 있는 글인지 -> (글리스트에서 pageNo를 파라미터로 받아오기 ) pageNo.가 있으면 글수정모드 / 없으면 글작성모드
      pageNo가 있으면 글쓰기 영역 데이터 넣고 없으면 빈값
    
      각 버튼을 누를 때 this.$router.push('주소', params) 
      params에..? 이 글의 pageNo를 보내나..?  << 이게 맞는거같다.

      ======== 아니면
      this.$router.push('주소', 글쓰기타입);
      타입이 create 면 작성모드 / edit면 pageNo를 어케 체크하져..?

      ** 파라미터를 두가지로 확인해야겠는데 
      1. 
     -->
  </board-form>
</template>

<script>
import boardForm from '../../components/form/boardForm.vue'

export default {
  components: { boardForm },
  layout: 'mainLayout',
  name:'boardCreate'
}
</script>
