/**
 * Statut d'un lot
 */
export enum LotStatus {
    /** Lot actif et utilisable */
    ACTIVE = 'ACTIVE',
    /** Lot en alerte (proche de la péremption) */
    ALERT = 'ALERT',
    /** Lot périmé */
    EXPIRED = 'EXPIRED',
    /** Lot bloqué (qualité, rappel, etc.) */
    BLOCKED = 'BLOCKED'
}
