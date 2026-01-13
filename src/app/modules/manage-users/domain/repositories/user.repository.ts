import { Injectable, InjectionToken } from '@angular/core';
import { User, UserId, UserCreateCommand, UserUpdateCommand, UserResponse, UsersPagedResponse } from '../entities/user.entity';
import { PaginationOptions } from '../types/paged-response.type';

/**
 * Token d'injection pour UserRepository
 */
export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');

/**
 * Interface du repository pour la gestion des utilisateurs
 */
export interface UserRepository {
  // Opérations CRUD de base
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  
  // Récupération paginée
  findAllPaginated(options?: PaginationOptions): Promise<UsersPagedResponse>;
  
  // Création et mise à jour
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: UserId): Promise<void>;
  
  // Opérations métier
  activateUser(id: UserId): Promise<User>;
  deactivateUser(id: UserId): Promise<User>;
  recordLogin(id: UserId): Promise<void>;
  
  // Recherche et filtrage
  searchUsers(query: string, options?: PaginationOptions): Promise<UsersPagedResponse>;
  findByStatus(status: string, options?: PaginationOptions): Promise<UsersPagedResponse>;
  findBySite(siteId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  findByDepartment(departmentId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  findBySociete(societeId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  
  // Validation
  existsByEmail(email: string): Promise<boolean>;
  existsByUsername(username: string): Promise<boolean>;
  
  // Opérations en masse
  createMany(users: User[]): Promise<User[]>;
  updateMany(users: User[]): Promise<User[]>;
}

/**
 * Options de requête pour le repository
 */
export interface UserRepositoryQueryOptions extends PaginationOptions {
  status?: string;
  siteId?: number;
  departmentId?: number;
  societeId?: number;
}

/**
 * Résultat de recherche d'utilisateurs
 */
export interface UserRepositorySearchResult {
  users: User[];
  total: number;
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
}

/**
 * Repository de base abstrait
 */
export abstract class BaseUserRepository implements UserRepository {
  abstract findById(id: UserId): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract findAllPaginated(options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract create(user: User): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: UserId): Promise<void>;
  abstract activateUser(id: UserId): Promise<User>;
  abstract deactivateUser(id: UserId): Promise<User>;
  abstract recordLogin(id: UserId): Promise<void>;
  abstract searchUsers(query: string, options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract findByStatus(status: string, options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract findBySite(siteId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract findByDepartment(departmentId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract findBySociete(societeId: number, options?: PaginationOptions): Promise<UsersPagedResponse>;
  abstract existsByEmail(email: string): Promise<boolean>;
  abstract existsByUsername(username: string): Promise<boolean>;
  abstract createMany(users: User[]): Promise<User[]>;
  abstract updateMany(users: User[]): Promise<User[]>;
  
  // Méthodes étendues
  async findWithOptions(options: UserRepositoryQueryOptions): Promise<UserRepositorySearchResult> {
    const response = await this.findAllPaginated(options);
    
    return {
      users: response.content.map(userResponse => this.mapResponseToUser(userResponse)),
      total: response.totalElements,
      hasMore: response.page < response.totalPages - 1,
      currentPage: response.page,
      totalPages: response.totalPages
    };
  }
  
  async countByStatus(status: string): Promise<number> {
    const response = await this.findByStatus(status);
    return response.totalElements;
  }
  
  async countBySite(siteId: number): Promise<number> {
    const response = await this.findBySite(siteId);
    return response.totalElements;
  }
  
  async countByDepartment(departmentId: number): Promise<number> {
    const response = await this.findByDepartment(departmentId);
    return response.totalElements;
  }
  
  async findActiveUsers(options?: PaginationOptions): Promise<UsersPagedResponse> {
    return this.findByStatus('ACTIF', options);
  }
  
  async findInactiveUsers(options?: PaginationOptions): Promise<UsersPagedResponse> {
    return this.findByStatus('INACTIF', options);
  }
  
  // Méthode de mapping protégée pour les implémentations concrètes
  protected abstract mapResponseToUser(response: UserResponse): User;
  protected abstract mapUserToCreateCommand(user: User): UserCreateCommand;
  protected abstract mapUserToUpdateCommand(user: User): UserUpdateCommand;
}
