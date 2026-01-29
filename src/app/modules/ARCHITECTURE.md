# Architecture Clean - OCM ERP Frontend

## 📐 Vue d'Ensemble

Ce projet suit les principes de **Clean Architecture** pour garantir:
- ✅ **Séparation des responsabilités**
- ✅ **Indépendance des frameworks**
- ✅ **Testabilité maximale**
- ✅ **Maintenabilité à long terme**

---

## 🏗️ Structure en Couches

```
modules/
├── _shared/                    # Patterns réutilisables
│   ├── domain/                 # Logique métier pure
│   ├── application/            # Cas d'usage
│   └── infrastructure/         # Implémentations techniques
│
└── [module-name]/              # Module métier
    ├── domain/                 # Logique métier du module
    │   ├── entities/           # Entités riches
    │   ├── value-objects/      # Objets valeur
    │   ├── repositories/       # Interfaces (ports)
    │   └── errors/             # Erreurs de domaine
    │
    ├── application/            # Orchestration
    │   ├── use-cases/          # Cas d'usage
    │   ├── dto/                # Data Transfer Objects
    │   └── ports/              # Interfaces de services
    │
    ├── infrastructure/         # Détails techniques
    │   ├── repositories/       # Implémentations HTTP
    │   ├── adapters/           # Adaptateurs externes
    │   └── mappers/            # Conversions API ↔ Domain
    │
    └── presentation/           # Interface utilisateur
        ├── components/         # Composants réutilisables
        ├── pages/              # Pages/Conteneurs
        └── view-models/        # Logique de présentation
```

---

## 🎯 Règles de Dépendance

### Règle d'Or
**Les dépendances pointent TOUJOURS vers l'intérieur (vers le domaine)**

```
Presentation → Application → Domain ← Infrastructure
```

### Ce qui est AUTORISÉ ✅
- `Presentation` peut dépendre de `Application` et `Domain`
- `Application` peut dépendre de `Domain`
- `Infrastructure` peut dépendre de `Domain`

### Ce qui est INTERDIT ❌
- `Domain` ne doit JAMAIS dépendre d'autre chose
- `Application` ne doit JAMAIS dépendre de `Infrastructure` ou `Presentation`
- `Presentation` ne doit JAMAIS dépendre de `Infrastructure`

---

## 📦 Patterns Implémentés

### 1. Value Objects

**Objectif**: Encapsuler la validation et garantir l'immutabilité.

**Exemple**:
```typescript
// ❌ AVANT: Validation dispersée
if (!email || !email.includes('@')) {
  throw new Error('Email invalide');
}

// ✅ APRÈS: Value Object auto-validant
const emailResult = Email.create('user@example.com');
if (emailResult.isFailure) {
  console.error(emailResult.error.message);
}
```

**Value Objects disponibles**:
- `Email` - Validation et normalisation d'emails
- `PhoneNumber` - Validation et formatage de téléphones
- `UserName` - Validation avec noms réservés

**Créer un nouveau Value Object**:
```typescript
import { ValueObject } from '../base/value-object.base';
import { Result, ValidationError } from '../types/result.type';

export class Age extends ValueObject<number> {
  private static readonly MIN_AGE = 18;
  private static readonly MAX_AGE = 120;

  private constructor(value: number) {
    super(value);
  }

  static create(age: number): Result<Age, ValidationError> {
    if (age < this.MIN_AGE) {
      return Result.fail(new ValidationError('Âge minimum: 18 ans'));
    }
    
    if (age > this.MAX_AGE) {
      return Result.fail(new ValidationError('Âge invalide'));
    }

    return Result.ok(new Age(age));
  }

  isAdult(): boolean {
    return this.value >= 18;
  }
}
```

---

### 2. Result Pattern

**Objectif**: Gestion d'erreurs fonctionnelle sans exceptions.

**Exemple**:
```typescript
// ❌ AVANT: Exceptions
try {
  const user = await repository.findById(id);
  return user;
} catch (error) {
  console.error(error);
  throw error;
}

// ✅ APRÈS: Result Pattern
const result = await repository.findById(id);
if (result.isFailure) {
  console.error(result.error.message);
  return;
}
const user = result.value;
```

**Utilisation dans les Use Cases**:
```typescript
async execute(userId: number): Promise<Result<UserDto, DomainError>> {
  // 1. Validation
  const user = await this.repository.findById(userId);
  if (!user) {
    return Result.fail(new NotFoundError('Utilisateur', userId));
  }

  // 2. Logique métier
  const activated = user.activate();

  // 3. Persistance
  await this.repository.update(activated);

  // 4. Retour
  return Result.ok(UserMapper.toDto(activated));
}
```

**Utilisation dans les Composants**:
```typescript
async activateUser(userId: number): Promise<void> {
  const result = await this.activateUserUseCase.execute(userId);

  if (result.isFailure) {
    this.toastService.error(result.error.message);
    return;
  }

  this.toastService.success('Utilisateur activé');
}
```

---

### 3. Application Context

**Objectif**: Découpler les repositories du stockage (localStorage, sessionStorage, etc.).

**Exemple**:
```typescript
// ❌ AVANT: Couplage direct
constructor(private http: HttpClient) {}

async findAll(): Promise<User[]> {
  const societeId = localStorage.getItem('societeId'); // ❌ Couplage!
  return this.http.get(`/users?societeId=${societeId}`);
}

// ✅ APRÈS: Application Context
constructor(
  private http: HttpClient,
  @Inject(APPLICATION_CONTEXT) private context: ApplicationContext
) {}

async findAll(): Promise<User[]> {
  const societeId = this.context.getSocieteId(); // ✅ Découplé!
  return this.http.get(`/users?societeId=${societeId}`);
}
```

**Avantages**:
- ✅ Facile à tester (mock le contexte)
- ✅ Facile à changer de stockage
- ✅ Single Responsibility Principle respecté

---

### 4. Use Case Pattern

**Objectif**: Encapsuler la logique applicative.

**Structure d'un Use Case**:
```typescript
export interface ActivateUserUseCase {
  execute(userId: number): Promise<Result<void, DomainError>>;
}

@Injectable()
export class ActivateUserUseCaseImpl implements ActivateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private repository: UserRepository
  ) {}

  async execute(userId: number): Promise<Result<void, DomainError>> {
    // 1. Récupérer l'entité
    const user = await this.repository.findById({ value: userId });
    
    if (!user) {
      return Result.fail(new NotFoundError('Utilisateur', userId));
    }

    // 2. Appliquer la logique métier
    const activated = user.activate();

    // 3. Persister
    await this.repository.update(activated);

    // 4. Retourner le résultat
    return Result.ok(undefined);
  }
}
```

**Règles**:
- ✅ Un use case = une action métier
- ✅ Retourne toujours `Result<T, E>`
- ✅ Pas de logique de présentation
- ✅ Pas d'accès direct à localStorage/sessionStorage

---

### 5. ViewModel Pattern

**Objectif**: Séparer la logique de présentation du composant.

**Exemple**:
```typescript
// ❌ AVANT: Logique dans le composant
export class UsersComponent {
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR', { ... });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'ACTIF': return 'badge bg-success';
      // ...
    }
  }
}

// ✅ APRÈS: ViewModel dédié
export class UsersViewModel {
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR', { ... });
  }

  getStatusClass(status: string): string {
    const map = {
      'ACTIF': 'badge bg-success',
      'INACTIF': 'badge bg-danger'
    };
    return map[status] || 'badge bg-secondary';
  }
}

// Composant simplifié
export class UsersComponent {
  viewModel = new UsersViewModel();
}

// Template
<span [class]="viewModel.getStatusClass(user.status)">
  {{ viewModel.formatDate(user.createdAt) }}
</span>
```

**Avantages**:
- ✅ Composant plus petit et lisible
- ✅ Logique de présentation réutilisable
- ✅ Facile à tester

---

## 📝 Guidelines de Développement

### Créer un Nouveau Module

1. **Créer la structure**:
```bash
modules/mon-module/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── repositories/
│   └── errors/
├── application/
│   ├── use-cases/
│   └── dto/
├── infrastructure/
│   ├── repositories/
│   └── mappers/
└── presentation/
    ├── components/
    ├── pages/
    └── view-models/
```

2. **Définir le domaine** (entities, value objects, repositories)
3. **Créer les use cases** (application layer)
4. **Implémenter l'infrastructure** (HTTP repositories)
5. **Créer la présentation** (components, view models)

### Créer un Nouveau Use Case

```typescript
// 1. Définir l'interface
export interface MonUseCaseInterface {
  execute(params: Params): Promise<Result<Response, DomainError>>;
}

// 2. Implémenter
@Injectable()
export class MonUseCaseImpl implements MonUseCaseInterface {
  constructor(
    @Inject(MY_REPOSITORY) private repository: MyRepository
  ) {}

  async execute(params: Params): Promise<Result<Response, DomainError>> {
    // Logique métier
    return Result.ok(response);
  }
}

// 3. Créer le token d'injection
export const MON_USE_CASE = new InjectionToken<MonUseCaseInterface>('MonUseCase');

// 4. Ajouter le provider dans le module
providers: [
  {
    provide: MON_USE_CASE,
    useClass: MonUseCaseImpl
  }
]
```

### Créer un Nouveau Value Object

```typescript
export class MonValueObject extends ValueObject<Type> {
  private constructor(value: Type) {
    super(value);
  }

  static create(value: Type): Result<MonValueObject, ValidationError> {
    // Validation
    if (!isValid(value)) {
      return Result.fail(new ValidationError('Message d\'erreur'));
    }

    return Result.ok(new MonValueObject(value));
  }

  // Méthodes métier
  doSomething(): Type {
    return this.value;
  }
}
```

---

## 🧪 Testing

### Tester un Value Object

```typescript
describe('Email', () => {
  it('should create valid email', () => {
    const result = Email.create('test@example.com');
    expect(result.isSuccess).toBe(true);
  });

  it('should fail for invalid email', () => {
    const result = Email.create('invalid');
    expect(result.isFailure).toBe(true);
  });
});
```

### Tester un Use Case

```typescript
describe('ActivateUserUseCase', () => {
  let useCase: ActivateUserUseCase;
  let mockRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockRepository = {
      findById: jest.fn(),
      update: jest.fn()
    } as any;

    useCase = new ActivateUserUseCaseImpl(mockRepository);
  });

  it('should activate user', async () => {
    const user = createTestUser();
    mockRepository.findById.mockResolvedValue(user);

    const result = await useCase.execute(1);

    expect(result.isSuccess).toBe(true);
    expect(mockRepository.update).toHaveBeenCalled();
  });
});
```

### Tester un Composant

```typescript
describe('UsersComponent', () => {
  let component: UsersComponent;
  let mockUseCase: jest.Mocked<ActivateUserUseCase>;

  beforeEach(() => {
    mockUseCase = {
      execute: jest.fn()
    } as any;

    TestBed.configureTestingModule({
      providers: [
        { provide: ACTIVATE_USER_USE_CASE, useValue: mockUseCase }
      ]
    });

    component = TestBed.createComponent(UsersComponent).componentInstance;
  });

  it('should activate user', async () => {
    mockUseCase.execute.mockResolvedValue(Result.ok(undefined));

    await component.activateUser(user);

    expect(mockUseCase.execute).toHaveBeenCalledWith(user.id);
  });
});
```

---

## ✅ Checklist Qualité

Avant de merger votre code, vérifiez:

### Domain Layer
- [ ] Entités contiennent la logique métier
- [ ] Value Objects sont immutables
- [ ] Pas de dépendances externes (Angular, HTTP, etc.)
- [ ] Erreurs de domaine bien définies

### Application Layer
- [ ] Use cases retournent `Result<T, E>`
- [ ] Pas de logique de présentation
- [ ] Pas d'accès direct à localStorage
- [ ] DTOs bien définis

### Infrastructure Layer
- [ ] Repositories utilisent `ApplicationContext`
- [ ] Mappers séparent API et Domain
- [ ] Gestion d'erreurs HTTP propre

### Presentation Layer
- [ ] Composants utilisent SEULEMENT des use cases
- [ ] Pas d'injection de repositories
- [ ] ViewModel pour logique de présentation
- [ ] Composants < 200 lignes

### Tests
- [ ] Value Objects testés
- [ ] Use cases testés avec mocks
- [ ] Composants testés
- [ ] Couverture > 70%

---

## 📚 Ressources

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain-Driven Design - Eric Evans](https://www.domainlanguage.com/ddd/)
- [Result Pattern](https://medium.com/@hugodesenv/result-pattern-in-typescript-f3b6c3f3b3e3)

---

## 🤝 Contribution

Pour contribuer au projet:

1. Suivez les patterns décrits ci-dessus
2. Écrivez des tests pour votre code
3. Documentez les nouveaux patterns
4. Demandez une revue de code

---

**Dernière mise à jour**: 2026-01-27
