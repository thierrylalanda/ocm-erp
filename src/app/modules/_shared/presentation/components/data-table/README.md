# DataTable Component - Guide d'Utilisation

## Vue d'Ensemble

Le composant `DataTable` est un composant Angular standalone réutilisable qui fournit une table de données complète avec tri, filtrage, pagination et sélection.

## Installation

```typescript
import { DataTableComponent, DataTableColumn, DataTablePagination } from '@modules/_shared/presentation/components';
```

## Features

- ✅ Tri multi-colonnes (ascendant/descendant)
- ✅ Filtres par colonne
- ✅ Pagination côté client et serveur
- ✅ Sélection simple ou multiple
- ✅ Numérotation des lignes
- ✅ Templates personnalisés pour les cellules
- ✅ Formatage personnalisé des valeurs
- ✅ État de chargement
- ✅ État vide
- ✅ Responsive (mobile-first)
- ✅ i18n (multilingue)
- ✅ Accessible (WCAG 2.1)

## Utilisation Basique

```typescript
import { Component } from '@angular/core';
import { DataTableComponent, DataTableColumn } from '@modules/_shared/presentation/components';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <app-data-table
      [columns]="columns"
      [data]="data"
      [loading]="loading">
    </app-data-table>
  `
})
export class MyPageComponent {
  columns: DataTableColumn[] = [
    { key: 'id', label: 'ID', type: 'number', sortable: true },
    { key: 'name', label: 'Nom', type: 'text', sortable: true, filterable: true },
    { key: 'email', label: 'Email', type: 'text', sortable: true, filterable: true }
  ];

  data = [
    { id: 1, name: 'Jean Dupont', email: 'jean@example.com' },
    { id: 2, name: 'Marie Martin', email: 'marie@example.com' }
  ];

  loading = false;
}
```

## Configuration des Colonnes

### Propriétés de DataTableColumn

| Propriété | Type | Description | Défaut |
|-----------|------|-------------|--------|
| `key` | `string` | Clé de la propriété dans les données | **Requis** |
| `label` | `string` | Libellé de la colonne (clé i18n) | **Requis** |
| `type` | `'text' \| 'number' \| 'date' \| 'boolean' \| 'custom'` | Type de données | `'text'` |
| `width` | `string` | Largeur de la colonne (ex: '100px', '20%') | Auto |
| `sortable` | `boolean` | Colonne triable | `false` |
| `filterable` | `boolean` | Colonne filtrable | `false` |
| `align` | `'left' \| 'center' \| 'right'` | Alignement du contenu | `'left'` |
| `formatter` | `(value, row) => string` | Fonction de formatage personnalisée | - |
| `template` | `TemplateRef` | Template personnalisé pour le rendu | - |

### Exemples de Colonnes

```typescript
columns: DataTableColumn[] = [
  // Colonne simple
  { key: 'name', label: 'common.name', type: 'text' },

  // Colonne triable et filtrable
  { key: 'email', label: 'common.email', type: 'text', sortable: true, filterable: true },

  // Colonne avec formatage personnalisé
  {
    key: 'price',
    label: 'common.price',
    type: 'number',
    align: 'right',
    formatter: (value) => `${value.toFixed(2)} €`
  },

  // Colonne date
  { key: 'createdAt', label: 'common.createdAt', type: 'date', sortable: true },

  // Colonne boolean
  { key: 'active', label: 'common.active', type: 'boolean' }
];
```

## Pagination

```typescript
import { DataTablePagination } from '@modules/_shared/presentation/components';

pagination: DataTablePagination = {
  currentPage: 1,
  pageSize: 10,
  totalItems: 100,
  pageSizeOptions: [10, 25, 50, 100]
};
```

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [pagination]="pagination"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)">
</app-data-table>
```

## Sélection

### Sélection Multiple

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [selectable]="true"
  [selectionMode]="'multiple'"
  (selectionChange)="onSelectionChange($event)">
</app-data-table>
```

```typescript
onSelectionChange(event: DataTableSelectionEvent): void {
  console.log('Selected rows:', event.selectedRows);
  console.log('Selected indices:', event.selectedIndices);
}
```

### Sélection Simple

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [selectable]="true"
  [selectionMode]="'single'"
  (selectionChange)="onSelectionChange($event)">
</app-data-table>
```

## Tri

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  (sortChange)="onSortChange($event)">
</app-data-table>
```

```typescript
onSortChange(sort: DataTableSort): void {
  console.log('Sort column:', sort.column);
  console.log('Sort direction:', sort.direction);
  // Trier les données côté serveur si nécessaire
}
```

## Templates Personnalisés

```typescript
@Component({
  template: `
    <app-data-table [columns]="columns" [data]="data">
      <ng-template #actionTemplate let-row>
        <button (click)="edit(row)">Éditer</button>
        <button (click)="delete(row)">Supprimer</button>
      </ng-template>
    </app-data-table>
  `
})
export class MyComponent {
  @ViewChild('actionTemplate') actionTemplate!: TemplateRef<any>;

  columns: DataTableColumn[] = [
    { key: 'name', label: 'Nom' },
    { key: 'actions', label: 'Actions', template: this.actionTemplate }
  ];
}
```

## État de Chargement

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [loading]="loading">
</app-data-table>
```

## Numérotation des Lignes

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [showRowNumbers]="true">
</app-data-table>
```

## Hauteur Fixe avec Scroll

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [height]="'500px'">
</app-data-table>
```

## Événements

| Événement | Type | Description |
|-----------|------|-------------|
| `rowClick` | `EventEmitter<any>` | Émis lors du clic sur une ligne |
| `selectionChange` | `EventEmitter<DataTableSelectionEvent>` | Émis lors du changement de sélection |
| `pageChange` | `EventEmitter<number>` | Émis lors du changement de page |
| `pageSizeChange` | `EventEmitter<number>` | Émis lors du changement de taille de page |
| `sortChange` | `EventEmitter<DataTableSort>` | Émis lors du changement de tri |

## Traductions i18n

Clés de traduction utilisées :

```json
{
  "common": {
    "loading": "Chargement...",
    "filter": "Filtrer",
    "noData": "Aucune donnée disponible",
    "showing": "Affichage de",
    "of": "sur",
    "page": "page"
  }
}
```

## Exemple Complet

Voir `data-table-example.component.ts` pour un exemple complet d'utilisation.

## Accessibilité

Le composant respecte les normes WCAG 2.1 :
- Navigation au clavier
- ARIA labels
- Contraste des couleurs
- Focus visible

## Performance

- Lazy loading des données
- Virtual scrolling (à venir)
- Optimisation du rendu avec `OnPush`
- Pagination côté serveur recommandée pour > 1000 lignes

## Personnalisation

### Classes CSS Personnalisées

```html
<app-data-table
  [columns]="columns"
  [data]="data"
  [customClass]="'my-custom-table'">
</app-data-table>
```

### Styles SCSS

```scss
.my-custom-table {
  .table {
    thead {
      background-color: #custom-color;
    }
  }
}
```
