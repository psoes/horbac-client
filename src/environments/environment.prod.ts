export const environment = {
    production: true,
    API_HOST: 'http://localhost:8081/horbac-api',
    APPROVAL_API: 'http://localhost:9080/process/secure/request-approval',
    keycloakConfig: {
        clientId: 'horbac-client',
        realm: 'demo',
        url: 'http://localhost:8080/auth'
    }
};
