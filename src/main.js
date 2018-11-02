import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-js-stock-trader-d1143.firebaseio.com/';

const router = new VueRouter({
    routes,
    mode: 'history',
});

Vue.filter('currency', (value) => {
    return value.toLocaleString();
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
