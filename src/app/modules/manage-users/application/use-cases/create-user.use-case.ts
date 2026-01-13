import { Inject, Injectable } from '@angular/core';
import { UserEntity, UserCreateCommand } from '../../domain/entities/user.entity';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { CreateUserDto, UserMapper, UserResponseDto } from '../dto/create-user.dto';

/**
 * Interface pour le use case de création d'utilisateur
 */
export interface CreateUserUseCase {
  execute(dto: CreateUserDto): Promise<UserResponseDto>;
}

@Injectable()
export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  async execute(dto: CreateUserDto): Promise<UserResponseDto> {
    // Validation des données
    this.validateCreateUserDto(dto);

    // Vérifier si un utilisateur avec le même email existe déjà
    const existingByEmail = await this.userRepository.findByEmail(dto.email);
    if (existingByEmail) {
     // throw new Error(`Un utilisateur avec l'email ${dto.email} existe déjà`);
    }

    // Vérifier si un utilisateur avec le même nom d'utilisateur existe déjà
    const existingByUsername = await this.userRepository.findByUsername(dto.userName);
    if (existingByUsername) {
     // throw new Error(`Un utilisateur avec le nom d'utilisateur ${dto.userName} existe déjà`);
    }

    // Convertir le DTO en commande de création
    const createCommand = UserMapper.toCreateCommand(dto);

    // Créer l'entité utilisateur
    const userEntity = UserEntity.create(createCommand);

    // Sauvegarder dans le repository
    const savedUser = await this.userRepository.create(userEntity);

    // Convertir en DTO de réponse
    return UserMapper.toResponseDto(savedUser);
  }

  /**
   * Valide les données de création d'utilisateur
   */
  private validateCreateUserDto(dto: CreateUserDto): void {
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


    if (!dto.password || dto.password.trim().length < 6) {
      errors.push('Le mot de passe doit contenir au moins 6 caractères');
    }

    if (!dto.pwdText || dto.pwdText.trim().length === 0) {
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
