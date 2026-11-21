export default {
  families: [
    {
      id: "halfy",
      name: "Halfy",
      order: 1,
      publicVisible: true,
      primaryColor: "#2563EB",
      secondaryColor: "#EE4949",
      domain: {
        fr: "Mobilité et organisation des rencontres",
        en: "Mobility and meetup planning",
      },
      summary: {
        fr: "Des applications conçues pour convenir d'un lieu de rencontre à deux, avec ou sans partage des adresses de départ.",
        en: "Applications designed to help two people agree on a meeting place, with or without sharing starting addresses.",
      },
      officialUrl: "https://halfy.app/",
      screenshot: {
        src: "/assets/img/halfy-mockup.png",
        alt: {
          fr: "Capture mobile de l'application Halfy calculant un point de rencontre à Bordeaux entre deux adresses",
          en: "Mobile screenshot of the Halfy app calculating a midpoint meeting area in Bordeaux between two addresses",
        },
        caption: {
          fr: "Halfy : calcul du point médian et lieux publics à proximité",
          en: "Halfy: midpoint calculation and nearby public venues",
        },
      },
    },
    {
      id: "wavecue",
      name: "WaveCue",
      order: 2,
      publicVisible: true,
      primaryColor: "#103F52",
      secondaryColor: "#28B8CF",
      accentSurface: "#071F29",
      accentTint: "#D7F7EF",
      domain: {
        fr: "Données environnementales et prévisions de surf",
        en: "Environmental data and surf forecasts",
      },
      summary: {
        fr: "Une application dédiée à la lecture des conditions marines et météorologiques pour préparer ses sessions de surf.",
        en: "An application dedicated to reading marine and weather conditions to help plan surf sessions.",
      },
      officialUrl: "https://wavecue-web.vercel.app/",
      screenshot: null,
    },
  ],
  products: [
    {
      id: "halfy",
      name: "Halfy",
      family: "halfy",
      description: {
        fr: "Calcule un point de rencontre équitable entre deux adresses de départ et suggère des cafés, restaurants, bars ou parcs à proximité avec leurs informations pratiques.",
        en: "Calculates a fair midpoint between two starting locations and suggests nearby cafés, restaurants, bars or parks with practical venue details.",
      },
      status: {
        key: "available_web_android",
        fr: "Disponible sur le Web et Android",
        en: "Available on the web and Android",
      },
      logo: {
        src: "/assets/img/halfy-logo.png",
        alt: "Halfy",
        type: "wordmark",
      },
      primaryColor: "#2563EB",
      officialUrl: "https://halfy.app/",
      appUrl: "https://app.halfy.app/",
      androidUrl: "https://play.google.com/store/apps/details?id=com.crankynx.halfy",
      targetAudience: {
        fr: "Particuliers",
        en: "Consumers",
      },
      segment: "B2C",
      order: 1,
      publicVisible: true,
    },
    {
      id: "safemeet",
      name: "SafeMeet by Halfy",
      family: "halfy",
      description: {
        fr: "Permet à deux participants de saisir séparément leur point de départ via un lien à usage unique afin de choisir un lieu public sans exposer leurs adresses.",
        en: "Lets two participants enter their starting points separately via a single-use link to agree on a public meeting place without exposing personal addresses.",
      },
      status: {
        key: "available_web",
        fr: "Disponible sur le Web",
        en: "Available on the web",
      },
      logo: {
        src: "/assets/img/safemeet-lockup.svg",
        alt: "SafeMeet by Halfy",
        type: "lockup",
      },
      primaryColor: "#2665EC",
      officialUrl: "https://halfy.app/safemeet/",
      appUrl: "https://app.halfy.app/meet",
      targetAudience: {
        fr: "Particuliers",
        en: "Consumers",
      },
      segment: "B2C",
      order: 2,
      publicVisible: true,
    },
    {
      id: "safemeet-business",
      name: "SafeMeet Business",
      family: "halfy",
      description: {
        fr: "Déclinaison professionnelle en préparation pour les marketplaces et plateformes de petites annonces dont les utilisateurs organisent des remises en main propre dans un lieu public.",
        en: "Professional edition in preparation for marketplaces and classifieds platforms whose users arrange in-person handoffs at public locations.",
      },
      status: {
        key: "in_preparation",
        fr: "Offre professionnelle en préparation",
        en: "Business offering in development",
      },
      logo: null,
      primaryColor: "#1D4ED8",
      officialUrl: "https://halfy.app/#business",
      appUrl: null,
      targetAudience: {
        fr: "Marketplaces et plateformes de petites annonces",
        en: "Marketplaces and classifieds platforms",
      },
      segment: "B2B",
      order: 3,
      publicVisible: true,
    },
    {
      id: "wavecue",
      name: "WaveCue",
      family: "wavecue",
      description: {
        fr: "WaveCue rassemble les données de houle, de vent et de marées issues d'Open-Meteo avec des profils de spots et un SurfScore pour aider les surfeurs et pratiquants de bodyboard à choisir leur session.",
        en: "WaveCue brings together Open-Meteo swell, wind and tide data with spot profiles and a SurfScore to help surfers and bodyboarders choose when and where to go out.",
      },
      status: {
        key: "in_development_web",
        fr: "En développement · Application Web accessible",
        en: "In development · Web application available",
      },
      logo: {
        src: "/assets/img/wavecue-icon.svg",
        alt: "WaveCue",
        type: "icon",
      },
      primaryColor: "#103F52",
      officialUrl: "https://wavecue-web.vercel.app/",
      appUrl: "https://wavecue-web.vercel.app/",
      targetAudience: {
        fr: "Surfeurs et pratiquants de bodyboard",
        en: "Surfers and bodyboarders",
      },
      segment: "B2C",
      order: 1,
      publicVisible: true,
      features: {
        fr: [
          "Hauteur, période et direction de houle, vent et marée",
          "Prévisions horaires et lecture SurfScore par spot",
          "Préférences surfeur et spots favoris enregistrés localement",
        ],
        en: [
          "Swell height, period and direction, wind and tide phase",
          "Hourly forecasts and spot-level SurfScore reading",
          "Locally saved surfer preferences and favourite spots",
        ],
      },
    },
  ],
};
