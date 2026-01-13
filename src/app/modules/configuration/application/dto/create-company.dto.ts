export interface CreateCompanyDto {
    id?: number;
  nom: string;
  activite: string;
  adresse?: string;
  boitePostal?: string;
  pays?: string;
  region?: string;
  telephone?: string;
  nc: string;
  rccm: string;
  regimeFiscal: string;
  devise: string;
  email: string;
  siteWeb?: string;
  logo?: string;
  favicon?: string;
  actif: boolean;
}

export interface CreateCompanyResponseDto {
  id: number;
  nom: string;
  activite: string;
  adresse?: string;
  boitePostal?: string;
  pays?: string;
  region?: string;
  telephone?: string;
  nc: string;
  rccm: string;
  regimeFiscal: string;
  devise: string;
  email: string;
  siteWeb?: string;
  logo?: string;
  favicon?: string;
  actif: boolean;
  createdAt: string;
  updatedAt: string;
}

// Mapper pour convertir du DTO API vers TenantCreateCommand
export function mapCreateCompanyDtoToTenantCreateCommand(dto: CreateCompanyDto) {
  return {
    nom: dto.nom,
    id: dto.id,
    code: generateCompanyCode(dto.nom),
    description: dto.activite,
    email: dto.email,
    phoneNumber: dto.telephone,
    address: dto.adresse,
    city: dto.region,
    country: dto.pays,
    currency: dto.devise,
    activity: dto.activite,
    postalBox: dto.boitePostal,
    region: dto.region,
    taxNumber: dto.nc,
    tradeRegister: dto.rccm,
    fiscalRegime: dto.regimeFiscal,
    website: dto.siteWeb,
    logoUrl: dto.logo,
    faviconUrl: dto.favicon,
    isActive: dto.actif,
    maxUsers: 10, // Valeur par défaut
    timezone: 'UTC', // Valeur par défaut
    language: 'fr', // Valeur par défaut
  };
}

// Mapper pour convertir de Tenant vers CreateCompanyResponseDto
export function mapTenantToCreateCompanyResponseDto(tenant: any): CreateCompanyResponseDto {
  return {
    id: tenant.id.value,
    nom: tenant.name,
    activite: tenant.activity || tenant.description || '',
    adresse: tenant.address,
    boitePostal: tenant.postalBox,
    pays: tenant.country,
    region: tenant.region || tenant.city,
    telephone: tenant.phoneNumber,
    nc: tenant.taxNumber || '',
    rccm: tenant.tradeRegister || '',
    regimeFiscal: tenant.fiscalRegime || '',
    devise: tenant.currency,
    email: tenant.email,
    siteWeb: tenant.website,
    logo: tenant.logoUrl,
    favicon: tenant.faviconUrl,
    actif: tenant.isActive,
    createdAt: tenant.createdAt.toISOString(),
    updatedAt: tenant.updatedAt.toISOString(),
  };
}

// Helper pour générer un code de société
function generateCompanyCode(companyName: string): string {
  // Prendre les 3 premières lettres du nom, en majuscules, sans accents
  const cleanName = companyName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');
  
  const prefix = cleanName.substring(0, Math.min(3, cleanName.length));
  const timestamp = Date.now().toString().slice(-4);
  
  return `${prefix}${timestamp}`;
}
