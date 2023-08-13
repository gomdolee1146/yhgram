<template>
  <div class="main">  
    <create-btn />
    <board-list />
    <none-box v-if="false">
      <p slot="none_txt">
        첫번째 글을 작성해보세요!
      </p>
    </none-box>
  </div>
</template>

<script>
import NoneBox from '../components/box/noneBox.vue'
import CreateBtn from '../components/button/createBtn.vue'
import BoardList from '../components/list/boardList.vue'

export default {
  name: 'indexPage',
  layout: 'mainLayout',
  components: {BoardList, NoneBox, CreateBtn}
}
</script>
