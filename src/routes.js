import AppHome from './components/AppHome.vue';
import AppStocks from './components/AppStocks.vue';
import AppPortafolio from './components/AppPortafolio.vue';

export const routes = [
    {
        name: 'home',
        path: '',
        component: AppHome,
    },
    {
        name: 'stocks',
        path: '/stocks',
        component: AppStocks,
    },
    {
        name: 'portafolio',
        path: '/portafolio',
        component: AppPortafolio,
    },
    {
        path: '*',
        redirect: '/',
    }
];