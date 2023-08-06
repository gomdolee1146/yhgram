<template>
  <div>
    <!-- 메인페이지 -->
    <board-list />

  </div>
</template>

<script>
import BoardList from '../components/list/boardList.vue'

export default {
  name: 'indexPage',
  layout: 'mainLayout',
  components: {BoardList}
}
</script>
