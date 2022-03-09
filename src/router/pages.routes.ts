export default [
    {
        path: '',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "MainLayout" */ '../views/welcome/WelcomePage.vue'),
    },
    {
        path: '/pokedex',
        name: 'pokedex',
        component: () => import(/* webpackChunkName: "MainLayout" */ '../views/pokedex/PokedexPage.vue'),
    }
]