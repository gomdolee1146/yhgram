export const actions = {

	// 로그인 후 토큰 확인하기
	getAccountInfo({commit}) {
		let token = localStorage.getItem('access_token')

		axios
		.get('/userInfo', {   // 여기 확인하기
			headers: {"X-AUTH-TOKEN": token}
		})
		.then((response) => {
			commit('login', response.data.data)
		})
		.catch((error) => {
			console.log(error)
		})
	}
};

export default actions;