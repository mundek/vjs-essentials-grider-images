import store from './store/index';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // use browser router (instead of hash router)
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm},
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});

new Vue({
  store: store, // older syntax for connecting imported js (the second "store") with the Vue object property (the first "store")
  router, // newer syntax for connecting imported js with the Vue object when the same name/label is used
  render: h => h(App)
}).$mount('#app');
