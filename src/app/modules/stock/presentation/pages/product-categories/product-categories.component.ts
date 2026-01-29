import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    TreeViewComponent,
    TreeNode,
    TreeViewConfig,
    FormBuilderComponent,
    FormFieldConfig,
    FormConfig,
    ModalComponent,
    ModalConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { ImportExportService } from '../../../../_shared/infrastructure/services/import-export.service';
import { GET_PRODUCT_CATEGORIES_USE_CASE, GetProductCategoriesUseCase } from '../../../application/use-cases/categories/get-product-categories.use-case';
import { CREATE_PRODUCT_CATEGORY_USE_CASE, CreateProductCategoryUseCase } from '../../../application/use-cases/categories/create-product-category.use-case';
import { UPDATE_PRODUCT_CATEGORY_USE_CASE, UpdateProductCategoryUseCase } from '../../../application/use-cases/categories/update-product-category.use-case';
import { DELETE_PRODUCT_CATEGORY_USE_CASE, DeleteProductCategoryUseCase } from '../../../application/use-cases/categories/delete-product-category.use-case';
import { ProductCategoryDto, CreateProductCategoryDto, UpdateProductCategoryDto } from '../../../application/dto/stock.dto';

@Component({
    selector: 'app-product-categories',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        TreeViewComponent,
        FormBuilderComponent,
        ModalComponent
    ],
    templateUrl: './product-categories.component.html',
    styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
    categories: ProductCategoryDto[] = [];
    treeNodes: TreeNode[] = [];
    loading = false;
    showModal = false;
    isEditMode = false;
    currentCategory: ProductCategoryDto | null = null;
    flatCategories: ProductCategoryDto[] = [];

    treeConfig: TreeViewConfig = {
        selectable: true,
        multiSelect: false,
        showIcons: true,
        showLines: true,
        expandAll: true,
        showActions: true
    };

    modalConfig: ModalConfig = {
        size: 'md',
        title: 'stock.categories.create',
        showCloseButton: true
    };

    get formConfig(): FormConfig {
        return {
            fields: this.getFormFields(),
            submitButton: {
                label: this.isEditMode ? 'common.save' : 'common.create'
            },
            cancelButton: {
                label: 'common.cancel'
            }
        };
    }

    constructor(
        @Inject(GET_PRODUCT_CATEGORIES_USE_CASE) private getCategoriesUseCase: GetProductCategoriesUseCase,
        @Inject(CREATE_PRODUCT_CATEGORY_USE_CASE) private createCategoryUseCase: CreateProductCategoryUseCase,
        @Inject(UPDATE_PRODUCT_CATEGORY_USE_CASE) private updateCategoryUseCase: UpdateProductCategoryUseCase,
        @Inject(DELETE_PRODUCT_CATEGORY_USE_CASE) private deleteCategoryUseCase: DeleteProductCategoryUseCase,
        private toastService: ToastService,
        private importExportService: ImportExportService
    ) { }

    ngOnInit(): void {
        this.loadCategories();
    }

    async loadCategories(): Promise<void> {
        this.loading = true;
        const result = await this.getCategoriesUseCase.execute();

        if (result.isSuccess) {
            this.categories = result.value;
            this.treeNodes = this.mapToTreeNodes(this.categories);
            this.flatCategories = this.flattenCategories(this.categories);
        } else {
            this.toastService.error('Erreur lors du chargement des catégories');
        }
        this.loading = false;
    }

    private mapToTreeNodes(categories: ProductCategoryDto[]): TreeNode[] {
        return categories.map(cat => ({
            id: cat.id,
            label: cat.name,
            icon: 'folder',
            expanded: true,
            children: cat.children ? this.mapToTreeNodes(cat.children) : [],
            data: cat
        }));
    }

    private flattenCategories(categories: ProductCategoryDto[]): ProductCategoryDto[] {
        let flat: ProductCategoryDto[] = [];
        categories.forEach(cat => {
            flat.push(cat);
            if (cat.children) {
                flat = [...flat, ...this.flattenCategories(cat.children)];
            }
        });
        return flat;
    }

    onNodeAction(event: { node: TreeNode, action: string }): void {
        const category = event.node.data as ProductCategoryDto;
        if (event.action === 'edit') {
            this.editCategory(category);
        } else if (event.action === 'delete') {
            this.deleteCategory(category);
        }
    }

    openCreateModal(): void {
        this.isEditMode = false;
        this.currentCategory = null;
        this.modalConfig = { ...this.modalConfig, title: 'stock.categories.create' };
        this.showModal = true;
    }

    editCategory(category: ProductCategoryDto): void {
        this.isEditMode = true;
        this.currentCategory = category;
        this.modalConfig = { ...this.modalConfig, title: 'stock.categories.edit' };
        this.showModal = true;
    }

    async deleteCategory(category: ProductCategoryDto): Promise<void> {
        if (confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${category.name}" ?`)) {
            const result = await this.deleteCategoryUseCase.execute(category.id);
            if (result.isSuccess) {
                this.toastService.success('Catégorie supprimée avec succès');
                await this.loadCategories();
            } else {
                this.toastService.error('Erreur lors de la suppression');
            }
        }
    }

    async onFormSubmit(formData: any): Promise<void> {
        if (this.isEditMode && this.currentCategory) {
            const dto: UpdateProductCategoryDto = {
                name: formData.name,
                description: formData.description,
                parentId: formData.parentId,
                code: formData.code,
                order: formData.order ? parseInt(formData.order) : undefined,
                isActive: formData.isActive
            };

            const result = await this.updateCategoryUseCase.execute(this.currentCategory.id, dto);
            if (result.isSuccess) {
                this.toastService.success('Catégorie modifiée avec succès');
                this.showModal = false;
                await this.loadCategories();
            } else {
                this.toastService.error('Erreur lors de la modification');
            }
        } else {
            const dto: CreateProductCategoryDto = {
                name: formData.name,
                description: formData.description,
                parentId: formData.parentId,
                code: formData.code,
                order: formData.order ? parseInt(formData.order) : undefined,
                isActive: formData.isActive !== false // default true
            };

            const result = await this.createCategoryUseCase.execute(dto);
            if (result.isSuccess) {
                this.toastService.success('Catégorie créée avec succès');
                this.showModal = false;
                await this.loadCategories();
            } else {
                this.toastService.error('Erreur lors de la création');
            }
        }
    }

    onFormCancel(): void {
        this.showModal = false;
    }

    private getFormFields(): FormFieldConfig[] {
        // Exclure la catégorie courante et ses enfants des parents potentiels (pour éviter cycles)
        let parentOptions = this.flatCategories;
        if (this.isEditMode && this.currentCategory) {
            const descendants = this.flattenCategories(this.currentCategory.children || []);
            const excludeIds = [this.currentCategory.id, ...descendants.map(d => d.id)];
            parentOptions = parentOptions.filter(c => !excludeIds.includes(c.id));
        }

        return [
            {
                name: 'name',
                label: 'stock.categories.name',
                type: 'text',
                required: true,
                placeholder: 'Nom de la catégorie',
                width: 12,
                defaultValue: this.currentCategory?.name
            },
            {
                name: 'parentId',
                label: 'stock.categories.parent',
                type: 'select',
                options: parentOptions.map(c => ({ value: c.id, label: c.name })),
                width: 12,
                defaultValue: this.currentCategory?.parentId,
                placeholder: 'Aucune (Racine)'
            },
            {
                name: 'code',
                label: 'stock.categories.code',
                type: 'text',
                width: 6,
                defaultValue: this.currentCategory?.code
            },
            {
                name: 'order',
                label: 'stock.categories.order',
                type: 'number',
                width: 6,
                defaultValue: this.currentCategory?.order,
                min: 0
            },
            {
                name: 'description',
                label: 'stock.categories.description',
                type: 'textarea',
                width: 12,
                rows: 3,
                defaultValue: this.currentCategory?.description
            },
            {
                name: 'isActive',
                label: 'common.active',
                type: 'checkbox',
                width: 12,
                defaultValue: this.currentCategory ? this.currentCategory.isActive : true
            }
        ];
    }
    /**
     * Export categories
     */
    onExport(): void {
        this.toastService.info('Export en cours...');
        const dataToExport = this.flatCategories.map(c => ({
            Name: c.name,
            Code: c.code,
            Description: c.description,
            ParentId: c.parentId,
            Order: c.order,
            Active: c.isActive
        }));
        this.importExportService.exportToExcel(dataToExport, 'categories_export');
        this.toastService.success('Export terminé');
    }

    /**
     * Download template
     */
    downloadTemplate(): void {
        const headers = ['Name', 'Code', 'Description', 'ParentId', 'Order'];
        this.importExportService.generateTemplate(headers, 'categories_import_template');
    }

    /**
     * Trigger import
     */
    triggerImport(): void {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xlsx, .xls, .csv';
        fileInput.onchange = (e: any) => this.onFileSelected(e);
        fileInput.click();
    }

    /**
     * Handle file selection
     */
    async onFileSelected(event: any): Promise<void> {
        const file = event.target.files[0];
        if (!file) return;

        this.toastService.info('Import en cours...');
        try {
            const data: any[] = await this.importExportService.readExcel(file);
            let successCount = 0;
            let errorCount = 0;

            for (const row of data) {
                try {
                    const dto: CreateProductCategoryDto = {
                        name: row.Name,
                        code: row.Code,
                        description: row.Description,
                        parentId: row.ParentId, // Caution: Parent must exist or be created before
                        order: row.Order ? parseInt(row.Order) : undefined,
                        isActive: true
                    };

                    const result = await this.createCategoryUseCase.execute(dto);
                    if (result.isSuccess) successCount++;
                    else errorCount++;
                } catch (e) {
                    errorCount++;
                }
            }

            this.toastService.success(`Import terminé : ${successCount} succès, ${errorCount} erreurs`);
            await this.loadCategories();
        } catch (error) {
            this.toastService.error('Erreur lors de la lecture');
        }
    }
}
