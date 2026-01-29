/**
 * Type de mouvement de stock
 */
export enum StockMovementType {
    /** Entrée (réception, achat) */
    ENTRY = 'ENTRY',

    /** Sortie (vente, consommation) */
    EXIT = 'EXIT',

    /** Transfert entre magasins */
    TRANSFER = 'TRANSFER',

    /** Ajustement (inventaire) - DEPRECATED */
    ADJUSTMENT = 'ADJUSTMENT',

    /** Création de stock (ajustement positif) */
    STOCK_CREATION = 'STOCK_CREATION',

    /** Consommation de stock (ajustement négatif) */
    STOCK_CONSUMPTION = 'STOCK_CONSUMPTION',

    /** Retour */
    RETURN = 'RETURN'
}

/**
 * Entité StockMovement - Mouvement de stock
 */
export interface StockMovement {
    /** ID unique */
    id: string;

    /** Type de mouvement */
    type: StockMovementType;

    /** Produit concerné */
    productId: string;

    /** Quantité */
    quantity: number;

    /** Magasin source */
    warehouseId: string;

    /** Magasin destination (pour transfert) */
    destinationWarehouseId?: string;

    /** Référence du document (bon de commande, facture, etc.) */
    documentReference?: string;

    /** Numéro de lot */
    lotNumber?: string;

    /** Numéro de série */
    serialNumber?: string;

    /** Coût unitaire */
    unitCost?: number;

    /** ID du partenaire (Fournisseur/Client) */
    partnerId?: string;

    /** Nom du partenaire */
    partnerName?: string;

    /** Référence du document origine (ex: Facture, Bon de commande) */
    originDocument?: string;

    /** Raison du mouvement */
    reason?: string;

    /** Notes */
    notes?: string;

    /** Date du mouvement */
    movementDate: Date;

    /** Date de création */
    createdAt: Date;

    /** Créé par */
    createdBy: string;

    /** Validé */
    isValidated: boolean;

    /** Date de validation */
    validatedAt?: Date;

    /** Validé par */
    validatedBy?: string;
}
