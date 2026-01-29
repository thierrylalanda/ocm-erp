import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockSettings } from '../../../domain/entities/stock-settings.entity';

/**
 * Use case pour mettre à jour les paramètres
 */
export interface UpdateStockSettingsUseCase {
    execute(settings: StockSettings): Promise<Result<StockSettings, DomainError>>;
}

export const UPDATE_STOCK_SETTINGS_USE_CASE = new InjectionToken<UpdateStockSettingsUseCase>('UpdateStockSettingsUseCase');
