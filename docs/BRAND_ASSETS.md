# Inventaire et gouvernance des assets (`BRAND_ASSETS.md`)

## 1. Inventaire des assets historiques (`./assets/img/`)

| Fichier d'origine | Nature | Statut |
|---|---|---|
| `assets/img/logo.png` | Logo officiel Kër IT (maison vert forêt `#0D5C3B`, `K` ocre `#B89643` / terracotta `#BF4E30`, mention `Kër IT`, fond blanc) | **Logo officiel retenu** |
| `assets/img/openart-image_j_lRHSAF_1766410196358_raw.jpg` | Source brute identique à `logo.png` | Archivé dans `./assets/img/` |
| `assets/img/Gemini_Generated_Image_mk427gmk427gmk42.png` | Piste graphique alternative non retenue | Non utilisé en production |
| `assets/img/Gemini_Generated_Image_p0cgpqp0cgpqp0cg.png` | Piste graphique alternative (accolades) non retenue | Non utilisé en production |
| `assets/img/halfy-transparent.png` | Wordmark officiel `Halfy.` (bleu `#2563EB`, point `#EF4444`, PNG transparent) | **Logo officiel Halfy retenu** |
| `assets/img/halfy-mockup.png` | Capture mobile authentique de Halfy (trajet à Bordeaux et lieu trouvé) | **Capture officielle retenue** |

## 2. Assets versionnés utilisés par le site (`src/assets/img/`)

Tous les assets ci-dessous sont hébergés localement dans le dépôt (aucun chargement dynamique depuis un domaine tiers) :

| Fichier dans `src/assets/img/` | Provenance vérifiée | Usage |
|---|---|---|
| `ker-it-logo.png` | Copie exacte de `assets/img/logo.png` | Header, Hero, Footer, Favicon, `og:image` |
| `halfy-logo.png` | Copie exacte de `assets/img/halfy-transparent.png` | Carte produit Halfy |
| `halfy-mockup.png` | Copie exacte de `assets/img/halfy-mockup.png` | Capture authentique dans l'univers Halfy |
| `halfy-screen-2.png` | Copie locale de `https://halfy.app/assets/images/screen_2.png` | Archive locale vérifiée |
| `safemeet-lockup.svg` | Copie locale de `https://halfy.app/assets/safemeet-logos/svg/logo-lockup.svg` | Carte produit SafeMeet by Halfy |
| `safemeet-symbol.svg` | Copie locale de `https://halfy.app/assets/safemeet-logos/svg/logo-symbol.svg` | Archive locale vérifiée |
| `wavecue-icon.svg` | Copie locale de `https://wavecue-web.vercel.app/icon.svg` | En-tête de l'univers WaveCue |

## 3. Palette institutionnelle et couleurs produits

### Palette institutionnelle Kër IT (cohérente avec `ker-it-logo.png`)

Le logo officiel Kër IT étant composé sur fond blanc avec un vert forêt profond, un ocre et un terracotta, l'interface adopte une dominante claire et sobre (`#FAFAF8` et `#FFFFFF`) afin de garantir une lisibilité directe sans encadré artificiel.

- Fond principal : `#FAFAF8` (`--color-canvas`)
- Surfaces : `#FFFFFF` (`--color-surface`) et `#F2F3EF` (`--color-surface-muted`)
- Encre principale : `#141B17` (`--color-ink`)
- Texte secondaire : `#48544D` (`--color-ink-muted`)
- Accent institutionnel vert Kër IT : `#0D5B39` (`--color-brand-green`)
- Accent secondaire terracotta Kër IT : `#BF4D30` (`--color-brand-terracotta`)
- Accent tertiaire ocre Kër IT : `#A8842E` (`--color-brand-ochre`)

### Couleurs des familles produits

- **Halfy / SafeMeet** : bleu `#2563EB` (`--color-halfy`), accent `#EE4949` (`--color-safemeet-accent`), fond teinté `#F4F7FE` (`--color-halfy-tint`).
- **WaveCue** : bleu abyssal `#071F29` (`--color-wavecue-bg`), surface `#0C2B38` (`--color-wavecue-surface`), cyan `#28B8CF` (`--color-wavecue-cyan`), menthe `#D7F7EF` (`--color-wavecue-mint`).

## 4. Règles de préservation et éléments en attente

- Ne pas modifier les couleurs ni les proportions des logos existants.
- Ne pas inventer de logo pour **SafeMeet Business** (présentation typographique sobre).
- Ne pas inventer de logo supplémentaire ni de fausse interface applicative pour **WaveCue** (utilisation de `wavecue-icon.svg` + wordmark typographique).
- Les visuels géométriques du hero (courbes de trajet Halfy et courbes de houle WaveCue) ainsi que le tracé illustratif de la fiche WaveCue sont purement illustratifs et ne contiennent aucune donnée opérationnelle fictive.
- **Asset en attente** : aucune capture PNG/WebP officielle de **WaveCue** n'étant disponible dans le dépôt ni réalisable sans navigateur headless dans l'environnement Google AI Studio, une véritable capture d'une page de prévisions représentative de `https://wavecue-web.vercel.app/` reste à ajouter dès que possible.
- Ne pas utiliser d'emojis en guise de logos.
