<template>
  <div class="system">
    <div class="g_modal"></div>
    <div class="system__wrap">
      <!-- <div class="system__title">제목영역</div> -->
      <div class="system__cont">
        <p>게시글을 작성하시겠습니까?</p>
      </div>
      <div class="system__btn">
        <button class="system__btn-cancel" v-if="system.cancelTxt">{{ system.cancelTxt }}</button>
        <button class="system__btn-done" v-if="system.doneTxt">{{ system.doneTxt }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/dialog/system.scss';
</style>