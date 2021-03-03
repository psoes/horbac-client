import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['organization', 'unities', 'employees', 'resources', 'views', 'activities_actions'],
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
        icon: 'users',
        text: 'Organization',
        link: '/organizations',
    },
    unities: {
        text: 'Units',
        icon: 'sitemap',
        link: '/units',

    },
    employees: {
        text: 'Employees',
        icon: 'user',
        link: '/employees',

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
    activities_actions: {
        icon: 'table',
        text: 'Activities & Actions',
                submenu: [
                    {
                        icon: 'columns',
                        text: 'Activities',
                        link: '/activities'
                    },
                    {
                        icon: 'tachometer-alt',
                        text: 'Actions',
                        link: '/actions'
                    },
                ],
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
