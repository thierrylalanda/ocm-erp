/**
 * Entité Warehouse - Magasin/Entrepôt
 */
export interface Warehouse {
    /** ID unique */
    id: string;

    /** Nom du magasin */
    name: string;

    /** Code */
    code: string;

    /** Description */
    description?: string;

    /** Adresse */
    address?: string;

    /** Ville */
    city?: string;

    /** Pays */
    country?: string;

    /** Responsable */
    managerId?: string;

    /** Type (principal, secondaire, transit) */
    type?: string;

    /** Actif */
    isActive: boolean;

    /** Date de création */
    createdAt: Date;

    /** Date de modification */
    updatedAt: Date;
}
