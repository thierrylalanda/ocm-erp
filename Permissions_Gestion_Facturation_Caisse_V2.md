
✔ **Facturation**
✔ **Caisse**
✔ **POS / Point de Vente**
✔ **Facturation géolocalisée** (mobilité, livreurs, agents itinérants, force de vente terrain)

Cette base est pensée pour un ERP moderne (distribution, commerce, agroalimentaire, TPE/PME, industrie légère).

---

# **1. FONCTIONNALITÉS DU MODULE FACTURATION + CAISSE + POS + FACTURATION GÉOLOCALISÉE**

---

# 🟦 **A. Facturation classique**

## **1. Gestion des Devis / Proformas**

* Création, modification, validation, suppression
* Conversion en commande, BL, facture
* Gestion remises & taxes
* Impression & envoi

## **2. Gestion des Commandes Clients**

* Création / validation
* Gestion des statuts (en attente, validée, annulée, livrée)
* Lien avec stock
* Génération facture / BL

## **3. Gestion des Factures**

* Facturation directe
* Facturation groupée
* Facturation périodique
* Facturation avec acomptes
* Gestion des statuts (validée, payée, impayée, partielle)
* Génération reçus

## **4. Bons de Livraison (BL)**

* Création / validation
* Annulation / retour
* Conversion en facture

## **5. Gestion des Avoirs / Notes de crédit**

* Création d’un avoir partiel ou total
* Affectation sur facture
* Remboursement via caisse

## **6. Paramétrage**

* Remises, taxes, numérotation, modèles de documents
* Séries / journaux de facturation
* Groupes fiscaux (TVA, exonération, auto-liquidation…)

---

# 🟧 **B. Module CAISSE**

## **1. Sessions de caisse**

* Ouverture / fermeture
* Fonds de caisse
* Réouverture (superviseur)

## **2. Encaissements**

* Multi-modes : cash, Mobile Money, carte bancaire, chèque, virement, crédit client
* Paiement partiel / total
* Edition ticket/reçu

## **3. Décaissements**

* Sortie de caisse
* Dépenses terrain
* Versements bancaires

## **4. Rapprochement & rapports**

* Suivi entrées/sorties
* Pointage caisse
* Gestion des écarts

---

# 🟫 **C. POS / POINT DE VENTE**

## **1. Interface de vente rapide**

* Sélection articles par catégories / favoris
* Produits scannés (code-barres / QR code)
* Gestion panier et remises

## **2. Tickets**

* Ticket simple / ticket + facture
* Gestion annulation ligne / ticket
* Suspense (mise en attente de ticket)

## **3. Équipements POS**

* Imprimante ticket
* Tiroir caisse
* Terminal carte bancaire
* Mobile POS (portable Android/iOS
## **4. Fonctionnalités avancées**

* Mode offline (synchronisation différée)
* Gestion des caisses multiples (POS 1, POS 2…)
* Vente par agent itinérant (POS mobile)

---

# 🟩 **D. Facturation géolocalisée**

Ce module permet la facturation terrain : livreurs, commerciaux itinérants, agents de recouvrement, techniciens…

## **1. Emission de documents géolocalisés**

* Devis géolocalisés
* Commandes géolocalisées
* Factures terrain géolocalisées
* Encaissements géolocalisés

## **2. Suivi terrain**

* Historique GPS
* Distance parcourue
* Localisation au moment de la facture

## **3. Preuve de passage**

* Capture de photo
* Signature client
* Enregistrement de coordonnées GPS

## **4. Contrôle anti-fraude**

* Vérification position vs. zone commerciale
* Blocage facturation hors zone autorisée
* Rapport des anomalies (facturation trop éloignée)

---

# **2. LISTE EXHAUSTIVE DES ACTIONS UTILISATEUR**

Je classe par module pour clarté.

---

# 🟦 **ACTIONS — FACTURATION**

## **DEVIS**

* Créer
* Modifier
* Appliquer remise/TVA
* Ajouter ligne / supprimer ligne
* Convertir en commande
* Convertir en facture
* Supprimer
* Valider
* Imprimer / envoyer

## **COMMANDES**

* Créer / modifier
* Valider
* Annuler
* Supprimer
* Générer facture
* Générer BL

## **FACTURES**

* Créer facture
* Modifier facture non validée
* Valider facture
* Annuler facture
* Supprimer facture
* Imprimer
* Envoyer par mail
* Exporter vers compta
* Appliquer remise
* Rattacher encaissements

## **BL**

* Créer
* Valider
* Annuler
* Convertir en facture
* Imprimer

## **AVOIRS**

* Créer
* Modifier
* Valider
* Appliquer sur facture
* Supprimer

---

# 🟧 **ACTIONS — CAISSE**

## **SESSIONS**

* Ouvrir session
* Définir fonds
* Clôturer session
* Réouvrir session
* Consulter sessions

## **ENCAISSEMENTS**

* Créer encaissement
* Modifier encaissement
* Valider encaissement
* Annuler / supprimer encaissement
* Associer encaissement à facture
* Imprimer reçu

## **DÉCAISSEMENTS**

* Créer
* Valider
* Annuler
* Imprimer ticket

## **RAPPROCHEMENT**

* Voir mouvements
* Pointer caisse
* Enregistrer écarts
* Justifier écart

---

# 🟫 **ACTIONS — POS**

## **VENTE**

* Scanne code-barres
* Ajouter produit panier
* Modifier quantité
* Supprimer ligne
* Appliquer remise POS
* Enregistrer vente / ticket
* Ticket suspendu / restaurer
* Ticket annulé

## **ÉQUIPEMENT**

* Ouvrir tiroir caisse
* Fermer tiroir caisse
* Lancer impression ticket
* Reimprimer ticket

---

# 🟩 **ACTIONS — FACTURATION GÉOLOCALISÉE**

* Activer GPS obligatoire
* Capturer position GPS lors facturation
* Capturer signature client
* Capturer photo preuve
* Vérifier autorisation zone géographique
* Consulter historique positions agents
* Modifier zone d’intervention (superviseur)
* Voir carte des ventes en temps réel

---

# **3. MATRICE COMPLÈTE DES PERMISSIONS**

---

## 🟦 **A. Permissions Facturation**

| Permission          | Description           | Fonction           | Type        |
| ------------------- | --------------------- | ------------------ | ----------- |
| devis.view          | Voir devis            | Devis              | Lecture     |
| devis.create        | Créer devis           | Devis              | Écriture    |
| devis.update        | Modifier devis        | Devis              | Écriture    |
| devis.validate      | Valider devis         | Devis              | Validation  |
| devis.delete        | Supprimer devis       | Devis              | Suppression |
| devis.convert       | Convertir en commande | Devis              | Validation  |
| order.view          | Voir commandes        | Commande           | Lecture     |
| order.create        | Créer commande        | Commande           | Écriture    |
| order.update        | Modifier commande     | Commande           | Écriture    |
| order.validate      | Valider commande      | Commande           | Validation  |
| order.cancel        | Annuler commande      | Commande           | Suppression |
| order.to_invoice    | Générer facture       | Commande → Facture | Validation  |
| order.to_delivery   | Générer BL            | Commande → BL      | Validation  |
| invoice.view        | Voir factures         | Facture            | Lecture     |
| invoice.create      | Créer facture         | Facture            | Écriture    |
| invoice.update      | Modifier facture      | Facture            | Écriture    |
| invoice.validate    | Valider facture       | Facture            | Validation  |
| invoice.cancel      | Annuler facture       | Facture            | Suppression |
| invoice.delete      | Supprimer facture     | Facture            | Suppression |
| invoice.print       | Imprimer              | Facture            | Lecture     |
| invoice.send        | Envoyer e-mail        | Facture            | Action      |
| invoice.export      | Export comptable      | Facture            | Export      |
| delivery.view       | Voir BL               | BL                 | Lecture     |
| delivery.create     | Créer BL              | BL                 | Écriture    |
| delivery.validate   | Valider BL            | BL                 | Validation  |
| delivery.cancel     | Annuler BL            | BL                 | Suppression |
| delivery.to_invoice | Facturer BL           | BL → Facture       | Validation  |
| creditnote.create   | Créer avoir           | Avoir              | Écriture    |
| creditnote.validate | Valider avoir         | Avoir              | Validation  |
| creditnote.apply    | Appliquer avoir       | Avoir              | Validation  |
| creditnote.delete   | Supprimer avoir       | Avoir              | Suppression |

---

## 🟧 **B. Permissions Caisse**

| Permission          | Description          | Fonction | Type        |
| ------------------- | -------------------- | -------- | ----------- |
| cash.session.open   | Ouvrir caisse        | Caisse   | Écriture    |
| cash.session.close  | Clôturer caisse      | Caisse   | Validation  |
| cash.session.reopen | Réouvrir caisse      | Caisse   | Validation  |
| cash.session.view   | Voir sessions        | Caisse   | Lecture     |
| payment.create      | Créer encaissement   | Caisse   | Écriture    |
| payment.validate    | Valider encaissement | Caisse   | Validation  |
| payment.cancel      | Annuler encaissement | Caisse   | Suppression |
| payment.delete      | Supprimer            | Caisse   | Suppression |
| payout.create       | Créer décaissement   | Caisse   | Écriture    |
| payout.validate     | Valider décaissement | Caisse   | Validation  |
| payout.cancel       | Annuler décaissement | Caisse   | Suppression |
| cash.reconcile      | Rapprocher caisse    | Caisse   | Validation  |
| cash.adjust         | Enregistrer écart    | Caisse   | Écriture    |

---

## 🟫 **C. Permissions POS**

| Permission          | Description              | Fonction | Type        |
| ------------------- | ------------------------ | -------- | ----------- |
| pos.sell            | Réaliser vente POS       | POS      | Écriture    |
| pos.discount        | Appliquer remise POS     | POS      | Écriture    |
| pos.ticket.cancel   | Annuler ticket           | POS      | Suppression |
| pos.ticket.hold     | Mettre ticket en attente | POS      | Écriture    |
| pos.ticket.restore  | Restaurer ticket         | POS      | Écriture    |
| pos.reprint         | Réimprimer ticket        | POS      | Lecture     |
| pos.cashdrawer.open | Ouvrir tiroir caisse     | POS      | Action      |

---

## 🟩 **D. Permissions Facturation Géolocalisée**

| Permission        | Description                       | Fonction    | Type       |
| ----------------- | --------------------------------- | ----------- | ---------- |
| geo.enable        | Activer facturation géolocalisée  | Mobile      | Écriture   |
| geo.capture       | Capturer position GPS             | Mobile      | Action     |
| geo.sign          | Capture signature client          | Mobile      | Action     |
| geo.photo         | Capture photo preuve              | Mobile      | Action     |
| geo.zone.validate | Vérifier si facturation dans zone | Mobile      | Validation |
| geo.zone.override | Autoriser facturation hors zone   | Superviseur | Validation |
| geo.history.view  | Voir historique GPS               | Monitoring  | Lecture    |
| geo.map.view      | Voir carte des ventes             | Monitoring  | Lecture    |



# ✅ **MATRICE DES RÔLES (Module Facturation – POS – Caisse – Géolocalisée)**

### **Légende des types d’accès**

* **L = Lecture**
* **E = Écriture / Création**
* **M = Modification**
* **V = Validation / Encaissement / Clôture**
* **S = Suppression / Annulation**
* **A = Accès interdit**

---

# 📌 **1. Rôles Types**

* **R1 – Caissier**
* **R2 – POS / Vendeur Comptoir**
* **R3 – Commercial Terrain (Facturation Géolocalisée)**
* **R4 – Superviseur Point de Vente**
* **R5 – Chef Commercial / Responsable Vente**
* **R6 – Administrateur (Module Facturation / POS / Caisse)**

---

# 📌 **2. Matrice des Permissions Par Rôle**

## **A. Facturation / POS**

| Permission                           | Description                   | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| ------------------------------------ | ----------------------------- | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Créer facture POS**                | Saisie rapide au comptoir     | E        | E   | A                  | E           | E               | E     |
| **Créer facture comptoir classique** | Facture standard avec remises | E        | E   | A                  | E           | E               | E     |
| **Créer facture géolocalisée**       | Facture enregistrée avec GPS  | A        | A   | E                  | E           | E               | E     |
| **Modifier facture non validée**     | Avant encaissement            | M        | M   | M                  | M           | M               | M     |
| **Valider facture**                  | Finaliser la vente            | V        | V   | V                  | V           | V               | V     |
| **Annuler facture**                  | Annulation après erreur       | S        | S   | A                  | V/S         | V/S             | V/S   |
| **Appliquer remise standard**        | Remise max définie            | V        | V   | V                  | V           | V               | V     |
| **Appliquer remise exceptionnelle**  | Remise > limite               | A        | A   | A                  | V           | V               | V     |
| **Consulter factures**               | Historique                    | L        | L   | L                  | L           | L               | L     |
| **Réimprimer facture**               | Seconde impression            | V        | V   | V                  | V           | V               | V     |
| **Transférer facture en livraison**  | Lier facture à livraison      | A        | M   | V                  | V           | V               | V     |
| **Créer commande client**            | Avant-facture                 | A        | E   | E                  | E           | E               | E     |
| **Convertir commande → facture**     | Workflow vente                | V        | V   | V                  | V           | V               | V     |

---

## **B. Caisse**

| Permission                       | Description            | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| -------------------------------- | ---------------------- | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Ouvrir une caisse**            | Démarrer session       | V        | V   | A                  | V           | V               | V     |
| **Clôturer une caisse**          | Fermer session         | V        | V   | A                  | V           | V               | V     |
| **Saisir encaissement**          | Espèces, Mobile Money… | E        | E   | E                  | V           | V               | V     |
| **Saisir remboursement**         | Retour client          | S        | S   | A                  | V           | V               | V     |
| **Suivi état caisse**            | Montants et écarts     | L        | L   | A                  | L/V         | L/V             | L/V   |
| **Corriger mouvement de caisse** | Correction erreur      | A        | A   | A                  | M           | M               | M     |
| **Générer rapport Z / X**        | Fin de journée         | V        | V   | A                  | V           | V               | V     |

---

## **C. Paiements / Encaissements externes**

| Permission                      | Description            | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| ------------------------------- | ---------------------- | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Enregistrer paiement client** | Sur facture en attente | E        | E   | E                  | E           | E               | E     |
| **Valider paiement**            | Contrôle supervision   | V        | V   | A                  | V           | V               | V     |
| **Modifier paiement**           | Avant validation       | M        | M   | M                  | M           | M               | M     |
| **Annuler paiement**            | Après validation       | A        | A   | A                  | S           | S               | S     |
| **Gérer acomptes**              | Paiements partiels     | E        | E   | E                  | E           | E               | E     |

---

## **D. Clients & Tarification**

| Permission                        | Description           | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| --------------------------------- | --------------------- | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Créer client simple**           | Depuis POS            | E        | E   | E                  | E           | E               | E     |
| **Créer client complet**          | Champs avancés        | A        | M   | M                  | E           | E               | E     |
| **Modifier fiche client**         | Données générales     | A        | A   | M                  | M           | M               | M     |
| **Attribuer catégorie tarifaire** | Grossiste, revendeur… | A        | A   | A                  | V           | V               | V     |
| **Consulter comptes clients**     | Solde, historique     | L        | L   | L                  | L           | L               | L     |
| **Mettre en interdit de vente**   | Blocage client        | A        | A   | A                  | V           | V               | V     |

---

## **E. Produits / Catalogue**

| Permission                     | Description            | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| ------------------------------ | ---------------------- | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Consulter catalogue**        | Produits / prix        | L        | L   | L                  | L           | L               | L     |
| **Modifier prix**              | Prix standard          | A        | A   | A                  | A           | V               | V     |
| **Modifier remise max**        | Gestion des politiques | A        | A   | A                  | A           | V               | V     |
| **Activer/Désactiver produit** | Visibilité             | A        | A   | A                  | M           | V               | V     |

---

## **F. Facturation Géolocalisée**

| Permission                               | Description              | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
| ---------------------------------------- | ------------------------ | -------- | --- | ------------------ | ----------- | --------------- | ----- |
| **Activer GPS obligatoire**              | Mode “force location”    | A        | A   | V                  | V           | V               | V     |
| **Valider position GPS**                 | Preuve de vente sur site | A        | A   | V                  | V           | V               | V     |
| **Voir carte des ventes**                | Map journalière          | A        | A   | L                  | L/V         | L/V             | L/V   |
| **Contrôler exactitude géolocalisation** | Anti-fraude              | A        | A   | A                  | V           | V               | V     |

---

## **G. Paramétrage & Administration**


| Permission | Description | Caissier | POS | Commercial Terrain | Superviseur | Chef Commercial | Admin |
|-----------|-------------|-----|---------------------|-------------|------------------|--------|
| Créer/Modifier séries de factures | Préfixes, séquences | A | A | A | A | A | M |
| Configurer moyens de paiement | Espèces, OM, MoMo | A | A | A | M | M | M |
| Configurer règles de remise | Plafonds, exceptions | A | A | A | M | V | M |
| Créer/Modifier rôles et permissions | Sécurité module | A | A | A | A | A | V/M |
| Accéder à tous les rapports | Reporting global | L | L | L | L | L | V |
---

# 📌 **Résumé rapide des rôles**

### **Caissier**

➡️ Ventes simples, encaissements, réimpression, clôture caisse
❌ Pas de remises exceptionnelles, pas d’annulation avancée

### **POS / Vendeur Comptoir**

➡️ Similaire au caissier + gestion commandes
❌ Pas de supervision, pas de remises exceptionnelles

### **Commercial Terrain**

➡️ Facturation géolocalisée, encaissement terrain
❌ Pas d’annulation, pas de gestion caisse

### **Superviseur PDV**

➡️ Contrôle, validation remises, annulations, rapports
❌ Pas de paramétrage avancé

### **Chef Commercial**

➡️ Gestion des tarifs, remises, performance
❌ Pas de configuration technique du module

### **Administrateur**

➡️ Accès total : paramétrage, sécurité, tarifs, rapports avancés

