# Bibliothèque de Composants Partagés - ERP OCM

## Vue d'Ensemble

Cette bibliothèque fournit des composants Angular réutilisables pour tous les modules de l'ERP OCM.

## Composants Disponibles (6/10 Complétés)

### ✅ 1. DataTable
Table de données avec tri, filtres, pagination et sélection.

**Features** :
- Tri multi-colonnes
- Filtres par colonne
- Pagination côté client/serveur
- Sélection simple/multiple
- Templates personnalisés
- Responsive

**Usage** :
```typescript
import { DataTableComponent } from '@modules/_shared/presentation/components';
```

[Documentation complète](./data-table/README.md)

---

### ✅ 2. FormBuilder
Générateur de formulaires dynamiques basé sur une configuration JSON.

**Features** :
- 14 types de champs
- Validation intégrée
- Champs conditionnels
- Layouts configurables
- i18n

**Usage** :
```typescript
import { FormBuilderComponent } from '@modules/_shared/presentation/components';
```

[Documentation complète](./form-builder/README.md)

---

### ✅ 3. FileUploader
Composant d'upload de fichiers avec drag & drop.

**Features** :
- Drag & drop
- Multi-fichiers
- Progress bar
- Prévisualisation
- Validation (type, taille)

**Usage** :
```typescript
import { FileUploaderComponent } from '@modules/_shared/presentation/components';
```

---

### ✅ 4. Modal
Fenêtre modale réutilisable.

**Features** :
- 5 tailles (sm, md, lg, xl, full)
- Animations
- Backdrop
- Keyboard support (ESC)
- Header, body, footer slots

**Usage** :
```typescript
import { ModalComponent } from '@modules/_shared/presentation/components';
```

---

### ✅ 5. Toast
Notifications toast avec service injectable.

**Features** :
- 4 types (success, error, warning, info)
- 6 positions
- Auto-dismiss
- Actions personnalisées
- Service `ToastService`

**Usage** :
```typescript
import { ToastContainerComponent, ToastService } from '@modules/_shared/presentation/components';

// Dans app.component.html
<app-toast-container></app-toast-container>

// Dans votre composant
constructor(private toastService: ToastService) {}

showSuccess() {
  this.toastService.success('Opération réussie !');
}
```

---

### ✅ 6. Chart
Wrapper pour ApexCharts.

**Features** :
- 11 types de graphiques
- Configuration simplifiée
- Thème cohérent
- Responsive
- Export image

**Usage** :
```typescript
import { ChartComponent } from '@modules/_shared/presentation/components';
```

[Documentation complète](./chart/README.md)

---

### 🚧 7-10. Composants Restants

Les composants suivants peuvent être implémentés selon les besoins :

#### TreeView
Arbre hiérarchique avec sélection et actions.

#### Wizard
Formulaire multi-étapes avec navigation.

#### Calendar
Calendrier/planning avec événements.

#### DateRangePicker
Amélioration du composant existant dans `/features/common/date-range-picker`.

---

## Installation

Les composants sont disponibles via le module `_shared` :

```typescript
import { 
  DataTableComponent,
  FormBuilderComponent,
  FileUploaderComponent,
  ModalComponent,
  ToastContainerComponent,
  ToastService,
  ChartComponent
} from '@modules/_shared/presentation/components';
```

## Architecture

Tous les composants suivent :
- **Standalone Components** (Angular 17+)
- **Clean Architecture** (séparation présentation/logique)
- **i18n** (support multilingue)
- **Accessibilité** (WCAG 2.1)
- **Responsive** (mobile-first)

## Utilisation dans les Modules

Ces composants peuvent être utilisés dans tous les modules de l'ERP :

- ✅ Stock - DataTable pour listes, FormBuilder pour formulaires
- ✅ Facturation - DataTable, Chart pour statistiques
- ✅ Comptabilité - DataTable, Chart, FormBuilder
- ✅ RH - DataTable, FileUploader pour CV
- ✅ Tous les autres modules

## Contribution

Pour ajouter un nouveau composant :

1. Créer le dossier `components/nom-composant/`
2. Créer les fichiers `.ts`, `.html`, `.scss`
3. Créer `index.ts` pour les exports
4. Ajouter la documentation `README.md`
5. Mettre à jour `components/index.ts`

## Support

Pour toute question ou problème, consulter la documentation de chaque composant ou créer une issue.
