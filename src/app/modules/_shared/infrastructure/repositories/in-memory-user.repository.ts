import { Injectable } from '@angular/core';
import { User, UserId, UserCreateCommand, UserUpdateCommand } from '../../domain/entities/user.entity';
import { BaseUserRepository } from '../../domain/repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserRepository extends BaseUserRepository {
  private users: Map<string, User> = new Map();
  private emailIndex: Map<string, string> = new Map(); // email -> userId
  private usernameIndex: Map<string, string> = new Map(); // username -> userId

  constructor() {
    super();
    // Initialize with some sample data for testing
    this.initializeSampleData();
  }

  private initializeSampleData(): void {
    const sampleUser: User = {
      id: { value: '1' },
      username: 'admin',
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'User',
      phoneNumber: '+1234567890',
      isActive: true,
      isEmailVerified: true,
      lastLoginAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: undefined,
      tenantId: 'default-tenant',
      roles: ['admin', 'user'],
      permissions: ['read', 'write', 'delete']
    };

    this.users.set(sampleUser.id.value, sampleUser);
    this.emailIndex.set(sampleUser.email, sampleUser.id.value);
    this.usernameIndex.set(sampleUser.username, sampleUser.id.value);
  }

  async findById(id: UserId): Promise<User | null> {
    return this.users.get(id.value) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userId = this.emailIndex.get(email);
    return userId ? this.users.get(userId) || null : null;
  }

  async findByUsername(username: string): Promise<User | null> {
    const userId = this.usernameIndex.get(username);
    return userId ? this.users.get(userId) || null : null;
  }

  async findAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async findByTenant(tenantId: string): Promise<User[]> {
    return Array.from(this.users.values()).filter(user => user.tenantId === tenantId);
  }

  async create(user: User): Promise<User> {
    // Generate a new ID if not provided
    if (!user.id || !user.id.value) {
      user.id = { value: this.generateId() };
    }

    // Set timestamps
    const now = new Date();
    user.createdAt = now;
    user.updatedAt = now;

    // Store the user
    this.users.set(user.id.value, user);
    this.emailIndex.set(user.email, user.id.value);
    this.usernameIndex.set(user.username, user.id.value);

    return user;
  }

  async update(user: User): Promise<User> {
    const existingUser = this.users.get(user.id.value);
    if (!existingUser) {
      throw new Error(`User with id ${user.id.value} not found`);
    }

    // Update timestamps
    user.updatedAt = new Date();

    // Update indexes if email or username changed
    if (existingUser.email !== user.email) {
      this.emailIndex.delete(existingUser.email);
      this.emailIndex.set(user.email, user.id.value);
    }

    if (existingUser.username !== user.username) {
      this.usernameIndex.delete(existingUser.username);
      this.usernameIndex.set(user.username, user.id.value);
    }

    // Update the user
    this.users.set(user.id.value, user);
    return user;
  }

  async delete(id: UserId): Promise<void> {
    const user = this.users.get(id.value);
    if (user) {
      this.emailIndex.delete(user.email);
      this.usernameIndex.delete(user.username);
      this.users.delete(id.value);
    }
  }

  async updateLastLogin(id: UserId): Promise<void> {
    const user = this.users.get(id.value);
    if (user) {
      user.lastLoginAt = new Date();
      this.users.set(id.value, user);
    }
  }

  async updatePermissions(id: UserId, permissions: string[]): Promise<void> {
    const user = this.users.get(id.value);
    if (user) {
      user.permissions = permissions;
      user.updatedAt = new Date();
      this.users.set(id.value, user);
    }
  }

  async updateRoles(id: UserId, roles: string[]): Promise<void> {
    const user = this.users.get(id.value);
    if (user) {
      user.roles = roles;
      user.updatedAt = new Date();
      this.users.set(id.value, user);
    }
  }

  async search(query: string, tenantId: string): Promise<User[]> {
    const users = await this.findByTenant(tenantId);
    const lowercaseQuery = query.toLowerCase();
    
    return users.filter(user => 
      user.firstName.toLowerCase().includes(lowercaseQuery) ||
      user.lastName.toLowerCase().includes(lowercaseQuery) ||
      user.email.toLowerCase().includes(lowercaseQuery) ||
      user.username.toLowerCase().includes(lowercaseQuery)
    );
  }

  async findByRole(role: string, tenantId: string): Promise<User[]> {
    const users = await this.findByTenant(tenantId);
    return users.filter(user => user.roles.includes(role));
  }

  async findByPermission(permission: string, tenantId: string): Promise<User[]> {
    const users = await this.findByTenant(tenantId);
    return users.filter(user => user.permissions.includes(permission));
  }

  async existsByEmail(email: string): Promise<boolean> {
    return this.emailIndex.has(email);
  }

  async existsByUsername(username: string): Promise<boolean> {
    return this.usernameIndex.has(username);
  }

  async createMany(users: User[]): Promise<User[]> {
    const createdUsers: User[] = [];
    for (const user of users) {
      const createdUser = await this.create(user);
      createdUsers.push(createdUser);
    }
    return createdUsers;
  }

  async updateMany(users: User[]): Promise<User[]> {
    const updatedUsers: User[] = [];
    for (const user of users) {
      const updatedUser = await this.update(user);
      updatedUsers.push(updatedUser);
    }
    return updatedUsers;
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}
