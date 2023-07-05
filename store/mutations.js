export const mutations = {

  // 로그인
  login(state, payload) {
    state.isLogin = true;
    state.UserInfo = payload
  },

  // 로그아웃
  logout(state) {
    state.isLogin = false;
    state.userInfo = null
    localStorage.removeItem('access_token');
  }


};

export default mutations;