import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    userinfo:{
        uid:null,
        uphone:null,
        cartcount:0,
    },
    islogin:false
}
const mutations={
    login(state,userinfo){
        state.userinfo.uid=userinfo.uid;
        state.userinfo.uphone=userinfo.uphone;
        state.islogin=true;
    },
    checkcart(state,cartcount){
        state.userinfo.cartcount=cartcount;
    }
}

export default new Vuex.Store({
    state,
    mutations
});