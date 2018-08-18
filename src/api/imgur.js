import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '801d572bbcd0820';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(anImage => {
            const formData = new FormData();
            formData.append('image', anImage);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });

        return Promise.all(promises);
    }
};
