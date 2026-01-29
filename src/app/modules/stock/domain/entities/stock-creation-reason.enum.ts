/**
 * Motifs de création de stock
 */
export enum StockCreationReason {
    /**
     * Production interne
     */
    INTERNAL_PRODUCTION = 'INTERNAL_PRODUCTION',

    /**
     * Inventaire initial
     */
    INITIAL_INVENTORY = 'INITIAL_INVENTORY',

    /**
     * Correction d'erreur
     */
    CORRECTION = 'CORRECTION',

    /**
     * Produit retrouvé
     */
    FOUND = 'FOUND',

    /**
     * Retour client
     */
    RETURN = 'RETURN',

    /**
     * Autre motif
     */
    OTHER = 'OTHER'
}
