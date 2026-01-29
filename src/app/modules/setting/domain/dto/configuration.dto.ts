export interface ConfigurationParameterDto {
    id: number;
    cle: string;
    valeur: string;
    typeDonnee: 'STRING' | 'INTEGER' | 'BOOLEAN' | 'DECIMAL' | 'DATE';
    valeurDefaut: string;
    description: string;
    categorie: string;
    ordreAffichage: number;
    niveau: 'GLOBAL' | 'SOCIETE' | 'UTILISATEUR';
    entiteId: number | null;
    heriteParent: boolean;
    surchargeAutorisee: boolean;
    obligatoire: boolean;
    modifiable: boolean;
    visibleInterface: boolean;
    validationRegex: string | null;
    valeursAutorisees: string | null;
    valeurMin: number | null;
    valeurMax: number | null;
    unite: string | null;
    aideContextuelle: string | null;
    impactSysteme: 'AUCUN' | 'MINEUR' | 'MAJEUR' | 'CRITIQUE';
    tags: string | null;
    societeId: number | null;
    societeNom: string | null;
    utilisateurCreationId: number | null;
    utilisateurCreationNom: string | null;
    utilisateurModificationId: number | null;
    utilisateurModificationNom: string | null;
    dateCreation: string;
    dateModification: string;
}

export interface PaginatedResponse<T> {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}
