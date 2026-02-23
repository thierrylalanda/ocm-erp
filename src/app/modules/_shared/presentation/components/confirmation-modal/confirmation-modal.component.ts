import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [id]="modalId" class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" [ngClass]="modalSizeClass">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div class="mb-3" *ngIf="icon || imageUrl">
                <i *ngIf="icon" [class]="icon" [ngClass]="iconColor" class="fs-1"></i>
                <img *ngIf="imageUrl" [src]="imageUrl" alt="Confirmation Image" class="img-fluid" style="max-height: 80px;">
            </div>
            <h6 class="mb-1">{{ title }}</h6>
            <p class="mb-3">{{ message }}</p>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-white me-3" (click)="onCancel()">{{ cancelText }}</button>
                <button type="button" class="btn" [ngClass]="confirmButtonClass" (click)="onConfirm()">{{ confirmText }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" *ngIf="isOpen"></div>
  `,
  styles: []
})
export class ConfirmationModalComponent {
  @Input() modalId: string = 'confirmation_modal';
  @Input() title: string = 'Confirmation';
  @Input() message: string = 'Are you sure you want to proceed?';
  @Input() confirmText: string = 'Confirm';
  @Input() cancelText: string = 'Cancel';
  @Input() type: 'danger' | 'warning' | 'primary' | 'success' = 'danger';
  @Input() icon: string = '';
  @Input() iconColor: string = 'text-danger';
  @Input() imageUrl: string = 'assets/img/icons/delete.svg';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() isOpen: boolean = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  get confirmButtonClass(): string {
    switch (this.type) {
      case 'danger': return 'btn-danger';
      case 'warning': return 'btn-warning';
      case 'success': return 'btn-success';
      default: return 'btn-primary';
    }
  }

  get modalSizeClass(): string {
    switch (this.size) {
      case 'sm': return 'modal-sm';
      case 'lg': return 'modal-lg';
      case 'xl': return 'modal-xl';
      default: return ''; // md is default, no class needed or normal width
    }
  }

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
