import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      fullname:'',
      email:'',
      password:'',
      confirmPwd:''
    },
    mutations: {
      SET_LOGIN_DATA (state,data) {
        localStorage.setItem('fullname', data.fullname);
        state.fullname = data.fullname;
        localStorage.setItem('email', data.email);
        state.email = data.email;
        localStorage.setItem('password', data.password);
        state.password = data.password;
        localStorage.setItem('confirmPwd', data.confirmPwd);
        state.confirmPwd = data.confirmPwd;

      }
    },
    actions:{
        setLoginData({commit}, data){
            commit('SET_LOGIN_DATA',data);
        }
    },
    getters:{
        getUserEmail: (state) => state.email,
        getUserPassword: (state) => state.password,
        getUserFullname: (state) => state.fullname,
    }
  })