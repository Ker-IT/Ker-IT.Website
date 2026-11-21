# Portefeuille de produits Kër IT (`PRODUCT_PORTFOLIO.md`)

## 1. Périmètre officiel

Le portefeuille public de Kër IT est organisé en **deux familles de produits** et limité strictement aux quatre offres vérifiées suivantes :

| Famille | Domaine | Produit | Segment | Statut FR | Statut EN | URLs officielles |
|---|---|---|---|---|---|---|
| **Halfy** | Mobilité et organisation des rencontres | **Halfy** | B2C | Disponible sur le Web et Android | Available on the web and Android | `https://halfy.app/` · `https://app.halfy.app/` |
| **Halfy** | Mobilité et organisation des rencontres | **SafeMeet by Halfy** | B2C | Disponible sur le Web | Available on the web | `https://halfy.app/safemeet/` · `https://app.halfy.app/meet` |
| **Halfy** | Mobilité et organisation des rencontres | **SafeMeet Business** | B2B | Offre professionnelle en préparation | Business offering in development | `https://halfy.app/#business` |
| **WaveCue** | Données environnementales et prévisions de surf | **WaveCue** | B2C | En développement · Application Web accessible | In development · Web application available | `https://wavecue-web.vercel.app/` |

## 2. Configuration statique centralisée (`src/_data/portfolio.js`)

Chaque entrée produit dans `src/_data/portfolio.js` expose les propriétés suivantes :

- `id` : identifiant unique du produit
- `name` : nom officiel non traduit
- `family` : identifiant de la famille (`halfy`, `wavecue`)
- `description` : descriptions `fr` et `en`
- `status` : objet `{ key, fr, en }`
- `logo` : objet `{ src, alt, type }` ou `null`
- `primaryColor` : couleur hexadécimale principale
- `officialUrl` : URL du site officiel
- `appUrl` : URL de l'application Web (ou `null`)
- `targetAudience` : public cible `fr` / `en`
- `segment` : `"B2C"` ou `"B2B"`
- `order` : ordre d'affichage numérique
- `publicVisible` : booléen permettant de masquer un produit en préparation sans supprimer sa fiche

## 3. Règles d'évolution

Pour ajouter une nouvelle famille ou un nouveau produit :
1. Ajouter l'entrée dans `src/_data/portfolio.js` avec `publicVisible: true` et un `order` explicite.
2. Si la famille nécessite un univers visuel dédié, ajouter son bloc dans `src/_includes/home-content.njk` (un rendu générique de repli existe déjà pour toute nouvelle famille).
3. Exécuter `npm run check` pour valider les liens, les métadonnées et le respect de la charte éditoriale.
