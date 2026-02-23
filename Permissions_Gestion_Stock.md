

# ✅ **1. FONCTIONNALITÉS D’UN MODULE DE GESTION DE STOCK**

### **A. Configuration & Référentiel**

1. Gestion des articles / produits
2. Gestion des familles, catégories et sous-catégories
3. Gestion des unités de mesure
4. Gestion des emplacements et zones d’entreposage
5. Gestion des entrepôts / magasins
6. Gestion des statuts de stock (disponible, réservé, bloqué, non conforme…)
7. Gestion des niveaux de stock (min, max, sécurité)
8. Gestion des codes-barres / QR / RFID
9. Gestion des numéros de série et lots
10. Paramètres d’inventaire (méthodes FIFO / LIFO / Coût moyen)
11. Paramètres de réapprovisionnement automatique

---

### **B. Gestion opérationnelle du stock**

1. Entrées en stock manuelles
2. Sorties en stock manuelles
3. Transferts entre entrepôts
4. Transferts internes (entre zones/emplacements)
5. Réceptions d’achats
6. Retours fournisseurs
7. Expéditions clients
8. Retours clients
9. Ajustements de stock (pertes, écarts, corrections)
10. Réservations de stock
11. Déblocage / mise en quarantaine
12. Valorisation du stock

---

### **C. Inventaires**

1. Inventaire tournant
2. Inventaire annuel
3. Inventaire partiel (par article, zone, magasin…)
4. Comptage physique
5. Saisie des écarts
6. Validation / ajustement automatique

---

### **D. Suivi & Traçabilité**

1. Historique des mouvements
2. Traçabilité par lot / série
3. Traçabilité descendante (expédition → articles → lots)
4. Traçabilité ascendante (lot → origine → fournisseur)
5. Traçabilité par utilisateur

---

### **E. Analyses & Reporting**

1. Valorisation par entrepôt
2. Rapport des écarts d’inventaire
3. Indicateurs de rotation de stock
4. Ruptures et alertes
5. Previsions optimales de stock
6. Performance des opérations logistiques
7. Suivi coûts et marges

---

# ✅ **2. LISTE EXHAUSTIVE DES ACTIONS UTILISATEURS PAR FONCTIONNALITÉ**

## **A. Configuration**

### 1. Articles

* Créer un article
* Modifier un article
* Archiver un article
* Supprimer un article
* Activer/désactiver un article
* Ajouter une image
* Configurer prix / taxe / SKU
* Associer UoM
* Définir stock min / max
* Configurer lots ou n° série

### 2. Entrepôts / Emplacements

* Créer un entrepôt
* Modifier un entrepôt
* Désactiver / supprimer un entrepôt
* Créer un emplacement
* Modifier emplacement
* Paramétrer les autorisations d’accès par rôles
* Configurer zones (réception, picking, réserve...)

---

## **B. Opérations de stock**

### 1. Entrée Stock

* Créer une entrée
* Modifier / valider une entrée
* Supprimer une entrée non validée
* Imprimer bordereau
* Scanner produits

### 2. Sortie Stock

* Créer une sortie
* Modifier une sortie
* Valider sortie
* Annuler / supprimer sortie
* Imprimer bordereau

### 3. Transferts

* Créer un transfert interne
* Modifier
* Valider
* Scanner les emplacements

### 4. Ajustements

* Créer un ajustement
* Saisir quantités
* Corriger un ajustement
* Valider ajustement
* Historiser ajustement

---

## **C. Inventaires**

* Créer un inventaire
* Clôturer inventaire
* Ajouter ligne de comptage
* Modifier comptage
* Valider écarts
* Appliquer ajustement automatique

---

## **D. Traçabilité**

* Consulter fiche lot
* Consulter fiche série
* Rechercher historique mouvements
* Exporter historique
* Auditer les utilisateurs

---

## **E. Reporting**

* Consulter rapports
* Export Excel / PDF
* Configurer filtres
* Programmer rapports automatiques
* Accéder à la valorisation

---

# ✅ **3. MATRICE COMPLÈTE DES PERMISSIONS**

Voici une matrice standardisée, prête à être intégrée dans un module de permissions.

| **Nom Permission**     | **Description**                  | **Fonction liée** | **Type d’accès**      |
| ---------------------- | -------------------------------- | ----------------- | --------------------- |
| `article.view`         | Voir la liste des articles       | Articles          | Lecture               |
| `article.create`       | Créer un nouvel article          | Articles          | Écriture              |
| `article.update`       | Modifier un article              | Articles          | Écriture              |
| `article.archive`      | Archiver un article              | Articles          | Écriture              |
| `article.delete`       | Supprimer un article             | Articles          | Suppression           |
| `warehouse.view`       | Voir entrepôts                   | Entrepôts         | Lecture               |
| `warehouse.create`     | Créer un entrepôt                | Entrepôts         | Écriture              |
| `warehouse.update`     | Modifier entrepôt                | Entrepôts         | Écriture              |
| `warehouse.delete`     | Supprimer entrepôt               | Entrepôts         | Suppression           |
| `location.manage`      | Gérer emplacements               | Emplacements      | Lecture / Écriture    |
| `stockEntry.create`    | Créer une entrée en stock        | Entrées           | Écriture              |
| `stockEntry.validate`  | Valider une entrée               | Entrées           | Validation            |
| `stockEntry.delete`    | Supprimer entrée                 | Entrées           | Suppression           |
| `stockExit.create`     | Créer une sortie                 | Sorties           | Écriture              |
| `stockExit.validate`   | Valider une sortie               | Sorties           | Validation            |
| `stockExit.delete`     | Supprimer sortie                 | Sorties           | Suppression           |
| `transfer.create`      | Initier un transfert             | Transferts        | Écriture              |
| `transfer.validate`    | Valider transfert                | Transferts        | Validation            |
| `adjustment.create`    | Créer ajustement                 | Ajustements       | Écriture              |
| `adjustment.validate`  | Valider ajustement               | Ajustements       | Validation            |
| `adjustment.delete`    | Annuler ajustement               | Ajustements       | Suppression           |
| `inventory.create`     | Créer inventaire                 | Inventaire        | Écriture              |
| `inventory.count`      | Saisir comptages                 | Inventaire        | Écriture              |
| `inventory.validate`   | Valider inventaire               | Inventaire        | Validation            |
| `movementHistory.view` | Voir historique mouvements       | Traçabilité       | Lecture               |
| `lot.view`             | Accès à la fiche lot             | Lots / Séries     | Lecture               |
| `serialization.manage` | Gérer numéros de série           | Lots / Séries     | Écriture              |
| `report.view`          | Voir rapports                    | Reporting         | Lecture               |
| `report.export`        | Exporter PDF/Excel               | Reporting         | Lecture               |
| `stock.valuation.view` | Voir valorisation                | Valorisation      | Lecture               |
| `settings.stock`       | Accéder aux paramètres du module | Administration    | Écriture / Validation |


