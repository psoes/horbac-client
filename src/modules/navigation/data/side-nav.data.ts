import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['organization', 'unities', 'employees', 'resources', 'activities_actions'],
    },
    {
        text: 'CONTEXTS',
        items: ['context'],
    },
    {
        text: 'PERMISSIONS',
        items: ['abtracts', 'helper', 'approval'],
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
    approval: {
        text: 'Approval',
        icon: 'tasks',
        link: '/approval',

    },
  /*  resources: {
        icon: 'columns',
        text: 'Ressources',
        link: '/dashboard/static'
    },
    views: {
        icon: 'columns',
        text: 'Vues',
        link: '/dashboard/light'
    },
*/
    resources: {
        icon: 'columns',
        text: 'Resources',
        link: '/resources'
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
                    {
                        icon: 'tachometer-alt',
                        text: 'Considers',
                        link: '/considers'
                    },
                ],
    },
    context: {
        icon: 'columns',
        text: 'Context',
        link: '/context'
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
   /* time: {
        icon: 'chart-area',
        text: 'Temporaire',
        link: '/charts',
    },*/
   /* administrative: {
        icon: 'table',
        text: 'Administratives',
        link: '/tables',
    },
    
    operational: {
        icon: 'table',
        text: 'Operationnelles',
        link: '/tables',
    },*/
    abtracts: {
        icon: 'table',
        text: 'Units Grants',
        link: '/permissions',
    },
    
    helper: {
        icon: 'table',
        text: 'Permission Helper',
        link: '/permissions/helpers',
    },

    clients: {
        icon: 'chart-area',
        text: 'Clients',
        link: '/charts',
    },
};
