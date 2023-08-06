import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import board from './modules/board'

Vue.use(Vuex);

// vuex axios login operation example
export default new Vuex.Store({
    state: {
        userInfo: null,
        isLogin: false,
        userList: []
    },
    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.userInfo = payload
        },
        logout(state){
            state.isLogin = false
            state.userInfo = null
            localStorage.removeItem('access_token');
        },

        initAccount(state, userList){
            // -> this.$store.dispatch('initAccount');
            state.userList = userList;
            console.log(userList);
        },
        addAccount(state, userlst){
            state.userList.push(userlst)
        },
        updateAccountList(state, userlst){
            let index = state.userList.findIndex((c) => {c.id == userlst.id});
            if (index > -1) {
                state.userList[index] = userlst;
            }
        },
        deleteAccount(state, userlstId){
            let index = state.userList.findIndex((c) => c.id == userlstId );
            if (index > -1){
                state.userList.splice(index, 1);
            }
        }
    },
    actions: {
        getAccountInfo({commit}){
            let token = localStorage.getItem('access_token');
            axios
                .get('/userinfo', {
                    headers: {
                        "X-AUTH-TOKEN": token
                    }
                })
                .then((res) => {
                    commit('login성공!', res.data.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        initPages(context){
            const userData = [
                {id: 'test01', password: 'test01', nickname: '테스트01'},
                {id: 'test02', password: 'test02', nickname: '테스트02'},
                {id: 'test03', password: 'test03', nickname: '테스트03'},
                {id: 'test04', password: 'test04', nickname: '테스트04'},
            ];
            context.commit('', userData);
        },

        addAccount(context, userlst){
            return axios
                .post(("api/save", JSON.stringify(userlst)))
                .then((res) => {
                    context.commit('addAccount', {
                        id: res.data.insertId,
                        ...userlst
                    })
                })
        },
        updateAccount(context, userlst){
            return axios
                .post('api/update', JSON.stringify(userlst))
                .then((res) => {
                    context.commit('updateAccount', userlst);
                })
        },
        deleteAccount(context, userlstId){
            return axios
                .post('api/delete', JSON.stringify({id: userlstId}))
                .then((res) => {
                    context.commit('deleteAccount', userlstId)
                })
        }
    },
    getters:{
        getUserList(state){
            return state.userList;
        }
    },

    modules:{
    }
})