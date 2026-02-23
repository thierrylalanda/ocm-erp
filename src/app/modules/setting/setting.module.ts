import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { SiteService } from './application/services/site.service';
import { DepartementService } from './application/services/departement.service';
import { CompanyService } from './application/services/company.service';
import { ConfigurationService } from './application/services/configuration.service';

// Use Cases - Site
import {
    CREATE_SITE_USE_CASE,
    CreateSiteUseCaseImpl,
    UPDATE_SITE_USE_CASE,
    UpdateSiteUseCaseImpl,
    DELETE_SITE_USE_CASE,
    DeleteSiteUseCaseImpl,
    GET_SITES_USE_CASE,
    GetSitesUseCaseImpl,

    // Departement
    CREATE_DEPARTEMENT_USE_CASE,
    CreateDepartementUseCaseImpl,
    GET_DEPARTEMENTS_USE_CASE,
    GetDepartementsUseCaseImpl,

    // Company
    GET_CURRENT_COMPANY_USE_CASE,
    GetCurrentCompanyUseCaseImpl,
    UPDATE_CURRENT_COMPANY_USE_CASE,
    UpdateCurrentCompanyUseCaseImpl,

    // Configuration
    GET_CONFIGURATIONS_BY_COMPANY_USE_CASE,
    GetConfigurationsByCompanyUseCaseImpl,
    SAVE_CONFIGURATION_USE_CASE,
    SaveConfigurationUseCaseImpl,

    // Currency
    GET_CURRENCIES_USE_CASE,
    GetCurrenciesUseCaseImpl,
    GET_SOCIETE_CURRENCIES_USE_CASE,
    GetSocieteCurrenciesUseCaseImpl,
    ADD_SOCIETE_CURRENCY_USE_CASE,
    AddSocieteCurrencyUseCaseImpl,
    TOGGLE_SOCIETE_CURRENCY_USE_CASE,
    ToggleSocieteCurrencyUseCaseImpl,
    SET_DEFAULT_SOCIETE_CURRENCY_USE_CASE,
    SetDefaultSocieteCurrencyUseCaseImpl,
    DELETE_SOCIETE_CURRENCY_USE_CASE,
    DeleteSocieteCurrencyUseCaseImpl,
    // Site
    GET_SITE_CURRENCIES_USE_CASE,
    GetSiteCurrenciesUseCaseImpl,
    ADD_SITE_CURRENCY_USE_CASE,
    AddSiteCurrencyUseCaseImpl,
    TOGGLE_SITE_CURRENCY_USE_CASE,
    ToggleSiteCurrencyUseCaseImpl,
    SET_DEFAULT_SITE_CURRENCY_USE_CASE,
    SetDefaultSiteCurrencyUseCaseImpl,
    DELETE_SITE_CURRENCY_USE_CASE,
    DeleteSiteCurrencyUseCaseImpl
} from './application/use-cases';

// Shared
import { APPLICATION_CONTEXT, LocalStorageContextAdapter } from '../_shared';

@NgModule({
    imports: [CommonModule],
    providers: [
        // Services (temporaire, à migrer vers repositories)
        SiteService,
        DepartementService,
        CompanyService,
        ConfigurationService,

        // Site Use Cases
        {
            provide: CREATE_SITE_USE_CASE,
            useClass: CreateSiteUseCaseImpl
        },
        {
            provide: UPDATE_SITE_USE_CASE,
            useClass: UpdateSiteUseCaseImpl
        },
        {
            provide: DELETE_SITE_USE_CASE,
            useClass: DeleteSiteUseCaseImpl
        },
        {
            provide: GET_SITES_USE_CASE,
            useClass: GetSitesUseCaseImpl
        },

        // Departement Use Cases
        {
            provide: CREATE_DEPARTEMENT_USE_CASE,
            useClass: CreateDepartementUseCaseImpl
        },
        {
            provide: GET_DEPARTEMENTS_USE_CASE,
            useClass: GetDepartementsUseCaseImpl
        },

        // Company Use Cases
        {
            provide: GET_CURRENT_COMPANY_USE_CASE,
            useClass: GetCurrentCompanyUseCaseImpl
        },
        {
            provide: UPDATE_CURRENT_COMPANY_USE_CASE,
            useClass: UpdateCurrentCompanyUseCaseImpl
        },

        // Configuration Use Cases
        {
            provide: GET_CONFIGURATIONS_BY_COMPANY_USE_CASE,
            useClass: GetConfigurationsByCompanyUseCaseImpl
        },
        {
            provide: SAVE_CONFIGURATION_USE_CASE,
            useClass: SaveConfigurationUseCaseImpl
        },

        // Currency Use Cases
        {
            provide: GET_CURRENCIES_USE_CASE,
            useClass: GetCurrenciesUseCaseImpl
        },
        {
            provide: GET_SOCIETE_CURRENCIES_USE_CASE,
            useClass: GetSocieteCurrenciesUseCaseImpl
        },
        {
            provide: ADD_SOCIETE_CURRENCY_USE_CASE,
            useClass: AddSocieteCurrencyUseCaseImpl
        },
        {
            provide: TOGGLE_SOCIETE_CURRENCY_USE_CASE,
            useClass: ToggleSocieteCurrencyUseCaseImpl
        },
        {
            provide: SET_DEFAULT_SOCIETE_CURRENCY_USE_CASE,
            useClass: SetDefaultSocieteCurrencyUseCaseImpl
        },
        {
            provide: DELETE_SOCIETE_CURRENCY_USE_CASE,
            useClass: DeleteSocieteCurrencyUseCaseImpl
        },

        // Site Currencies
        {
            provide: GET_SITE_CURRENCIES_USE_CASE,
            useClass: GetSiteCurrenciesUseCaseImpl
        },
        {
            provide: ADD_SITE_CURRENCY_USE_CASE,
            useClass: AddSiteCurrencyUseCaseImpl
        },
        {
            provide: TOGGLE_SITE_CURRENCY_USE_CASE,
            useClass: ToggleSiteCurrencyUseCaseImpl
        },
        {
            provide: SET_DEFAULT_SITE_CURRENCY_USE_CASE,
            useClass: SetDefaultSiteCurrencyUseCaseImpl
        },
        {
            provide: DELETE_SITE_CURRENCY_USE_CASE,
            useClass: DeleteSiteCurrencyUseCaseImpl
        },

        // ApplicationContext
        {
            provide: APPLICATION_CONTEXT,
            useClass: LocalStorageContextAdapter
        }
    ]
})
export class SettingModule { }
