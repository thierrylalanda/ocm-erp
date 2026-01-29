import { LotStatus } from './lot-status.enum';

/**
 * Entité Lot - Représente un lot de produit avec traçabilité
 */
export interface Lot {
    /** Identifiant unique du lot */
    id: string;

    /** Numéro de lot (unique par produit) */
    lotNumber: string;

    /** ID du produit associé */
    productId: string;

    /** Date de fabrication */
    manufacturingDate?: Date;

    /** Date de péremption */
    expirationDate?: Date;

    /** Date d'alerte (avant péremption) */
    alertDate?: Date;

    /** Quantité initiale du lot */
    initialQuantity: number;

    /** Quantité actuelle disponible */
    currentQuantity: number;

    /** Statut du lot */
    status: LotStatus;

    /** Fournisseur d'origine */
    supplierId?: string;

    /** Numéro de réception associée */
    receptionId?: string;

    /** Notes ou remarques */
    notes?: string;

    /** Date de création */
    createdAt: Date;

    /** Date de dernière modification */
    updatedAt: Date;

    /** Créé par (userId) */
    createdBy?: string;
}

/**
 * Type pour la création d'un lot (sans ID et dates auto-générées)
 */
export type CreateLot = Omit<Lot, 'id' | 'createdAt' | 'updatedAt' | 'status'>;

/**
 * Type pour la mise à jour d'un lot
 */
export type UpdateLot = Partial<Omit<Lot, 'id' | 'createdAt' | 'productId' | 'lotNumber'>>;
