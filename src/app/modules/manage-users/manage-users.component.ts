import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { CREATE_USER_USE_CASE } from './application/use-cases/create-user.use-case.token';
import { GET_USERS_USE_CASE } from './application/use-cases/get-users.use-case.token';
import { HttpUserRepository } from './infrastructure/repositories/http-user.repository';
import { CreateUserUseCaseImpl } from './application/use-cases/create-user.use-case';
import { GetUsersUseCaseImpl } from './application/use-cases/get-users.use-case';

@Component({
  selector: 'app-manage-user',
  imports: [RouterModule],
  templateUrl: './manage-users.component.html',
  styleUrls: [ './manage-users.component.scss'],
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
      provide: GET_USERS_USE_CASE,
      useClass: GetUsersUseCaseImpl,
    },
    // Provider pour localStorage
    {
      provide: 'LOCAL_STORAGE',
      useValue: localStorage
    }
  ]
})
export class ManageUsersComponent {

}
