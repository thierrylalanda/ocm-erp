/**
 * Structure paginée générique retournée par l'API
 * Utilisée pour toutes les requêtes de consultation
 */
export interface PagedResponse<T> {
  /** Contenu de la page */
  content: T[];
  
  /** Numéro de la page actuelle (0-based) */
  page: number;
  
  /** Nombre d'éléments par page */
  size: number;
  
  /** Nombre total d'éléments */
  totalElements: number;
  
  /** Nombre total de pages */
  totalPages: number;
}

/**
 * Options pour les requêtes paginées
 */
export interface PaginationOptions {
  /** Numéro de la page (0-based) */
  page?: number;
  
  /** Taille de la page */
  size?: number;
  
  /** Champ de tri */
  sortBy?: string;
  
  /** Ordre de tri ('asc' ou 'desc') */
  sortOrder?: 'asc' | 'desc';
  
  /** Terme de recherche */
  search?: string;
}

/**
 * Résultat d'une opération paginée
 */
export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
