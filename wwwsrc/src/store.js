import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:5000/account/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:5000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    userKeeps: [],
    publicKeeps: {},
    vaultKeeps: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserKeeps(state, userKeeps) {
      state.userKeeps = userKeeps;
    }
  },
  actions: {

    // USER ACTIONS 

    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('Login Failed')
        })
    },
    logout({ commit, dispatch }, creds) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'login' })
        })
        .catch(e => {
          console.log('Failed to logout')
        })
    },

    // GET USER KEEPS 
    getUserKeeps({ commit }) {
      api.get('keeps/myKeeps')
        .then(res => {
          commit('setUserKeeps', res.data)
        })
        .catch(e => {
          console.log('Failed to get user keeps')
        })
    },

    // CREATE NEW KEEP
    newKeep({ commit, dispatch }, creds) {
      debugger
      api.post('keeps', creds)
        .then(res => {
          debugger;
          dispatch('getUserKeeps')
        })
        .catch(e => {
          console.log('Failed to create keep')
        })
    }


    // CREATE NEW VAULT

    // newVault({ commit, dispatch }, creds) {
    // auth.post('', creds)
    //   .then(res => {
    //     commit('')
    //   })
    //   .catch(e => {
    //     console.log('Failed to create new vault')
    //   })
    // }
  }
})