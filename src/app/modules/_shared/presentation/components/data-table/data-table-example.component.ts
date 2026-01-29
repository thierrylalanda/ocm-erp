import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, DataTableColumn, DataTablePagination } from './data-table.component';

/**
 * Exemple d'utilisation du composant DataTable
 */
@Component({
    selector: 'app-data-table-example',
    standalone: true,
    imports: [CommonModule, DataTableComponent],
    template: `
    <div class="container-fluid p-4">
      <h2>Exemple DataTable</h2>

      <app-data-table
        [columns]="columns"
        [data]="data"
        [loading]="loading"
        [pagination]="pagination"
        [selectable]="true"
        [selectionMode]="'multiple'"
        [showRowNumbers]="true"
        (rowClick)="onRowClick($event)"
        (selectionChange)="onSelectionChange($event)"
        (pageChange)="onPageChange($event)"
        (sortChange)="onSortChange($event)">
      </app-data-table>

      <!-- Selected rows info -->
      <div *ngIf="selectedRows.length > 0" class="alert alert-info mt-3">
        <strong>{{ selectedRows.length }}</strong> ligne(s) sélectionnée(s)
      </div>
    </div>
  `
})
export class DataTableExampleComponent {
    loading = false;
    selectedRows: any[] = [];

    // Configuration des colonnes
    columns: DataTableColumn[] = [
        {
            key: 'id',
            label: 'ID',
            type: 'number',
            width: '80px',
            sortable: true,
            align: 'center'
        },
        {
            key: 'name',
            label: 'Nom',
            type: 'text',
            sortable: true,
            filterable: true
        },
        {
            key: 'email',
            label: 'Email',
            type: 'text',
            sortable: true,
            filterable: true
        },
        {
            key: 'role',
            label: 'Rôle',
            type: 'text',
            sortable: true,
            filterable: true
        },
        {
            key: 'status',
            label: 'Statut',
            type: 'text',
            sortable: true,
            formatter: (value) => {
                return value === 'active' ? '✓ Actif' : '✗ Inactif';
            }
        },
        {
            key: 'createdAt',
            label: 'Date de création',
            type: 'date',
            sortable: true
        }
    ];

    // Données
    data = [
        {
            id: 1,
            name: 'Jean Dupont',
            email: 'jean.dupont@example.com',
            role: 'Admin',
            status: 'active',
            createdAt: '2024-01-15'
        },
        {
            id: 2,
            name: 'Marie Martin',
            email: 'marie.martin@example.com',
            role: 'User',
            status: 'active',
            createdAt: '2024-02-20'
        },
        {
            id: 3,
            name: 'Pierre Bernard',
            email: 'pierre.bernard@example.com',
            role: 'Manager',
            status: 'inactive',
            createdAt: '2024-03-10'
        },
        {
            id: 4,
            name: 'Sophie Dubois',
            email: 'sophie.dubois@example.com',
            role: 'User',
            status: 'active',
            createdAt: '2024-04-05'
        },
        {
            id: 5,
            name: 'Luc Thomas',
            email: 'luc.thomas@example.com',
            role: 'Admin',
            status: 'active',
            createdAt: '2024-05-12'
        }
    ];

    // Configuration de la pagination
    pagination: DataTablePagination = {
        currentPage: 1,
        pageSize: 10,
        totalItems: this.data.length,
        pageSizeOptions: [5, 10, 25, 50]
    };

    onRowClick(row: any): void {
        console.log('Row clicked:', row);
    }

    onSelectionChange(event: any): void {
        this.selectedRows = event.selectedRows;
        console.log('Selection changed:', event);
    }

    onPageChange(page: number): void {
        console.log('Page changed:', page);
        // Charger les données de la nouvelle page
    }

    onSortChange(sort: any): void {
        console.log('Sort changed:', sort);
        // Trier les données côté serveur si nécessaire
    }
}
