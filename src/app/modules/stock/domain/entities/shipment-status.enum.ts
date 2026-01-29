/**
 * Statut d'expédition
 */
export enum ShipmentStatus {
    /** En attente */
    PENDING = 'PENDING',

    /** En préparation */
    PREPARING = 'PREPARING',

    /** Prêt */
    READY = 'READY',

    /** Expédié */
    SHIPPED = 'SHIPPED',

    /** Livré */
    DELIVERED = 'DELIVERED',

    /** Annulé */
    CANCELLED = 'CANCELLED'
}
