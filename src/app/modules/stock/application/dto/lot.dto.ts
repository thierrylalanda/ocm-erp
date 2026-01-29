import { LotStatus } from '../../domain/entities/lot-status.enum';

/**
 * DTO pour un lot
 */
export interface LotDto {
    id: string;
    lotNumber: string;
    productId: string;
    productName?: string;
    productReference?: string;
    manufacturingDate?: Date;
    expirationDate?: Date;
    alertDate?: Date;
    initialQuantity: number;
    currentQuantity: number;
    status: LotStatus;
    supplierId?: string;
    supplierName?: string;
    receptionId?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
}

/**
 * DTO pour créer un lot
 */
export interface CreateLotDto {
    lotNumber: string;
    productId: string;
    manufacturingDate?: Date;
    expirationDate?: Date;
    alertDate?: Date;
    initialQuantity: number;
    currentQuantity: number;
    supplierId?: string;
    receptionId?: string;
    notes?: string;
    createdBy?: string;
}

/**
 * DTO pour mettre à jour un lot
 */
export interface UpdateLotDto {
    expirationDate?: Date;
    alertDate?: Date;
    currentQuantity?: number;
    status?: LotStatus;
    notes?: string;
}
