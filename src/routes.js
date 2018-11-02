import AppHome from './components/AppHome.vue';
import AppPortfolio from './components/portafolio/AppPortfolio.vue';
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
        name: 'portfolio',
        path: '/portfolio',
        component: AppPortfolio,
    },
    {
        path: '*',
        redirect: '/',
    }
];
