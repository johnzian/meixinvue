import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    userinfo:{
        uid:null,
        uphone:null
    },
    islogin:false
}
const mutations={
    login(state,userinfo){
        state.userinfo=userinfo;
        state.islogin=true;
    }
}

export default new Vuex.Store({
    state,
    mutations
});