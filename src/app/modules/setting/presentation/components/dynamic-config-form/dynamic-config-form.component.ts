import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfigurationService } from '../../../application/services/configuration.service';
import { ConfigurationParameter } from '../../../domain/entities/configuration-parameter';

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
  private fb = inject(FormBuilder);

  configForm!: FormGroup;
  configurations: ConfigurationParameter[] = [];
  loading = true;

  ngOnInit() {
    this.loadConfigurations();
  }

  private loadConfigurations() {
    this.loading = true;
    this.configService.getConfigurationsByCategory(this.category).subscribe({
      next: (configs) => {
        this.configurations = configs;
        this.buildForm();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading configurations:', error);
        this.loading = false;
      }
    });
  }

  private buildForm() {
    const formControls: { [key: string]: any } = {};

    this.configurations.forEach(config => {
      const validators = config.mpObligatoire ? [Validators.required] : [];

      // Set initial value based on type
      let initialValue: any = config.mpValeurDefaut;

      if (config.mpTypeDonnee === 'BOOLEAN') {
        initialValue = config.mpValeurDefaut === 'true';
      } else if (config.mpTypeDonnee === 'INTEGER' || config.mpTypeDonnee === 'DECIMAL') {
        initialValue = config.mpValeurDefaut ? parseFloat(config.mpValeurDefaut) : null;
      }

      formControls[config.mpCle] = [initialValue, validators];
    });

    this.configForm = this.fb.group(formControls);
  }

  saveConfigurations() {
    if (this.configForm.valid) {
      const formValues = this.configForm.value;
      console.log('Saving configurations:', formValues);
      // TODO: Implement actual save logic via service
      this.configService.saveConfigurations(formValues).subscribe({
        next: (response) => {
          console.log('Configuration saved successfully:', response);
        },
        error: (error) => {
          console.error('Error saving configuration:', error);
        }
      });
    }
  }

  resetForm() {
    this.buildForm();
  }
}
