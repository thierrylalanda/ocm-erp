import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, routes } from '../../../../src/app/core/core.index';
import { TranslatePipe, LanguageSelectorComponent } from '../../core/services/translation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe, LanguageSelectorComponent]
})
export class LoginComponent {
  public routes = routes;
  public show_password = true;
  public loginForm: FormGroup;
  public isLoading = false;
  public errorMessage = '';
  public currentYear = new Date().getFullYear();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { username, password, rememberMe } = this.loginForm.value;

    this.authService.authenticate(username, password, rememberMe).subscribe({
      next: (response) => {
        this.isLoading = false;
        // La redirection est gérée par le AuthService dans la méthode login()
        console.log('Login successful', response);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Échec de la connexion. Veuillez vérifier vos identifiants.';
        console.error('Login error', error);
      }
    });
  }

  // Méthode pour la compatibilité avec l'ancien code
  redirectPage(): void {
    this.router.navigate([routes.index]);
  }
}
