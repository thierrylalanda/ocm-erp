
/**
 * Méthodes de valorisation du stock
 */
export enum StockValuationMethod {
    FIFO = 'FIFO', // First In, First Out
    LIFO = 'LIFO', // Last In, First Out
    CUMP = 'CUMP'  // Coût Unitaire Moyen Pondéré (Weighted Average Cost)
}

/**
 * Entité StockSettings - Paramètres du module stock
 */
export interface StockSettings {
    /** Seuil d'alerte stock faible par défaut */
    defaultLowStockThreshold: number;

    /** Activer les notifications par email */
    enableEmailNotifications: boolean;

    /** Activer la mise à jour automatique du stock (ex: via ventes) */
    autoUpdateStock: boolean;

    /** Devise par défaut */
    defaultCurrency: string;

    /** Unité par défaut pour les nouveaux produits */
    defaultUnit: string;

    /** Méthode de valorisation du stock */
    valuationMethod?: StockValuationMethod;

    /** Autoriser le stock négatif */
    allowNegativeStock?: boolean;

    /** Forcer le suivi par lot (Batch Tracking) */
    enforceBatchTracking?: boolean;
}
