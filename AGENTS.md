# AGENTS.md — Règles permanentes pour les agents de développement

Ce document définit les règles permanentes applicables à toute intervention sur le dépôt `Ker-IT/Ker-IT.Website`.

## 1. Identité et statut juridique

- **Kër IT est une société en cours de formation.** Ne pas inventer de numéro d'entreprise, numéro de TVA, adresse postale de siège social, forme juridique définitive, pays ou date d'immatriculation.
- **Kër IT développe ses propres produits logiciels.** Ne jamais présenter Kër IT comme une agence de développement informatique, une société de conseil, une holding financière ou un incubateur de startups externes.
- Ne pas mentionner d'effectif, de chiffre d'affaires, de clients, d'investisseurs ou de future introduction en bourse.
- Utiliser exclusivement l'adresse de contact vérifiée : `contactus.kerit@gmail.com` (ne pas inventer d'adresse sur un domaine personnalisé avant le lot KER-WEB-04).

## 2. Architecture des marques et périmètre du portefeuille

- **Halfy et WaveCue constituent les deux familles de produits actuellement présentées.**
- **SafeMeet et SafeMeet Business appartiennent à la famille Halfy.**
- **Halfway n'est pas une marque indépendante** (il s'agit uniquement d'un terme descriptif anglais).
- **Private Meet est l'ancien nom de SafeMeet.** Ne jamais réintroduire « Private Meet » dans les contenus publics.
- Ne pas présenter Halfy comme une application de partage de frais.
- Ne pas prétendre que SafeMeet garantit la sécurité physique des rencontres.
- **Aucun produit tiers ne doit être ajouté sans autorisation.** Ne pas rattacher automatiquement d'autres dépôts GitHub au portefeuille.
- **Toute nouvelle fonctionnalité commerciale annoncée doit être vérifiée** sur les sites officiels avant publication (ex. : pas d'API publique, de SDK public, de marque blanche, de webhooks ni de souscription annoncés pour SafeMeet Business sans validation ; pas de disponibilité commerciale définitive ni d'application mobile publiée annoncées pour WaveCue sans preuve).
- Concernant l'intelligence artificielle : les axes présentés dans « Notre approche » constituent une orientation technologique et non des produits IA commercialisés. Ne pas inventer de modèle propriétaire, de laboratoire de recherche ni de technologie brevetée.

## 3. Règles éditoriales (FR et EN)

- **Toute rédaction publique doit respecter la charte éditoriale FR/EN définie dans `docs/EDITORIAL_GUIDELINES.md`.**
- Éviter les clichés d'écriture générée par IA documentés par Wikipédia (FR : `Aide:Identifier l'usage d'une IA générative` ; EN : `Wikipedia:Signs of AI writing`).
- Français naturel adapté à la France et à la Belgique.
- Anglais international avec orthographe britannique cohérente (`organise`, `centre`, `programme`, `favourite`, etc.).
- Ne pas mélanger le français et l'anglais dans une même page. Ne pas traduire les noms propres des produits (`Halfy`, `SafeMeet`, `SafeMeet Business`, `WaveCue`, `SurfScore`).

## 4. Assets et logos officiels

- **Les logos officiels doivent être préservés** sans modification de couleurs ni de proportions (`docs/BRAND_ASSETS.md`).
- Ne pas générer de nouveau logo Kër IT, ne pas inventer de logo pour SafeMeet Business ou WaveCue, ne pas utiliser d'emojis comme logos, et ne pas fabriquer de fausses captures d'écran applicatives.

## 5. Contraintes techniques et hébergement

- Site statique généré par **Eleventy v3** (Nunjucks, CSS natif, JavaScript natif minimal) dans `_site/`.
- Ne pas introduire de framework SPA/SSR (React, Vite, Next.js, Angular, Vue), de base de données, de backend permanent ni de dépendance à une API d'IA.
- Tout lien interne, asset, feuille CSS, script, canonique, `hreflang`, sitemap et `robots.txt` doit passer par le filtre `url` / `absUrl` afin de respecter `PATH_PREFIX` (`/Ker-IT.Website/` sur GitHub Pages, `/` sur domaine personnalisé ou prévisualisation).
- Ne pas modifier les paramètres distants de GitHub Pages ni les DNS sans instruction explicite.
