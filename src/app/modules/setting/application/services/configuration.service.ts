import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigurationParameter } from '../../domain/entities/configuration-parameter';
import { MOCK_CONFIGURATIONS } from '../../domain/entities/mock-configurations';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    constructor() { }

    /**
     * Récupère toutes les configurations
     */
    getAllConfigurations(): Observable<ConfigurationParameter[]> {
        // Simulation d'appel API
        return of(MOCK_CONFIGURATIONS.content);
    }

    /**
     * Récupère les configurations par catégorie
     */
    getConfigurationsByCategory(category: string): Observable<ConfigurationParameter[]> {
        const configs = MOCK_CONFIGURATIONS.content.filter(c => c.mpCategorie === category);
        return of(configs);
    }

    /**
     * Sauvegarde une configuration
     */
    saveConfiguration(config: ConfigurationParameter): Observable<ConfigurationParameter> {
        // Simulation de sauvegarde
        console.log('Configuration saved:', config);
        return of(config);
    }

    /**
     * Sauvegarde une configuration
     */
    saveConfigurations(configs: ConfigurationParameter[]): Observable<ConfigurationParameter[]> {
        // Simulation de sauvegarde
        console.log('Configuration saved:', configs);
        return of(configs);
    }
}
