/**
 * Types de notifications possibles
 */
export type NotificationType = 
  | 'NOUVEAU_TICKET' 
  | 'TICKET_MODIFIE' 
  | 'TICKET_RESOLU' 
  | 'NOUVELLE_PLAINTE' 
  | 'PLAINTE_MODIFIEE' 
  | 'PLAINTE_RESOLUE' 
  | 'NOUVEAU_MESSAGE' 
  | 'RAPPEL' 
  | 'ALERTE' 
  | 'AUTRE';

/**
 * Priorités de notification
 */
export type NotificationPriority = 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

/**
 * Canaux de notification
 */
export type NotificationChannel = 'EMAIL' | 'SMS' | 'NOTIFICATION_INTERNE' | 'WHATSAPP';

/**
 * Statuts de notification
 */
export type NotificationStatus = 'EN_ATTENTE' | 'ENVOYE' | 'DELIVRE' | 'LU' | 'ECHEC';

/**
 * DTO pour une notification individuelle
 */
export interface NotificationDto {
  id: number;
  nsType: NotificationType;
  nsTitre: string;
  nsMessage: string;
  nsPriorite: NotificationPriority;
  nsCanal: NotificationChannel;
  nsStatut: NotificationStatus;
  nsDateCreation: string;
  nsDateEnvoi: string | null;
  nsTentatives: number;
  plainteId: number | null;
  plainteNumero: string | null;
  destinataireId: number;
  destinataireNom: string;
  destinataireEmail: string;
}

/**
 * DTO pour la réponse paginée des notifications
 */
export interface NotificationsPagedResponseDto {
  content: NotificationDto[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * DTO pour les filtres de recherche de notifications
 */
export interface NotificationFiltersDto {
  destinataireId?: number;
  statut?: NotificationStatus;
  canal?: NotificationChannel;
  type?: NotificationType;
  priorite?: NotificationPriority;
  dateDebut?: string;
  dateFin?: string;
  page?: number;
  size?: number;
  sort?: string;
}

/**
 * DTO pour marquer une notification comme lue
 */
export interface MarkAsReadResponseDto {
  id: number;
  nsType: NotificationType;
  nsTitre: string;
  nsMessage: string;
  nsPriorite: NotificationPriority;
  nsCanal: NotificationChannel;
  nsStatut: NotificationStatus;
  nsDateCreation: string;
  nsDateEnvoi: string | null;
  nsTentatives: number;
  plainteId: number | null;
  plainteNumero: string | null;
  destinataireId: number;
  destinataireNom: string;
  destinataireEmail: string;
}

/**
 * DTO pour les statistiques de notifications
 */
export interface NotificationStatsDto {
  total: number;
  nonLues: number;
  lues: number;
  enAttente: number;
  envoyees: number;
  delivrees: number;
  echecs: number;
  parType: Record<NotificationType, number>;
  parPriorite: Record<NotificationPriority, number>;
  parCanal: Record<NotificationChannel, number>;
}

/**
 * DTO pour les préférences de notification
 */
export interface NotificationPreferencesDto {
  emailEnabled: boolean;
  smsEnabled: boolean;
  internalEnabled: boolean;
  whatsappEnabled: boolean;
  typesActifs: NotificationType[];
  heuresSilencieuses: {
    debut: string; // Format HH:mm
    fin: string;   // Format HH:mm
  };
  joursSilencieux: number[]; // 0=Dimanche, 1=Lundi, etc.
}
