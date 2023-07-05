<template> 
	<div class="login">
		<h4 class="login__logo">YHGRAM</h4>
		<div class="login__wrap">
			<div class="txt__box">
                <input v-model="loginId" type="text" class="txt__input" @input="checkLoginID" />
                <label class="txt__label">아이디</label>
            </div>
            <div class="txt__box">
                <input v-model="loginNick" type="text" class="txt__input" @input="checkLoginNick" />
                <label class="txt__label">닉네임</label>
            </div>
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
export default {
	name:'',
	components:{},
	layout:'default',  
	props:{},
	data(){
		return{
			loginId: '',
			loginNick: '',
			loginPw: '',
		}
	},
	methods:{
	}

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/input/textarea.scss';
@import '@/assets/scss/pages/login.scss';
</style>