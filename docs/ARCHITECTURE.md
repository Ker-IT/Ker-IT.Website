# Architecture technique (`KER-WEB-01`)

## 1. Choix techniques

- **Générateur statique** : Eleventy v3 (`@11ty/eleventy`) avec templates Nunjucks (`.njk`).
- **Styling** : CSS natif structuré en deux feuilles (`src/assets/css/tokens.css` pour les variables du design system et `src/assets/css/main.css` pour les composants et la mise en page responsive).
- **JavaScript** : uniquement `src/assets/js/nav.js` (amélioration progressive pour l'ouverture/fermeture accessible du menu mobile et la touche `Échap`). Aucun moteur de traduction côté client.
- **Sortie de production** : `_site/` (HTML, CSS, JS, images, `sitemap.xml`, `robots.txt`).
- **Hors périmètre technique respecté** : aucun framework SPA/SSR, aucune base de données, aucun backend permanent, aucun outil de suivi analytique ni cookie non nécessaire.

## 2. Configuration centralisée et internationalisation statique

- `src/_data/site.js` centralise :
  - `url` (`SITE_URL`, défaut `https://ker-it.github.io`),
  - `pathPrefix` (`PATH_PREFIX`, défaut `/Ker-IT.Website/`),
  - les routes canoniques (`home` : `/` et `/fr/`, `privacy` : `/privacy/` et `/fr/confidentialite/`),
  - les coordonnées vérifiées (`contactus.kerit@gmail.com`).
- `src/_data/portfolio.js` centralise les familles de produits et les fiches produits.
- `src/_data/i18n.js` regroupe l'ensemble des contenus éditoriaux en anglais (`en`) et en français (`fr`).
- L'anglais est servi à la racine (`/`), le français sous `/fr/`. L'ancienne URL `/privacy.html` est conservée via `src/en/privacy-legacy.njk` (redirection statique + `<link rel="canonical">` vers `/privacy/`).

## 3. Gestion du sous-chemin GitHub Pages et passage vers un domaine personnalisé

Le site est actuellement publié sous `https://ker-it.github.io/Ker-IT.Website/`.

1. `eleventy.config.js` lit `process.env.PATH_PREFIX` (par défaut `/Ker-IT.Website/`) et `process.env.SITE_URL` (par défaut `https://ker-it.github.io`).
2. Tous les liens internes, feuilles CSS, scripts et images utilisent le filtre Eleventy `| url`.
3. Toutes les URLs absolues (`canonical`, `hreflang`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`) utilisent le filtre personnalisé `| absUrl`.

### Passage futur à un domaine personnalisé (lot KER-WEB-04)

Aucune modification des templates Nunjucks n'est nécessaire. Il suffira de définir les variables d'environnement de build :

```bash
PATH_PREFIX=/ SITE_URL=https://nouveau-domaine.exemple npm run build
```

et de mettre à jour les valeurs par défaut dans `eleventy.config.js`, `src/_data/site.js` et `.github/workflows/pages.yml`.

## 4. Indépendance de l'adaptateur Google AI Studio

Google AI Studio requiert un serveur HTTP actif sur le port `3000` (`0.0.0.0`) accessible à la racine `/`.

- `scripts/preview-server.mjs` lance un build Eleventy dédié dans `.preview-site/` avec `PATH_PREFIX=/` puis sert ce répertoire via Express sur `0.0.0.0:3000`.
- Ce script est strictement réservé à la prévisualisation locale et à Google AI Studio : il n'est ni copié dans `_site/`, ni utilisé dans le workflow GitHub Pages.
- Le répertoire de production `_site/` généré par `npm run build` conserve intégralement le préfixe `/Ker-IT.Website/`.

## 5. Procédure de migration GitHub Pages et retour arrière

### Situation historique

Dans le dépôt d'origine, aucun workflow GitHub Actions n'était présent : GitHub Pages publiait directement les fichiers statiques présents à la racine (`index.html`, `privacy.html`, `assets/`).

Dans ce lot `KER-WEB-01`, les fichiers historiques à la racine n'ont pas été supprimés afin que le site public actuel reste intact jusqu'à la bascule explicite du lot `KER-WEB-03`.

### Migration vers GitHub Actions (lors de KER-WEB-03)

1. Valider graphiquement et éditorialement le site généré (`KER-WEB-02`).
2. Dans les paramètres GitHub du dépôt (`Settings > Pages > Build and deployment`), passer la source de `Deploy from a branch` à **`GitHub Actions`**.
3. Fusionner la branche validée dans `main` (ou déclencher manuellement le workflow `.github/workflows/pages.yml` via `workflow_dispatch`).
4. Vérifier la publication de l'artefact `_site/` sur `https://ker-it.github.io/Ker-IT.Website/`.
5. En cas d'anomalie après bascule (procédure de retour arrière) : remettre `Settings > Pages > Source` sur `Deploy from a branch` (`main` / `/ (root)`), ou redéployer le commit précédent depuis l'onglet `Actions`.
