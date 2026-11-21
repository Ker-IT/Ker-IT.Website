function normalizePathPrefix(raw) {
  if (!raw || raw === "/") return "/";
  let prefix = raw.trim();
  if (!prefix.startsWith("/")) prefix = "/" + prefix;
  if (!prefix.endsWith("/")) prefix += "/";
  return prefix;
}

const pathPrefix = normalizePathPrefix(process.env.PATH_PREFIX ?? "/Ker-IT.Website/");
const url = (process.env.SITE_URL || "https://ker-it.github.io").replace(/\/+$/, "");

export default {
  name: "Kër IT",
  url,
  pathPrefix,
  copyrightYear: 2026,
  contactEmail: "contactus.kerit@gmail.com",
  githubOrgUrl: "https://github.com/Ker-IT",
  ogImage: "/assets/img/ker-it-logo.png",
  legalStatus: {
    en: "Company in formation",
    fr: "Société en cours de formation",
  },
  defaultLocale: "en",
  locales: {
    en: {
      code: "en",
      htmlLang: "en",
      ogLocale: "en_GB",
      label: "EN",
      switchLabel: "FR",
      homePath: "/",
      privacyPath: "/privacy/",
    },
    fr: {
      code: "fr",
      htmlLang: "fr",
      ogLocale: "fr_FR",
      label: "FR",
      switchLabel: "EN",
      homePath: "/fr/",
      privacyPath: "/fr/confidentialite/",
    },
  },
  routes: {
    home: {
      en: "/",
      fr: "/fr/",
    },
    privacy: {
      en: "/privacy/",
      fr: "/fr/confidentialite/",
    },
  },
};
