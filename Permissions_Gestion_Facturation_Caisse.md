 **version complète, structurée et exploitable** du module **Facturation + Caisse** pour  OCM_ERP, avec :

1. **Toutes les fonctionnalités** (exhaustives)
2. **Les actions utilisateurs** associées
3. **La matrice complète des permissions**

Cette base est pensée pour convenir à un ERP professionnel (Distribution, Commerce, Services, Industrie), en anticipant les besoins de structuration fine des rôles.

---

# **1. FONCTIONNALITÉS DU MODULE FACTURATION & CAISSE**

## **A. FACTURATION / VENTES**

### 1. Gestion des devis / proformas

### 2. Gestion des commandes clients

### 3. Génération des factures

### 4. Gestion des bons de livraison

### 5. Gestion des avoirs (retours / annulations)

### 6. Paramétrage taxes & remises

### 7. Gestion du cycle de validation des documents

### 8. Suivi des factures (statuts, échéances, relances)

### 9. Journaux et historiques de facturation

### 10. Export comptable (vers module comptabilité)

---

## **B. GESTION DE LA CAISSE**

### 1. Ouverture / fermeture de caisse

### 2. Gestion des sessions de caisse

### 3. Encaissements clients

### 4. Décaissements

### 5. Reçus de paiement

### 6. Modes de paiement multiples

*(espèces, mobile money, virement, chèque, carte, crédit interne…)*

### 7. Gestion du fonds de caisse

### 8. Pointage et rapprochement de caisse

### 9. Annulation / correction d’encaissements

### 10. Historique de paiements / opérations

---

## **C. PARAMÉTRAGE ET RÉFÉRENTIELS**

### 1. Paramètres de numérotation

### 2. Paramétrage des taxes

### 3. Paramétrage des remises et promotions

### 4. Paramétrage des modes de paiement

### 5. Paramétrage des modèles d’impression (factures, tickets…)

### 6. Paramétrage des caisses (physiques & virtuelles)

### 7. Sécurité : permissions spécifiques Caisse & Facturation

---

# **2. LISTE DES ACTIONS UTILISATEURS PAR FONCTIONNALITÉ**

---

## **A. FACTURATION**

### **1. Devis / Proformas**

* Créer un devis
* Modifier un devis
* Appliquer une remise
* Ajouter / supprimer une ligne
* Convertir un devis en commande
* Supprimer un devis
* Valider un devis
* Exporter / imprimer

---

### **2. Commandes clients**

* Créer une commande
* Modifier une commande
* Valider une commande
* Annuler une commande
* Générer facture depuis commande
* Générer bon de livraison
* Supprimer une commande

---

### **3. Factures**

* Créer facture (directe ou depuis commande/BL)
* Modifier facture (tant que non validée)
* Valider facture
* Annuler facture
* Saisir règlement
* Appliquer remise / rabais
* Éditer / imprimer facture
* Envoyer par e-mail
* Exporter comptablement

---

### **4. Bons de livraison (BL)**

* Créer BL
* Valider BL
* Annuler BL
* Convertir en facture
* Imprimer BL

---

### **5. Avoirs / Notes de crédit**

* Créer un avoir
* Valider un avoir
* Lier l’avoir à une facture
* Rembourser via caisse
* Imprimer / envoyer

---

### **6. Taxes, Remises & Paramétrages**

* Créer / modifier taxes
* Créer / modifier types de remise
* Activer / désactiver taxes
* Sélectionner zone fiscale (TVA, exonération…)

---

### **7. Suivi & Reporting**

* Consulter les factures
* Filtrer par statut (payée, impayée, partielle)
* Consulter l’historique document
* Générer rapports de ventes
* Export Excel / PDF

---

## **B. CAISSE**

### **1. Sessions de caisse**

* Ouvrir une session
* Définir fonds de caisse
* Clôturer caisse
* Réouvrir session (autorité spéciale)
* Consulter sessions passées

---

### **2. Encaissements**

* Enregistrer un paiement
* Choisir mode de paiement
* Modifier un paiement non validé
* Valider un paiement
* Imprimer reçu
* Annuler un paiement (permission spéciale)

---

### **3. Décaissements**

* Créer un décaissement
* Valider décaissement
* Annuler décaissement
* Imprimer reçu de sortie de caisse

---

### **4. Rapprochement caisse**

* Consulter mouvements (entrées / sorties)
* Effectuer le rapprochement
* Enregistrer écart caisse
* Justifier écart

---

### **5. Sécurité Caisse**

* Accès caisse autorisé ou non
* Autorisation annulation encaissement
* Autorisation manipulation écarts

---

# **3. MATRICE COMPLÈTE DES PERMISSIONS**

> **Format demandé :**
> **Nom permission — Description — Fonction liée — Type d’accès**

---

## **A. FACTURATION**

### **Devis**

| Permission     | Description           | Fonction liée    | Type        |
| -------------- | --------------------- | ---------------- | ----------- |
| devis.view     | Voir les devis        | Devis            | Lecture     |
| devis.create   | Créer devis           | Devis            | Écriture    |
| devis.update   | Modifier devis        | Devis            | Écriture    |
| devis.validate | Valider devis         | Devis            | Validation  |
| devis.delete   | Supprimer devis       | Devis            | Suppression |
| devis.convert  | Convertir en commande | Devis → Commande | Validation  |

---

### **Commandes**

| Permission        | Description        | Fonction             | Type        |
| ----------------- | ------------------ | -------------------- | ----------- |
| order.view        | Voir commandes     | Commandes            | Lecture     |
| order.create      | Créer commande     | Commandes            | Écriture    |
| order.update      | Modifier commande  | Commandes            | Écriture    |
| order.validate    | Valider commande   | Commandes            | Validation  |
| order.cancel      | Annuler commande   | Commandes            | Validation  |
| order.delete      | Supprimer commande | Commandes            | Suppression |
| order.to_invoice  | Générer facture    | Commandes → Factures | Validation  |
| order.to_delivery | Générer BL         | Commandes → BL       | Validation  |

---

### **Factures**

| Permission       | Description        | Fonction           | Type           |
| ---------------- | ------------------ | ------------------ | -------------- |
| invoice.view     | Consulter factures | Facturation        | Lecture        |
| invoice.create   | Créer facture      | Facturation        | Écriture       |
| invoice.update   | Modifier facture   | Facturation        | Écriture       |
| invoice.validate | Valider facture    | Facturation        | Validation     |
| invoice.cancel   | Annuler facture    | Facturation        | Validation     |
| invoice.delete   | Supprimer facture  | Facturation        | Suppression    |
| invoice.send     | Envoyer facture    | Facturation        | Lecture/Action |
| invoice.print    | Imprimer           | Facturation        | Lecture        |
| invoice.export   | Export comptable   | Facturation/Compta | Lecture/Export |

---

### **Bons de livraison**

| Permission          | Description     | Fonction     | Type       |
| ------------------- | --------------- | ------------ | ---------- |
| delivery.view       | Voir BL         | BL           | Lecture    |
| delivery.create     | Créer BL        | BL           | Écriture   |
| delivery.validate   | Valider BL      | BL           | Validation |
| delivery.cancel     | Annuler BL      | BL           | Validation |
| delivery.to_invoice | Générer facture | BL → Facture | Validation |

---

### **Avoirs**

| Permission          | Description           | Fonction | Type        |
| ------------------- | --------------------- | -------- | ----------- |
| creditnote.view     | Voir avoirs           | Avoirs   | Lecture     |
| creditnote.create   | Créer avoir           | Avoirs   | Écriture    |
| creditnote.validate | Valider avoir         | Avoirs   | Validation  |
| creditnote.apply    | Appliquer sur facture | Avoirs   | Validation  |
| creditnote.delete   | Supprimer avoir       | Avoirs   | Suppression |

---

## **B. CAISSE**

### **Sessions de caisse**

| Permission          | Description     | Fonction | Type                |
| ------------------- | --------------- | -------- | ------------------- |
| cash.session.open   | Ouvrir caisse   | Caisse   | Écriture            |
| cash.session.close  | Clôturer caisse | Caisse   | Validation          |
| cash.session.reopen | Réouvrir caisse | Caisse   | Validation spéciale |
| cash.session.view   | Voir sessions   | Caisse   | Lecture             |

---

### **Encaissements**

| Permission       | Description             | Fonction     | Type                |
| ---------------- | ----------------------- | ------------ | ------------------- |
| payment.create   | Enregistrer un paiement | Encaissement | Écriture            |
| payment.validate | Valider paiement        | Encaissement | Validation          |
| payment.cancel   | Annuler paiement        | Encaissement | Validation spéciale |
| payment.delete   | Supprimer paiement      | Encaissement | Suppression         |
| payment.print    | Imprimer reçu           | Encaissement | Lecture             |

---

### **Décaissements**

| Permission      | Description              | Fonction     | Type       |
| --------------- | ------------------------ | ------------ | ---------- |
| payout.create   | Enregistrer décaissement | Décaissement | Écriture   |
| payout.validate | Valider décaissement     | Décaissement | Validation |
| payout.cancel   | Annuler décaissement     | Décaissement | Validation |
| payout.print    | Imprimer reçu            | Décaissement | Lecture    |

---

### **Rapprochement caisse**

| Permission          | Description                | Fonction      | Type       |
| ------------------- | -------------------------- | ------------- | ---------- |
| cash.reconcile      | Faire rapprochement caisse | Rapprochement | Validation |
| cash.adjust         | Enregistrer écart caisse   | Rapprochement | Écriture   |
| cash.view_movements | Voir mouvements caisse     | Rapprochement | Lecture    |

---

### **Paramétrages caisse/facturation**

| Permission             | Description                     | Fonction    | Type     |
| ---------------------- | ------------------------------- | ----------- | -------- |
| settings.taxes         | Modifier taxes                  | Paramétrage | Écriture |
| settings.remises       | Modifier remises                | Paramétrage | Écriture |
| settings.payment_modes | Modifier modes paiement         | Paramétrage | Écriture |
| settings.numbering     | Modifier numérotation documents | Paramétrage | Écriture |
| settings.caisse        | Configurer caisses              | Paramétrage | Écriture |

---


