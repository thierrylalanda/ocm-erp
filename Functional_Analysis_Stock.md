# 📔 ANALYSE FONCTIONNELLE EXHAUSTIVE - MODULE GESTION DE STOCK

Ce document détaille l'ensemble des fonctionnalités, des actions utilisateurs et des flux opérationnels du module de stock pour l'ERP OCM_SHINE.

---

## 1. DIAGRAMME DE CAS D'UTILISATION (USE CASE)

```mermaid
useCaseDiagram
    actor "Administrateur Stock" as Admin
    actor "Magasinier" as Operator
    actor "Responsable Entrepôt" as Manager
    actor "Inventoriste" as Inventory
    actor "Contrôleur Qualité" as Quality

    package "Gestion de Stock" {
        usecase "Gérer le Référentiel (Articles, Entrepôts, Zones)" as UC_Ref
        usecase "Enregistrer une Entrée en Stock" as UC_Entry
        usecase "Valider une Sortie (Expédition)" as UC_Exit
        usecase "Effectuer un Transfert Inter-sites" as UC_Transfer
        usecase "Réaliser un Inventaire physique" as UC_Inventory
        usecase "Contrôler la Qualité (Blocage Lot/Série)" as UC_Quality
        usecase "Consulter les Rapports & Valorisation" as UC_Report
        usecase "Ajuster le Stock (Correction d'écarts)" as UC_Adjust
    }

    Admin --> UC_Ref
    Admin --> UC_Report
    
    Operator --> UC_Entry
    Operator --> UC_Exit
    Operator --> UC_Transfer
    
    Manager --> UC_Transfer
    Manager --> UC_Adjust
    Manager --> UC_Inventory
    
    Inventory --> UC_Inventory
    Inventory --> UC_Adjust
    
    Quality --> UC_Quality
```

---

## 2. LISTE DES FONCTIONNALITÉS & ACTIONS

### 2.1 Configuration & Référentiel
- **Articles** : Créer, modifier, archiver, supprimer (si stock=0), gérer les variantes, images, taxes, SKU, EAN.
- **Unités (UoM)** : Définir les unités de mesure et les facteurs de conversion.
- **Entrepôts & Emplacements** : Gérer les sites, zones (picking, réception, réserve) et l'adressage précis des racks.
- **Paramétrage** : Définir les méthodes de valorisation (FIFO, LIFO, CUMP) et les seuils de réapprovisionnement automatique.

### 2.2 Opérations Opérationnelles
- **Entrées** : Réceptions d'achats, retours clients, entrées manuelles.
- **Sorties** : Expéditions clients, retours fournisseurs, sorties de consommation interne, pertes/casse.
- **Transferts** : Transferts inter-entrepôts (multi-site) et transferts internes (changement d'emplacement).
- **Ajustements** : Corrections de stock motivées et historisées.

### 2.3 Inventaire & Traçabilité
- **Inventaires** : Tournant, annuel, partiel. Gestion du gel de stock et double comptage.
- **Traçabilité** : Suivi intégral par Numéro de Lot (batch) et Numéro de Série. Traçabilité ascendante et descendante.
- **Audit** : Journalisation de toutes les actions par utilisateur avec horodatage.

---

## 3. DIAGRAMMES D'ACTIVITÉ (FLUX MAJEURS)

### 3.1 Flux : Réception de Marchandise (Entrée)

```mermaid
activityDiagram
    start
    :Saisie des lignes de réception;
    :Scan du code-barres produit;
    if (Produit tracké par Lot/Série ?) then (Oui)
      :Saisie des numéros de lot et DLC;
    else (Non)
    endif
    :Affectation d'un emplacement;
    :Passage en statut 'Brouillon';
    |Responsable|
    :Révision et Validation;
    if (Validation OK ?) then (Oui)
      :Mise à jour du stock physique;
      :Génération du bordereau d'entrée;
    else (Non)
      :Correction ou Annulation;
    endif
    stop
```

### 3.2 Flux : Transfert Inter-sites (Multi-site)

```mermaid
activityDiagram
    start
    :Initialisation du transfert (Site A);
    :Sélection des articles et quantités;
    :Validation départ (Stock passe en 'Transit');
    |Transport|
    :Transport des marchandises;
    |Site B (Réceptionnaire)|
    :Vérification de la marchandise;
    if (Conforme ?) then (Oui)
      :Validation réception;
      :Stock ajouté au Site B;
    else (Écarts)
      :Saisie des manquants/casse;
      :Validation avec réserves;
    endif
    stop
```

### 3.3 Flux : Processus d'Inventaire

```mermaid
activityDiagram
    start
    :Création session d'inventaire;
    :Définition du périmètre (Zone/Rayon);
    :Gel des mouvements de stock;
    |Magasinier|
    :Comptage physique;
    :Saisie des quantités réelles;
    |Superviseur|
    if (Écart détecté ?) then (Oui)
      if (Besoin second comptage ?) then (Oui)
        :Assignation second opérateur;
        :Nouveau comptage;
      else
        :Justification de l'écart;
      endif
    else (Non)
    endif
    :Validation des écarts;
    :Ajustement automatique du stock;
    :Dégel du stock;
    stop
```

---

## 4. ANALYSE DES PERMISSIONS (RAPPEL)

Le module repose sur une matrice restrictive :
- **Lecture seule** : `article.view`, `warehouse.view`, `report.view`.
- **Action de terrain** : `stockEntry.create`, `stockExit.create`, `inventory.count`.
- **Action de contrôle** : `stockEntry.validate`, `inventory.validate`, `adjustment.validate`, `lot.block`.
- **Administration** : `settings.stock`, `warehouse.create`.

---
*Ce document sert de référence technique pour l'implémentation frontend.*
