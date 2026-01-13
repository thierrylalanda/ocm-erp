# Module _shared - Core ERP

## 🏗️ Architecture Clean Architecture

Ce module implémente les fondations de l'ERP selon les principes de Clean Architecture :

### **Structure du Module**

```
modules/_shared/
├── domain/                    # Couche Domain (Business Logic)
│   ├── entities/             # Entités métier
│   │   ├── user.entity.ts    # Utilisateur avec logique métier
│   │   ├── tenant.entity.ts  # Société/locataire
│   │   └── permission.entity.ts # Permissions RBAC
│   ├── value-objects/        # Value Objects
│   │   ├── money.vo.ts       # Gestion monétaire OHADA
│   │   └── date-range.vo.ts  # Périodes temporelles
│   └── repositories/         # Interfaces Repository
│       ├── user.repository.ts
│       └── tenant.repository.ts
│
├── application/              # Couche Application (Use Cases)
│   └── use-cases/
│       └── authenticate-user.use-case.ts
│
├── infrastructure/           # Couche Infrastructure (Frameworks)
│   └── mappers/
│       └── user.mapper.ts
│
├── _shared.module.ts         # Module Angular
├── index.ts                  # Barrel exports
└── README.md                 # Documentation
```

## 🎯 **Entités Core Implémentées**

### **1. UserEntity**
- Gestion complète des utilisateurs
- Logique métier : authentification, permissions
- Commands : create, update, delete
- Domain logic : recordLogin, hasPermission, etc.

### **2. TenantEntity**
- Gestion multi-sociétés
- Abonnements et limites
- Domain logic : canAddMoreUsers, isSubscriptionActive

### **3. PermissionEntity**
- Système RBAC complet
- Types : READ, WRITE, CREATE, UPDATE, DELETE, VALIDATE, etc.
- Génération automatique des permissions stock/ventes

### **4. Value Objects**
- **MoneyVO** : Opérations monétaires, TVA OHADA, arrondis
- **DateRangeVO** : Périodes temporelles, calculs OHADA

## 🔧 **Use Cases Implémentés**

### **AuthenticateUserUseCase**
- Login/Logout avec tokens
- Registration utilisateur
- Changement de mot de passe
- Reset password
- Refresh token

## 📊 **Système de Permissions**

Basé sur vos spécifications détaillées :

### **Permissions Stock (30+)**
- `article.view`, `article.create`, `article.update`, `article.delete`
- `warehouse.view`, `warehouse.create`, `warehouse.update`, `warehouse.delete`
- `stockEntry.create`, `stockEntry.validate`, `stockEntry.delete`

### **Permissions Ventes (25+)**
- `devis.view`, `devis.create`, `devis.update`, `devis.validate`
- `devis.delete`, `devis.convert`

## 🚀 **Utilisation**

### **Import dans d'autres modules**
```typescript
import { 
  UserEntity, 
  TenantEntity, 
  PermissionEntity,
  AuthenticateUserUseCase,
  MoneyVO,
  DateRangeVO
} from '../_shared';
```

### **Exemple d'utilisation**
```typescript
// Création d'un utilisateur
const user = UserEntity.create({
  username: 'john.doe',
  email: 'john@example.com',
  password: 'secure',
  firstName: 'John',
  lastName: 'Doe',
  tenantId: 'tenant_123'
});

// Vérification des permissions
if (user.hasPermission('article.create')) {
  // Créer un article
}

// Opérations monétaires
const amount = MoneyVO.create(15000, 'XAF');
const ttc = amount.calculateTTC(19.25); // TVA OHADA
```

## 🔒 **Sécurité & Conformité**

- **OHADA** : Calculs TVA, arrondis conformes
- **RBAC** : Permissions granulaires par module
- **Multi-tenant** : Isolation des données
- **Audit** : Timestamps et historique

## 📈 **Prochaines Étapes**

1. **NgRx Store** : State management centralisé
2. **Layout ERP** : Interface professionnelle
3. **Modules métier** : Stock, Ventes, Comptabilité
4. **Infrastructure** : API services, storage

---

**✅ Structure modules/_shared/ complète et fonctionnelle**
