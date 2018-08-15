import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        // double exclamations operator? forces evaluation of expressions as Boolean
        return !!state.token;
    }
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit })  => {
        commit('setToken', null)
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};