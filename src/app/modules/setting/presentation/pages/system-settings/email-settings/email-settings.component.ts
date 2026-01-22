import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CreateEmailConfigRequestDto, 
  EmailConfigResponseDto,
  UpdateEmailConfigRequestDto,
  SendTestEmailRequestDto
} from '../../../../domain/dto/email-config.dto';
import { EmailConfigService } from '../../../../application/services/email-config.service';
import { AuthService, routes, ToasterService } from '../../../../../../core/core.index';

@Component({
  selector: 'app-email-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {
  private emailConfigService = inject(EmailConfigService);
  private authService = inject(AuthService);
  private toasterService = inject(ToasterService);

  // États
  loading = false;
  saving = false;
  testing = false;
  error: string | null = null;
  success: string | null = null;

  // Données
  emailConfigs: EmailConfigResponseDto[] = [];
  currentConfig: EmailConfigResponseDto | null = null;
  
  // Formulaire
  formData: CreateEmailConfigRequestDto = {
    host: '',
    port: 587,
    auth: 1,
    authType: 'PLAIN',
    username: '',
    passwordTxt: '',
    fromAdress: '',
    fromName: '',
    societeId: 0,
    smtpSecure: 'TLS',
    isActive: true,
    testEmail: ''
  };

  testEmailData: SendTestEmailRequestDto = {
    emailAddress: '',
    configId: undefined
  };

  // Options
  smtpSecureOptions: Array<{ value: 'SSL' | 'TLS' | 'NONE', label: string }> = this.emailConfigService.getSmtpSecureOptions();
  authTypeOptions: Array<{ value: string, label: string }> = this.emailConfigService.getAuthTypeOptions();
routes=routes;
  // Modals
  showConfigModal = false;
  showTestModal = false;
  showDeleteModal = false;
  configToDelete: EmailConfigResponseDto | null = null;
  isEditMode = false;

  ngOnInit(): void {
    this.loadEmailConfigs();
    this.initializeForm();
  }

  /**
   * Charge les configurations email
   */
  loadEmailConfigs(): void {
    this.loading = true;
    this.error = null;

    this.emailConfigService.getEmailConfigs(0, 100, 'id,desc').subscribe({
      next: (response) => {
        this.emailConfigs = response.content || [];
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des configurations email:', error);
        this.error = error.message || 'Erreur lors du chargement des configurations email';
        this.loading = false;
      }
    });
  }

  /**
   * Initialise le formulaire avec les données de l'utilisateur
   */
  private initializeForm(): void {
    const user = this.authService.user as any;
    if (user) {
      this.formData.societeId = user.societeId || 0;
      this.formData.fromName = user.nom || user.nomPrenom || '';
      this.formData.fromAdress = user.email || '';
      this.formData.username = user.email || '';
    }
  }

  /**
   * Ouvre le modal pour créer une nouvelle configuration
   */
  openCreateModal(): void {
    this.isEditMode = false;
    const user = this.authService.user as any;
    this.formData = {
      host: '',
      port: 587,
      auth: 1,
      authType: 'PLAIN',
      username: user?.email || '',
      passwordTxt: '',
      fromAdress: user?.email || '',
      fromName: user?.nom || user?.nomPrenom || '',
      societeId: user?.societeId || 0,
      smtpSecure: 'TLS',
      isActive: true,
      testEmail: ''
    };
    this.showConfigModal = true;
  }

  /**
   * Ouvre le modal pour éditer une configuration existante
   */
  openEditModal(config: EmailConfigResponseDto): void {
    this.isEditMode = true;
    this.currentConfig = config;
    
    this.formData = {
      host: config.host,
      port: config.port,
      auth: config.auth,
      authType: config.authType,
      username: config.username,
      passwordTxt: '', // Mot de passe non inclus dans la réponse
      fromAdress: config.fromAdress,
      fromName: config.fromName,
      societeId: config.societeId,
      smtpSecure: config.smtpSecure,
      isActive: config.isActive,
      testEmail: config.testEmail || ''
    };
    
    this.showConfigModal = true;
  }

  /**
   * Ouvre le modal de confirmation de suppression
   */
  openDeleteModal(config: EmailConfigResponseDto): void {
    this.configToDelete = config;
    this.showDeleteModal = true;
  }

  /**
   * Ouvre le modal d'envoi d'email de test
   */
  openTestModal(config?: EmailConfigResponseDto): void {
    this.testEmailData = {
      emailAddress: '',
      configId: config?.id
    };
    this.showTestModal = true;
  }

  /**
   * Ferme tous les modals
   */
  closeModals(): void {
    this.showConfigModal = false;
    this.showTestModal = false;
    this.showDeleteModal = false;
    this.configToDelete = null;
    this.currentConfig = null;
    setTimeout(()=>{
     this.error = null;
    this.success = null;
    },5000);
    
  }

  /**
   * Soumet le formulaire de configuration
   */
  submitConfig(): void {
    // Validation
    const errors = this.emailConfigService.validateEmailConfig(this.formData);
    if (errors.length > 0) {
      this.error = errors.join(', ');
      return;
    }

    this.saving = true;
    this.error = null;
    this.success = null;

    if (this.isEditMode && this.currentConfig) {
      // Mise à jour
      const updateData: UpdateEmailConfigRequestDto = {
        host: this.formData.host,
        port: this.formData.port,
        auth: this.formData.auth,
        authType: this.formData.authType,
        username: this.formData.username,
        passwordTxt: this.formData.passwordTxt || undefined,
        fromAdress: this.formData.fromAdress,
        fromName: this.formData.fromName,
        smtpSecure: this.formData.smtpSecure,
        isActive: this.formData.isActive,
        testEmail: this.formData.testEmail || undefined
      };

      this.emailConfigService.updateEmailConfig(this.currentConfig.id, updateData).subscribe({
        next: (response) => {
          this.success = 'Configuration mise à jour avec succès';
          this.loadEmailConfigs();
          this.closeModals();
          this.saving = false;
          this.toasterService.typeSuccess(this.success,"Mis a jour config");
        },
        error: (error: any) => {
          console.error('Erreur lors de la mise à jour:', error);
          this.error = error.message || 'Erreur lors de la mise à jour';
          this.saving = false;
          this.closeModals();
          this.toasterService.typeError(this.error!,"Mise a jour config");
        }
      });
    } else {
      // Création
      this.emailConfigService.createEmailConfig(this.formData).subscribe({
        next: (response) => {
          this.success = 'Configuration créée avec succès';
          this.loadEmailConfigs();
          this.closeModals();
          this.saving = false;
          this.toasterService.typeSuccess(this.success,"Creation Config Email");
        },
        error: (error: any) => {
          console.error('Erreur lors de la création:', error);
          this.error = error.message || 'Erreur lors de la création';
          this.saving = false;
          this.closeModals();
          this.toasterService.typeError(this.error!,"Creation Config Email");
        }
      });
    }
  }

  /**
   * Supprime une configuration
   */
  deleteConfig(): void {
    if (!this.configToDelete) return;

    this.saving = true;
    this.emailConfigService.deleteEmailConfig(this.configToDelete.id).subscribe({
      next: () => {
        this.success = 'Configuration supprimée avec succès';
        this.loadEmailConfigs();
        this.closeModals();
        this.saving = false;
          this.toasterService.typeSuccess(this.success,"Suppression Config");

      },
        error: (error: any) => {
          this.error = error.message || 'Erreur lors de la suppression';
          this.saving = false;
          this.toasterService.typeError(this.error!,"Suppression Config");
        }
    });
  }

  /**
   * Envoie un email de test
   */
  sendTestEmail(): void {
    if (!this.testEmailData.emailAddress) {
      this.error = 'Veuillez saisir une adresse email';
      return;
    }

    this.testing = true;
    this.error = null;
    this.success = null;

    this.emailConfigService.sendTestEmail(this.testEmailData).subscribe({
      next: (response) => {
        this.success = response.message || 'Email de test envoyé avec succès';
        this.testing = false;
        this.toasterService.typeSuccess(this.success,"Email Test");
        setTimeout(() => {
          this.closeModals();
        }, 2000);
      },
        error: (error: any) => {
          console.error('Erreur lors de l\'envoi de l\'email de test:', error);
          this.error = error.message || 'Erreur lors de l\'envoi de l\'email de test';
          this.testing = false;
          this.toasterService.typeError(this.error!,"Email Test");
        }
    });
  }

  /**
   * Bascule l'état actif/inactif d'une configuration
   */
  toggleConfigStatus(config: EmailConfigResponseDto, event: Event): void {
    event.stopPropagation();
    const target = event.target as HTMLInputElement;
    const isActive = target.checked;

    this.emailConfigService.toggleEmailConfigStatus(config.id, isActive).subscribe({
      next: (response) => {
        config.isActive = response.isActive;
        this.success = `Configuration ${isActive ? 'activée' : 'désactivée'} avec succès`;
        this.toasterService.typeSuccess(this.success,"Status Config");
      },
        error: (error: any) => {
          console.error('Erreur lors du changement de statut:', error);
          this.error = error.message || 'Erreur lors du changement de statut';
          // Revert the checkbox
          target.checked = !isActive;
          this.toasterService.typeError(this.error!,"Status config");
        }
    });
  }

  /**
   * Formate la date pour l'affichage
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  /**
   * Obtient le badge de statut
   */
  getStatusBadge(config: EmailConfigResponseDto): { class: string, text: string } {
    if (config.isActive) {
      return { class: 'badge-soft-success', text: 'Connecté' };
    } else {
      return { class: 'badge-soft-primary', text: 'Non connecté' };
    }
  }

  /**
   * Obtient l'icône en fonction du type de configuration
   */
  getConfigIcon(config: EmailConfigResponseDto): string {
    const host = config.host.toLowerCase();
    if (host.includes('gmail') || host.includes('google')) {
      return 'assets/img/settings/gmail.svg';
    } else if (host.includes('outlook') || host.includes('office365') || host.includes('microsoft')) {
      return 'assets/img/settings/outlook.svg';
    } else if (host.includes('yahoo')) {
      return 'assets/img/settings/yahoo.svg';
    } else if (host.includes('sendgrid')) {
      return 'assets/img/settings/sendgrid.svg';
    } else {
      return 'assets/img/settings/smtp.svg';
    }
  }

  /**
   * Obtient le nom d'affichage du type de configuration
   */
  getConfigType(config: EmailConfigResponseDto): string {
    const host = config.host.toLowerCase();
    if (host.includes('gmail') || host.includes('google')) {
      return 'Gmail';
    } else if (host.includes('outlook') || host.includes('office365') || host.includes('microsoft')) {
      return 'Outlook/Office 365';
    } else if (host.includes('yahoo')) {
      return 'Yahoo Mail';
    } else if (host.includes('sendgrid')) {
      return 'SendGrid';
    } else {
      return 'SMTP Personnalisé';
    }
  }
}
