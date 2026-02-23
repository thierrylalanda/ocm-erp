import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    CurrencyService
} from '../../../../../../application/services/currency.service';
import {
    CurrencyDto,
    SiteCurrencyDto,
    PaginatedResponse
} from '../../../../../../domain/dto/currency.dto';
import {
    GetSiteCurrenciesUseCase,
    AddSiteCurrencyUseCase,
    ToggleSiteCurrencyUseCase,
    SetDefaultSiteCurrencyUseCase,
    DeleteSiteCurrencyUseCase,
    GET_SITE_CURRENCIES_USE_CASE,
    ADD_SITE_CURRENCY_USE_CASE,
    TOGGLE_SITE_CURRENCY_USE_CASE,
    SET_DEFAULT_SITE_CURRENCY_USE_CASE,
    DELETE_SITE_CURRENCY_USE_CASE
} from '../../../../../../application/use-cases';
import { Inject } from '@angular/core';
import { ConfirmationModalComponent } from '../../../../../../../_shared/presentation/components/confirmation-modal/confirmation-modal.component';

declare var bootstrap: any;

@Component({
    selector: 'app-site-currencies',
    standalone: true,
    imports: [CommonModule, FormsModule, ConfirmationModalComponent],
    templateUrl: './site-currencies.component.html'
})
export class SiteCurrenciesComponent implements OnInit, OnChanges {
    @Input() siteId!: number;
    protected readonly Math = Math;

    siteCurrencies: SiteCurrencyDto[] = [];
    paginatedCurrencies: SiteCurrencyDto[] = [];
    allSystemCurrencies: CurrencyDto[] = [];
    filteredSystemCurrencies: CurrencyDto[] = [];
    currencySearchTerm: string = '';

    // Pagination
    currentPage = 0;
    pageSize = 10;
    totalPages = 0;
    totalElements = 0;

    // Loading states
    isLoading = false;
    isSaving = false;

    // Modal control
    showAddModal = false;
    isDeleteModalOpen = false;

    // Form data
    selectedCurrencyId: number | null = null;
    newCurrencyActive: boolean = true;
    newCurrencyDefault: boolean = false;

    // Delete Confirmation
    currencyToDelete: SiteCurrencyDto | null = null;
    deleteModalMessage: string = '';

    constructor(
        private currencyService: CurrencyService,
        @Inject(GET_SITE_CURRENCIES_USE_CASE) private getSiteCurrenciesUseCase: GetSiteCurrenciesUseCase,
        @Inject(ADD_SITE_CURRENCY_USE_CASE) private addSiteCurrencyUseCase: AddSiteCurrencyUseCase,
        @Inject(TOGGLE_SITE_CURRENCY_USE_CASE) private toggleSiteCurrencyUseCase: ToggleSiteCurrencyUseCase,
        @Inject(SET_DEFAULT_SITE_CURRENCY_USE_CASE) private setDefaultSiteCurrencyUseCase: SetDefaultSiteCurrencyUseCase,
        @Inject(DELETE_SITE_CURRENCY_USE_CASE) private deleteSiteCurrencyUseCase: DeleteSiteCurrencyUseCase
    ) { }

    ngOnInit(): void {
        // Initial load handled in ngOnChanges
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['siteId'] && this.siteId) {
            this.loadCurrencies();
        }
    }

    async loadCurrencies(): Promise<void> {
        this.isLoading = true;
        try {
            const result = await this.getSiteCurrenciesUseCase.execute(this.siteId);
            if (result.isSuccess) {
                this.siteCurrencies = result.value;
                this.updatePagination();
            } else {
                console.error(result.error);
            }
        } catch (e) {
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }

    updatePagination(): void {
        this.totalElements = this.siteCurrencies.length;
        this.totalPages = Math.ceil(this.totalElements / this.pageSize);
        const startIndex = this.currentPage * this.pageSize;
        this.paginatedCurrencies = this.siteCurrencies.slice(startIndex, startIndex + this.pageSize);
    }

    openAddModal(): void {
        this.showAddModal = true;
        this.selectedCurrencyId = null;
        this.newCurrencyActive = true;
        this.newCurrencyDefault = false;
        this.currencySearchTerm = '';
        this.loadSystemCurrencies();

        // Use bootstrap modal
        const modalElement = document.getElementById('add_site_currency_modal');
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
    }

    loadSystemCurrencies(search: string = ''): void {
        this.currencyService.getAllCurrencies(0, 100).subscribe((response: PaginatedResponse<CurrencyDto>) => {
            this.allSystemCurrencies = response.content;
            this.filterSystemCurrencies(search);
        });
    }

    onCurrencySearch(term: string): void {
        this.currencySearchTerm = term;
        this.filterSystemCurrencies(term);
    }

    filterSystemCurrencies(term: string): void {
        if (!term) {
            this.filteredSystemCurrencies = this.allSystemCurrencies;
        } else {
            const lowerTerm = term.toLowerCase();
            this.filteredSystemCurrencies = this.allSystemCurrencies.filter(c =>
                c.title.toLowerCase().includes(lowerTerm) ||
                c.code.toLowerCase().includes(lowerTerm)
            );
        }
    }

    selectCurrency(currency: CurrencyDto): void {
        this.selectedCurrencyId = currency.id;
        this.currencySearchTerm = `${currency.title} (${currency.code})`;
    }

    async addCurrency(): Promise<void> {
        if (!this.selectedCurrencyId) return;

        this.isSaving = true;
        const result = await this.addSiteCurrencyUseCase.execute({
            siteId: this.siteId,
            currencyId: this.selectedCurrencyId,
            actif: this.newCurrencyActive,
            isDefault: this.newCurrencyDefault
        });

        if (result.isSuccess) {
            // Close modal
            const modalElement = document.getElementById('add_site_currency_modal');
            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement);
                if (modal) modal.hide();
            }
            this.showAddModal = false;
            await this.loadCurrencies();
        } else {
            console.error(result.error);
            alert('Failed to add currency');
        }
        this.isSaving = false;
    }

    async toggleActive(currency: SiteCurrencyDto): Promise<void> {
        // Optimistic update
        const previousState = currency.actif;
        currency.actif = !currency.actif;

        const result = await this.toggleSiteCurrencyUseCase.execute(currency.id, currency.actif);
        if (!result.isSuccess) {
            // Revert on failure
            currency.actif = previousState;
            console.error(result.error);
        }
    }

    async setDefault(currency: SiteCurrencyDto): Promise<void> {
        if (currency.isDefault) return;

        const result = await this.setDefaultSiteCurrencyUseCase.execute(currency.id);
        if (result.isSuccess) {
            await this.loadCurrencies();
        } else {
            console.error(result.error);
        }
    }

    prepareDelete(currency: SiteCurrencyDto): void {
        this.currencyToDelete = currency;
        this.deleteModalMessage = `Êtes-vous sûr de vouloir supprimer ${currency.currencyTitle} (${currency.currencyCode}) des devises de ce site ?`;
        this.isDeleteModalOpen = true;
    }

    closeDeleteModal(): void {
        this.isDeleteModalOpen = false;
        this.currencyToDelete = null;
    }

    async onConfirmDelete(): Promise<void> {
        if (!this.currencyToDelete) return;

        const result = await this.deleteSiteCurrencyUseCase.execute(this.currencyToDelete.id);
        if (result.isSuccess) {
            this.closeDeleteModal();
            await this.loadCurrencies();
        } else {
            console.error(result.error);
            alert('Failed to delete currency');
            this.closeDeleteModal();
        }
    }

    // Pagination helpers
    get paginationPages(): number[] {
        const maxPages = 5;
        const pages: number[] = [];
        let startPage = Math.max(0, this.currentPage - Math.floor(maxPages / 2));
        let endPage = Math.min(this.totalPages - 1, startPage + maxPages - 1);

        if (endPage - startPage < maxPages - 1) {
            startPage = Math.max(0, endPage - maxPages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    previousPage(): void {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updatePagination();
        }
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.updatePagination();
        }
    }

    goToPage(page: number): void {
        this.currentPage = page;
        this.updatePagination();
    }
}
