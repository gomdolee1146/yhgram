<template>
    <board-list />
</template>

<script>
import BoardList from '../components/list/boardList.vue'

export default {
  name: 'indexPage',
  layout: 'mainLayout',
  components: {BoardList}
}
</script>
