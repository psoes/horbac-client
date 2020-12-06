import { environment } from 'environments/environment';
import { KeycloakOptions, KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    const options: KeycloakOptions = {
        config: environment.keycloakConfig
    }
    return () : Promise<any> => keycloak.init(options);
}