
---

# **1. FONCTIONNALITÉS D’UN MODULE DE GESTION DE L’APPROVISIONNEMENT**

Je regroupe les fonctionnalités en 12 grands blocs :

---

## **A. Gestion des besoins & demandes internes**

1. Saisie des demandes d’achat (DA)
2. Ajout d’articles, quantités, budgets
3. Affectation de la DA à un service demandeur
4. Workflow d’approbation (chef de service → direction → DG…)
5. Suivi du statut (soumis / en validation / validé / rejeté)
6. Conversion d’une DA en commande
7. Historique des décisions et commentaires d’approbation

---

## **B. Gestion des fournisseurs**

1. Création et mise à jour des fiches fournisseurs
2. Classification (local, international, stratégique, unique…)
3. Upload des documents administratifs
4. Évaluations fournisseurs (qualité, délai, conformité)
5. Blocage / déblocage fournisseur
6. Gestion des contrats et accords-cadres

---

## **C. Catalogue & gestion des articles**

1. Gestion des articles, variantes, unités
2. Gestion des catégories et familles d’achat
3. Prix standards / prix contractuels
4. Mise à jour du catalogue d’achat
5. Définition des fournisseurs habituels par article

---

## **D. Consultation & appels d’offres**

1. Lancement d’une consultation auprès de fournisseurs
2. Envoi automatique des demandes de devis (RFQ)
3. Réception de devis
4. Comparatif automatique des devis
5. Sélection du fournisseur retenu
6. Historique des consultations
7. Approbation du choix conforme aux procédures internes

---

## **E. Commandes d’achat (PO)**

1. Création manuelle ou depuis DA / consultation
2. Ajout / modification des lignes
3. Validation selon workflow
4. Envoi au fournisseur
5. Gestion des livraisons partielles
6. Gestion des taxes, remises et conditions
7. Annulation ou modification avec traçabilité

---

## **F. Réception & bon de réception (BR)**

1. Enregistrement des réceptions
2. Réception partielle / totale
3. Contrôle qualité (accepté / rejeté)
4. Gestion des non-conformités
5. Réconciliation PO – BR – Facture
6. Génération des BR

---

## **G. Gestion des stocks liée à l’approvisionnement**

1. Mise à jour automatique des stocks après réception
2. Réservation / dé-réservation
3. Suivi des niveaux de stock
4. Alertes de seuils minimum
5. Liaison avec inventaires

---

## **H. Factures et rapprochements**

1. Saisie des factures fournisseurs
2. Vérification automatique : PO = BR = Facture
3. Gestion des écarts (prix, quantités)
4. Workflow de validation de facture
5. Blocage / déblocage pour paiement
6. Export vers comptabilité

---

## **I. Gestion des contrats & engagements**

1. Enregistrement des contrats d’achat
2. Suivi des consommations sur contrat
3. Alertes de renouvellement
4. Gestion des plafonds d’engagement
5. Suivi budgétaire

---

## **J. Reporting & analyse**

1. Tableau de bord achat
2. Top fournisseurs
3. Performances d’approvisionnement
4. Historique des commandes
5. Coûts d’achats, économies réalisées
6. Suivi des délais de livraison

---

## **K. Administration du module**

1. Paramétrage des types de documents
2. Paramétrage des workflows
3. Paramétrage des devises, taxes, séries…
4. Gestion des droits et rôles
5. Paramétrage des seuils de contrôle

---

## **L. Traçabilité & audit**

1. Journal d’audit sur chaque document
2. Historique des modifications
3. Export des logs pour contrôle interne

---

# **2. ACTIONS UTILISATEURS PAR FONCTIONNALITÉ**

Je liste maintenant **toutes les actions “granulaires”** nécessaires à un système complet de permissions.

---

## **A. Demandes d’achat**

* Créer une DA
* Modifier une DA
* Supprimer une DA
* Soumettre pour validation
* Valider la DA
* Rejeter la DA
* Dupliquer une DA
* Voir les DA (lecture)
* Convertir une DA en commande

---

## **B. Fournisseurs**

* Créer un fournisseur
* Modifier un fournisseur
* Supprimer un fournisseur
* Lire les fiches fournisseurs
* Bloquer un fournisseur
* Débloquer un fournisseur
* Évaluer un fournisseur
* Ajouter des documents
* Modifier un contrat
* Clôturer un contrat

---

## **C. Catalogue des articles**

* Créer un article
* Modifier un article
* Supprimer un article
* Lire le catalogue
* Modifier les prix
* Associer un fournisseur à un article
* Modifier les unités / catégories

---

## **D. Consultations & RFQ**

* Créer une consultation
* Modifier une consultation
* Supprimer une consultation
* Envoyer une RFQ aux fournisseurs
* Enregistrer un devis
* Modifier un devis reçu
* Supprimer un devis
* Lire les consultations
* Valider la sélection fournisseur
* Clôturer la consultation

---

## **E. Commandes d’achat (PO)**

* Créer une commande
* Modifier une commande
* Supprimer une commande
* Lire les commandes
* Envoyer une commande
* Valider une commande
* Rejeter une commande
* Annuler une commande
* Dupliquer une commande

---

## **F. Réceptions (BR)**

* Créer un BR
* Modifier un BR
* Supprimer un BR
* Lire les BR
* Effectuer un contrôle qualité
* Rejeter (non-conformité)
* Clôturer une réception
* Lier la réception à la commande

---

## **G. Stock (lié à l’approvisionnement)**

* Lire le stock
* Mettre à jour manuellement (autorisation limitée)
* Ajouter des réservations
* Supprimer des réservations
* Accéder à l’historique de stock

---

## **H. Facturation & rapprochements**

* Saisir une facture fournisseur
* Modifier une facture
* Supprimer une facture
* Lire les factures
* Valider une facture
* Rejeter une facture
* Débloquer pour paiement
* Rapprocher facture avec PO / BR

---

## **I. Contrats & engagements**

* Créer un contrat d’achat
* Modifier un contrat
* Supprimer un contrat
* Lire les contrats
* Associer une commande à un contrat
* Fermer ou renouveler un contrat

---

## **J. Reporting**

* Consulter les rapports
* Exporter les rapports
* Modifier les paramètres d’analyse (droits avancés)

---

## **K. Paramétrage**

* Modifier les workflows
* Configurer les taxes
* Configurer les devises
* Gérer les types de documents
* Gérer les rôles et permissions
* Configurer les seuils d’alerte

---

## **L. Audit**

* Consulter le journal d’audit
* Exporter les logs
* Filtrer les logs

---

# **3. MATRICE COMPLÈTE DES PERMISSIONS**

Voici un modèle, chaque permission contient :

* **Nom de la permission**
* **Description**
* **Fonction liée**
* **Type d’accès**

Je te propose déjà **50+ permissions**, mais si tu veux, je peux générer un fichier Excel structuré automatiquement.

---

## **A. Demandes d’Achat**

| Nom Permission | Description                  | Fonction | Type        |
| -------------- | ---------------------------- | -------- | ----------- |
| DA_CREATE      | Créer une demande d’achat    | DA       | Écriture    |
| DA_EDIT        | Modifier une DA              | DA       | Écriture    |
| DA_DELETE      | Supprimer une DA             | DA       | Suppression |
| DA_VIEW        | Lire les demandes d’achat    | DA       | Lecture     |
| DA_SUBMIT      | Soumettre une DA             | DA       | Action      |
| DA_VALIDATE    | Valider une DA               | DA       | Validation  |
| DA_REJECT      | Rejeter une DA               | DA       | Validation  |
| DA_CONVERT_PO  | Convertir une DA en commande | DA/PO    | Écriture    |

---

## **B. Fournisseurs**

| Permission        | Description              | Fonction     | Type        |
| ----------------- | ------------------------ | ------------ | ----------- |
| SUPPLIER_CREATE   | Créer fournisseur        | Fournisseurs | Écriture    |
| SUPPLIER_EDIT     | Modifier fournisseur     | Fournisseurs | Écriture    |
| SUPPLIER_DELETE   | Supprimer fournisseur    | Fournisseurs | Suppression |
| SUPPLIER_VIEW     | Voir fournisseurs        | Fournisseurs | Lecture     |
| SUPPLIER_BLOCK    | Bloquer un fournisseur   | Fournisseurs | Action      |
| SUPPLIER_UNBLOCK  | Débloquer un fournisseur | Fournisseurs | Action      |
| SUPPLIER_EVALUATE | Évaluer un fournisseur   | Fournisseurs | Écriture    |
| SUPPLIER_ADD_DOC  | Ajouter documents        | Fournisseurs | Écriture    |

---

## **C. Articles & Catalogue**

| Permission           | Description           | Fonction  | Type        |
| -------------------- | --------------------- | --------- | ----------- |
| ITEM_CREATE          | Créer un article      | Catalogue | Écriture    |
| ITEM_EDIT            | Modifier un article   | Catalogue | Écriture    |
| ITEM_DELETE          | Supprimer un article  | Catalogue | Suppression |
| ITEM_VIEW            | Voir catalogue        | Catalogue | Lecture     |
| ITEM_UPDATE_PRICE    | Modifier prix article | Catalogue | Écriture    |
| ITEM_ASSIGN_SUPPLIER | Associer fournisseurs | Catalogue | Écriture    |

---

## **D. Consultations / RFQ**

| Permission             | Description                | Fonction | Type        |
| ---------------------- | -------------------------- | -------- | ----------- |
| RFQ_CREATE             | Créer une consultation     | RFQ      | Écriture    |
| RFQ_EDIT               | Modifier une consultation  | RFQ      | Écriture    |
| RFQ_DELETE             | Supprimer une consultation | RFQ      | Suppression |
| RFQ_VIEW               | Voir les consultations     | RFQ      | Lecture     |
| RFQ_SEND               | Envoyer RFQ                | RFQ      | Action      |
| RFQ_RECEIVE_QUOTE      | Enregistrer devis          | RFQ      | Écriture    |
| RFQ_EDIT_QUOTE         | Modifier devis             | RFQ      | Écriture    |
| RFQ_DELETE_QUOTE       | Supprimer devis            | RFQ      | Suppression |
| RFQ_VALIDATE_SELECTION | Valider fournisseur retenu | RFQ      | Validation  |

---

## **E. Commandes d’achat (PO)**

| Permission  | Description            | Fonction  | Type        |
| ----------- | ---------------------- | --------- | ----------- |
| PO_CREATE   | Créer commande         | Commandes | Écriture    |
| PO_EDIT     | Modifier commande      | Commandes | Écriture    |
| PO_DELETE   | Supprimer commande     | Commandes | Suppression |
| PO_VIEW     | Voir commandes         | Commandes | Lecture     |
| PO_SEND     | Envoyer au fournisseur | Commandes | Action      |
| PO_VALIDATE | Valider commande       | Commandes | Validation  |
| PO_REJECT   | Rejeter commande       | Commandes | Validation  |
| PO_CANCEL   | Annuler commande       | Commandes | Action      |

---

## **F. Réceptions**

| Permission | Description            | Fonction | Type        |
| ---------- | ---------------------- | -------- | ----------- |
| GRN_CREATE | Créer bon de réception | BR       | Écriture    |
| GRN_EDIT   | Modifier BR            | BR       | Écriture    |
| GRN_DELETE | Supprimer BR           | BR       | Suppression |
| GRN_VIEW   | Lire BR                | BR       | Lecture     |
| GRN_QC     | Contrôle qualité       | BR       | Action      |
| GRN_REJECT | Rejeter réception      | BR       | Action      |

---

## **G. Factures**

| Permission       | Description       | Fonction | Type        |
| ---------------- | ----------------- | -------- | ----------- |
| INVOICE_CREATE   | Saisir facture    | Factures | Écriture    |
| INVOICE_EDIT     | Modifier facture  | Factures | Écriture    |
| INVOICE_DELETE   | Supprimer facture | Factures | Suppression |
| INVOICE_VIEW     | Lire facture      | Factures | Lecture     |
| INVOICE_VALIDATE | Valider facture   | Factures | Validation  |
| INVOICE_REJECT   | Rejeter facture   | Factures | Validation  |
| INVOICE_UNBLOCK  | Débloquer facture | Factures | Action      |

---

## **H. Contracts & Engagements

| Permission      | Description        | Fonction | Type        |
| --------------- | ------------------ | -------- | ----------- |
| CONTRACT_CREATE | Créer contrat      | Contrats | Écriture    |
| CONTRACT_EDIT   | Modifier contrat   | Contrats | Écriture    |
| CONTRACT_DELETE | Supprimer contrat  | Contrats | Suppression |
| CONTRACT_VIEW   | Voir contrats      | Contrats | Lecture     |
| CONTRACT_RENEW  | Renouveler contrat | Contrats | Action      |
| CONTRACT_CLOSE  | Clôturer contrat   | Contrats | Action      |

---

## **I. Reporting**

| Permission    | Description       | Fonction  | Type            |
| ------------- | ----------------- | --------- | --------------- |
| REPORT_VIEW   | Lire les rapports | Reporting | Lecture         |
| REPORT_EXPORT | Exporter données  | Reporting | Lecture avancée |

---

## **J. Paramétrage**

| Permission         | Description                | Fonction   | Type           |
| ------------------ | -------------------------- | ---------- | -------------- |
| SETTINGS_WORKFLOW  | Modifier workflows         | Paramètres | Administration |
| SETTINGS_TAX       | Modifier taxes             | Paramètres | Administration |
| SETTINGS_DOC_TYPES | Gérer documents            | Paramètres | Administration |
| SETTINGS_ROLES     | Gérer rôles et permissions | Paramètres | Administration |

---

## **K. Audit**

| Permission   | Description   | Fonction | Type    |
| ------------ | ------------- | -------- | ------- |
| AUDIT_VIEW   | Voir logs     | Audit    | Lecture |
| AUDIT_EXPORT | Exporter logs | Audit    | Lecture |

---

