<template>
  <board-form>
    <!-- 글쓰기 페이지 / 글수정하기 페이지
      파라미터로 ins / upd 체크하기 -> 화면 다르게 보일 수 있게
      데이터 있으면 데이터 채우고 없으면 데이터 없는 빈값 / ins 로 파라미터 체크
      페이지에 파라미터 전달해야 하니까 다르게 값 전달하기

      -- 스토어에서 DB mutations 쪽에서 create / update / delete 구분해서 사용할 수 있도록 체크하기
      -- ㄴ 이거 아니고 로컬스토리지도 확인하기
     -->
  </board-form>
</template>

<script>
import boardForm from '../../components/form/boardForm.vue'

export default {
  components: { boardForm },
  name:'boardCreate'
}
</script>
