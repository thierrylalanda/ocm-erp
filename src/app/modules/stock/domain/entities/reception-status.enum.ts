/**
 * Statut de réception logicielle
 */
export enum ReceptionStatus {
    /** En attente */
    PENDING = 'PENDING',

    /** Partielle */
    PARTIAL = 'PARTIAL',

    /** Complétée */
    COMPLETED = 'COMPLETED',

    /** Annulée */
    CANCELLED = 'CANCELLED'
}
