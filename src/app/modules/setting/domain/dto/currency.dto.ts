export interface CurrencyDto {
    id: number;
    title: string;
    code: string;
    symbolLeft: string;
    symbolRight: string;
    decimalPlace: string;
    value: number;
    isDefault: boolean;
    isActive: boolean;
    createdAt: string;
    lastUpdate: string;
}

export interface SocieteCurrencyDto {
    id: number;
    societeId: number;
    societeNom: string;
    currencyId: number;
    currencyCode: string;
    currencyTitle: string;
    currencySymbolLeft: string;
    currencySymbolRight: string;
    dateCreation: string;
    actif: boolean;
    isDefault: boolean;
    value: number;
    exchangeRate: number;
}

export interface SiteCurrencyDto {
    id: number;
    siteId: number;
    siteNom: string;
    currencyId: number;
    currencyCode: string;
    currencyTitle: string;
    currencySymbolLeft: string;
    currencySymbolRight: string;
    dateCreation: string;
    actif: boolean;
    isDefault: boolean;
    value: number;
    exchangeRate: number;
}

export interface PaginatedResponse<T> {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}
