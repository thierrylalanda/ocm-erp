import { Inject, Injectable } from '@angular/core';
import { UserRepository, USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { UsersPagedResponseDto, UserMapper, UsersPaginationOptionsDto } from '../dto/create-user.dto';
import { PaginationOptions } from '../../domain/types/paged-response.type';

/**
 * Interface pour le use case de récupération des utilisateurs
 */
export interface GetUsersUseCase {
  execute(options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto>;
  executeBySite(siteId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto>;
  executeByDepartment(departmentId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto>;
  executeBySociete(societeId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto>;
}

@Injectable()
export class GetUsersUseCaseImpl implements GetUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  async execute(options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    // Convertir les options DTO en options de pagination
    const paginationOptions = this.mapToPaginationOptions(options);

    // Récupérer les utilisateurs paginés depuis le repository
    const pagedResponse = await this.userRepository.findAllPaginated(paginationOptions);

    // Convertir en DTO de réponse
    return UserMapper.toPagedResponseDto(pagedResponse);
  }

  /**
   * Convertit les options DTO en options de pagination
   */
  private mapToPaginationOptions(dto?: UsersPaginationOptionsDto): PaginationOptions {
    if (!dto) {
      return {
        page: 0,
        size: 10
      };
    }

    const options: PaginationOptions = {};

    if (dto.page !== undefined) {
      options.page = dto.page;
    }

    if (dto.size !== undefined) {
      options.size = dto.size;
    }

    if (dto.sortBy) {
      options.sortBy = dto.sortBy;
    }

    if (dto.sortOrder) {
      options.sortOrder = dto.sortOrder;
    }

    if (dto.search) {
      options.search = dto.search;
    }

    return options;
  }

  /**
   * Recherche des utilisateurs avec un terme de recherche
   */
  async searchUsers(query: string, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    const paginationOptions = this.mapToPaginationOptions(options);
    
    const pagedResponse = await this.userRepository.searchUsers(query, paginationOptions);
    
    return UserMapper.toPagedResponseDto(pagedResponse);
  }

  /**
   * Récupère les utilisateurs par statut
   */
  async getUsersByStatus(status: string, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    const paginationOptions = this.mapToPaginationOptions(options);
    
    const pagedResponse = await this.userRepository.findByStatus(status, paginationOptions);
    
    return UserMapper.toPagedResponseDto(pagedResponse);
  }

  /**
   * Récupère les utilisateurs par site
   */
  async getUsersBySite(siteId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    const paginationOptions = this.mapToPaginationOptions(options);
    
    const pagedResponse = await this.userRepository.findBySite(siteId, paginationOptions);
    
    return UserMapper.toPagedResponseDto(pagedResponse);
  }

  /**
   * Récupère les utilisateurs par département
   */
  async getUsersByDepartment(departmentId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    const paginationOptions = this.mapToPaginationOptions(options);
    
    const pagedResponse = await this.userRepository.findByDepartment(departmentId, paginationOptions);
    
    return UserMapper.toPagedResponseDto(pagedResponse);
  }

  /**
   * Récupère les utilisateurs actifs
   */
  async getActiveUsers(options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    return this.getUsersByStatus('ACTIF', options);
  }

  /**
   * Récupère les utilisateurs inactifs
   */
  async getInactiveUsers(options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    return this.getUsersByStatus('INACTIF', options);
  }

  /**
   * Implémentation de executeBySite
   */
  async executeBySite(siteId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    return this.getUsersBySite(siteId, options);
  }

  /**
   * Implémentation de executeByDepartment
   */
  async executeByDepartment(departmentId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    return this.getUsersByDepartment(departmentId, options);
  }

  /**
   * Implémentation de executeBySociete
   */
  async executeBySociete(societeId: number, options?: UsersPaginationOptionsDto): Promise<UsersPagedResponseDto> {
    const paginationOptions = this.mapToPaginationOptions(options);
    
    const pagedResponse = await this.userRepository.findBySociete(societeId, paginationOptions);
    
    return UserMapper.toPagedResponseDto(pagedResponse);
  }
}
