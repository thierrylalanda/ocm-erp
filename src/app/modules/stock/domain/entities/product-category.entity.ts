/**
 * Entité ProductCategory - Catégorie de produit
 */
export interface ProductCategory {
    /** ID unique */
    id: string;

    /** Nom de la catégorie */
    name: string;

    /** Description */
    description?: string;

    /** Catégorie parente (pour hiérarchie) */
    parentId?: string;

    /** Code */
    code?: string;

    /** Ordre d'affichage */
    order?: number;

    /** Actif */
    isActive: boolean;

    /** Date de création */
    createdAt: Date;

    /** Date de modification */
    updatedAt: Date;
}
