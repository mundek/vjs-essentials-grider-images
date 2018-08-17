import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: (state) => {
        return state.images;
    }
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const response = await api.fetchImages(rootState.auth.token);
        commit('setImages', response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
