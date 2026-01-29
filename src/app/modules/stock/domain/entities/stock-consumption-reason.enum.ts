/**
 * Motifs de consommation de stock
 */
export enum StockConsumptionReason {
    /**
     * Rebut / Mise au rebut
     */
    SCRAP = 'SCRAP',

    /**
     * Usage interne
     */
    INTERNAL_USE = 'INTERNAL_USE',

    /**
     * Perte
     */
    LOSS = 'LOSS',

    /**
     * Casse / Détérioration
     */
    DAMAGE = 'DAMAGE',

    /**
     * Échantillon
     */
    SAMPLE = 'SAMPLE',

    /**
     * Périmé
     */
    EXPIRED = 'EXPIRED',

    /**
     * Vol
     */
    THEFT = 'THEFT',

    /**
     * Correction d'erreur
     */
    CORRECTION = 'CORRECTION',

    /**
     * Autre motif
     */
    OTHER = 'OTHER'
}
