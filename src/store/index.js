import Vue from 'vue'
import Vuex from 'vuex'
import userRoles from './modules/user_roles'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        userRoles
    }
})
