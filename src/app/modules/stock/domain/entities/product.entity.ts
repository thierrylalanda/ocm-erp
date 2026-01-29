import { ProductType } from './product-type.enum';

/**
 * Entité Product - Produit
 */
export interface Product {
    /** ID unique */
    id: string;

    /** Référence produit */
    reference: string;

    /** Nom du produit */
    name: string;

    /** Description */
    description?: string;

    /** Type de produit */
    type: ProductType;

    /** Suivre le stock (false pour services) */
    trackStock: boolean;

    /** Catégorie */
    categoryId: string;

    /** Prix unitaire */
    unitPrice: number;

    /** Coût unitaire */
    unitCost?: number;

    /** Unité de mesure */
    unit: string;

    /** Code-barres */
    barcode?: string;

    /** SKU (Stock Keeping Unit) */
    sku?: string;

    /** Stock minimum */
    minStock?: number;

    /** Stock maximum */
    maxStock?: number;

    /** Actif */
    isActive: boolean;

    /** Traçabilité par lot */
    trackByLot?: boolean;

    /** Traçabilité par numéro de série */
    trackBySerial?: boolean;

    /** Image */
    imageUrl?: string;

    /** Métadonnées */
    metadata?: Record<string, any>;

    /** Date de création */
    createdAt: Date;

    /** Date de modification */
    updatedAt: Date;

    /** Créé par */
    createdBy: string;

    /** Modifié par */
    updatedBy?: string;
}
