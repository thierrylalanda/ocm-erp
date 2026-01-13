import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../../../core/core.index';

@Component({
  selector: 'app-language-settings',
  imports:[CommonModule,RouterLink],
  templateUrl: './language-settings.component.html',
  styleUrls: [ './language-settings.component.scss']
})
export class LanguageSettingsComponent {
routes=routes
}
