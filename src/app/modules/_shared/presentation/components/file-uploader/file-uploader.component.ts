import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../../core/services/translation';

/**
 * Fichier uploadé
 */
export interface UploadedFile {
    /** Fichier natif */
    file: File;
    /** Nom du fichier */
    name: string;
    /** Taille en bytes */
    size: number;
    /** Type MIME */
    type: string;
    /** URL de prévisualisation (pour images) */
    preview?: string;
    /** Progression de l'upload (0-100) */
    progress?: number;
    /** Statut */
    status: 'pending' | 'uploading' | 'success' | 'error';
    /** Message d'erreur */
    error?: string;
}

/**
 * Configuration du FileUploader
 */
export interface FileUploaderConfig {
    /** Types de fichiers acceptés (ex: 'image/*', '.pdf', etc.) */
    accept?: string;
    /** Taille maximale par fichier (en bytes) */
    maxFileSize?: number;
    /** Nombre maximum de fichiers */
    maxFiles?: number;
    /** Autoriser multiple fichiers */
    multiple?: boolean;
    /** Activer le drag & drop */
    enableDragDrop?: boolean;
    /** Afficher la prévisualisation (pour images) */
    showPreview?: boolean;
    /** Upload automatique */
    autoUpload?: boolean;
    /** URL d'upload (si autoUpload) */
    uploadUrl?: string;
}

/**
 * Composant FileUploader avec drag & drop
 * 
 * Features:
 * - Drag & drop
 * - Multi-fichiers
 * - Progress bar
 * - Prévisualisation images
 * - Validation (type, taille)
 * - Upload automatique ou manuel
 * 
 * @example
 * ```html
 * <app-file-uploader
 *   [config]="uploaderConfig"
 *   (filesSelected)="onFilesSelected($event)"
 *   (uploadComplete)="onUploadComplete($event)">
 * </app-file-uploader>
 * ```
 */
@Component({
    selector: 'app-file-uploader',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
    /** Configuration */
    @Input() config: FileUploaderConfig = {
        multiple: true,
        enableDragDrop: true,
        showPreview: true,
        autoUpload: false,
        maxFileSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 10
    };

    /** Fichiers initiaux */
    @Input() initialFiles: UploadedFile[] = [];

    /** Désactiver l'uploader */
    @Input() disabled = false;

    /** Événement de sélection de fichiers */
    @Output() filesSelected = new EventEmitter<UploadedFile[]>();

    /** Événement de suppression de fichier */
    @Output() fileRemoved = new EventEmitter<UploadedFile>();

    /** Événement de fin d'upload */
    @Output() uploadComplete = new EventEmitter<UploadedFile[]>();

    /** Événement d'erreur */
    @Output() uploadError = new EventEmitter<{ file: UploadedFile; error: string }>();

    /** Référence à l'input file */
    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

    /** Liste des fichiers */
    files: UploadedFile[] = [];

    /** État drag over */
    isDragOver = false;

    ngOnInit(): void {
        if (this.initialFiles.length > 0) {
            this.files = [...this.initialFiles];
        }
    }

    /**
     * Ouvrir le sélecteur de fichiers
     */
    openFileSelector(): void {
        if (!this.disabled) {
            this.fileInput.nativeElement.click();
        }
    }

    /**
     * Gérer la sélection de fichiers
     */
    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            this.handleFiles(Array.from(input.files));
        }
        // Reset input pour permettre la sélection du même fichier
        input.value = '';
    }

    /**
     * Gérer le drag over
     */
    onDragOver(event: DragEvent): void {
        if (!this.disabled && this.config.enableDragDrop) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragOver = true;
        }
    }

    /**
     * Gérer le drag leave
     */
    onDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
    }

    /**
     * Gérer le drop
     */
    onDrop(event: DragEvent): void {
        if (!this.disabled && this.config.enableDragDrop) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragOver = false;

            const files = event.dataTransfer?.files;
            if (files) {
                this.handleFiles(Array.from(files));
            }
        }
    }

    /**
     * Traiter les fichiers sélectionnés
     */
    private handleFiles(fileList: File[]): void {
        // Vérifier le nombre maximum de fichiers
        if (this.config.maxFiles && this.files.length + fileList.length > this.config.maxFiles) {
            alert(`Maximum ${this.config.maxFiles} fichiers autorisés`);
            return;
        }

        const validFiles: UploadedFile[] = [];

        fileList.forEach(file => {
            // Valider le fichier
            const validation = this.validateFile(file);

            if (validation.valid) {
                const uploadedFile: UploadedFile = {
                    file,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    status: 'pending',
                    progress: 0
                };

                // Créer une prévisualisation pour les images
                if (this.config.showPreview && file.type.startsWith('image/')) {
                    this.createPreview(file, uploadedFile);
                }

                validFiles.push(uploadedFile);
            } else {
                this.uploadError.emit({
                    file: {
                        file,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        status: 'error',
                        error: validation.error
                    },
                    error: validation.error || 'Fichier invalide'
                });
            }
        });

        if (validFiles.length > 0) {
            this.files = [...this.files, ...validFiles];
            this.filesSelected.emit(validFiles);

            // Upload automatique si configuré
            if (this.config.autoUpload && this.config.uploadUrl) {
                validFiles.forEach(file => this.uploadFile(file));
            }
        }
    }

    /**
     * Valider un fichier
     */
    private validateFile(file: File): { valid: boolean; error?: string } {
        // Vérifier la taille
        if (this.config.maxFileSize && file.size > this.config.maxFileSize) {
            return {
                valid: false,
                error: `Fichier trop volumineux (max ${this.formatFileSize(this.config.maxFileSize)})`
            };
        }

        // Vérifier le type
        if (this.config.accept) {
            const acceptedTypes = this.config.accept.split(',').map(t => t.trim());
            const isAccepted = acceptedTypes.some(type => {
                if (type.startsWith('.')) {
                    return file.name.toLowerCase().endsWith(type.toLowerCase());
                } else if (type.endsWith('/*')) {
                    return file.type.startsWith(type.replace('/*', ''));
                } else {
                    return file.type === type;
                }
            });

            if (!isAccepted) {
                return {
                    valid: false,
                    error: `Type de fichier non autorisé`
                };
            }
        }

        return { valid: true };
    }

    /**
     * Créer une prévisualisation pour une image
     */
    private createPreview(file: File, uploadedFile: UploadedFile): void {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedFile.preview = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    /**
     * Uploader un fichier
     */
    private uploadFile(uploadedFile: UploadedFile): void {
        if (!this.config.uploadUrl) return;

        uploadedFile.status = 'uploading';
        uploadedFile.progress = 0;

        const formData = new FormData();
        formData.append('file', uploadedFile.file);

        const xhr = new XMLHttpRequest();

        // Progress
        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                uploadedFile.progress = Math.round((e.loaded / e.total) * 100);
            }
        });

        // Success
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                uploadedFile.status = 'success';
                uploadedFile.progress = 100;
                this.uploadComplete.emit([uploadedFile]);
            } else {
                uploadedFile.status = 'error';
                uploadedFile.error = 'Erreur lors de l\'upload';
                this.uploadError.emit({ file: uploadedFile, error: uploadedFile.error });
            }
        });

        // Error
        xhr.addEventListener('error', () => {
            uploadedFile.status = 'error';
            uploadedFile.error = 'Erreur réseau';
            this.uploadError.emit({ file: uploadedFile, error: uploadedFile.error });
        });

        xhr.open('POST', this.config.uploadUrl);
        xhr.send(formData);
    }

    /**
     * Supprimer un fichier
     */
    removeFile(file: UploadedFile): void {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
            this.fileRemoved.emit(file);
        }
    }

    /**
     * Uploader tous les fichiers en attente
     */
    uploadAll(): void {
        if (!this.config.uploadUrl) return;

        this.files
            .filter(f => f.status === 'pending')
            .forEach(f => this.uploadFile(f));
    }

    /**
     * Supprimer tous les fichiers
     */
    clearAll(): void {
        this.files = [];
    }

    /**
     * Obtenir les fichiers
     */
    getFiles(): UploadedFile[] {
        return this.files;
    }

    /**
     * Vérifier s'il y a des fichiers en attente
     */
    hasPendingFiles(): boolean {
        return this.files.some(f => f.status === 'pending');
    }

    /**
     * Formater la taille d'un fichier
     */
    formatFileSize(bytes: number): string {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    /**
     * Obtenir l'icône pour un type de fichier
     */
    getFileIcon(file: UploadedFile): string {
        if (file.type.startsWith('image/')) return 'image';
        if (file.type.startsWith('video/')) return 'video';
        if (file.type.startsWith('audio/')) return 'music';
        if (file.type.includes('pdf')) return 'document-text';
        if (file.type.includes('word')) return 'document-text';
        if (file.type.includes('excel') || file.type.includes('spreadsheet')) return 'document-text';
        if (file.type.includes('zip') || file.type.includes('rar')) return 'archive';
        return 'document';
    }
}
