// DTO pour la création d'un département
export interface CreateDepartementDto {
  nom: string;
  description?: string;
  societeId: number;
  actif: boolean;
}

// DTO pour la mise à jour d'un département
export interface UpdateDepartementDto extends CreateDepartementDto {
  id: number;
}

// DTO pour la réponse de l'API
export interface DepartementResponseDto extends CreateDepartementDto {
  id: number;
  societeNom: string;
  dateCreation: string;
  dateModification: string;
}

// DTO pour la réponse paginée
export interface PagedDepartementResponse {
  content: DepartementResponseDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// Interface pour les statistiques des départements
export interface DepartementStatistics {
  total: number;
  actifs: number;
  inactifs: number;
}

// Fonction utilitaire pour formater une date
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Fonction utilitaire pour tronquer un texte
export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Fonction utilitaire pour obtenir le statut sous forme de badge
export function getStatusBadge(actif: boolean): { label: string, class: string } {
  return actif 
    ? { label: 'Actif', class: 'badge bg-success-light text-success' }
    : { label: 'Inactif', class: 'badge bg-danger-light text-danger' };
}
