import { InjectionToken } from '@angular/core';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockSettings } from '../../../domain/entities/stock-settings.entity';

/**
 * Use case pour obtenir les paramètres
 */
export interface GetStockSettingsUseCase {
    execute(): Promise<Result<StockSettings, DomainError>>;
}

export const GET_STOCK_SETTINGS_USE_CASE = new InjectionToken<GetStockSettingsUseCase>('GetStockSettingsUseCase');
