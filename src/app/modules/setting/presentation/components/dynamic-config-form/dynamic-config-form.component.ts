import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfigurationService } from '../../../application/services/configuration.service';
import { ConfigurationParameterDto, PaginatedResponse } from '../../../domain/dto/configuration.dto';
import { ToasterService } from '../../../../../core/core.index';

@Component({
  selector: 'app-dynamic-config-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-config-form.component.html',
  styleUrls: ['./dynamic-config-form.component.scss']
})
export class DynamicConfigFormComponent implements OnInit {
  @Input() category!: string;

  private configService = inject(ConfigurationService);

  private toasterService = inject(ToasterService);
  private fb = inject(FormBuilder);

  configForm!: FormGroup;
  configurations: ConfigurationParameterDto[] = [];
  loading = true;

  ngOnInit() {
    this.loadConfigurations();
  }

  private loadConfigurations() {
    this.loading = true;
    this.configService.getConfigurationsByCategory(this.category, 0, 500).subscribe({
      next: (response: PaginatedResponse<ConfigurationParameterDto>) => {
        this.configurations = response.content;
        this.buildForm();
        this.loading = false;
      },
      error: (error) => {
        this.toasterService.typeError('Erreur lors du chargement des configurations', 'Erreur');
        this.loading = false;
      }
    });
  }

  private buildForm() {
    const formControls: { [key: string]: any } = {};

    this.configurations.forEach(config => {
      const validators = config.obligatoire ? [Validators.required] : [];

      // Set initial value based on type
      let initialValue: any = config.valeurDefaut;

      if (config.typeDonnee === 'BOOLEAN') {
        initialValue = config.valeurDefaut === 'true';
      } else if (config.typeDonnee === 'INTEGER' || config.typeDonnee === 'DECIMAL') {
        initialValue = config.valeurDefaut ? parseFloat(config.valeurDefaut) : null;
      }

      formControls[config.cle] = [initialValue, validators];
    });

    this.configForm = this.fb.group(formControls);
  }

  saveConfigurations() {
    if (this.configForm.valid) {
      const formValues = this.configForm.value;
      // TODO: Implement actual save logic via service
      this.configService.saveConfigurations(formValues).subscribe({
        next: (response) => {
          this.toasterService.typeSuccess('Configuration sauvegardée avec succès', 'Succès');
        },
        error: (error) => {
          this.toasterService.typeError('Erreur lors de la sauvegarde de la configuration', 'Erreur');
        }
      });
    }
  }

  resetForm() {
    this.buildForm();
  }
}
