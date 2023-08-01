<template>
    <joinForm :user="user" />
</template>

<script>
import joinForm from '~/components/form/joinForm.vue'
export default {
  name: 'join',
  components: {joinForm},
  data() {
    return {
      user: {}  // joinForm에서 userList 어케 받아
    }
  },
  created(){
    // 회원가입은 post만 하면 되는거..?
    // axios.get('/api/index').then((res) => {
    //   this.user = res.data;
    // })
  }
}
</script>