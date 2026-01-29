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
import { ImportExportService } from '../../../../_shared/infrastructure/services/import-export.service';
import { GET_PRODUCTS_USE_CASE, GetProductsUseCase } from '../../../application/use-cases/products/get-products.use-case';
import { CREATE_PRODUCT_USE_CASE, CreateProductUseCase } from '../../../application/use-cases/products/create-product.use-case';
import { UPDATE_PRODUCT_USE_CASE, UpdateProductUseCase } from '../../../application/use-cases/products/update-product.use-case';
import { DELETE_PRODUCT_USE_CASE, DeleteProductUseCase } from '../../../application/use-cases/products/delete-product.use-case';
import { ProductDto, CreateProductDto, UpdateProductDto } from '../../../application/dto/stock.dto';
import { ProductType } from '../../../domain/entities/product-type.enum';

/**
 * Composant Products Management
 * Gestion des produits avec CRUD complet
 */
@Component({
    selector: 'app-products-management',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        DataTableComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './products-management.component.html',
    styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
    /** Liste des produits */
    products: ProductDto[] = [];

    /** Chargement en cours */
    loading = false;

    /** Modal visible */
    showModal = false;

    /** Mode édition */
    isEditMode = false;

    /** Produit en cours d'édition */
    currentProduct: ProductDto | null = null;

    /** Configuration du Modal */
    modalConfig: ModalConfig = {
        size: 'lg',
        title: 'stock.products.create',
        showCloseButton: true
    };

    /** Configuration du formulaire */
    get formConfig(): FormConfig {
        return {
            fields: this.formFields,
            submitButton: {
                label: this.isEditMode ? 'common.save' : 'common.create'
            },
            cancelButton: {
                label: 'common.cancel'
            }
        };
    }

    /** Configuration du DataTable */
    tableConfig: DataTableConfig = {
        selectable: true,
        pagination: true,
        pageSize: 10,
        sortable: true,
        filterable: true,
        exportable: true,
        showRowNumbers: true
    };

    /** Colonnes du DataTable */
    tableColumns: DataTableColumn[] = [
        {
            key: 'reference',
            label: 'stock.products.reference',
            sortable: true,
            filterable: true
        },
        {
            key: 'name',
            label: 'stock.products.name',
            sortable: true,
            filterable: true
        },
        {
            key: 'type',
            label: 'stock.products.type',
            sortable: true,
            filterable: true,
            type: 'custom'
        },
        {
            key: 'categoryName',
            label: 'stock.products.category',
            sortable: true,
            filterable: true
        },
        {
            key: 'unitPrice',
            label: 'stock.products.price',
            sortable: true,
            format: (value: number) => this.formatCurrency(value)
        },
        {
            key: 'currentStock',
            label: 'stock.products.stock',
            sortable: true,
            type: 'number'
        },
        {
            key: 'isActive',
            label: 'common.status',
            sortable: true,
            format: (value: boolean) => value ? 'Actif' : 'Inactif'
        },
        {
            key: 'actions',
            label: 'common.actions',
            type: 'custom',
            actions: [
                {
                    icon: 'isax-edit-2',
                    label: 'common.edit',
                    class: 'btn-sm btn-outline-primary',
                    callback: (row) => this.editProduct(row)
                },
                {
                    icon: 'isax-trash',
                    label: 'common.delete',
                    class: 'btn-sm btn-outline-danger',
                    callback: (row) => this.deleteProduct(row)
                }
            ]
        }
    ];

    /** Configuration du formulaire */
    formFields: FormFieldConfig[] = [
        {
            name: 'reference',
            label: 'stock.products.reference',
            type: 'text',
            required: true,
            placeholder: 'Ex: PRD-001',
            width: 6
        },
        {
            name: 'name',
            label: 'stock.products.name',
            type: 'text',
            required: true,
            placeholder: 'Nom du produit',
            width: 6
        },
        {
            name: 'description',
            label: 'stock.products.description',
            type: 'textarea',
            placeholder: 'Description du produit',
            width: 12,
            rows: 3
        },
        {
            name: 'type',
            label: 'stock.products.type',
            type: 'select',
            required: true,
            options: [
                { value: ProductType.STOCKABLE, label: 'stock.products.types.stockable' },
                { value: ProductType.SERVICE, label: 'stock.products.types.service' },
                { value: ProductType.CONSUMABLE, label: 'stock.products.types.consumable' }
            ],
            width: 6
        },
        {
            name: 'trackStock',
            label: 'stock.products.trackStock',
            type: 'checkbox',
            width: 6,
            defaultValue: true
        },
        {
            name: 'categoryId',
            label: 'stock.products.category',
            type: 'select',
            required: true,
            options: [
                { value: '1', label: 'Catégorie A' },
                { value: '2', label: 'Catégorie B' },
                { value: '3', label: 'Catégorie C' }
            ],
            width: 6
        },
        {
            name: 'unit',
            label: 'stock.products.unit',
            type: 'select',
            required: true,
            options: [
                { value: 'piece', label: 'Pièce' },
                { value: 'kg', label: 'Kilogramme' },
                { value: 'liter', label: 'Litre' },
                { value: 'meter', label: 'Mètre' }
            ],
            width: 6
        },
        {
            name: 'unitPrice',
            label: 'stock.products.unitPrice',
            type: 'number',
            required: true,
            placeholder: '0.00',
            width: 6,
            min: 0,
            step: 0.01
        },
        {
            name: 'unitCost',
            label: 'stock.products.unitCost',
            type: 'number',
            placeholder: '0.00',
            width: 6,
            min: 0,
            step: 0.01
        },
        {
            name: 'minStock',
            label: 'stock.products.minStock',
            type: 'number',
            placeholder: '0',
            width: 6,
            min: 0
        },
        {
            name: 'maxStock',
            label: 'stock.products.maxStock',
            type: 'number',
            placeholder: '0',
            width: 6,
            min: 0
        },
        {
            name: 'barcode',
            label: 'stock.products.barcode',
            type: 'text',
            placeholder: 'Code-barres',
            width: 6
        },
        {
            name: 'sku',
            label: 'stock.products.sku',
            type: 'text',
            placeholder: 'SKU',
            width: 6
        },
        {
            name: 'trackByLot',
            label: 'stock.products.trackByLot',
            type: 'checkbox',
            width: 6
        },
        {
            name: 'trackBySerial',
            label: 'stock.products.trackBySerial',
            type: 'checkbox',
            width: 6
        }
    ];

    constructor(
        @Inject(GET_PRODUCTS_USE_CASE) private getProductsUseCase: GetProductsUseCase,
        @Inject(CREATE_PRODUCT_USE_CASE) private createProductUseCase: CreateProductUseCase,
        @Inject(UPDATE_PRODUCT_USE_CASE) private updateProductUseCase: UpdateProductUseCase,
        @Inject(DELETE_PRODUCT_USE_CASE) private deleteProductUseCase: DeleteProductUseCase,
        private toastService: ToastService,
        private importExportService: ImportExportService
    ) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    /**
     * Charger les produits
     */
    async loadProducts(): Promise<void> {
        this.loading = true;

        const result = await this.getProductsUseCase.execute();

        if (result.isSuccess) {
            this.products = result.value;
        } else {
            this.toastService.error('Erreur lors du chargement des produits');
        }

        this.loading = false;
    }

    /**
     * Ouvrir le modal de création
     */
    openCreateModal(): void {
        this.isEditMode = false;
        this.currentProduct = null;
        this.modalConfig = { ...this.modalConfig, title: 'stock.products.create' };
        this.showModal = true;
    }

    /**
     * Éditer un produit
     */
    editProduct(product: ProductDto): void {
        this.isEditMode = true;
        this.currentProduct = product;
        this.modalConfig = { ...this.modalConfig, title: 'stock.products.edit' };
        this.showModal = true;
    }

    /**
     * Supprimer un produit
     */
    async deleteProduct(product: ProductDto): Promise<void> {
        if (confirm(`Êtes-vous sûr de vouloir supprimer le produit "${product.name}" ?`)) {
            const result = await this.deleteProductUseCase.execute(product.id);

            if (result.isSuccess) {
                this.toastService.success('Produit supprimé avec succès');
                await this.loadProducts();
            } else {
                this.toastService.error('Erreur lors de la suppression du produit');
            }
        }
    }

    /**
     * Soumettre le formulaire
     */
    async onFormSubmit(formData: any): Promise<void> {
        if (this.isEditMode && this.currentProduct) {
            const dto: UpdateProductDto = {
                reference: formData.reference,
                name: formData.name,
                description: formData.description,
                type: formData.type,
                trackStock: formData.trackStock,
                categoryId: formData.categoryId,
                unitPrice: parseFloat(formData.unitPrice),
                unitCost: formData.unitCost ? parseFloat(formData.unitCost) : undefined,
                unit: formData.unit,
                barcode: formData.barcode,
                sku: formData.sku,
                minStock: formData.minStock ? parseInt(formData.minStock) : undefined,
                maxStock: formData.maxStock ? parseInt(formData.maxStock) : undefined,
                trackByLot: formData.trackByLot || false,
                trackBySerial: formData.trackBySerial || false
            };

            const result = await this.updateProductUseCase.execute(this.currentProduct.id, dto);

            if (result.isSuccess) {
                this.toastService.success('Produit modifié avec succès');
                this.showModal = false;
                await this.loadProducts();
            } else {
                this.toastService.error('Erreur lors de la modification du produit');
            }
        } else {
            const dto: CreateProductDto = {
                reference: formData.reference,
                name: formData.name,
                description: formData.description,
                type: formData.type || ProductType.STOCKABLE,
                trackStock: formData.trackStock ?? true,
                categoryId: formData.categoryId,
                unitPrice: parseFloat(formData.unitPrice),
                unitCost: formData.unitCost ? parseFloat(formData.unitCost) : undefined,
                unit: formData.unit,
                barcode: formData.barcode,
                sku: formData.sku,
                minStock: formData.minStock ? parseInt(formData.minStock) : undefined,
                maxStock: formData.maxStock ? parseInt(formData.maxStock) : undefined,
                trackByLot: formData.trackByLot || false,
                trackBySerial: formData.trackBySerial || false
            };

            const result = await this.createProductUseCase.execute(dto);

            if (result.isSuccess) {
                this.toastService.success('Produit créé avec succès');
                this.showModal = false;
                await this.loadProducts();
            } else {
                this.toastService.error('Erreur lors de la création du produit');
            }
        }
    }

    /**
     * Annuler le formulaire
     */
    onFormCancel(): void {
        this.showModal = false;
    }

    /**
     * Formater un montant
     */
    /**
     * Obtenir la classe CSS pour le badge de type
     */
    getTypeClass(type: ProductType): string {
        switch (type) {
            case ProductType.STOCKABLE:
                return 'bg-primary';
            case ProductType.SERVICE:
                return 'bg-info';
            case ProductType.CONSUMABLE:
                return 'bg-warning';
            default:
                return 'bg-secondary';
        }
    }

    /**
     * Obtenir le label traduit pour le type
     */
    getTypeLabel(type: ProductType): string {
        return `stock.products.types.${type.toLowerCase()}`;
    }

    formatCurrency(value: number): string {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'XAF'
        }).format(value);
    }

    /**
     * Exporter les données
     */
    onExport(): void {
        this.toastService.info('Export en cours...');
        const dataToExport = this.products.map(p => ({
            Reference: p.reference,
            Name: p.name,
            Category: p.categoryName,
            Price: p.unitPrice,
            Cost: p.unitCost,
            Stock: p.currentStock,
            Unit: p.unit,
            Barcode: p.barcode,
            SKU: p.sku
        }));
        this.importExportService.exportToExcel(dataToExport, 'products_export');
        this.toastService.success('Export terminé');
    }

    /**
     * Trigger import file input
     */
    triggerImport(): void {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xlsx, .xls, .csv';
        fileInput.onchange = (e: any) => this.onFileSelected(e);
        fileInput.click();
    }

    /**
     * Handle file selection for import
     */
    async onFileSelected(event: any): Promise<void> {
        const file = event.target.files[0];
        if (!file) return;

        this.toastService.info('Import en cours...');
        try {
            const data: any[] = await this.importExportService.readExcel(file);

            // Process imported data
            let successCount = 0;
            let errorCount = 0;

            for (const row of data) {
                // Determine if it's create or update based on Reference existence
                // This logic mirrors simple import behavior

                try {
                    const dto: CreateProductDto = {
                        reference: row.Reference,
                        name: row.Name,
                        description: row.Description || '',
                        type: row.Type || ProductType.STOCKABLE,
                        categoryId: row.CategoryId || '1', // Default or find by name logic needed
                        unitPrice: parseFloat(row.Price) || 0,
                        unitCost: row.Cost ? parseFloat(row.Cost) : undefined,
                        unit: row.Unit || 'piece',
                        barcode: row.Barcode,
                        sku: row.SKU,
                        minStock: row.MinStock ? parseInt(row.MinStock) : undefined,
                        maxStock: row.MaxStock ? parseInt(row.MaxStock) : undefined,
                        trackByLot: false,
                        trackBySerial: false
                    };

                    const result = await this.createProductUseCase.execute(dto);
                    if (result.isSuccess) successCount++;
                    else errorCount++;
                } catch (e) {
                    errorCount++;
                }
            }

            this.toastService.success(`Import terminé : ${successCount} succès, ${errorCount} erreurs`);
            await this.loadProducts();

        } catch (error) {
            this.toastService.error('Erreur lors de la lecture du fichier');
            console.error(error);
        }
    }

    /**
     * Download import template
     */
    downloadTemplate(): void {
        const headers = ['Reference', 'Name', 'Description', 'CategoryId', 'Price', 'Cost', 'Unit', 'Barcode', 'SKU', 'MinStock', 'MaxStock'];
        this.importExportService.generateTemplate(headers, 'products_import_template');
    }
}
