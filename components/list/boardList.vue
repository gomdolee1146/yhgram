<template> 
 <ul class="board__list">
    <li class="board__lst">
      <!-- 
        카드에 넘겨야할 data 
        1. 게시글 정보 자체
        2. 작성자 정보
        3. 댓글정보 + 좋아요 갯수
      -->
      <boardCard/>
    </li>
 </ul>
</template>

<script>
import boardCard from '@/components/card/boardCard.vue';

export default {
  name:'boardList',
  components:{ boardCard },
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
@import '@/assets/scss/components/list/boardList.scss';
</style>
