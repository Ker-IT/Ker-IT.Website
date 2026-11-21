# Kër IT — Site institutionnel (`Ker-IT/Ker-IT.Website`)

Site institutionnel bilingue (EN / FR) de **Kër IT** (société en cours de formation), généré statiquement avec **Eleventy v3** et conçu pour être déployé sur GitHub Pages sous `/Ker-IT.Website/` ou sur un futur domaine personnalisé à la racine `/`.

## Aperçu rapide

- **Langues générées statiquement** :
  - Anglais à la racine (`/`, `/privacy/`, ainsi que la redirection historique `/privacy.html`)
  - Français sous `/fr/` (`/fr/`, `/fr/confidentialite/`)
- **Familles de produits présentées** (configuration centralisée dans `src/_data/portfolio.js`) :
  - **Halfy** : Halfy (Web & Android), SafeMeet by Halfy (Web), SafeMeet Business (en préparation)
  - **WaveCue** : WaveCue (en développement, application Web accessible)
- **Prévisualisation en direct actuelle (branche historique)** : `https://ker-it.github.io/Ker-IT.Website/`

## Commandes de développement

Prérequis : Node.js 22+ et npm.

```bash
npm install          # Installer les dépendances
npm run dev          # Lancer l'adaptateur de prévisualisation local / Google AI Studio sur le port 3000 (racine /)
npm run build        # Générer le site statique GitHub Pages dans _site/ (PATH_PREFIX=/Ker-IT.Website/)
npm run build:root   # Tester une génération à la racine / (futur domaine personnalisé)
npm run check        # Exécuter les contrôles automatisés (build subpath + build racine + liens + SEO + charte)
npm run lint         # Vérifier la syntaxe des fichiers JavaScript
```

## Structure du projet

```text
├── .github/workflows/pages.yml   # Pipeline PR + déploiement GitHub Pages (artefact _site/)
├── AGENTS.md                     # Règles permanentes pour les agents de développement
├── eleventy.config.js            # Configuration Eleventy v3 (pathPrefix, filtres, passthrough)
├── package.json
├── scripts/
│   ├── check.mjs                 # Vérification automatisée du build, des liens, du SEO et de la charte
│   └── preview-server.mjs        # Adaptateur de prévisualisation Express indépendant (port 3000)
├── src/
│   ├── _data/
│   │   ├── i18n.js               # Textes institutionnels FR/EN
│   │   ├── portfolio.js          # Catalogue centralisé des familles et produits
│   │   └── site.js               # Paramètres globaux, routes et pathPrefix
│   ├── _includes/                # Header, footer, balises SEO, sections partagées
│   ├── _layouts/base.njk         # Gabarit HTML de base
│   ├── assets/                   # CSS natif (tokens + main), JS nav.js, logos & captures versionnés
│   ├── en/                       # Pages anglaises (/, /privacy/, /privacy.html)
│   ├── fr/                       # Pages françaises (/fr/, /fr/confidentialite/)
│   ├── robots.njk                # Génération de robots.txt
│   └── sitemap.njk               # Génération de sitemap.xml multilingue
└── docs/                         # Documentation permanente (architecture, charte, assets, backlog)
```

## Documentation technique et éditoriale

- `docs/ARCHITECTURE.md` : architecture Eleventy, gestion du sous-chemin `/Ker-IT.Website/`, adaptateur de prévisualisation et procédure de migration GitHub Pages.
- `docs/EDITORIAL_GUIDELINES.md` : charte éditoriale FR/EN et synthèse des guides Wikipédia anti-clichés IA.
- `docs/BRAND_ASSETS.md` : inventaire des logos et captures officielles, palette et règles d'usage.
- `docs/PRODUCT_PORTFOLIO.md` : périmètre officiel des familles Halfy et WaveCue et schéma de configuration.
- `docs/BACKLOG.md` : feuille de route `KER-WEB-01` à `KER-WEB-08`.

## Licence

Ce dépôt contient le fichier `LICENSE` sous licence **GNU General Public License v3 (GPL-3.0)**. *(Note d'audit : la version précédente de ce README mentionnait la licence MIT par erreur alors que le fichier `LICENSE` fourni est bien la GPL-3.0.)*