<template> 
 <ul class="board__list">
    <li class="board__lst">
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
