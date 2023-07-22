import axios from 'axios'

const state = {
    search: '',
    userRoles: [],
    role: null,
    loadingUserRoles: false
}

const getters = {
    userRoles(state) {
        return state.userRoles
    },
    role(state) {
        return state.role
    },
    loadingUserRoles(state) {
        return state.loadingUserRoles
    }
}

const mutations = {
    setUserRoles: (state, payload) => {
        state.userRoles = payload
    },
    setRole: (state, payload) => {
        state.role = payload
    },
    setLoadingUserRoles: (state, payload) => {
        state.loadingUserRoles = payload
    },
    setSearch: (state, payload) => {
        state.search = payload
    }
}

const actions = {
    getUserRoles({commit}) {
        commit('setUserRoles', null)
        commit('setLoadingUserRoles', true)

        axios.get('/roles')
            .then(response => {
                commit('setUserRoles', response.data)
            })
            .catch(error => {
                console.log('Error occurred:', error)
            })
            .finally(() => {
                commit('setLoadingUserRoles', false)
            })
    },
    getRole({commit}, id) {
        commit('setRole', null)
        commit('setLoadingUserRoles', true)

        axios.get(`/roles/${id}`)
            .then(res => {
                commit('setRole', res.data)
            })
            .catch(error => {
                console.log('Error occurred getRole:', error)
            })
            .finally(() => {
                commit('setLoadingUserRoles', false)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
