/**
 * ViewModel for Users Component
 * 
 * Contains all presentation logic (formatting, styling, calculations)
 * that doesn't belong in the component itself.
 * 
 * This keeps the component thin and focused on orchestration.
 */
export class UsersViewModel {
    /**
     * Format a date string for display
     */
    formatDate(dateString: string | Date | null): string {
        if (!dateString) {
            return 'N/A';
        }

        try {
            const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

            if (isNaN(date.getTime())) {
                return 'Date invalide';
            }

            return date.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Date invalide';
        }
    }

    /**
     * Get CSS class for user status badge
     */
    getStatusClass(status: string): string {
        const statusMap: Record<string, string> = {
            'ACTIF': 'badge bg-success',
            'INACTIF': 'badge bg-danger',
            'SUSPENDU': 'badge bg-warning',
            'BLOQUE': 'badge bg-dark',
            'EN_ATTENTE': 'badge bg-info'
        };

        return statusMap[status] || 'badge bg-secondary';
    }

    /**
     * Get human-readable text for user status
     */
    getStatusText(status: string): string {
        const textMap: Record<string, string> = {
            'ACTIF': 'Actif',
            'INACTIF': 'Inactif',
            'SUSPENDU': 'Suspendu',
            'BLOQUE': 'Bloqué',
            'EN_ATTENTE': 'En attente'
        };

        return textMap[status] || status;
    }

    /**
     * Calculate page numbers for pagination
     */
    getPageNumbers(currentPage: number, totalPages: number, maxVisible: number = 5): number[] {
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i);
        }

        const half = Math.floor(maxVisible / 2);
        let startPage = Math.max(0, currentPage - half);
        let endPage = Math.min(totalPages - 1, startPage + maxVisible - 1);

        // Adjust if we're near the end
        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(0, endPage - maxVisible + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }

    /**
     * Check if user can be activated
     */
    canActivate(status: string): boolean {
        return status !== 'ACTIF';
    }

    /**
     * Check if user can be deactivated
     */
    canDeactivate(status: string): boolean {
        return status === 'ACTIF';
    }

    /**
     * Get icon for user status
     */
    getStatusIcon(status: string): string {
        const iconMap: Record<string, string> = {
            'ACTIF': 'check-circle',
            'INACTIF': 'x-circle',
            'SUSPENDU': 'pause-circle',
            'BLOQUE': 'lock',
            'EN_ATTENTE': 'clock'
        };

        return iconMap[status] || 'help-circle';
    }

    /**
     * Format phone number for display
     */
    formatPhoneNumber(phone: string): string {
        if (!phone) {
            return 'N/A';
        }

        // Remove all non-digit characters except +
        const cleaned = phone.replace(/[^\d+]/g, '');

        // Format with spaces
        if (cleaned.startsWith('+')) {
            const countryCode = cleaned.substring(0, 4);
            const rest = cleaned.substring(4);
            return `${countryCode} ${rest.match(/.{1,3}/g)?.join(' ') || rest}`;
        }

        return cleaned.match(/.{1,3}/g)?.join(' ') || cleaned;
    }

    /**
     * Get initials from name for avatar
     */
    getInitials(name: string): string {
        if (!name) {
            return '?';
        }

        const parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }

        return name.substring(0, 2).toUpperCase();
    }

    /**
     * Get color for avatar based on name
     */
    getAvatarColor(name: string): string {
        const colors = [
            '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
            '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
            '#f39c12', '#e67e22', '#e74c3c', '#95a5a6', '#d35400'
        ];

        const hash = name.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        return colors[Math.abs(hash) % colors.length];
    }

    /**
     * Truncate text with ellipsis
     */
    truncate(text: string, maxLength: number = 50): string {
        if (!text || text.length <= maxLength) {
            return text;
        }

        return text.substring(0, maxLength) + '...';
    }

    /**
     * Get pagination info text
     */
    getPaginationInfo(currentPage: number, pageSize: number, totalElements: number): string {
        const start = currentPage * pageSize + 1;
        const end = Math.min((currentPage + 1) * pageSize, totalElements);

        return `Affichage de ${start} à ${end} sur ${totalElements} utilisateurs`;
    }
}
