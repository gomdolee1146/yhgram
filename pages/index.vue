<template>
  <div>메인페이지</div>
</template>

<script>
export default {
  name: 'indexPage',
  mounted() {
   
  },
  computed: {
     async asyncData({app, query}){
      const hello = await app.$axios.$get('/api/');
      return { hello }
    }

  }
}
</script>
