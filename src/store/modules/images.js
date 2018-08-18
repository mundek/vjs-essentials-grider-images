import api from '../../api/imgur';
import { router } from '../../main';

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
    },
    async uploadImages({ rootState }, images) {
        // get access token
        const { token } = rootState.auth;

        // call our API module to do the upload
        await api.uploadImages(images, token);

        // redirect user to gallery (ImageList component)

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
