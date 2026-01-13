# Module de Configuration - ERP OCM

Ce module implémente la gestion de la structure hiérarchique de l'entreprise (sociétés, directions, services, rayons, etc.) en utilisant l'architecture Clean Architecture.

## Architecture

```
configuration/
├── domain/                          # Couche métier
│   ├── entities/                    # Entités métier
│   └── repositories/                # Interfaces de repositories
├── application/                     # Couche application
│   ├── use-cases/                   # Cas d'usage métier
│   └── dto/                         # Objets de transfert de données
├── infrastructure/                  # Couche infrastructure
│   ├── repositories/                # Implémentations des repositories
│   └── mappers/                     # Mappers entité↔DTO
└── presentation/                    # Couche présentation
    ├── components/                  # Composants UI réutilisables
    ├── pages/                       # Pages spécifiques
    └── state/                       # Gestion d'état
```

## Entités

### Société (Company)
Adaptation de l'entité `TenantEntity` existante avec les champs supplémentaires :

- **Champs hérités** : `id`, `name`, `code`, `email`, `address`, `country`, `currency`, etc.
- **Champs ajoutés** :
  - `activity` (activité principale)
  - `postalBox` (boîte postale)
  - `region` (région)
  - `taxNumber` (numéro contribuable - NC)
  - `tradeRegister` (RCCM)
  - `fiscalRegime` (régime fiscal)
  - `faviconUrl` (favicon)

## API DTOs

### Création de société
```typescript
{
  "nom": "string",           // Nom de la société
  "activite": "string",      // Activité principale
  "adresse": "string",       // Adresse physique
  "boitePostal": "string",   // Boîte postale
  "pays": "string",         // Pays
  "region": "string",       // Région
  "telephone": "string",    // Téléphone
  "nc": "string",           // Numéro contribuable
  "rccm": "string",         // Registre du commerce
  "regimeFiscal": "string", // Régime fiscal
  "devise": "string",       // Devise (XAF, EUR, USD)
  "email": "string",        // Email de contact
  "siteWeb": "string",      // Site web
  "logo": "string",         // URL du logo
  "favicon": "string",      // URL du favicon
  "actif": boolean          // Statut actif/inactif
}
```

## Use Cases

### CreateCompanyUseCase
- Valide les données d'entrée
- Vérifie les doublons (email, NC, RCCM)
- Convertit le DTO en commande Tenant
- Crée l'entité Tenant
- Sauvegarde dans le repository
- Retourne le DTO de réponse

## Composants UI

### CompanyFormComponent
Formulaire de création de société avec :
- Validation des champs obligatoires
- Gestion des erreurs
- Feedback utilisateur
- Intégration avec le use case

## Installation et utilisation

1. **Importer le module** dans votre application :
```typescript
import { ConfigurationModule } from './modules/configuration';

@NgModule({
  imports: [
    ConfigurationModule,
    // ... autres modules
  ]
})
export class AppModule { }
```

2. **Utiliser le composant** :
```html
<app-company-form 
  (companyCreated)="onCompanyCreated($event)"
  (cancel)="onCancel()">
</app-company-form>
```

## Dépendances

- **Angular** : FormsModule, ReactiveFormsModule
- **Shared Module** : TenantEntity, repositories partagés

## Tests

Le module inclut :
- Repository in-memory pour les tests
- Validation des données
- Gestion des erreurs

## Prochaines étapes

1. **Entités supplémentaires** :
   - Direction (Department)
   - Service (Service)
   - Rayon (Section)
   - Site (Site)

2. **Use cases** :
   - Gestion des hiérarchies
   - Assignation des sites
   - Arbre organisationnel

3. **Composants UI** :
   - Liste des sociétés
   - Éditeur de société
   - Arbre organisationnel visuel
   - Gestion des sites

## Notes techniques

- L'architecture Clean Architecture assure la séparation des préoccupations
- Les tokens d'injection permettent la substitution facile des implémentations
- Les DTOs assurent la compatibilité avec l'API backend
- Le repository in-memory facilite le développement et les tests
