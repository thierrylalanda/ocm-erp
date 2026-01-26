export interface ConfigurationParameter {
    id: number;
    mpCle: string;
    mpNom: string;
    mpDescription: string;
    mpTypeDonnee: 'STRING' | 'INTEGER' | 'BOOLEAN' | 'DECIMAL' | 'DATE';
    mpValeurDefaut: string;
    mpCategorie: string;
    mpNiveauxApplicables: string;
    mpObligatoire: boolean;
    mpValidationRegex?: string | null;
    mpValeursAutorisees?: string | null;
    mpValeurMin?: number | null;
    mpValeurMax?: number | null;
    mpUnite?: string | null;
    mpAideContextuelle?: string | null;
    mpOrdreAffichage: number;
    mpActif: boolean;
}
