# Kër IT - Corporate Website

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

The official corporate landing page for **Kër IT**, a technology holding company and incubator dedicated to building innovative digital infrastructure and applications, including the flagship app [Halfy](https://halfy.app/).

## 🔗 Live Demo
Visit the live site here: **https://ker-it.github.io/Ker-IT.Website/**

## ✨ Features

*   **Modern UI/UX:** "Big Tech" inspired design featuring dark mode, glassmorphism effects, and a fixed gradient background (Photon style).
*   **Fully Responsive:** optimized for mobile, tablet, and desktop screens.
*   **Bilingual Support (FR/EN):** Built-in JavaScript translation engine allowing instant language switching without page reloads.
*   **Lightweight:** Pure static site (HTML/CSS/JS). No database or backend required.
*   **Privacy Focused:** Includes a dedicated privacy policy page structure.

## 🛠️ Tech Stack

*   **HTML5:** Semantic structure.
*   **CSS3:** Custom properties (variables), Flexbox, CSS Grid, and backdrop-filters.
*   **JavaScript (Vanilla):** Logic for the navigation menu and translation system (`translations.js`).
*   **Assets:**
    *   [FontAwesome](https://fontawesome.com/) (Icons)
    *   [Google Fonts](https://fonts.google.com/) (Source Sans Pro / Inter)

## 📂 Project Structure

```text
ker-it-website/
│
├── index.html          # Main landing page (Vision, Ventures)
├── privacy.html        # Privacy Policy page
├── README.md           # Project documentation
│
└── assets/
    ├── css/
    │   ├── style.css       # Main styles and variables
    │   └── variables.css   # (Optional) Color palette definitions
    │
    ├── js/
    │   ├── main.js         # Core logic (lang switch, init)
    │   └── translations.js # Dictionary for FR/EN content
    │
    └── img/
        ├── logo.png        # Kër IT company logo
        └── halfy-transparent.png # Halfy product logo
```

## 🚀 Local Development

Since this is a static website, no build process or package manager (npm/yarn) is required.

1. Clone the repository:
```shell 
git clone https://github.com/your-username/ker-it-website.git
```
2. Open the project:  
Simply open index.html in your web browser.

Recommended: Use the "Live Server" extension in VS Code for real-time updates during development.

## 📝 Content Management

Changing Text & Translations  
All text content is managed in assets/js/translations.js. To update text:

1. Open assets/js/translations.js.
2. Locate the key you want to change (e.g., hero_title).
3. Update the string for both fr (French) and en (English).

_Note: For the Privacy Policy content, HTML tags (like &lt;h2> or &lt;p>) are supported within the translation strings._

**Updating Images**  
* Company Logo: Replace assets/img/logo.png.
* Product Images: Add images to assets/img/ and update the src attribute in index.html.


## 📄 License
This project is open-source and available under the MIT License.