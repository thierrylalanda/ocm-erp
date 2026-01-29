/**
 * Entité Inventory - Inventaire
 */
export interface Inventory {
    /** ID unique */
    id: string;

    /** Produit */
    productId: string;

    /** Magasin */
    warehouseId: string;

    /** Quantité en stock */
    quantity: number;

    /** Quantité réservée */
    reservedQuantity: number;

    /** Quantité disponible */
    availableQuantity: number;

    /** Valeur du stock (quantité × coût moyen) */
    stockValue: number;

    /** Coût moyen pondéré */
    averageCost: number;

    /** Dernier mouvement */
    lastMovementDate?: Date;

    /** Nom du produit */
    productName?: string;

    /** Référence du produit */
    productReference?: string;

    /** Nom du magasin */
    warehouseName?: string;

    /** Date de dernière mise à jour */
    updatedAt: Date;
}

/**
 * Statistiques de stock
 */
export interface StockStats {
    /** Valeur totale du stock */
    totalValue: number;

    /** Nombre total de produits */
    totalProducts: number;

    /** Nombre de produits en stock faible */
    lowStockCount: number;

    /** Nombre de produits en rupture */
    outOfStockCount: number;

    /** Nombre de mouvements aujourd'hui */
    todayMovements: number;

    /** Valeur des entrées du mois */
    monthlyEntries: number;

    /** Valeur des sorties du mois */
    monthlyExits: number;
}
