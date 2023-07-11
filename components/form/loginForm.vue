<template> 
	<div class="login">
		<h4 class="login__logo">YHGRAM</h4>
		<div class="login__wrap">
			<div class="txt__box">
                <input v-model="loginId" type="text" class="txt__input" @input="checkLoginID" />
                <label class="txt__label">아이디</label>
				<span v-if="isIdCheck" class="txt__label">{{ idCheckTxt }}</span>
            </div>
            <!-- <div class="txt__box">
                <input v-model="loginNick" type="text" class="txt__input" @input="checkLoginNick" />
                <label class="txt__label">닉네임</label>
            </div> -->
            <div class="txt__box">
                <input v-model="loginPw" type="password" class="txt__input" @input="checkLoginPW" />
                <label class="txt__label">비밀번호</label>
            </div>
		</div>
		<button class="login__btn login__btn-login">로그인하기</button>
		<button class="login__btn login__btn-join">회원가입</button>
	</div>
</template>

<script>
import LoginUser from '@/plugins/obj/loginUser.js';

export default {
	name:'',
	components:{},
	layout:'default',  
	props:{},
	data(){
		return{
			loginId: '',
			// loginNick: '',
			loginPw: '',

			isIdCheck: false,
	 		idCheckTxt: '',
 			isPwCheck: false,
	  		pwCheckTxt: '',

			formData: new LoginUser('',''),
		}
	},
	methods:{
		goToMain() {
			this.$router.push('/');
			console.log('메인페이지로 이동')
		},

		// 로그인 완료
		loginSubmit(LoginUser) {
			/** 모든 조건이 일치하는 경우 */
			if ( checkLoginId && checkLoginPw ) {
				axios
					.post('/login', LoginUser)
					.then(() => {
						this.goToMain
					})
					.catch((err) => {
						if (err.response) {
							console.log(err.response.data.message);
						}
					})
			}
		},

		// 아이디 영역 유효성 검사
		checkLoginID() {
			const idValCheck = /^[a-zA-Z0-9]{4,12}$/;
			const result = idValCheck.test(this.loginId);
			if (!result) {
				this.isIdCheck = true;
				this.idCheckTxt = '아이디를 정확하게 입력해주세요.';
			} else {
				this.isIdCheck = false;
				return true;
			}
		},
		// PW 영역 유효성 검사
		checkLoginPW() {
			const pwValCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-~])(?=.*[0-9]).{8,15}$/;
			const result = pwValCheck.test(this.loginPw);
			if (!result) {
				this.isPwCheck = true;
				this.pwCheckTxt = '영문,숫자,특문조합 8자리 이상 입력해주세요.';
			} else {
				this.isPwCheck = false;
				return true;
			}
		},
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/input/textarea.scss';
@import '@/assets/scss/pages/login.scss';
</style>