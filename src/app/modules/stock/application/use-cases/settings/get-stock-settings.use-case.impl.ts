import { Injectable } from '@angular/core';
import { GetStockSettingsUseCase } from './get-stock-settings.use-case';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockSettings } from '../../../domain/entities/stock-settings.entity';

/**
 * Implémentation MOCK du use case GetStockSettings
 * En l'absence de repository dédié pour l'instant
 */
@Injectable()
export class GetStockSettingsUseCaseImpl implements GetStockSettingsUseCase {

    async execute(): Promise<Result<StockSettings, DomainError>> {
        // Mock data
        const settings: StockSettings = {
            defaultLowStockThreshold: 10,
            enableEmailNotifications: true,
            autoUpdateStock: true,
            defaultCurrency: 'EUR',
            defaultUnit: 'pcs'
        };

        return Result.ok(settings);
    }
}
