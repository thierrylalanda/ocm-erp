import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public showModulesModal = false;
  public moduleSearchQuery = '';

  public toggleModulesModal(): void {
    this.showModulesModal = !this.showModulesModal;
    if (!this.showModulesModal) {
      this.moduleSearchQuery = ''; // Reset search when closing
    }
  }

  public get filteredModules() {
    if (!this.moduleSearchQuery) return this.modules;
    const query = this.moduleSearchQuery.toLowerCase();
    return this.modules.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query)
    );
  }

  public modules = [
    { name: 'Structure', icon: 'fa-sitemap', color: '#4facfe', route: '/app/societe', description: 'Sociétés, sites et départements' },
    { name: 'Sécurité', icon: 'fa-shield-alt', color: '#30cfd0', route: '/app/manage-users/users', description: 'RBAC, rôles et permissions' },
    { name: 'Workflows', icon: 'fa-project-diagram', color: '#6a11cb', route: '/coming-soon', description: 'Standardisation des processus' },
    { name: 'Documents', icon: 'fa-folder-open', color: '#a8caba', route: '/coming-soon', description: 'Gestion électronique de documents' },
    { name: 'Stock', icon: 'fa-boxes', color: '#00c6fb', route: '/app/stock/dashboard', description: 'Inventaire et mouvements' },
    { name: 'Comptabilité', icon: 'fa-balance-scale', color: '#f83600', route: '/reports/accounting-report', description: 'Normes OHADA et bilans' },
    { name: 'Ventes', icon: 'fa-shopping-cart', color: '#4facfe', route: '/invoices/invoice-list', description: 'Devis et facturation clients' },
    { name: 'Trésorerie', icon: 'fa-university', color: '#667eea', route: '/finance/bank-accounts/bank-accounts-list', description: 'Banques et transactions' },
    { name: 'Production', icon: 'fa-industry', color: '#ff0844', route: '/coming-soon', description: 'Nomenclatures et ordres de fab.' },
    { name: 'Paie & RH', icon: 'fa-user-tie', color: '#fa709a', route: '/coming-soon', description: 'Employés, contrats et bulletins' },
    { name: 'Achats', icon: 'fa-shopping-bag', color: '#43e97b', route: '/purchases/purchase-list', description: 'Commandes fournisseurs' },
    { name: 'Caisse', icon: 'fa-cash-register', color: '#f9d423', route: '/coming-soon', description: 'Ventes comptoir et sessions' },
    { name: 'Budgets', icon: 'fa-chart-pie', color: '#f093fb', route: '/coming-soon', description: 'Planification et suivi' },
    { name: 'Support', icon: 'fa-headset', color: '#6a11cb', route: '/tickets/ticket-list', description: 'Tickets et plaintes clients' },
    { name: 'Flotte', icon: 'fa-car', color: '#48c6ef', route: '/coming-soon', description: 'Parc automobile' },
    { name: 'IT Assets', icon: 'fa-laptop', color: '#00c6fb', route: '/coming-soon', description: 'Parc informatique' },
    { name: 'Géo-Commerce', icon: 'fa-map-marked-alt', color: '#43e97b', route: '/coming-soon', description: 'Facturation géolocalisée' }
  ];

  public quickActions = [
    { label: 'Nouveau Client', icon: 'fa-user-plus', color: '#4facfe', route: '/customers/add-customer' },
    { label: 'Nouveau Produit', icon: 'fa-plus-circle', color: '#43e97b', route: '/product-service/add-products' },
    { label: 'Créer une facture', icon: 'fa-file-invoice', color: '#fa709a', route: '/invoices/add-invoice' },
    { label: 'Nouveau Ticket', icon: 'fa-headset', color: '#f83600', route: '/tickets/ticket-list' }
  ];

  public dashboardShortcuts = [
    { name: 'C.A. du mois', value: '45,280', icon: 'fa-euro-sign', color: '#4caf50', trend: '+12%' },
    { name: 'Commandes', value: '128', icon: 'fa-clipboard-list', color: '#2196f3', trend: '+5%' },
    { name: 'Alertes Stock', value: '12', icon: 'fa-exclamation-triangle', color: '#f44336', trend: 'Priorité' },
    { name: 'Factures Impayées', value: '8', icon: 'fa-file-circle-exclamation', color: '#ff9800', trend: '-2%' },
  ];

  public firstSteps = [
    { title: 'Configurer ma société', description: 'Informations légales et logo.', completed: true, route: '/customer/settings/account-settings' },
    { title: 'Ajouter un produit', description: 'Créez vos articles et services.', completed: false, route: '/product-service/add-products' },
    { title: 'Inviter mon équipe', description: 'Gérez les accès collaborateurs.', completed: false, route: '/manage-users/users' },
    { title: 'Paramètres facturation', description: 'Personnalisez vos documents.', completed: false, route: '/invoices/invoice-list' },
    { title: 'Première vente', description: 'Créez votre premier devis.', completed: false, route: '/invoices/add-invoice' },
  ];

  public stats = [
    { label: 'Clients actifs', value: '1,284', icon: 'fa-users', color: '#2196f3' },
    { label: 'Taux de conversion', value: '64%', icon: 'fa-chart-line', color: '#4caf50' },
  ];

  public news = [
    { title: 'Mise à jour v2.4', date: 'Hier', content: 'Optimisation du module Stock et nouveaux rapports.', icon: 'fa-newspaper' },
    { title: 'Webinaire CRM', date: '15 Fév', content: 'Découvrez comment booster vos ventes.', icon: 'fa-video' },
  ];
}
