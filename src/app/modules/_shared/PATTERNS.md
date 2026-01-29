# Clean Architecture Patterns - Guide Complet

## 📋 Vue d'Ensemble

Ce document décrit les patterns Clean Architecture implémentés dans le module `_shared` et comment les utiliser dans votre code.

---

## 🎯 Value Objects

### Qu'est-ce qu'un Value Object?

Un **Value Object** est un objet immutable qui représente un concept du domaine sans identité propre. Il est défini uniquement par ses attributs.

### Caractéristiques

- ✅ **Immutable**: Une fois créé, ne peut pas être modifié
- ✅ **Auto-validant**: Validation à la création
- ✅ **Égalité par valeur**: Deux Value Objects avec les mêmes valeurs sont égaux
- ✅ **Sans identité**: Pas d'ID, défini par ses attributs

---

## 📧 Email Value Object

### Utilisation

```typescript
import { Email } from '../_shared';

// ✅ Création réussie
const emailResult = Email.create('user@example.com');
if (emailResult.isSuccess) {
  const email = emailResult.value;
  console.log(email.getValue()); // 'user@example.com'
  console.log(email.getDomain()); // 'example.com'
  console.log(email.getLocalPart()); // 'user'
}

// ❌ Création échouée
const invalidResult = Email.create('invalid-email');
if (invalidResult.isFailure) {
  console.error(invalidResult.error.message); // "Format d'email invalide"
}
```

### Méthodes Disponibles

| Méthode | Description | Exemple |
|---------|-------------|---------|
| `getValue()` | Obtient la valeur de l'email | `'user@example.com'` |
| `getDomain()` | Obtient le domaine | `'example.com'` |
| `getLocalPart()` | Obtient la partie locale | `'user'` |
| `isFromDomain(domain)` | Vérifie le domaine | `email.isFromDomain('example.com')` |
| `equals(other)` | Compare deux emails | `email1.equals(email2)` |

### Validation

- ✅ Format email valide (regex)
- ✅ Longueur max: 255 caractères
- ✅ Normalisation automatique (lowercase)
- ❌ Emails vides rejetés

---

## 📱 PhoneNumber Value Object

### Utilisation

```typescript
import { PhoneNumber } from '../_shared';

// ✅ Numéro français
const phoneResult = PhoneNumber.create('+33612345678');
if (phoneResult.isSuccess) {
  const phone = phoneResult.value;
  console.log(phone.getValue()); // '+33612345678'
  console.log(phone.format()); // '+33 6 12 34 56 78'
  console.log(phone.isInternational()); // true
}

// ✅ Numéro local
const localResult = PhoneNumber.create('0612345678', 'FR');
if (localResult.isSuccess) {
  console.log(localResult.value.getValue()); // '0612345678'
}
```

### Méthodes Disponibles

| Méthode | Description | Exemple |
|---------|-------------|---------|
| `getValue()` | Obtient le numéro brut | `'+33612345678'` |
| `format()` | Formate le numéro | `'+33 6 12 34 56 78'` |
| `isInternational()` | Vérifie si international | `true/false` |
| `getCountryCode()` | Obtient le code pays | `'FR'` |

### Validation

- ✅ Format international (+XX) ou local
- ✅ Longueur: 10-15 chiffres
- ✅ Normalisation (suppression espaces/tirets)
- ❌ Caractères non numériques rejetés

---

## 👤 UserName Value Object

### Utilisation

```typescript
import { UserName } from '../_shared';

// ✅ Username valide
const usernameResult = UserName.create('john_doe');
if (usernameResult.isSuccess) {
  const username = usernameResult.value;
  console.log(username.getValue()); // 'john_doe'
  console.log(username.isValid()); // true
}

// ❌ Nom réservé
const adminResult = UserName.create('admin');
if (adminResult.isFailure) {
  console.error(adminResult.error.message); // "Nom d'utilisateur réservé"
}
```

### Méthodes Disponibles

| Méthode | Description | Exemple |
|---------|-------------|---------|
| `getValue()` | Obtient le username | `'john_doe'` |
| `isValid()` | Vérifie la validité | `true/false` |

### Validation

- ✅ Longueur: 3-30 caractères
- ✅ Caractères autorisés: a-z, A-Z, 0-9, _, -
- ✅ Vérification noms réservés (admin, root, etc.)
- ❌ Espaces et caractères spéciaux rejetés

### Noms Réservés

```typescript
const reservedNames = [
  'admin', 'root', 'system', 'administrator',
  'superuser', 'moderator', 'support'
];
```

---

## 🔄 UserStatus Value Object

### Utilisation

```typescript
import { UserStatus } from '../_shared';

// ✅ Statut valide
const statusResult = UserStatus.create('ACTIF');
if (statusResult.isSuccess) {
  const status = statusResult.value;
  console.log(status.getValue()); // 'ACTIF'
  console.log(status.isActive()); // true
  console.log(status.toDisplayString()); // 'Actif'
}

// ✅ Normalisation automatique
const lowerResult = UserStatus.create('actif');
console.log(lowerResult.value.getValue()); // 'ACTIF' (uppercase)
```

### Méthodes Disponibles

| Méthode | Description | Exemple |
|---------|-------------|---------|
| `getValue()` | Obtient le statut | `'ACTIF'` |
| `isActive()` | Vérifie si actif | `true/false` |
| `isInactive()` | Vérifie si inactif | `true/false` |
| `isSuspended()` | Vérifie si suspendu | `true/false` |
| `isBlocked()` | Vérifie si bloqué | `true/false` |
| `toDisplayString()` | Format d'affichage | `'Actif'` |

### Statuts Valides

```typescript
type UserStatusType = 'ACTIF' | 'INACTIF' | 'SUSPENDU' | 'BLOQUE';
```

---

## ✅ Result Pattern

### Qu'est-ce que le Result Pattern?

Le **Result Pattern** permet de gérer les erreurs de manière fonctionnelle, sans exceptions. Il retourne soit un succès avec une valeur, soit un échec avec une erreur.

### Avantages

- ✅ **Erreurs explicites**: Le type de retour indique qu'une erreur peut survenir
- ✅ **Pas d'exceptions**: Flux de contrôle prévisible
- ✅ **Type-safe**: TypeScript garantit la gestion des erreurs
- ✅ **Composable**: Facile à chaîner avec `map()`, `flatMap()`

### Utilisation Basique

```typescript
import { Result, ValidationError } from '../_shared';

function diviser(a: number, b: number): Result<number, ValidationError> {
  if (b === 0) {
    return Result.fail(new ValidationError('Division par zéro'));
  }
  return Result.ok(a / b);
}

// ✅ Utilisation
const result = diviser(10, 2);

if (result.isSuccess) {
  console.log('Résultat:', result.value); // 5
} else {
  console.error('Erreur:', result.error.message);
}
```

### Création de Result

```typescript
// ✅ Succès
const success = Result.ok(42);
console.log(success.value); // 42

// ❌ Échec
const failure = Result.fail(new ValidationError('Erreur'));
console.log(failure.error.message); // 'Erreur'
```

### Vérification

```typescript
const result = someFunction();

// Option 1: isSuccess / isFailure
if (result.isSuccess) {
  console.log(result.value);
} else {
  console.error(result.error);
}

// Option 2: Pattern matching
result.isSuccess
  ? console.log('OK:', result.value)
  : console.error('KO:', result.error);
```

---

## 🚨 Domain Errors

### Types d'Erreurs Disponibles

```typescript
import {
  ValidationError,
  NotFoundError,
  AlreadyExistsError,
  UnauthorizedError,
  BusinessRuleViolationError,
  InfrastructureError
} from '../_shared';
```

### ValidationError

Erreur de validation des données.

```typescript
// Avec champ
const error = new ValidationError('Email invalide', 'email');

// Sans champ
const error = new ValidationError('Données invalides');

console.log(error.message); // 'Email invalide'
console.log(error.field); // 'email'
```

### NotFoundError

Entité non trouvée.

```typescript
const error = new NotFoundError('Utilisateur', 123);

console.log(error.message); // 'Utilisateur avec l'ID 123 introuvable'
console.log(error.entityName); // 'Utilisateur'
console.log(error.entityId); // 123
```

### AlreadyExistsError

Entité déjà existante.

```typescript
const error = new AlreadyExistsError('Utilisateur', 'email', 'user@example.com');

console.log(error.message); 
// 'Utilisateur avec email "user@example.com" existe déjà'
```

### UnauthorizedError

Accès non autorisé.

```typescript
const error = new UnauthorizedError('Accès refusé');
console.log(error.message); // 'Accès refusé'
```

### BusinessRuleViolationError

Violation de règle métier.

```typescript
const error = new BusinessRuleViolationError(
  'Impossible de supprimer un utilisateur actif'
);
```

### InfrastructureError

Erreur d'infrastructure (DB, API, etc.).

```typescript
const error = new InfrastructureError('Erreur de connexion à la base de données');
```

---

## 🔧 ApplicationContext

### Qu'est-ce que l'ApplicationContext?

L'**ApplicationContext** fournit un accès centralisé aux données de contexte de l'application (utilisateur connecté, société, etc.) sans dépendre directement de `localStorage` ou `AuthService`.

### Avantages

- ✅ **Découplage**: Les use cases ne dépendent pas de l'infrastructure
- ✅ **Testabilité**: Facile à mocker pour les tests
- ✅ **Flexibilité**: Implémentation interchangeable

### Interface

```typescript
export interface ApplicationContext {
  getUserId(): number | null;
  getSocieteId(): number | null;
  getSiteId(): number | null;
  getDepartementId(): number | null;
  getUser(): any | null;
  isAuthenticated(): boolean;
}
```

### Utilisation dans un Use Case

```typescript
import { Injectable, Inject } from '@angular/core';
import { APPLICATION_CONTEXT, ApplicationContext, Result } from '../../../_shared';

@Injectable()
export class GetUserProfileUseCase {
  constructor(
    @Inject(APPLICATION_CONTEXT) private context: ApplicationContext,
    private userRepository: UserRepository
  ) {}

  async execute(): Promise<Result<User, DomainError>> {
    // ✅ Récupérer l'ID utilisateur depuis le contexte
    const userId = this.context.getUserId();
    
    if (!userId) {
      return Result.fail(new UnauthorizedError('Utilisateur non connecté'));
    }

    // Récupérer l'utilisateur
    return await this.userRepository.findById(userId);
  }
}
```

### Configuration dans un Module

```typescript
import { NgModule } from '@angular/core';
import { APPLICATION_CONTEXT, LocalStorageContextAdapter } from '../_shared';

@NgModule({
  providers: [
    {
      provide: APPLICATION_CONTEXT,
      useClass: LocalStorageContextAdapter
    }
  ]
})
export class MyModule {}
```

### Mock pour les Tests

```typescript
import { ApplicationContext } from '../../../_shared';

class MockApplicationContext implements ApplicationContext {
  private userId: number | null = 1;
  private societeId: number | null = 10;

  getUserId(): number | null {
    return this.userId;
  }

  getSocieteId(): number | null {
    return this.societeId;
  }

  // ... autres méthodes
}

// Dans les tests
const mockContext = new MockApplicationContext();
const useCase = new MyUseCase(mockContext, mockRepository);
```

---

## 🎯 Best Practices

### ✅ DO

1. **Toujours utiliser Result Pattern** dans les use cases
2. **Créer des Value Objects** pour les concepts métier importants
3. **Valider tôt** - Valider les données à l'entrée
4. **Gérer les erreurs explicitement** - Pas de `try/catch` génériques
5. **Utiliser ApplicationContext** au lieu d'accès direct à localStorage
6. **Tester les Value Objects** - Ils encapsulent la logique métier

### ❌ DON'T

1. **Ne pas utiliser `throw`** dans les use cases - Utiliser Result
2. **Ne pas créer des Value Objects mutables**
3. **Ne pas ignorer les erreurs** - Toujours vérifier `isSuccess/isFailure`
4. **Ne pas accéder directement à localStorage** - Utiliser ApplicationContext
5. **Ne pas valider dans les composants** - Valider dans les Value Objects/Use Cases

---

**Date**: 2026-01-27  
**Version**: 1.0
