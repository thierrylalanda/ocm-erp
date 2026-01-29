import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';
import {
    FormBuilderComponent,
    FormConfig,
    ToastService
} from '../../../../_shared/presentation/components';
import { GET_STOCK_SETTINGS_USE_CASE, GetStockSettingsUseCase } from '../../../application/use-cases/settings/get-stock-settings.use-case';
import { UPDATE_STOCK_SETTINGS_USE_CASE, UpdateStockSettingsUseCase } from '../../../application/use-cases/settings/update-stock-settings.use-case';
import { StockSettings, StockValuationMethod } from '../../../domain/entities/stock-settings.entity';

@Component({
    selector: 'app-stock-settings',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        FormBuilderComponent
    ],
    templateUrl: './stock-settings.component.html',
    styleUrls: ['./stock-settings.component.scss']
})
export class StockSettingsComponent implements OnInit {
    settings: StockSettings | null = null;
    loading = false;

    constructor(
        @Inject(GET_STOCK_SETTINGS_USE_CASE) private getSettingsUseCase: GetStockSettingsUseCase,
        @Inject(UPDATE_STOCK_SETTINGS_USE_CASE) private updateSettingsUseCase: UpdateStockSettingsUseCase,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.loadSettings();
    }

    async loadSettings(): Promise<void> {
        this.loading = true;
        const result = await this.getSettingsUseCase.execute();

        if (result.isSuccess) {
            this.settings = result.value;
        } else {
            this.toastService.error('Erreur lors du chargement des paramètres');
        }
        this.loading = false;
    }

    async onFormSubmit(formData: any): Promise<void> {
        this.loading = true;
        // Map form data to entity if necessary or cast
        const updatedSettings: StockSettings = {
            ...this.settings!,
            ...formData
        };

        const result = await this.updateSettingsUseCase.execute(updatedSettings);

        if (result.isSuccess) {
            this.settings = result.value;
            this.toastService.success('Paramètres enregistrés avec succès');
        } else {
            this.toastService.error('Erreur lors de l\'enregistrement');
        }
        this.loading = false;
    }

    onFormCancel(): void {
        // Reset form or navigate away
        this.loadSettings();
    }

    get formConfig(): FormConfig {
        return {
            fields: [
                {
                    name: 'defaultCurrency',
                    label: 'stock.settings.currency',
                    type: 'text',
                    width: 6,
                    required: true,
                    defaultValue: this.settings?.defaultCurrency
                },
                {
                    name: 'defaultUnit',
                    label: 'stock.settings.unit',
                    type: 'text',
                    width: 6,
                    required: true,
                    defaultValue: this.settings?.defaultUnit
                },
                {
                    name: 'defaultLowStockThreshold',
                    label: 'stock.settings.lowStockThreshold',
                    type: 'number',
                    width: 12,
                    required: true,
                    defaultValue: this.settings?.defaultLowStockThreshold,
                    min: 0
                },
                {
                    name: 'valuationMethod',
                    label: 'stock.settings.valuationMethod',
                    type: 'select',
                    width: 12,
                    required: true,
                    options: Object.values(StockValuationMethod).map(v => ({ label: v, value: v })),
                    defaultValue: this.settings?.valuationMethod || StockValuationMethod.FIFO
                },
                {
                    name: 'allowNegativeStock',
                    label: 'stock.settings.allowNegativeStock',
                    type: 'checkbox',
                    width: 12,
                    defaultValue: this.settings?.allowNegativeStock ?? false // Default false for safety
                },
                {
                    name: 'enforceBatchTracking',
                    label: 'stock.settings.enforceBatchTracking',
                    type: 'checkbox',
                    width: 12,
                    defaultValue: this.settings?.enforceBatchTracking ?? false
                },
                {
                    name: 'enableEmailNotifications',
                    label: 'stock.settings.notifications',
                    type: 'checkbox',
                    width: 12,
                    defaultValue: this.settings ? this.settings.enableEmailNotifications : true
                },
                {
                    name: 'autoUpdateStock',
                    label: 'stock.settings.autoUpdate',
                    type: 'checkbox',
                    width: 12,
                    defaultValue: this.settings ? this.settings.autoUpdateStock : true
                }
            ],
            submitButton: { label: 'common.save' },
            cancelButton: { label: 'common.cancel' }
        };
    }
}
