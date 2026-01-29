import { Injectable } from '@angular/core';
import { UpdateStockSettingsUseCase } from './update-stock-settings.use-case';
import { Result } from '../../../../_shared/domain/types/result.type';
import { DomainError } from '../../../../_shared/domain/errors/domain.error';
import { StockSettings } from '../../../domain/entities/stock-settings.entity';

/**
 * Implémentation MOCK du use case UpdateStockSettings
 */
@Injectable()
export class UpdateStockSettingsUseCaseImpl implements UpdateStockSettingsUseCase {

    async execute(settings: StockSettings): Promise<Result<StockSettings, DomainError>> {
        // Mock update - we just return what was sent as if it was saved
        console.log('Settings saved:', settings);
        return Result.ok(settings);
    }
}
