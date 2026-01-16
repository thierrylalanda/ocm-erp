import { Inject, Injectable } from '@angular/core';
import { User, UserUpdateCommand, UserId } from '../../domain/entities/user.entity';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { CreateUserDto, UserMapper, UserResponseDto } from '../dto/create-user.dto';

/**
 * Interface pour le use case de modification d'utilisateur
 */
export interface UpdateUserUseCase {
  execute(id: number, dto: CreateUserDto): Promise<UserResponseDto>;
}

@Injectable()
export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  async execute(id: number, dto: CreateUserDto): Promise<UserResponseDto> {
    // Validation des données
    this.validateUpdateUserDto(dto);

    // Convertir l'ID en UserId
    const userId: UserId = { value: id };

    // Vérifier si l'utilisateur existe
    const existingUser = await this.userRepository.findById(userId);
    if (!existingUser) {
      throw new Error(`L'utilisateur avec l'ID ${id} n'existe pas`);
    }

    // Vérifier si un autre utilisateur avec le même email existe déjà
    if (dto.email !== existingUser.email) {
      const existingByEmail = await this.userRepository.findByEmail(dto.email);
      if (existingByEmail && existingByEmail.id !== id) {
        throw new Error(`Un autre utilisateur avec l'email ${dto.email} existe déjà`);
      }
    }

    // Vérifier si un autre utilisateur avec le même nom d'utilisateur existe déjà
    if (dto.userName !== existingUser.userName) {
      const existingByUsername = await this.userRepository.findByUsername(dto.userName);
      if (existingByUsername && existingByUsername.id !== id) {
        throw new Error(`Un autre utilisateur avec le nom d'utilisateur ${dto.userName} existe déjà`);
      }
    }

    // Convertir le DTO en commande de mise à jour
    const updateCommand = UserMapper.toUpdateCommand(dto);
      
    // Créer un utilisateur mis à jour
    const updatedUser: User = {
      ...existingUser,
      societeId:updateCommand.societeId ?? existingUser.societeId,
      nomPrenom: updateCommand.nomPrenom ?? existingUser.nomPrenom,
      telephone: updateCommand.telephone ?? existingUser.telephone,
      adresse: updateCommand.adresse ?? existingUser.adresse,
      userName: updateCommand.userName ?? existingUser.userName,
      email: updateCommand.email ?? existingUser.email,
      statut: updateCommand.statut ?? existingUser.statut,
      siteId: updateCommand.siteId ?? existingUser.siteId,
      departementId: updateCommand.departementId ?? existingUser.departementId,
      photo: updateCommand.photo ?? existingUser.photo,
      signature: updateCommand.signature ?? existingUser.signature,
      langue: updateCommand.langue ?? existingUser.langue,
      // Note: pwdText n'est pas mis à jour via updateCommand
      // Les autres champs restent inchangés
    };
    // Sauvegarder dans le repository
    const savedUser = await this.userRepository.update(updatedUser);

    // Convertir en DTO de réponse
    return UserMapper.toResponseDto(savedUser);
  }

  /**
   * Valide les données de modification d'utilisateur
   * Note: Le mot de passe n'est pas obligatoire en mode édition
   */
  private validateUpdateUserDto(dto: CreateUserDto): void {
    const errors: string[] = [];

    if (!dto.nomPrenom || dto.nomPrenom.trim().length === 0) {
      errors.push('Le nom et prénom sont requis');
    }

    if (!dto.userName || dto.userName.trim().length === 0) {
      errors.push("Le nom d'utilisateur est requis");
    }

    if (!dto.email || !this.isValidEmail(dto.email)) {
      errors.push('Un email valide est requis');
    }

    // Le mot de passe n'est pas obligatoire en mode édition
    // Mais s'il est fourni, il doit respecter les règles
    if (dto.password && dto.password.trim().length > 0 && dto.password.trim().length < 6) {
      errors.push('Le mot de passe doit contenir au moins 6 caractères');
    }

    if (dto.pwdText && (!dto.pwdText || dto.pwdText.trim().length === 0)) {
      errors.push('Le texte du mot de passe est requis');
    }

    if (!dto.societeId || dto.societeId <= 0) {
      errors.push('Un identifiant de société valide est requis');
    }

    if (!dto.siteId || dto.siteId <= 0) {
      errors.push('Un identifiant de site valide est requis');
    }

    if (!dto.departementId || dto.departementId <= 0) {
      errors.push('Un identifiant de département valide est requis');
    }

    if (!dto.statut) {
      errors.push('Le statut est requis');
    }

    if (errors.length > 0) {
      throw new Error(`Validation échouée: ${errors.join(', ')}`);
    }
  }

  /**
   * Valide le format d'email
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valide le numéro de téléphone
   */
  private isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
    return phoneRegex.test(phone);
  }
}
