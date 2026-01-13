export interface CompanyDto {
  nom: string;
  activite: string;
  adresse: string;
  boitePostal: string;
  pays: string;
  region: string;
  telephone: string;
  nc: string;
  rccm: string;
  regimeFiscal: string;
  devise: string;
  email: string;
  siteWeb: string;
  logo: string;
  favicon: string;
  actif: boolean;
  methodeValorisation: 'FIFO' | 'LIFO' | 'MOYENNE';
  devisePrincipale: string;
  exerciceEnCours: number;
  capital: number;
  formeJuridique: string;
}

export interface CompanyResponseDto extends CompanyDto {
  id: number;
  dateCreation: string;
}

// Alias pour la requête de mise à jour (même structure que CompanyDto)
export type UpdateCompanyRequestDto = CompanyDto;
