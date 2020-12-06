import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['organization', 'unities', 'resources', 'views', 'actions', 'activities'],
    },
    {
        text: 'CONTEXTS',
        items: ['environment', 'time'],
    },
    {
        text: 'PERMISSIONS',
        items: ['administrative', 'operational'],
    },
    {
        text: 'CLIENTS',
        items: ['projects', 'clients', 'pages'],
    },
];

export const sideNavItems: SideNavItems = {
    organization: {
        icon: 'tachometer-alt',
        text: 'Organisation',
        link: '/dashboard',
    },
    unities: {
        text: 'Unités',
        submenu: [
            {
                text: 'Admin',
                link: '/auth/login'
            },

            {
                text: 'Op',
                link: '/auth/register',
            },
        ]

    },
    resources: {
        icon: 'columns',
        text: 'Ressources',
        link: '/dashboard/static'
    },
    views: {
        icon: 'columns',
        text: 'Vues',
        link: '/dashboard/light'
    },
    actions: {
        icon: 'tachometer-alt',
        text: 'Actions',
        link: '/dashboard',
    },
    activities: {
        icon: 'columns',
        text: 'Activités',
        link: '/auth/forgot-password'
    },
    environment: {
        icon: 'columns',
        text: 'Environnement',
        link: '/dashboard/light'
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },

    projects: {
        icon: 'chart-area',
        text: 'Projets',
        link: '/charts',
    },
    time: {
        icon: 'chart-area',
        text: 'Temporaire',
        link: '/charts',
    },
    administrative: {
        icon: 'table',
        text: 'Administratives',
        link: '/tables',
    },
    operational: {
        icon: 'table',
        text: 'Operationnelles',
        link: '/tables',
    },
    clients: {
        icon: 'chart-area',
        text: 'Clients',
        link: '/charts',
    },
};
