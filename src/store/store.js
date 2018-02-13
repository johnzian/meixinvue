import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    userinfo:{
        uid:null,
        uphone:null
    }
}
const mutations={
    login(state,userinfo){
        state.userinfo=userinfo;
    }
}

export default new Vuex.Store({
    state,
    mutations
});