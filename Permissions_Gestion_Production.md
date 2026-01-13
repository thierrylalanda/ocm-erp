

# # 📌 1. FONCTIONNALITÉS COMPLÈTES

---

# ## 1. CONFIGURATION DE LA PRODUCTION

### 1.1 Paramètres généraux

* Gestion des unités de mesure (UoM)
* Types d’ordres de production
* Types d’articles (MP, PF, SF, emballages, consommables)
* Types de pertes
* Paramètres de traçabilité (lots, séries, DLUs)
* Paramètres de contrôle qualité
* Paramètres de ressources (humaines & machines)
* Calendriers de production
* Jours fériés et capacity planning

---

# ## 2. NOMENCLATURES (BOM – Bill of Materials)

### 2.1 Gestion des nomenclatures

* Création de nomenclatures multi-niveaux
* Lien article parent → composants
* Gestion des quantités standard
* Gestion des pertes et rendements
* Versions de nomenclatures
* Activation / désactivation
* Validité (dates de début/fin)

---

# ## 3. GAMMES, OPERATIONS & POSTES DE TRAVAIL

### 3.1 Postes de travail (machines / lignes / ateliers)

* Définition des postes de travail
* Capacité (par heure/jour/semaine)
* Coût machine
* Statuts (actif, en maintenance…)
* Lien avec ateliers / unités de production

### 3.2 Gammes de fabrication

* Définition des opérations
* Durée prévue par opération
* Temps préparation / exécution / changement série
* Lien avec postes de travail
* Documentation de fabrication (SOP, instructions)

---

# ## 4. PLANIFICATION & ÉQUIPES

### 4.1 Équipes & ressources humaines

* Définition des équipes
* Affectation des opérateurs
* Gestion des shifts / quarts
* Compétences requises par opération

### 4.2 Calendrier de capacité

* Disponibilités machines
* Affectation des ressources
* Capacité théorique vs réelle
* Jours fériés / maintenance

---

# ## 5. ORDRES DE PRODUCTION (OP)

### 5.1 Création & planification

* Création manuelle
* Création automatique (via demandes / prévisions / commandes)
* Planification détaillée
* Allocation aux lignes de production
* Détermination des besoins matières
* Réservation des matières en stock

### 5.2 Exécution

* Lancement d’OP
* Enregistrement progression
* Consommation matières
* Déclaration des productions
* Déclaration des déchets et pertes
* Pause / reprise / annulation

---

# ## 6. CONSOMMATION MATIÈRES

### 6.1 Processus matières

* Préparation matières
* Sortie matières vers production
* Consommation théorique vs réelle
* Ajustements
* Traçabilité des lots
* Retours magasin

---

# ## 7. PRODUCTION RÉALISÉE

### 7.1 Déclarations

* Quantité produite
* Quantité bonne vs rejetée
* Lots produits
* Emballages utilisés
* Fin d’opération
* Fermeture OP

---

# ## 8. CONTRÔLE QUALITÉ

### 8.1 Processus qualité

* Création points de contrôle
* Échantillonnage
* Tests qualitatifs / quantitatifs
* Résultats & conformité
* Validation qualité
* Blocage / libération des lots

---

# ## 9. NON-CONFORMITÉS

### 9.1 Gestion des NC

* Enregistrement NC
* Typologie NC
* Analyse cause racine
* Actions correctives
* Liaison avec OP, article, poste de travail

---

# ## 10. SUIVI DES TEMPS & PERFORMANCE

### 10.1 Calculs

* TRS / OEE
* Temps ouverture, disponibilité, performance
* Temps main-d’œuvre
* Détection pannes / arrêts

---

# ## 11. TABLEAUX DE BORD

* Suivi OP
* Consommations vs prévisions
* État des lignes
* Performances machines (OEE)
* NC & qualité
* Coûts de production
* Rendement matières

---

# # 📌 2. ACTIONS UTILISATEUR EXHAUSTIVES (CRUD + OPÉRATIONNEL)

---

# ## 2.1 CONFIGURATION

| Fonctionnalité      | Actions                                      |
| ------------------- | -------------------------------------------- |
| Paramètres généraux | Créer, éditer, supprimer, activer, consulter |
| Unités de mesure    | Créer, modifier, supprimer                   |
| Types OP            | Créer, modifier, supprimer                   |
| Paramètres qualité  | Configurer tests, seuils, règles             |
| Calendriers         | Définir, modifier, assigner aux machines     |

---

# ## 2.2 NOMENCLATURES (BOM)

| Fonctionnalité | Actions                              |
| -------------- | ------------------------------------ |
| Nomenclature   | Créer, modifier, supprimer           |
| Versions       | Créer version, activer, archiver     |
| Composants     | Ajouter, modifier quantités, retirer |
| Documents      | Attacher, télécharger, supprimer     |

---

# ## 2.3 POSTES DE TRAVAIL / GAMMES

| Fonctionnalité | Actions                                |
| -------------- | -------------------------------------- |
| Postes         | Créer, modifier, désactiver            |
| Capacités      | Modifier capacité, calendriers         |
| Gammes         | Ajouter opération, modifier, supprimer |
| Opérations     | Définir durée, ressources, séquence    |

---

# ## 2.4 PLANNING & ÉQUIPES

| Fonctionnalité      | Actions                           |
| ------------------- | --------------------------------- |
| Équipes             | Créer équipe, affecter opérateurs |
| Shifts              | Planifier, modifier, supprimer    |
| Ressources          | Affecter machine/atelier          |
| Calendrier capacité | Modifier durée machine            |

---

# ## 2.5 ORDRES DE PRODUCTION

| Fonctionnalité | Actions                               |
| -------------- | ------------------------------------- |
| OP             | Créer, modifier, supprimer, planifier |
| Workflow OP    | Lancer, suspendre, annuler, clôturer  |
| Réservation    | Réserver matières, libérer            |
| Production     | Déclarer quantités, pertes, rejets    |
| Traçabilité    | Associer lots, séries                 |

---

# ## 2.6 MATIÈRES

| Fonctionnalité | Actions                            |
| -------------- | ---------------------------------- |
| Sorties        | Générer sortie magasin             |
| Consommations  | Déclarer réelle, corriger, annuler |
| Retours        | Déclarer retour magasin            |
| Ajustements    | Écart théorique/réel               |

---

# ## 2.7 PRODUCTION

| Fonctionnalité | Actions                     |
| -------------- | --------------------------- |
| Déclaration    | Produire, annuler, corriger |
| Emballages     | Consommer, déclarer         |
| Lots PF        | Générer lot, fermer lot     |

---

# ## 2.8 QUALITÉ

| Fonctionnalité | Actions           |
| -------------- | ----------------- |
| Tests          | Déclarer résultat |
| Conformité     | Valider, rejeter  |
| Blocage lots   | Bloquer, libérer  |

---

# ## 2.9 NON-CONFORMITÉS

| Fonctionnalité      | Actions                    |
| ------------------- | -------------------------- |
| NC                  | Créer, analyser, clôturer  |
| Actions correctives | Définir, assigner, valider |

---

# ## 2.10 PERFORMANCE & OEE

| Fonctionnalité | Actions                |
| -------------- | ---------------------- |
| Arrêts         | Déclarer arrêt machine |
| Temps          | Déclarer temps MO      |
| TRS            | Consulter tableau      |

---

# # 📌 3. MATRICE COMPLÈTE DES PERMISSIONS

---

Voici la matrice complète structurée.

**Format :**
`Nom permission — Description — Fonction — Type d'accès`

---

# ## 3.1 CONFIGURATION PRODUCTION

* `config.view` — Voir paramètres — Configuration — Lecture
* `config.edit` — Modifier paramètres généraux — Configuration — Écriture
* `uom.create` — Créer unité de mesure — UoM — Création
* `uom.edit` — Modifier unité — UoM — Écriture
* `uom.delete` — Supprimer unité — UoM — Suppression
* `calendar.create` — Créer calendrier machine — Calendriers — Création
* `calendar.edit` — Modifier calendrier — Calendriers — Écriture
* `calendar.assign` — Assigner calendrier machine — Calendriers — Gestion

---

# ## 3.2 NOMENCLATURES (BOM)

* `bom.view` — Consulter BOM — BOM — Lecture
* `bom.create` — Créer BOM — BOM — Création
* `bom.edit` — Modifier BOM — BOM — Écriture
* `bom.delete` — Supprimer BOM — BOM — Suppression
* `bom.version.create` — Créer version — BOM — Création
* `bom.version.activate` — Activer version — BOM — Gestion
* `bom.component.add` — Ajouter composant — BOM — Écriture
* `bom.component.edit` — Modifier composant — BOM — Écriture
* `bom.component.remove` — Retirer composant — BOM — Suppression

---

# ## 3.3 POSTES DE TRAVAIL & GAMMES

* `workstation.view` — Voir postes — Postes — Lecture
* `workstation.create` — Créer poste — Postes — Création
* `workstation.edit` — Modifier poste — Postes — Écriture
* `workstation.disable` — Désactiver poste — Postes — Gestion
* `routing.create` — Créer gamme — Gammes — Création
* `routing.edit` — Modifier gamme — Gammes — Écriture
* `routing.operation.add` — Ajouter opération — Gammes — Création
* `routing.operation.edit` — Modifier opération — Gammes — Écriture
* `routing.operation.delete` — Supprimer opération — Gammes — Suppression

---

# ## 3.4 ÉQUIPES / RESSOURCES

* `team.view` — Voir équipes — RH production — Lecture
* `team.create` — Créer équipe — RH — Création
* `team.assign.operator` — Affecter opérateurs — RH — Gestion
* `shift.plan` — Planifier shift — RH — Gestion

---

# ## 3.5 ORDRES DE PRODUCTION (OP)

* `op.view` — Voir OP — OP — Lecture
* `op.create` — Créer OP — OP — Création
* `op.edit` — Modifier OP — OP — Écriture
* `op.delete` — Supprimer OP — OP — Suppression
* `op.launch` — Lancer OP — OP — Workflow
* `op.pause` — Suspendre OP — OP — Workflow
* `op.cancel` — Annuler OP — OP — Workflow
* `op.close` — Clôturer OP — OP — Workflow
* `op.reserve.materials` — Réserver matières — Stock → Production — Gestion
* `op.release.materials` — Libérer réservations — Stock — Gestion

---

# ## 3.6 CONSOMMATIONS MATIÈRES

* `consumption.view` — Voir consommations — Matières — Lecture
* `consumption.declare` — Déclarer consommation réelle — Matières — Action
* `consumption.adjust` — Ajuster consommation — Matières — Écriture
* `return.material` — Déclarer retour magasin — Matières — Retour

---

# ## 3.7 PRODUCTION RÉALISÉE

* `production.declare` — Déclarer production — Production — Action
* `production.edit` — Corriger déclaration — Production — Écriture
* `production.cancel` — Annuler déclaration — Production — Suppression
* `production.batch.create` — Créer lot PF — Production — Création

---

# ## 3.8 QUALITÉ

* `qc.view` — Voir contrôles — Qualité — Lecture
* `qc.test.enter` — Saisir résultats test — Qualité — Écriture
* `qc.validate` — Valider conformité — Qualité — Workflow
* `qc.reject` — Rejeter lot — Qualité — Workflow
* `qc.block` — Bloquer lot — Qualité — Blocage
* `qc.release` — Libérer lot — Qualité — Libération

---

# ## 3.9 NON-CONFORMITÉS

* `nc.create` — Créer NC — NC — Création
* `nc.view` — Voir NC — NC — Lecture
* `nc.analyze` — Analyse cause — NC — Écriture
* `nc.close` — Clôturer NC — NC — Workflow

---

# ## 3.10 PERFORMANCE / OEE

* `oee.view` — Voir OEE — Tableau bord — Lecture
* `downtime.declare` — Déclarer arrêt machine — Arrêts — Action
* `labor.time.declare` — Déclarer temps main-d’œuvre — MO — Action

---


# 🎯 **RÔLES COUVERTS**

1. **Opérateur de production**
2. **Chef d’équipe / Superviseur production**
3. **Planificateur / Ordonnanceur**
4. **Responsable de production**
5. **Contrôleur Qualité (QC)**
6. **Responsable Qualité**
7. **Responsable Maintenance** (optionnel)
8. **Administrateur ERP (Production)**

---

# 🧩 **FORMAT**

Pour chaque rôle :

* ✓ : permission accordée
* ✗ : permission refusée
* (option) : selon entreprise / configurable

---

# 🏭 **MATRICE DES RÔLES VS PERMISSIONS**

---

# ## 1️⃣ CONFIGURATION PRODUCTION

| Permission                 | Opérateur | Chef équipe | Planificateur | Resp. Production | QC | Resp. Qualité | Maintenance | Admin |
| -------------------------- | --------- | ----------- | ------------- | ---------------- | -- | ------------- | ----------- | ----- |
| config.view                | ✗         | ✗           | ✓             | ✓                | ✗  | ✗             | ✗           | ✓     |
| config.edit                | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |
| uom.create / edit / delete | ✗         | ✗           | ✗             | ✗                | ✗  | ✗             | ✗           | ✓     |
| calendar.create/edit       | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |
| calendar.assign            | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |

---

# ## 2️⃣ NOMENCLATURES (BOM)

| Permission           | Opérateur | Chef équipe | Planificateur | Resp. Production | QC | Resp. Qualité | Maintenance | Admin |
| -------------------- | --------- | ----------- | ------------- | ---------------- | -- | ------------- | ----------- | ----- |
| bom.view             | ✓         | ✓           | ✓             | ✓                | ✓  | ✓             | ✗           | ✓     |
| bom.create           | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |
| bom.edit             | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |
| bom.delete           | ✗         | ✗           | ✗             | ✗                | ✗  | ✗             | ✗           | ✓     |
| bom.version.create   | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |
| bom.version.activate | ✗         | ✗           | ✗             | ✓                | ✗  | ✗             | ✗           | ✓     |

---

# ## 3️⃣ GAMMES / POSTES DE TRAVAIL

| Permission            | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| --------------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| workstation.view      | ✓         | ✓           | ✓             | ✓          | ✓  | ✗       | ✓     | ✓     |
| workstation.create    | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✓     | ✓     |
| workstation.edit      | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✓     | ✓     |
| workstation.disable   | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✓     | ✓     |
| routing.create        | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| routing.edit          | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| routing.operation.add | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |

---

# ## 4️⃣ ÉQUIPES & PLANNING

| Permission           | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| -------------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| team.view            | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| team.create          | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| team.assign.operator | ✗         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| shift.plan           | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |

---

# ## 5️⃣ ORDRES DE PRODUCTION (OP)

| Permission           | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| -------------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| op.view              | ✓         | ✓           | ✓             | ✓          | ✓  | ✓       | ✗     | ✓     |
| op.create            | ✗         | ✗           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.edit              | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.delete            | ✗         | ✗           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.launch            | ✓         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.pause             | ✓         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.cancel            | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.close             | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.reserve.materials | ✗         | ✗           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| op.release.materials | ✗         | ✗           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |

---

# ## 6️⃣ CONSOMMATION MATIÈRES

| Permission          | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| ------------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| consumption.view    | ✓         | ✓           | ✓             | ✓          | ✓  | ✓       | ✗     | ✓     |
| consumption.declare | ✓         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| consumption.adjust  | ✗         | ✓           | ✓             | ✓          | ✗  | ✗       | ✗     | ✓     |
| return.material     | ✓         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |

---

# ## 7️⃣ PRODUCTION RÉALISÉE

| Permission              | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| ----------------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| production.declare      | ✓         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| production.edit         | ✗         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| production.cancel       | ✗         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |
| production.batch.create | ✗         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |

---

# ## 8️⃣ QUALITÉ (QC)

| Permission    | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| ------------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| qc.view       | ✓         | ✓           | ✓             | ✓          | ✓  | ✓       | ✗     | ✓     |
| qc.test.enter | ✗         | ✗           | ✗             | ✗          | ✓  | ✓       | ✗     | ✓     |
| qc.validate   | ✗         | ✗           | ✗             | ✗          | ✓  | ✓       | ✗     | ✓     |
| qc.reject     | ✗         | ✗           | ✗             | ✗          | ✓  | ✓       | ✗     | ✓     |
| qc.block      | ✗         | ✗           | ✗             | ✗          | ✓  | ✓       | ✗     | ✓     |
| qc.release    | ✗         | ✗           | ✗             | ✗          | ✓  | ✓       | ✗     | ✓     |

---

# ## 9️⃣ NON-CONFORMITÉS

| Permission | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| ---------- | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| nc.create  | ✗         | ✓           | ✗             | ✓          | ✓  | ✓       | ✗     | ✓     |
| nc.view    | ✓         | ✓           | ✓             | ✓          | ✓  | ✓       | ✗     | ✓     |
| nc.analyze | ✗         | ✗           | ✗             | ✓          | ✓  | ✓       | ✗     | ✓     |
| nc.close   | ✗         | ✗           | ✗             | ✓          | ✓  | ✓       | ✗     | ✓     |

---

# 🔟 PERFORMANCE / OEE

| Permission         | Opérateur | Chef équipe | Planificateur | Resp. Prod | QC | Resp. Q | Maint | Admin |
| ------------------ | --------- | ----------- | ------------- | ---------- | -- | ------- | ----- | ----- |
| oee.view           | ✓         | ✓           | ✓             | ✓          | ✗  | ✗       | ✓     | ✓     |
| downtime.declare   | ✓         | ✓           | ✗             | ✓          | ✗  | ✗       | ✓     | ✓     |
| labor.time.declare | ✓         | ✓           | ✗             | ✓          | ✗  | ✗       | ✗     | ✓     |

---
