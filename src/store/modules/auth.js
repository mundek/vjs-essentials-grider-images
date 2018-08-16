import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => {
        // 'double exclamations operator' forces evaluation of expressions as Boolean
        return !!state.token;
    }
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, locationHash) {
        const queryResults = qs.parse(locationHash.replace('#', ''));

        commit('setToken', queryResults.access_token);
        window.localStorage.setItem('imgur_token', queryResults.access_token);
        router.push('/');
    },
    logout: ({ commit })  => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
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