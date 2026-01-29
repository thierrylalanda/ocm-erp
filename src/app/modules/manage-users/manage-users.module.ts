import { NgModule } from '@angular/core';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { CREATE_USER_USE_CASE } from './application/use-cases/create-user.use-case.token';
import { UPDATE_USER_USE_CASE } from './application/use-cases/update-user.use-case.token';
import { GET_USERS_USE_CASE } from './application/use-cases/get-users.use-case.token';
import { ROLE_REPOSITORY } from './domain/repositories/role.repository.token';
import { CREATE_ROLE_USE_CASE } from './application/use-cases/create-role.use-case.token';
import { GET_ROLES_USE_CASE } from './application/use-cases/get-roles.use-case.token';
import { PERMISSION_REPOSITORY } from './domain/repositories/permission.repository.token';
import { GET_PERMISSIONS_USE_CASE } from './application/use-cases/get-permissions.use-case.token';
import { ACTIVATE_USER_USE_CASE } from './application/use-cases/activate-user.use-case';
import { DEACTIVATE_USER_USE_CASE } from './application/use-cases/deactivate-user.use-case';
import { DELETE_USER_USE_CASE } from './application/use-cases/delete-user.use-case';
import { HttpUserRepository } from './infrastructure/repositories/http-user.repository';
import { HttpRoleRepository } from './infrastructure/repositories/http-role.repository';
import { HttpPermissionRepository } from './infrastructure/repositories/http-permission.repository';
import { CreateUserUseCaseImpl } from './application/use-cases/create-user.use-case';
import { UpdateUserUseCaseImpl } from './application/use-cases/update-user.use-case';
import { GetUsersUseCaseImpl } from './application/use-cases/get-users.use-case';
import { CreateRoleUseCaseImpl } from './application/use-cases/create-role.use-case';
import { GetRolesUseCaseImpl } from './application/use-cases/get-roles.use-case';
import { GetPermissionsUseCaseImpl } from './application/use-cases/get-permissions.use-case';
import { ActivateUserUseCaseImpl } from './application/use-cases/activate-user.use-case';
import { DeactivateUserUseCaseImpl } from './application/use-cases/deactivate-user.use-case';
import { DeleteUserUseCaseImpl } from './application/use-cases/delete-user.use-case';
import { APPLICATION_CONTEXT, LocalStorageContextAdapter } from '../_shared';

@NgModule({
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: HttpUserRepository,
    },
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl,
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl,
    },
    {
      provide: GET_USERS_USE_CASE,
      useClass: GetUsersUseCaseImpl,
    },
    {
      provide: ROLE_REPOSITORY,
      useClass: HttpRoleRepository,
    },
    {
      provide: CREATE_ROLE_USE_CASE,
      useClass: CreateRoleUseCaseImpl,
    },
    {
      provide: GET_ROLES_USE_CASE,
      useClass: GetRolesUseCaseImpl,
    },
    {
      provide: PERMISSION_REPOSITORY,
      useClass: HttpPermissionRepository,
    },
    {
      provide: GET_PERMISSIONS_USE_CASE,
      useClass: GetPermissionsUseCaseImpl,
    },
    {
      provide: ACTIVATE_USER_USE_CASE,
      useClass: ActivateUserUseCaseImpl,
    },
    {
      provide: DEACTIVATE_USER_USE_CASE,
      useClass: DeactivateUserUseCaseImpl,
    },
    {
      provide: DELETE_USER_USE_CASE,
      useClass: DeleteUserUseCaseImpl,
    },
    // ApplicationContext (replaces direct localStorage access)
    {
      provide: APPLICATION_CONTEXT,
      useClass: LocalStorageContextAdapter
    },
    // Provider pour localStorage (still needed by LocalStorageContextAdapter)
    {
      provide: 'LOCAL_STORAGE',
      useValue: localStorage
    }
  ]
})
export class ManageUsersModule { }
