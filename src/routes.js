import AppHome from './components/AppHome.vue';
import AppPortafolio from './components/portafolio/AppPortafolio.vue';
import AppStocks from './components/stocks/AppStocks.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
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
