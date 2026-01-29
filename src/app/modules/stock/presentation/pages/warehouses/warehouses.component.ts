import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    DataTableComponent,
    DataTableColumn,
    DataTableConfig,
    FormBuilderComponent,
    FormFieldConfig,
    FormConfig,
    ModalComponent,
    ModalConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { GET_WAREHOUSES_USE_CASE, GetWarehousesUseCase } from '../../../application/use-cases/warehouses/get-warehouses.use-case';
import { CREATE_WAREHOUSE_USE_CASE, CreateWarehouseUseCase } from '../../../application/use-cases/warehouses/create-warehouse.use-case';
import { UPDATE_WAREHOUSE_USE_CASE, UpdateWarehouseUseCase } from '../../../application/use-cases/warehouses/update-warehouse.use-case';
import { DELETE_WAREHOUSE_USE_CASE, DeleteWarehouseUseCase } from '../../../application/use-cases/warehouses/delete-warehouse.use-case';
import { WarehouseDto } from '../../../application/dto/stock.dto';

@Component({
    selector: 'app-warehouses',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './warehouses.component.html',
    styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {
    warehouses: WarehouseDto[] = [];
    loading = false;
    showModal = false;
    isEditMode = false;
    currentWarehouse: WarehouseDto | null = null;

    columns: DataTableColumn[] = [
        { key: 'name', label: 'stock.warehouses.name', sortable: true, filterable: true },
        { key: 'code', label: 'stock.warehouses.code', sortable: true },
        { key: 'city', label: 'stock.warehouses.city', sortable: true },
        { key: 'type', label: 'stock.warehouses.type', sortable: true },
        { key: 'isActive', label: 'common.active', type: 'boolean', sortable: true },
        {
            key: 'actions',
            label: 'common.actions',
            type: 'custom',
            actions: [
                { label: 'common.edit', icon: 'isax-edit-2', callback: (row) => this.editWarehouse(row) },
                { label: 'common.delete', icon: 'isax-trash', class: 'btn-sm btn-light text-danger', callback: (row) => this.deleteWarehouse(row) }
            ]
        }
    ];

    tableConfig: DataTableConfig = {
        showRowNumbers: true,
        selectable: false,
        exportable: true
    };

    modalConfig: ModalConfig = {
        size: 'md',
        title: 'stock.warehouses.create',
        showCloseButton: true
    };

    constructor(
        @Inject(GET_WAREHOUSES_USE_CASE) private getWarehousesUseCase: GetWarehousesUseCase,
        @Inject(CREATE_WAREHOUSE_USE_CASE) private createWarehouseUseCase: CreateWarehouseUseCase,
        @Inject(UPDATE_WAREHOUSE_USE_CASE) private updateWarehouseUseCase: UpdateWarehouseUseCase,
        @Inject(DELETE_WAREHOUSE_USE_CASE) private deleteWarehouseUseCase: DeleteWarehouseUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadWarehouses();
    }

    async loadWarehouses(): Promise<void> {
        this.loading = true;
        const result = await this.getWarehousesUseCase.execute();

        if (result.isSuccess) {
            this.warehouses = result.value;
        } else {
            this.toastService.error('Erreur lors du chargement des magasins');
        }
        this.loading = false;
    }

    openCreateModal(): void {
        this.isEditMode = false;
        this.currentWarehouse = null;
        this.modalConfig = { ...this.modalConfig, title: 'stock.warehouses.create' };
        this.showModal = true;
    }

    editWarehouse(warehouse: WarehouseDto): void {
        this.isEditMode = true;
        this.currentWarehouse = warehouse;
        this.modalConfig = { ...this.modalConfig, title: 'stock.warehouses.edit' };
        this.showModal = true;
    }

    async deleteWarehouse(warehouse: WarehouseDto): Promise<void> {
        if (confirm(`Êtes-vous sûr de vouloir supprimer le magasin "${warehouse.name}" ?`)) {
            const result = await this.deleteWarehouseUseCase.execute(warehouse.id);
            if (result.isSuccess) {
                this.toastService.success('Magasin supprimé avec succès');
                await this.loadWarehouses();
            } else {
                this.toastService.error('Erreur lors de la suppression');
            }
        }
    }

    async onFormSubmit(formData: any): Promise<void> {
        if (this.isEditMode && this.currentWarehouse) {
            const result = await this.updateWarehouseUseCase.execute(this.currentWarehouse.id, formData);
            if (result.isSuccess) {
                this.toastService.success('Magasin modifié avec succès');
                this.showModal = false;
                await this.loadWarehouses();
            } else {
                this.toastService.error('Erreur lors de la modification');
            }
        } else {
            const result = await this.createWarehouseUseCase.execute(formData);
            if (result.isSuccess) {
                this.toastService.success('Magasin créé avec succès');
                this.showModal = false;
                await this.loadWarehouses();
            } else {
                this.toastService.error('Erreur lors de la création');
            }
        }
    }

    onFormCancel(): void {
        this.showModal = false;
    }

    get formConfig(): FormConfig {
        return {
            fields: [
                {
                    name: 'name',
                    label: 'stock.warehouses.name',
                    type: 'text',
                    required: true,
                    width: 12,
                    defaultValue: this.currentWarehouse?.name
                },
                {
                    name: 'code',
                    label: 'stock.warehouses.code',
                    type: 'text',
                    required: true,
                    width: 6,
                    defaultValue: this.currentWarehouse?.code
                },
                {
                    name: 'type',
                    label: 'stock.warehouses.type',
                    type: 'select',
                    options: [
                        { value: 'principal', label: 'Principal' },
                        { value: 'secondaire', label: 'Secondaire' },
                        { value: 'transit', label: 'Transit' }
                    ],
                    width: 6,
                    defaultValue: this.currentWarehouse?.type
                },
                {
                    name: 'address',
                    label: 'stock.warehouses.address',
                    type: 'text',
                    width: 12,
                    defaultValue: this.currentWarehouse?.address
                },
                {
                    name: 'city',
                    label: 'stock.warehouses.city',
                    type: 'text',
                    width: 6,
                    defaultValue: this.currentWarehouse?.city
                },
                {
                    name: 'country',
                    label: 'stock.warehouses.country',
                    type: 'text',
                    width: 6,
                    defaultValue: this.currentWarehouse?.country
                },
                {
                    name: 'description',
                    label: 'stock.warehouses.description',
                    type: 'textarea',
                    width: 12,
                    rows: 3,
                    defaultValue: this.currentWarehouse?.description
                },
                {
                    name: 'isActive',
                    label: 'common.active',
                    type: 'checkbox',
                    width: 12,
                    defaultValue: this.currentWarehouse ? this.currentWarehouse.isActive : true
                }
            ],
            submitButton: { label: this.isEditMode ? 'common.save' : 'common.create' },
            cancelButton: { label: 'common.cancel' }
        };
    }
}
