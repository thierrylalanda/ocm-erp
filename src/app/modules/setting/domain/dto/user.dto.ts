export interface UserDto {
  id: number;
  nomPrenom: string;
  telephone: string;
  adresse: string;
  userName: string;
  email: string;
  pwdText: string;
  statut: string;
  societeId: number;
  societeNom: string;
  siteId: number;
  siteNom: string;
  departementId: number;
  departementNom: string;
  derniereConnexion: string;
  tentativesConnexion: number;
  photo: string;
  signature: string;
  langue: string;
  dateCreation: string;
}

export interface UpdateUserRequestDto {
  nomPrenom: string;
  telephone: string;
  adresse: string;
  email: string;
  pwdText: string;
  societeId: number;
  siteId: number;
  departementId: number;
  statut: 'ACTIF' | 'INACTIF';
  photo: string;
  signature: string;
  langue: string;
}

export interface UserResponseDto extends UserDto {}
