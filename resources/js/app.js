window.Vue = require("vue");

window.axios = require("axios");

import VueTippy from 'vue-tippy'

import VueRouter from 'vue-router';

import routes from './routes';

import { store } from "./store/store";

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(VueRouter);
Vue.use(VueTippy)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    store,
    router: new VueRouter(routes)
});
