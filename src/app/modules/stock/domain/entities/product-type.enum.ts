/**
 * Énumération des types de produits
 */
export enum ProductType {
    /**
     * Produit physique avec suivi de stock
     */
    STOCKABLE = 'STOCKABLE',

    /**
     * Prestation de service sans stock physique
     */
    SERVICE = 'SERVICE',

    /**
     * Article consommable à usage unique
     */
    CONSUMABLE = 'CONSUMABLE'
}
