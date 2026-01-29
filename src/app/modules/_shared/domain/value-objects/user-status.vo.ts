import { ValueObject } from '../base/value-object.base';
import { Result } from '../types/result.type';
import { ValidationError } from '../errors/domain.error';

export type UserStatusType = 'ACTIF' | 'INACTIF' | 'SUSPENDU' | 'BLOQUE';

/**
 * Value Object représentant le statut d'un utilisateur
 * 
 * Garantit que seuls les statuts valides peuvent être créés
 */
export class UserStatus extends ValueObject<UserStatusType> {
    private constructor(value: UserStatusType) {
        super(value);
    }

    /**
     * Crée un nouveau UserStatus
     * @param status Statut à valider
     * @returns Result contenant le UserStatus ou une erreur de validation
     */
    static create(status: string): Result<UserStatus, ValidationError> {
        const validStatuses: UserStatusType[] = ['ACTIF', 'INACTIF', 'SUSPENDU', 'BLOQUE'];

        if (!status || status.trim().length === 0) {
            return Result.fail(
                new ValidationError('Le statut ne peut pas être vide')
            );
        }

        const upperStatus = status.toUpperCase();

        if (!validStatuses.includes(upperStatus as UserStatusType)) {
            return Result.fail(
                new ValidationError(
                    `Statut invalide: "${status}". Valeurs acceptées: ${validStatuses.join(', ')}`
                )
            );
        }

        return Result.ok(new UserStatus(upperStatus as UserStatusType));
    }

    /**
     * Vérifie si l'utilisateur est actif
     */
    isActive(): boolean {
        return this.value === 'ACTIF';
    }

    /**
     * Vérifie si l'utilisateur est inactif
     */
    isInactive(): boolean {
        return this.value === 'INACTIF';
    }

    /**
     * Vérifie si l'utilisateur est suspendu
     */
    isSuspended(): boolean {
        return this.value === 'SUSPENDU';
    }

    /**
     * Vérifie si l'utilisateur est bloqué
     */
    isBlocked(): boolean {
        return this.value === 'BLOQUE';
    }

    /**
     * Retourne la représentation string du statut
     */
    override toString(): string {
        return this.value;
    }

    /**
     * Retourne une représentation lisible du statut
     */
    toDisplayString(): string {
        const displayMap: Record<UserStatusType, string> = {
            'ACTIF': 'Actif',
            'INACTIF': 'Inactif',
            'SUSPENDU': 'Suspendu',
            'BLOQUE': 'Bloqué'
        };
        return displayMap[this.value];
    }
}
