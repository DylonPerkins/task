import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex,axios)

export default new Vuex.Store({
    strict: true,
    state: {
        userID: null,
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    // getters: {
    //     getUserID (state) {
    //       return state.userID
    //     }
    // },
    mutations:{
        setToken (state, token) {
            state.token = token
            if(token)
            {
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        setUserID (state, userID) {
            state.userID = userID
        }

    },
    actions:{
        setToken ({commit},token) {
            commit('setToken',token)
        },
        setUser ({commit},user) {
            commit('setToken',user)
        },
        setUserID ({commit},userID) {
            commit('setUserID',userID)
        }
    }
})