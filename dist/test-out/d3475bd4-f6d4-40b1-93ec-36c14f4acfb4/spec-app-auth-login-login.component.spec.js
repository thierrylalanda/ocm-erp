import {
  LanguageSelectorComponent,
  init_translation
} from "./chunk-O7BLCUFK.js";
import {
  TranslatePipe
} from "./chunk-YTCUO5R2.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  AuthService,
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  Router,
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/auth/login/login.component.html
var login_component_default;
var init_login_component = __esm({
  "angular:jit:template:src/app/auth/login/login.component.html"() {
    login_component_default = `<div class="login-wrapper">
  <div class="row g-0 h-100 min-vh-100">

    <!-- Left Side: Hero Section (Themed) -->
    <div class="col-lg-7 d-none d-lg-flex login-hero">
      <div class="hero-content">
        <div class="mb-4">
          <!-- Optional: Large Icon or Illustration -->
          <i class="isax isax-cloud-change display-1 opacity-50"></i>
        </div>
        <h1>OCM ERP</h1>
        <p>La plateforme professionnelle pour g\xE9rer votre activit\xE9 en toute simplicit\xE9.</p>

        <div class="hero-features">
          <div class="feature-item">
            <i class="isax isax-shield-tick"></i> S\xE9curis\xE9
          </div>
          <div class="feature-item">
            <i class="isax isax-flash-1"></i> Rapide
          </div>
          <div class="feature-item">
            <i class="isax isax-chart-21"></i> Analytique
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Login Form -->
    <div class="col-lg-5 login-form-section">

      <!-- Language Selector Top Right -->
      <app-language-selector></app-language-selector>

      <div class="login-content">
        <div class="auth-header">
          <img src="assets/img/logo.png" alt="Logo" class="logo-img">
          <h3>{{ 'login.title' | translate }}</h3>
          <p>{{ 'login.subtitle' | translate }}</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">

          <!-- Error Message -->
          <div *ngIf="errorMessage" class="alert alert-danger d-flex align-items-center mb-4 border-0 shadow-sm"
            role="alert">
            <i class="isax isax-warning-2 me-2"></i>
            <div class="small">{{ errorMessage }}</div>
          </div>

          <!-- Username -->
          <div class="form-floating">
            <input type="text" class="form-control" id="username" formControlName="username"
              [placeholder]="'login.usernamePlaceholder' | translate"
              [class.is-invalid]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
            <label for="username">{{ 'login.username' | translate }}</label>
            <div *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"
              class="invalid-feedback text-start">
              {{ 'login.usernameRequired' | translate }}
            </div>
          </div>

          <!-- Password -->
          <div class="form-floating position-relative">
            <input [type]="show_password ? 'password' : 'text'" class="form-control" id="password"
              formControlName="password" [placeholder]="'login.passwordPlaceholder' | translate"
              [class.is-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
              style="padding-right: 2.5rem;">
            <label for="password">{{ 'login.password' | translate }}</label>

            <!-- Eye Icon -->
            <span class="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer text-muted"
              (click)="show_password = !show_password">
              <i class="isax" [ngClass]="show_password ? 'isax-eye-slash' : 'isax-eye'" style="font-size: 1.2rem;"></i>
            </span>

            <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
              class="invalid-feedback text-start">
              {{ 'login.passwordRequired' | translate }}
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="d-flex align-items-center justify-content-between mb-4 mt-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe" formControlName="rememberMe">
              <label class="form-check-label user-select-none small" for="rememberMe">
                {{ 'login.rememberMe' | translate }}
              </label>
            </div>
            <a [routerLink]="routes.forgot_password" class="forgot-link small">
              {{ 'login.forgotPassword' | translate }}
            </a>
          </div>

          <!-- Submit Action -->
          <button type="submit" class="btn btn-primary w-100 py-3 mb-3 shadow-sm"
            [disabled]="loginForm.invalid || isLoading">
            <span *ngIf="!isLoading">{{ 'login.signIn' | translate }}</span>
            <div *ngIf="isLoading" class="d-flex align-items-center justify-content-center">
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {{ 'login.signingIn' | translate }}
            </div>
          </button>

        </form>
      </div>

      <!-- Copyright -->
      <div class="copyright-text">
        &copy; {{ currentYear }} OCM ERP. Tous droits r\xE9serv\xE9s.
      </div>

    </div>
  </div>
</div>`;
  }
});

// angular:jit:style:src/app/auth/login/login.component.scss
var login_component_default2;
var init_login_component2 = __esm({
  "angular:jit:style:src/app/auth/login/login.component.scss"() {
    login_component_default2 = '@import "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap";\n\n/* src/app/auth/login/login.component.scss */\n:root {\n  --sidenav-width: 276px;\n  --sidenav-width-sm: 70px;\n  --topbar-height: 55px;\n  --topbar-bg: var(--white);\n  --topbar-item-color: var(--gray-900);\n  --topbar-item-hover-bg: var(--light);\n  --topbar-search-bg: var(--white);\n  --topbar-search-color: var(--gray-900);\n  --topbar-search-icon:var(--gray-400);\n  --topbar-placeholder-color: var(--gray-300);\n  --topbar-search-border: var(--border-color);\n  --topbar-border: var(--border-color);\n  --topbar-breadcrumb-color: var(--gray-500);\n  --topbar-breadcrumb-hover-color: var(--primary);\n  --menu-title: var(--gray-900);\n  --menu-bg: var(--light);\n  --menu-item-color: var(--gray-500);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--gray-900);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg:var(--white);\n  --primary: #7539FF;\n  --secondary: #2E3B48;\n  --light: #F7F8F9;\n  --dark: #262626;\n  --white: #fff;\n  --success: #27AE60;\n  --info: #06AED4;\n  --danger: #EF1E1E;\n  --indigo: #3538CD;\n  --cyan: #00D3C7;\n  --orange: #E04F16;\n  --pink: #DD2590;\n  --purple: #800080;\n  --teal: #0E9384;\n  --warning: #E2B93B;\n  --black: #000;\n  --gray-100: #E2E4E6;\n  --gray-200: #C6CACE;\n  --gray-300: #AAB0B6;\n  --gray-400: #90979F;\n  --gray-500: #5D6772;\n  --gray-600: #45505C;\n  --gray-700: #2E3B48;\n  --gray-800: #182634;\n  --gray-900: #051321;\n  --gray-hover: #091833;\n  --light-100: #FDFEFE;\n  --light-200: #FDFDFD;\n  --light-300: #FCFCFD;\n  --light-400: #FBFBFC;\n  --light-500: #FAFAFB;\n  --light-600: #F9F9FB;\n  --light-700: #F8F9FA;\n  --light-800: #F7F8FA;\n  --light-900: #F6F7F9;\n  --light-hover: #C3C6C9;\n  --primary-hover: #3d0ebf;\n  --secondary-hover: #1a2530;\n  --info-hover: #087a94;\n  --warning-hover: #cead47;\n  --success-hover: #37a465;\n  --danger-hover: #d93030;\n  --indigo-hover: #2F32A3;\n  --purple-hover: #7f177f;\n  --pink-hover: #e4479b;\n  --orange-hover: #cf5a32;\n  --teal-hover: #358e82;\n  --cyan-hover: #39a4c3;\n  --dark-hover: #080A0B;\n  --cyan-transparent: #E9F8FB;\n  --danger-transparent: #FEF4F4;\n  --gray-transparent: #F4F4F4;\n  --dark-transparent: #F4F4F4;\n  --indigo-transparent: #EDEDFB;\n  --info-transparent: #F4F9FE;\n  --light-transparent: #FDFDFE;\n  --orange-transparent: #FDF6F3;\n  --pink-transparent: #FDF4F9;\n  --primary-transparent: #F8F5FF;\n  --purple-transparent: #F9F2F9;\n  --secondary-transparent: #E0E2E4;\n  --success-transparent: #F4FBF7;\n  --teal-transparent: #E9F5F4;\n  --warning-transparent: #FEFBF5;\n  --heading-color: #051321;\n  --border-color: #E2E4E6;\n  --body-color: var(--gray-500);\n  --primary-rgb:\n    117,\n    57,\n    255;\n  --secondary-rgb:\n    46,\n    59,\n    72;\n  --light-rgb:\n    247,\n    248,\n    249;\n  --dark-rgb:\n    38,\n    38,\n    38;\n  --white-rgb:\n    255,\n    255,\n    255;\n  --success-rgb:\n    39,\n    174,\n    96;\n  --info-rgb:\n    6,\n    174,\n    212;\n  --danger-rgb:\n    239,\n    30,\n    30;\n  --indigo-rgb:\n    53,\n    56,\n    205;\n  --cyan-rgb:\n    0,\n    211,\n    199;\n  --orange-rgb:\n    224,\n    79,\n    22;\n  --pink-rgb:\n    221,\n    37,\n    144;\n  --purple-rgb:\n    128,\n    0,\n    128;\n  --teal-rgb:\n    14,\n    147,\n    132;\n  --warning-rgb:\n    226,\n    185,\n    59;\n  --body-color-rgb:\n    93,\n    103,\n    114;\n  --box-shadow: 0px 4px 30px 0px rgba(189, 189, 189, 0.10);\n  --box-shadow-sm: 0 0.125rem 0.25rem rgba(93, 104, 114, 0.15);\n  --box-shadow-lg: 0px 4px 20px 0px rgba(92, 92, 92, 0.07);\n}\n:root[data-bs-theme=dark] {\n  --box-shadow-sm: 0 .125rem .25rem rgba(0, 0, 0, 0.75);\n  --box-shadow: 0px 0px 35px 0px rgba(26, 27, 34, 0.5);\n  --box-shadow-lg: 0px 4.4px 12px -1px rgba(0, 0, 0, 0.75);\n  --light: #1B122F;\n  --dark: #F9F6FF;\n  --white: #070312;\n  --gray-100: #2E283A;\n  --gray-200: #4E485E;\n  --gray-300: #AAB0B6;\n  --gray-400: #787481;\n  --gray-500: #817C8D;\n  --gray-600: #A09AB0;\n  --gray-700: #B8B4C7;\n  --gray-800: #D0CADE;\n  --gray-900: #E8E6EE;\n  --gray-hover: #DADFE2;\n  --light-100: #6E6A76;\n  --light-200: #504D57;\n  --light-300: #3B3549;\n  --light-400: #2B243C;\n  --light-500: #251C39;\n  --light-600: #251C39;\n  --light-700: #1B122F;\n  --light-800: #180F2D;\n  --light-900: #170E2B;\n  --light-hover: #3C4249;\n  --cyan-transparent: #103138;\n  --danger-transparent: #3D0F07;\n  --gray-transparent: #222222;\n  --dark-transparent: #212123;\n  --indigo-transparent: #111134;\n  --orange-transparent: #31180D;\n  --pink-transparent: #300E21;\n  --purple-transparent: #2B172B;\n  --teal-transparent: #1B3230;\n  --dark-hover: #DADFE2;\n  --primary-transparent: #140635;\n  --secondary-transparent: #06193A;\n  --success-transparent: #142B1E;\n  --info-transparent: #0A1E33;\n  --warning-transparent: #31240A;\n  --light-transparent: #141422;\n  --heading-color: #aab8c5;\n  --border-color: #37394d;\n  --body-color: #aab8c5;\n  --body-color-rgb:\n    170,\n    184,\n    197;\n  --light-rgb:\n    37,\n    38,\n    48;\n  --bg-opacity: 1;\n  --dark-rgb:\n    241,\n    241,\n    241;\n  --white-rgb:\n    255,\n    255,\n    255;\n}\n:root[data-sidebar=light] {\n  --menu-title: var(--gray-900);\n  --menu-bg: var(--light);\n  --menu-item-color: var(--gray-500);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--gray-900);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg:var(--white);\n}\n:root[data-bs-theme=dark][data-sidebar=light] {\n  --menu-title-color: var(--dark);\n  --menu-bg: #252630;\n  --menu-item-color: var(--gray-300);\n  --menu-item-hover-color: var(--dark);\n  --menu-item-heading: #fff;\n  --menu-item-active-color: var(--white);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-bs-theme=dark][data-topbar=white] {\n  --topbar-bg: #252630;\n  --topbar-item-color: var(--dark);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-search-icon: var(--dark);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-border: rgba(255, 255, 255, 0.1);\n  --topbar-border: #252630;\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--white);\n}\n:root[data-topbar=topbar3] {\n  --topbar-bg: var(--primary);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-search-icon: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--primary);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--white);\n}\n:root[data-topbar=topbar4] {\n  --topbar-bg: var(--secondary);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-search-icon: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--secondary);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--white);\n}\n:root[data-topbar=topbar5] {\n  --topbar-bg: var(--info);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-search-icon: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--info);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--white);\n}\n:root[data-topbar=topbar6] {\n  --topbar-bg: var(--success);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-search-icon: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--success);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--white);\n}\n:root[data-topbar=gradienttopbar1] {\n  --topbar-bg:\n    linear-gradient(\n      180deg,\n      #8351FD 0%,\n      #5112A9 100%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--primary);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-topbar=gradienttopbar2] {\n  --topbar-bg:\n    linear-gradient(\n      7.27deg,\n      rgba(46, 59, 72, 0.8) 38.3%,\n      rgba(46, 59, 72, 0.6) 92.24%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--secondary);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-topbar=gradienttopbar3] {\n  --topbar-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(30, 120, 66) 38.3%,\n      rgb(39, 174, 96) 92.24%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--success);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-topbar=gradienttopbar4] {\n  --topbar-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(4, 120, 146) 38.3%,\n      rgb(6, 174, 212) 92.24%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--info);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-topbar=gradienttopbar5] {\n  --topbar-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(4, 17, 28) 38.3%,\n      rgb(5, 19, 33) 92.24%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--dark);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-topbar=gradienttopbar6] {\n  --topbar-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(213, 27, 27) 38.3%,\n      rgb(239, 30, 30) 92.24%);\n  --topbar-item-color: var(--white);\n  --topbar-item-hover-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-bg: rgba(255, 255, 255, 0.1);\n  --topbar-search-color: var(--white);\n  --topbar-placeholder-color: rgba(255, 255, 255, 0.6);\n  --topbar-search-icon: var(--white);\n  --topbar-search-border:rgba(255, 255, 255, 0.1);\n  --topbar-border: var(--danger);\n  --topbar-breadcrumb-color: var(--light);\n  --topbar-breadcrumb-hover-color: var(--primary);\n}\n:root[data-sidebar=sidebar2] {\n  --menu-title: var(--gray-900);\n  --menu-bg: var(--white);\n  --menu-item-color: var(--gray-500);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--gray-900);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg: var(--light);\n}\n:root[data-sidebar=sidebar3] {\n  --menu-title-color: var(--white);\n  --menu-bg: var(--dark);\n  --menu-item-color: var(--gray-300);\n  --menu-item-hover-color: var(--white);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--white);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=sidebar4] {\n  --menu-title-color: var(--white);\n  --menu-bg: var(--primary);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=sidebar5] {\n  --menu-title-color: var(--white);\n  --menu-bg: var(--secondary);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=sidebar6] {\n  --menu-title-color: var(--white);\n  --menu-bg: var(--info);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=sidebar7] {\n  --menu-title-color: var(--white);\n  --menu-bg: var(--success);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--primary);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--primary);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar1] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      180deg,\n      #8351FD 0%,\n      #5112A9 100%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar2] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      7.27deg,\n      rgba(46, 59, 72, 0.8) 38.3%,\n      rgba(46, 59, 72, 0.6) 92.24%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar3] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(30, 120, 66) 38.3%,\n      rgb(39, 174, 96) 92.24%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar4] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(4, 120, 146) 38.3%,\n      rgb(6, 174, 212) 92.24%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar5] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(4, 17, 28) 38.3%,\n      rgb(5, 19, 33) 92.24%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar6] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      0deg,\n      #c20e0e 0%,\n      #e81111 60%,\n      #ef1e1e 100%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n:root[data-sidebar=gradientsidebar7] {\n  --menu-title-color: var(--white);\n  --menu-bg:\n    linear-gradient(\n      7.27deg,\n      rgb(211, 174, 53) 38.3%,\n      rgba(226, 185, 59, 0.3) 92.24%);\n  --menu-item-color: var(--light);\n  --menu-item-hover-color: var(--gray-900);\n  --menu-item-heading: var(--white);\n  --menu-item-active-color: var(--gray-900);\n  --menu-item-active-bg: rgba(255, 255, 255, 0.1);\n}\n.login-wrapper {\n  width: 100%;\n  min-height: 100vh;\n  overflow-x: hidden;\n  background-color: var(--white);\n}\n.login-wrapper .login-hero {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-hover) 100%);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--white);\n  padding: 3rem;\n}\n.login-wrapper .login-hero::before {\n  content: "";\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0) 70%);\n  z-index: 1;\n}\n.login-wrapper .login-hero::after {\n  content: "";\n  position: absolute;\n  bottom: -10%;\n  right: -10%;\n  width: 60%;\n  height: 60%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      rgba(255, 255, 255, 0) 70%);\n  z-index: 1;\n}\n.login-wrapper .login-hero .hero-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 600px;\n}\n.login-wrapper .login-hero .hero-content h1 {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: var(--white);\n}\n.login-wrapper .login-hero .hero-content p {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.login-wrapper .login-hero .hero-content .hero-features {\n  margin-top: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n.login-wrapper .login-hero .hero-content .hero-features .feature-item {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0.75rem 1.5rem;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  font-weight: 500;\n}\n.login-wrapper .login-hero .hero-content .hero-features .feature-item i {\n  margin-right: 0.5rem;\n  font-size: 1.2rem;\n}\n.login-wrapper .login-form-section {\n  background-color: var(--white);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  min-height: 100vh;\n}\n.login-wrapper .login-form-section .login-content {\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.login-wrapper .login-form-section .login-content .auth-header {\n  margin-bottom: 2.5rem;\n  text-align: center;\n}\n.login-wrapper .login-form-section .login-content .auth-header .logo-img {\n  height: 150px;\n  margin-bottom: 1.5rem;\n}\n.login-wrapper .login-form-section .login-content .auth-header h3 {\n  font-weight: 700;\n  color: var(--heading-color);\n  margin-bottom: 0.5rem;\n}\n.login-wrapper .login-form-section .login-content .auth-header p {\n  color: var(--body-color);\n}\n.login-wrapper .login-form-section .login-content .form-floating {\n  margin-bottom: 1.25rem;\n}\n.login-wrapper .login-form-section .login-content .form-floating .form-control {\n  border-color: var(--border-color);\n  border-radius: 0.3rem;\n}\n.login-wrapper .login-form-section .login-content .form-floating .form-control:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(var(--primary), 0.1);\n}\n.login-wrapper .login-form-section .login-content .form-floating label {\n  color: var(--body-color);\n}\n.login-wrapper .login-form-section .login-content .btn-primary {\n  background-color: var(--primary);\n  border-color: var(--primary);\n  font-weight: 500;\n  border-radius: 0.3rem;\n  transition: all 0.3s ease;\n}\n.login-wrapper .login-form-section .login-content .btn-primary:hover {\n  background-color: var(--primary-hover);\n  border-color: var(--primary-hover);\n  transform: translateY(-1px);\n}\n.login-wrapper .login-form-section .login-content .forgot-link {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.login-wrapper .login-form-section .login-content .forgot-link:hover {\n  color: var(--primary-hover);\n  text-decoration: underline;\n}\n.login-wrapper .login-form-section .copyright-text {\n  position: absolute;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n  color: var(--body-color);\n  font-size: 0.875rem;\n}\napp-language-selector {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 10;\n}\n/*# sourceMappingURL=login.component.css.map */\n';
  }
});

// src/app/auth/login/login.component.ts
var LoginComponent;
var init_login_component3 = __esm({
  "src/app/auth/login/login.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_login_component2();
    init_core();
    init_forms();
    init_router();
    init_common();
    init_core_index();
    init_translation();
    LoginComponent = class LoginComponent2 {
      router;
      fb;
      authService;
      routes = routes;
      show_password = true;
      loginForm;
      isLoading = false;
      errorMessage = "";
      currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      constructor(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.loginForm = this.fb.group({
          username: ["", [Validators.required]],
          password: ["", [Validators.required]],
          rememberMe: [false]
        });
      }
      onSubmit() {
        if (this.loginForm.invalid) {
          return;
        }
        this.isLoading = true;
        this.errorMessage = "";
        const { username, password, rememberMe } = this.loginForm.value;
        this.authService.authenticate(username, password, rememberMe).subscribe({
          next: (response) => {
            this.isLoading = false;
            console.log("Login successful", response);
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = error.error?.message || "\xC9chec de la connexion. Veuillez v\xE9rifier vos identifiants.";
            console.error("Login error", error);
          }
        });
      }
      // Méthode pour la compatibilité avec l'ancien code
      redirectPage() {
        this.router.navigate([routes.index]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: FormBuilder },
        { type: AuthService }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        template: login_component_default,
        imports: [CommonModule, RouterLink, ReactiveFormsModule, TranslatePipe, LanguageSelectorComponent],
        styles: [login_component_default2]
      })
    ], LoginComponent);
  }
});

// src/app/auth/login/login.component.spec.ts
var require_login_component_spec = __commonJS({
  "src/app/auth/login/login.component.spec.ts"(exports) {
    init_testing();
    init_login_component3();
    describe("LoginComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LoginComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_component_spec();
//# sourceMappingURL=spec-app-auth-login-login.component.spec.js.map
