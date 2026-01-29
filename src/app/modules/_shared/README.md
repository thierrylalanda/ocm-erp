# Module _shared - Clean Architecture Patterns

## 📋 Vue d'Ensemble

Le module `_shared` contient tous les patterns et utilitaires Clean Architecture réutilisables à travers l'application.

---

## 🎯 Contenu

### Value Objects
- **Email** - Validation et normalisation des emails
- **PhoneNumber** - Validation et formatage des numéros de téléphone
- **UserName** - Validation des noms d'utilisateur avec noms réservés
- **UserStatus** - Statuts utilisateur typés (ACTIF, INACTIF, SUSPENDU, BLOQUE)

### Result Pattern
- **Result<T, E>** - Gestion fonctionnelle des erreurs sans exceptions

### Domain Errors
- **ValidationError** - Erreurs de validation
- **NotFoundError** - Entité introuvable
- **AlreadyExistsError** - Entité déjà existante
- **UnauthorizedError** - Accès non autorisé
- **BusinessRuleViolationError** - Violation de règle métier
- **InfrastructureError** - Erreurs d'infrastructure

### ApplicationContext
- **ApplicationContext** - Interface pour accéder au contexte applicatif
- **LocalStorageContextAdapter** - Implémentation basée sur localStorage

---

## 📚 Documentation

Pour une documentation complète avec exemples, consultez:

**[PATTERNS.md](./PATTERNS.md)** - Guide complet des patterns avec exemples d'utilisation

---

## 🚀 Utilisation Rapide

### Importer les Patterns

```typescript
import {
  // Value Objects
  Email,
  PhoneNumber,
  UserName,
  UserStatus,
  
  // Result Pattern
  Result,
  
  // Domain Errors
  ValidationError,
  NotFoundError,
  AlreadyExistsError,
  UnauthorizedError,
  BusinessRuleViolationError,
  InfrastructureError,
  
  // ApplicationContext
  APPLICATION_CONTEXT,
  ApplicationContext,
  LocalStorageContextAdapter
} from '../_shared';
```

### Exemple: Créer un Email

```typescript
const emailResult = Email.create('user@example.com');

if (emailResult.isSuccess) {
  const email = emailResult.value;
  console.log(email.getValue()); // 'user@example.com'
} else {
  console.error(emailResult.error.message);
}
```

### Exemple: Use Case avec Result Pattern

```typescript
@Injectable()
export class MyUseCase {
  async execute(data: any): Promise<Result<MyData, DomainError>> {
    // Validation
    if (!data.email) {
      return Result.fail(new ValidationError('Email requis'));
    }

    // Logique métier
    const result = await this.repository.save(data);
    
    return Result.ok(result);
  }
}
```

### Exemple: ApplicationContext

```typescript
@Injectable()
export class MyUseCase {
  constructor(
    @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
  ) {}

  async execute(): Promise<Result<Data, DomainError>> {
    const userId = this.context.getUserId();
    const societeId = this.context.getSocieteId();
    
    // Utiliser les IDs...
  }
}
```

---

## 📁 Structure

```
_shared/
├── domain/
│   ├── base/
│   │   └── value-object.base.ts
│   ├── value-objects/
│   │   ├── email.vo.ts
│   │   ├── phone-number.vo.ts
│   │   ├── user-name.vo.ts
│   │   └── user-status.vo.ts
│   ├── errors/
│   │   └── domain.error.ts
│   └── types/
│       └── result.type.ts
├── application/
│   └── ports/
│       └── application-context.port.ts
├── infrastructure/
│   ├── adapters/
│   │   └── local-storage-context.adapter.ts
│   └── testing/
│       ├── factories/
│       └── mocks/
├── index.ts
├── README.md
└── PATTERNS.md
```

---

## ✅ Tests

Tous les Value Objects et patterns sont testés unitairement:

- `email.vo.spec.ts` - 10 tests
- `phone-number.vo.spec.ts` - 12 tests
- `user-name.vo.spec.ts` - 15 tests
- `user-status.vo.spec.ts` - 15 tests

**Couverture**: 100% des Value Objects

---

## 🎯 Principes

### Immutabilité
Tous les Value Objects sont immutables. Une fois créés, ils ne peuvent pas être modifiés.

### Validation
La validation est effectuée à la création via le pattern `Result`. Pas d'exceptions.

### Type Safety
TypeScript garantit la sécurité des types à la compilation.

### Testabilité
Tous les patterns sont conçus pour être facilement testables avec des mocks.

---

## 📖 Ressources

- [PATTERNS.md](./PATTERNS.md) - Documentation complète
- [ARCHITECTURE.md](../ARCHITECTURE.md) - Architecture globale
- [Component Integration Guide](file:///Users/a1/.gemini/antigravity/brain/6f4dc08d-1c26-4f9f-b95c-14176c477c93/component_integration_guide.md)

---

**Version**: 1.0  
**Date**: 2026-01-27
