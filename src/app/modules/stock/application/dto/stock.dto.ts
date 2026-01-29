import { StockMovementType } from '../../domain/entities/stock-movement.entity';
import { ProductType } from '../../domain/entities/product-type.enum';
import { StockCreationReason } from '../../domain/entities/stock-creation-reason.enum';
import { StockConsumptionReason } from '../../domain/entities/stock-consumption-reason.enum';
import { ReceptionStatus } from '../../domain/entities/reception-status.enum';
import { ShipmentStatus } from '../../domain/entities/shipment-status.enum';

/**
 * DTO pour la création d'un produit
 */
export interface CreateProductDto {
    reference: string;
    name: string;
    description?: string;
    type: ProductType;              // Type de produit (requis)
    trackStock?: boolean;           // Suivre le stock (optionnel, auto-calculé)
    categoryId: string;
    unitPrice: number;
    unitCost?: number;
    unit: string;
    barcode?: string;
    sku?: string;
    minStock?: number;
    maxStock?: number;
    trackByLot?: boolean;
    trackBySerial?: boolean;
    imageUrl?: string;
}

/**
 * DTO pour la mise à jour d'un produit
 */
export interface UpdateProductDto {
    reference?: string;
    name?: string;
    description?: string;
    type?: ProductType;             // Type de produit
    trackStock?: boolean;           // Suivre le stock
    categoryId?: string;
    unitPrice?: number;
    unitCost?: number;
    unit?: string;
    barcode?: string;
    sku?: string;
    minStock?: number;
    maxStock?: number;
    isActive?: boolean;
    trackByLot?: boolean;
    trackBySerial?: boolean;
    imageUrl?: string;
}

/**
 * DTO pour un produit (réponse)
 */
export interface ProductDto {
    id: string;
    reference: string;
    name: string;
    description?: string;
    type: ProductType;              // Type de produit
    trackStock: boolean;            // Suivre le stock
    categoryId: string;
    categoryName?: string;
    unitPrice: number;
    unitCost?: number;
    unit: string;
    barcode?: string;
    sku?: string;
    minStock?: number;
    maxStock?: number;
    currentStock?: number;
    isActive: boolean;
    trackByLot?: boolean;
    trackBySerial?: boolean;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * DTO pour une catégorie de produit
 */
export interface ProductCategoryDto {
    id: string;
    name: string;
    description?: string;
    parentId?: string;
    parentName?: string;
    code?: string;
    order?: number;
    isActive: boolean;
    children?: ProductCategoryDto[];
    createdAt: Date;
    updatedAt: Date;
}

/**
 * DTO pour créer une catégorie
 */
export interface CreateProductCategoryDto {
    name: string;
    description?: string;
    parentId?: string;
    code?: string;
    order?: number;
    isActive?: boolean;
}

/**
 * DTO pour mettre à jour une catégorie
 */
export interface UpdateProductCategoryDto {
    name?: string;
    description?: string;
    parentId?: string;
    code?: string;
    order?: number;
    isActive?: boolean;
}

/**
 * DTO pour un mouvement de stock
 */
export interface StockMovementDto {
    id: string;
    type: StockMovementType;
    productId: string;
    productName?: string;
    quantity: number;
    warehouseId: string;
    warehouseName?: string;
    destinationWarehouseId?: string;
    destinationWarehouseName?: string;
    documentReference?: string;
    lotId?: string;              // ID du lot associé
    lotNumber?: string;          // Numéro de lot (pour affichage)
    serialNumber?: string;
    unitCost?: number;
    reason?: string;
    creationReason?: StockCreationReason;      // Motif de création
    consumptionReason?: StockConsumptionReason; // Motif de consommation
    notes?: string;
    partnerId?: string;
    partnerName?: string;
    originDocument?: string;
    movementDate: Date;
    createdAt: Date;
    createdBy: string;
    isValidated: boolean;
    validatedAt?: Date;
    validatedBy?: string;
}

/**
 * DTO pour créer un mouvement de stock
 */
export interface CreateStockMovementDto {
    type: StockMovementType;
    productId: string;
    quantity: number;
    warehouseId: string;
    destinationWarehouseId?: string;
    documentReference?: string;
    lotId?: string;              // ID du lot à associer
    lotNumber?: string;          // Numéro de lot (création auto si lotId non fourni)
    serialNumber?: string;
    unitCost?: number;
    reason?: string;
    creationReason?: StockCreationReason;      // Motif de création
    consumptionReason?: StockConsumptionReason; // Motif de consommation
    notes?: string;
    partnerId?: string;
    partnerName?: string;
    originDocument?: string;
    movementDate?: Date;
}

/**
 * DTO pour l'inventaire
 */
export interface InventoryDto {
    id: string;
    productId: string;
    productName: string;
    productReference: string;
    warehouseId: string;
    warehouseName: string;
    quantity: number;
    reservedQuantity: number;
    availableQuantity: number;
    stockValue: number;
    averageCost: number;
    lotId?: string;              // ID du lot (si produit tracké par lot)
    lotNumber?: string;          // Numéro de lot
    expirationDate?: Date;       // Date de péremption du lot
    lastMovementDate?: Date;
    updatedAt: Date;
}

/**
 * DTO pour les statistiques de stock
 */
export interface StockStatsDto {
    totalValue: number;
    totalProducts: number;
    lowStockCount: number;
    outOfStockCount: number;
    todayMovements: number;
    monthlyEntries: number;
    monthlyExits: number;
}

/**
 * DTO pour un magasin
 */
export interface WarehouseDto {
    id: string;
    name: string;
    code: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
    type?: string;
    isActive: boolean;
}

/**
 * DTO pour une réception en attentes
 */
export interface PendingReceptionDto {
    id: string;
    reference: string;
    supplierName: string;
    expectedDate: Date;
    itemsCount: number;
    totalAmount?: number;
    status: ReceptionStatus;
    createdAt: Date;
}

/**
 * DTO pour une expédition en attente
 */
export interface PendingShipmentDto {
    id: string;
    reference: string;
    customerName: string;
    expectedDate: Date;
    itemsCount: number;
    totalAmount?: number;
    status: ShipmentStatus;
    createdAt: Date;
}
