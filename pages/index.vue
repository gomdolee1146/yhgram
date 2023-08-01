<template>
  <div>메인페이지</div>
</template>

<script>
export default {
  name: 'indexPage',
  mounted() {
    console.log('메인페이지')
    this.$router.push('/board');
    console.log('게시판페이지')
  },
  computed: {
     
  }
}
</script>
