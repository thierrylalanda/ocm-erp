import { User, UserId, UserCreateCommand, UserUpdateCommand, UserResponse, UserEntity } from '../../domain/entities/user.entity';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../../application/dto/create-user.dto';

/**
 * Mapper pour convertir entre les entités, DTOs et réponses API
 */
export class UserMapper {
  /**
   * Convertit UserResponseDto en UserEntity
   */
  static toEntity(dto: UserResponseDto): UserEntity {
    const userId: UserId = { value: dto.id };

    return new UserEntity(
      userId,
      dto.nomPrenom,
      dto.telephone,
      dto.adresse,
      dto.userName,
      dto.email,
      dto.pwdText,
      dto.statut as any,
      dto.societeId,
      dto.societeNom,
      dto.siteId,
      dto.siteNom,
      dto.departementId,
      dto.departementNom,
      dto.derniereConnexion ? new Date(dto.derniereConnexion) : null,
      dto.tentativesConnexion,
      dto.photo,
      dto.signature,
      dto.langue,
      new Date(dto.dateCreation),
      dto.permissions,
      dto.roles
    );
  }

  /**
   * Convertit UserResponse en UserEntity
   */
  static fromResponseToEntity(response: UserResponse): UserEntity {
    const userId: UserId = { value: response.id };

    return new UserEntity(
      userId,
      response.nomPrenom,
      response.telephone,
      response.adresse,
      response.userName,
      response.email,
      response.pwdText,
      response.statut as any,
      response.societeId,
      response.societeNom,
      response.siteId,
      response.siteNom,
      response.departementId,
      response.departementNom,
      response.derniereConnexion ? new Date(response.derniereConnexion) : null,
      response.tentativesConnexion,
      response.photo,
      response.signature,
      response.langue,
      new Date(response.dateCreation),
      response.permissions,
      response.roles,
    );
  }

  /**
   * Convertit UserEntity en UserResponseDto
   */
  static toResponseDto(entity: UserEntity): UserResponseDto {
    return {
      id: entity.getIdValue(),
      nomPrenom: entity.nomPrenom,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      email: entity.email,
      pwdText: entity.pwdText,
      statut: entity.statut,
      societeId: entity.societeId,
      societeNom: entity.societeNom,
      siteId: entity.siteId,
      siteNom: entity.siteNom,
      departementId: entity.departementId,
      departementNom: entity.departementNom,
      derniereConnexion: entity.derniereConnexion ? entity.derniereConnexion.toISOString() : null,
      tentativesConnexion: entity.tentativesConnexion,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue,
      dateCreation: entity.dateCreation.toISOString(),
      permissions: entity.permissions,
      roles:entity.roles
    };
  }

  /**
   * Convertit CreateUserDto en UserCreateCommand
   */
  static toCreateCommand(dto: CreateUserDto): UserCreateCommand {
    return {
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      password: dto.password,
      email: dto.email,
      pwdText: dto.pwdText,
      societeId: dto.societeId,
      siteId: dto.siteId,
      departementId: dto.departementId,
      statut: dto.statut,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue
    };
  }

  /**
   * Convertit UpdateUserDto en UserUpdateCommand
   */
  static toUpdateCommand(dto: UpdateUserDto): UserUpdateCommand {
    return {
      nomPrenom: dto.nomPrenom,
      telephone: dto.telephone,
      adresse: dto.adresse,
      userName: dto.userName,
      email: dto.email,
      statut: dto.statut,
      siteId: dto.siteId,
      departementId: dto.departementId,
      photo: dto.photo,
      signature: dto.signature,
      langue: dto.langue
    };
  }

  /**
   * Convertit UserEntity en objet pour l'API (création)
   */
  static toApiCreateObject(entity: UserEntity): any {
    return {
      nomPrenom: entity.nomPrenom,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      password: entity.pwdText, // Note: l'API attend "password" mais nous utilisons pwdText
      email: entity.email,
      pwdText: entity.pwdText,
      societeId: entity.societeId,
      siteId: entity.siteId,
      departementId: entity.departementId,
      statut: entity.statut,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue
    };
  }

  /**
   * Convertit UserEntity en objet pour l'API (mise à jour)
   */
  static toApiUpdateObject(entity: UserEntity): any {
    return {
      nomPrenom: entity.nomPrenom,
      id:entity.id,
      societeId:entity.societeId,
      telephone: entity.telephone,
      adresse: entity.adresse,
      userName: entity.userName,
      email: entity.email,
      statut: entity.statut,
      siteId: entity.siteId,
      departementId: entity.departementId,
      photo: entity.photo,
      signature: entity.signature,
      langue: entity.langue
    };
  }

  /**
   * Convertit la réponse API en UserResponse
   */
  static fromApiResponse(apiResponse: any): UserResponse {
    return {
      id: apiResponse.id,
      nomPrenom: apiResponse.nomPrenom,
      telephone: apiResponse.telephone,
      adresse: apiResponse.adresse,
      userName: apiResponse.userName,
      email: apiResponse.email,
      pwdText: apiResponse.pwdText,
      statut: apiResponse.statut,
      societeId: apiResponse.societeId,
      societeNom: apiResponse.societeNom,
      siteId: apiResponse.siteId,
      siteNom: apiResponse.siteNom,
      departementId: apiResponse.departementId,
      departementNom: apiResponse.departementNom,
      derniereConnexion: apiResponse.derniereConnexion,
      tentativesConnexion: apiResponse.tentativesConnexion,
      photo: apiResponse.photo,
      signature: apiResponse.signature,
      langue: apiResponse.langue,
      dateCreation: apiResponse.dateCreation,
      permissions: apiResponse.permissions,
      roles:apiResponse.roles
    };
  }

  /**
   * Convertit la réponse paginée API
   */
  static fromApiPagedResponse(apiResponse: any): any {
    return {
      content: apiResponse.content?.map((item: any) => this.fromApiResponse(item)) || [],
      page: apiResponse.page,
      size: apiResponse.size,
      totalElements: apiResponse.totalElements,
      totalPages: apiResponse.totalPages
    };
  }
}
