# Module Stock

Ce module gère la gestion des produits, des catégories et des mouvements de stock.

## Fonctionnalités

### 1. Gestion des Produits
- Liste paginée des produits avec filtrage et tri.
- Création, modification et suppression de produits.
- Gestion des variantes (prix, coût, stock min/max).
- **Import/Export** : Support des fichiers Excel pour l'import en masse et l'export des données.

### 2. Gestion des Catégories
- Structure hiérarchique (Arborescence) des catégories.
- Ajout, modification, suppression.
- **Import/Export** : Support des fichiers Excel.

### 3. Gestion des Stocks (Inventaire)
- Vue globale de l'état des stocks par magasin.
- Valorisation du stock.
- **Mouvements** : Entrées, Sorties, Transferts, Ajustements.
- **Import** : Saisie de mouvements en masse via Excel.

### 4. Tableau de Bord
- Indicateurs clés (Valeur totale, nombre de produits, alertes stock faible).
- Graphiques d'évolution des mouvements.
- Répartition de la valeur du stock par catégorie.

## Architecture

Ce module suit l'architecture **Clean Architecture** :

- **Domain** : Entités (`Product`, `StockMovement`, `Inventory`) et Interfaces Repository (`StockRepository`). Indépendant du framework.
- **Application** : Cas d'utilisation (`GetStockLevelUseCase`, `CreateStockMovementUseCase`, etc.) et DTOs. Contient la logique métier.
- **Infrastructure** : Implémentations des Repositories (`HttpStockRepository`), Providers.
- **Presentation** : Composants Angular (`Pages`, `Components`), Services de vue (`ViewModel` si applicable).

## Tests

Des tests unitaires sont en place pour les cas d'utilisation critiques :
- `GetStockLevelUseCase`
- `CreateStockMovementUseCase`

Pour lancer les tests :
```bash
ng test --include="src/app/modules/stock/**/*.spec.ts"
```

## Traductions

Les fichiers de traduction sont situés dans `assets/i18n/{lang}.json` sous la clé `stock`.
