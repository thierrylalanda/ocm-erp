import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GET_CURRENCIES_USE_CASE, GetCurrenciesUseCase,
  GET_SOCIETE_CURRENCIES_USE_CASE, GetSocieteCurrenciesUseCase,
  ADD_SOCIETE_CURRENCY_USE_CASE, AddSocieteCurrencyUseCase,
  TOGGLE_SOCIETE_CURRENCY_USE_CASE, ToggleSocieteCurrencyUseCase,
  SET_DEFAULT_SOCIETE_CURRENCY_USE_CASE, SetDefaultSocieteCurrencyUseCase,
  DELETE_SOCIETE_CURRENCY_USE_CASE, DeleteSocieteCurrencyUseCase,
  GET_CURRENT_COMPANY_USE_CASE, GetCurrentCompanyUseCase
} from '../../../../application/use-cases';
import { CurrencyDto, SocieteCurrencyDto } from '../../../../domain/dto/currency.dto';
import { SettingModule } from '../../../../setting.module';
import { APPLICATION_CONTEXT, ApplicationContext, ConfirmationModalComponent } from '../../../../../_shared';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../../../core/core.index';

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [CommonModule, SettingModule, FormsModule, ConfirmationModalComponent],
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: SocieteCurrencyDto[] = [];
  allCurrencies: SocieteCurrencyDto[] = []; // Store all currencies for client-side pagination
  systemCurrencies: CurrencyDto[] = []; // For the add modal
  loading = false;
  societeId: number | null = null;

  // Pagination
  page = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;
  pages: number[] = [];

  // New currency form data
  selectedCurrencyId: number | null = null;
  selectedCurrencyTitle: string = 'Select a currency';
  searchTerm: string = '';
  filteredSystemCurrencies: CurrencyDto[] = [];
  formData = {
    actif: true,
    isDefault: false
  };

  // Delete confirmation
  currencyToDelete: SocieteCurrencyDto | null = null;
  deleteModalMessage: string = '';
  isDeleteModalOpen = false;

  constructor(
    @Inject(GET_SOCIETE_CURRENCIES_USE_CASE) private getSocieteCurrenciesUseCase: GetSocieteCurrenciesUseCase,
    @Inject(ADD_SOCIETE_CURRENCY_USE_CASE) private addSocieteCurrencyUseCase: AddSocieteCurrencyUseCase,
    @Inject(TOGGLE_SOCIETE_CURRENCY_USE_CASE) private toggleSocieteCurrencyUseCase: ToggleSocieteCurrencyUseCase,
    @Inject(SET_DEFAULT_SOCIETE_CURRENCY_USE_CASE) private setDefaultSocieteCurrencyUseCase: SetDefaultSocieteCurrencyUseCase,
    @Inject(DELETE_SOCIETE_CURRENCY_USE_CASE) private deleteSocieteCurrencyUseCase: DeleteSocieteCurrencyUseCase,
    @Inject(GET_CURRENCIES_USE_CASE) private getCurrenciesUseCase: GetCurrenciesUseCase,
    @Inject(GET_CURRENT_COMPANY_USE_CASE) private getCurrentCompanyUseCase: GetCurrentCompanyUseCase,
    @Inject(APPLICATION_CONTEXT) private context: ApplicationContext,
    private authService: AuthService
  ) {

  }

  async ngOnInit(): Promise<void> {
    const user = this.authService.user as any;
    this.societeId = user.societeId;
    if (this.societeId) {
      await this.loadCurrencies();
    } else {
      console.error('No societeId found in context');
    }
  }

  async loadCurrencies(): Promise<void> {
    if (!this.societeId) return;

    this.loading = true;
    const result = await this.getSocieteCurrenciesUseCase.execute(this.societeId);
    this.loading = false;

    if (result.isSuccess) {
      this.allCurrencies = result.value;
      this.totalElements = this.allCurrencies.length;
      this.updatePagination();
    } else {
      console.error(result.error);
    }
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.totalElements / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);

    const startIndex = this.page * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.currencies = this.allCurrencies.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.page = page;
      this.updatePagination();
    }
  }

  async loadSystemCurrencies(): Promise<void> {
    const result = await this.getCurrenciesUseCase.execute({ page: 0, size: 1000 }); // Get all for dropdown
    if (result.isSuccess) {
      this.systemCurrencies = result.value.content;
      this.filteredSystemCurrencies = this.systemCurrencies;
    }
  }

  filterCurrencies(): void {
    if (!this.searchTerm) {
      this.filteredSystemCurrencies = this.systemCurrencies;
      return;
    }
    const lowerTerm = this.searchTerm.toLowerCase();
    this.filteredSystemCurrencies = this.systemCurrencies.filter(c =>
      c.title.toLowerCase().includes(lowerTerm) ||
      c.code.toLowerCase().includes(lowerTerm)
    );
  }

  selectCurrency(currency: CurrencyDto): void {
    this.selectedCurrencyId = currency.id;
    this.selectedCurrencyTitle = `${currency.title} (${currency.code})`;
  }

  async addCurrency(): Promise<void> {
    if (!this.societeId || !this.selectedCurrencyId) return;

    const data = {
      societeId: this.societeId,
      currencyId: this.selectedCurrencyId,
      actif: this.formData.actif,
      isDefault: this.formData.isDefault
    };

    const result = await this.addSocieteCurrencyUseCase.execute(data);

    if (result.isSuccess) {
      await this.loadCurrencies();
      // Reset form
      this.selectedCurrencyId = null;
      this.selectedCurrencyTitle = 'Select a currency';
      this.formData = { actif: true, isDefault: false };
    } else {
      console.error(result.error);
    }
  }

  async toggleActive(currency: SocieteCurrencyDto): Promise<void> {
    const result = await this.toggleSocieteCurrencyUseCase.execute(currency.id, !currency.actif);
    if (result.isSuccess) {
      // Optimistic update or reload
      currency.actif = !currency.actif;
      // Also update in allCurrencies if it's a different reference, though slice serves shallow copies so it might be same ref
      const found = this.allCurrencies.find(c => c.id === currency.id);
      if (found) found.actif = currency.actif;
    } else {
      console.error(result.error);
      // Revert checkbox state on error
      currency.actif = !currency.actif;
    }
  }

  async setDefault(currency: SocieteCurrencyDto): Promise<void> {
    if (currency.isDefault) return; // Already default

    const result = await this.setDefaultSocieteCurrencyUseCase.execute(currency.id);
    if (result.isSuccess) {
      await this.loadCurrencies(); // Reload to update all flags
    } else {
      console.error(result.error);
    }
  }

  prepareDelete(currency: SocieteCurrencyDto): void {
    this.currencyToDelete = currency;
    this.deleteModalMessage = `Are you sure you want to remove ${currency.currencyTitle} (${currency.currencyCode}) from your company currencies?`;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.currencyToDelete = null;
  }

  async onConfirmDelete(): Promise<void> {
    if (!this.currencyToDelete) return;

    const result = await this.deleteSocieteCurrencyUseCase.execute(this.currencyToDelete.id);
    if (result.isSuccess) {
      this.closeDeleteModal();
      await this.loadCurrencies();
    } else {
      console.error(result.error);
      alert('Failed to delete currency');
      this.closeDeleteModal();
    }
  }
}
