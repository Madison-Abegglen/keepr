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
    publicKeeps: [],
    userVaults: [],
    vaultKeeps: [],
    activeKeep: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserKeeps(state, userKeeps) {
      state.userKeeps = userKeeps;
    },
    setUserVaults(state, userVaults) {
      state.userVaults = userVaults;
    },
    setPublicKeeps(state, publicKeeps) {
      state.publicKeeps = publicKeeps;
    },
    setActiveKeep(state, activeKeep) {
      state.activeKeep = activeKeep;
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps;
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

    // GET PUBLIC KEEPS
    getPublicKeeps({ commit }) {
      api.get('keeps/publicKeeps')
        .then(res => {
          commit('setPublicKeeps', res.data)
        })
        .catch(e => {
          console.log('Failed to get public keeps')
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
      api.post('keeps', creds)
        .then(res => {
          dispatch('getUserKeeps')
        })
        .catch(e => {
          console.log('Failed to create keep')
        })
    },

    // INCREMENT VIEWS

    incrementViews({ commit, dispatch }, activeKeep) {
      activeKeep.views++
      api.put('keeps', activeKeep)
        // .then(res => {
        //   dispatch('getUserKeeps')
        // })
        .catch(e => {
          console.log('Failed to increment active keep views')
        })
    },

    // DELETE KEEP BY ID 

    deleteKeep({ commit, dispatch }, keep) {
      api.delete('keeps/' + keep.id)
        .then(res => {
          dispatch('getUserKeeps')
        })
        .catch(e => {
          console.log('Failed to delete keep')
        })
    },


    // GET USER VAULTS

    getUserVaults({ commit }) {
      api.get('vaults')
        .then(res => {
          commit('setUserVaults', res.data)
        })
        .catch(e => {
          console.log('Failed to get user vaults')
        })
    },

    // CREATE NEW VAULT

    newVault({ commit, dispatch }, creds) {
      api.post('vaults', creds)
        .then(res => {
          dispatch('getUserVaults')
        })
        .catch(e => {
          console.log('Failed to create new vault')
        })
    },

    // ADD KEEP TO VAULT
    addKeepToVault({ commit, dispatch }, vk) {
      api.put('vaults', vk)
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
    },

    // DELETE VAULT

    deleteVault({ commit, dispatch }, vault) {
      api.delete('vaults/' + vault.id)
        .then(res => {
          dispatch('getUserVaults')
          router.push({ name: "home" });
        })
        .catch(e => {
          console.log('Failed to delete vault')
        })
    },

    getKeepsByVault({ commit, dispatch }, vaultId) {
      api.get("vaults/" + vaultId)
        .then(res => {
          commit('setVaultKeeps', res.data);
        })
        .catch(e => {
          console.log('Failed to get keeps by vault')
        })
    }

  }
})