const AppRoute = {
    Root: '/',
    Delivery: '/delivery',
    Payment: '/payment',
    Contacts: '/contacts',
    AboutCompany: '/aboutcompany',
    NotFound: '/:catchAll(.*)',
}

const AppRouteList = [
    {
        name: 'Каталог',
        link: AppRoute.Root,
    },
    {
        name: 'Доставка',
        link: AppRoute.Delivery,
    },
    {
        name: 'Оплата',
        link: AppRoute.Payment,
    },
    {
        name: 'Контакты',
        link: AppRoute.Contacts,
    },
    {
        name: 'О компании',
        link: AppRoute.AboutCompany,
    },
]

const LOCAL_STORAGE_NAME = 'cartData';

export { AppRoute, AppRouteList, LOCAL_STORAGE_NAME };