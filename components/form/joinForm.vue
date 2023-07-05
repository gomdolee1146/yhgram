<template>
    <div class="join">
        <h4 class="join__title">회원가입</h4>
        <div class="join__wrap">
            <div class="join__box">
                <input v-model="joinId" type="text" class="join__input" @input="checkJoinID" />
                <label class="join__label">아이디</label>
                <span v-if="isIdCheck" class="join__desc">{{ idCheckTxt }}</span>
            </div>
            <div class="join__box">
                <input v-model="joinNick" type="text" class="join__input" @input="checkJoinNick" />
                <label class="join__label">닉네임</label>
                <span v-if="isNickCheck" class="join__desc">{{ nickCheckTxt }}</span>
            </div>
            <div class="join__box">
                <input v-model="joinPw" type="password" class="join__input" @input="checkJoinPW" />
                <label class="join__label">비밀번호</label>
                <span v-if="isPwCheck" class="join__desc">{{ pwCheckTxt }}</span>
            </div>
            <div class="join__box">
                <input v-model="joinPwCheck" type="password" class="join__input" @input="checkJoinPwValid" />
                <label class="join__label">비밀번호확인</label>
                <span v-if="isPwValidateCheck" class="join__desc">{{ pwValidCheckTxt }}</span>
            </div>
        </div>
        <!-- <input type="submit" class="join__btn-done" value="회원가입완료" /> -->
        <button class="join__btn-done" @click="joinSubmit">회원가입완료</button>
    </div>
</template>

<script>
export default {
  name: 'joinForm',
  data() {
    return {
      joinId: '',
      joinNick: '',
      joinPw: '',
      joinPwCheck: '',
      userInfo: {},
      isIdCheck: false,
      idCheckTxt: '',
      isNickCheck: false,
      nickCheckTxt: '',
      isPwCheck: false,
      pwCheckTxt: '',
      isPwValidateCheck: false,
      pwValidCheckTxt: '',
    };
  },
  beforeMounted() {
    // 나중에 생략하기
    this.joinId = '';
    this.joinNick = '';
    this.joinPw = '';
    this.joinPwCheck = '';
  },
  methods: {

    // 회원가입 완료
    joinSubmit() {
      this.userInfo.Id = this.joinId;
      this.userInfo.Nick = this.joinNick;
      this.userInfo.Pw = this.joinPw;
      console.log(this.userInfo);

      /** 모든 조건이 일치할 경우 */
      if ( checkJoinID && checkJoinNick && checkJoinPW && checkJoinPwValid) {
        this.$store.state.auth.userList.push ({
          id: this.joinId,
          nick: this.joinNick,
          pw: this.joinPW,
        })
      }
    },


    // 아이디 영역 유효성 검사
    checkJoinID() {
      const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
      const result = idValCheck.test(this.joinId);
      if (!result) {
        this.isIdCheck = true;
        this.idCheckTxt = '아이디를 정확하게 입력해주세여';
      } else {
        this.isIdCheck = false;
        return true;
      }
    },

    // 닉네임 영역 유효성 검사
    checkJoinNick() {
      const nickValCheck = /^[가-힣0-9]+$/;
      const result = nickValCheck.test(this.joinNick);
      if (!result) {
        this.isNickCheck = true;
        this.nickCheckTxt = '닉넴은 한글 + 숫자 조합으로 입력가넝';
      } else {
        this.isNickCheck = false;
        return true;
      }
    },

    // PW 영역 유효성 검사
    checkJoinPW() {
      const pwValCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
      const result = pwValCheck.test(this.joinPw);
      if (!result) {
        this.isPwCheck = true;
        this.pwCheckTxt = '영문,숫자,특문조합 8자리 이상 입력해주5';
      } else {
        this.isPwCheck = false;
        return true;
      }
    },

    // PW 확인 영역 일치여부 확인
    checkJoinPwValid() {
      if (this.joinPw !== this.joinPwCheck) {
        this.isPwValidateCheck = true;
        this.pwValidCheckTxt = '동일한 비밀번호 입력해주3';
      } else {
        this.isPwValidateCheck = false;
        return true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/join.scss';
</style>