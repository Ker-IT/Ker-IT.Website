import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const eleventyBin = path.join(rootDir, "node_modules/@11ty/eleventy/cmd.cjs");

function runEleventy(envOverrides) {
  execFileSync(process.execPath, [eleventyBin], {
    cwd: rootDir,
    stdio: "pipe",
    env: {
      ...process.env,
      ...envOverrides,
    },
  });
}

function walkHtml(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function resolveSiteAsset(outDir, prefix, rawRef) {
  if (!rawRef || rawRef.startsWith("http://") || rawRef.startsWith("https://") || rawRef.startsWith("mailto:") || rawRef.startsWith("#")) {
    return null;
  }
  const cleanRef = rawRef.split("#")[0].split("?")[0];
  if (!cleanRef) return null;

  assert(
    cleanRef.startsWith(prefix),
    `Expected path "${rawRef}" to start with prefix "${prefix}"`
  );

  const rel = cleanRef.slice(prefix.length).replace(/^\/+/, "");
  const candidate = path.join(outDir, rel);

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }
  const indexCandidate = path.join(candidate, "index.html");
  if (fs.existsSync(indexCandidate) && fs.statSync(indexCandidate).isFile()) {
    return indexCandidate;
  }
  throw new Error(`Broken internal reference "${rawRef}" (resolved to "${candidate}")`);
}

function verifyBuild({ outDir, prefix, siteUrl }) {
  const requiredFiles = [
    "index.html",
    "fr/index.html",
    "privacy/index.html",
    "privacy.html",
    "fr/confidentialite/index.html",
    "sitemap.xml",
    "robots.txt",
    "assets/css/tokens.css",
    "assets/css/main.css",
    "assets/js/nav.js",
    "assets/img/ker-it-logo.png",
    "assets/img/halfy-logo.png",
    "assets/img/halfy-mockup.png",
    "assets/img/safemeet-lockup.svg",
    "assets/img/safemeet-symbol.svg",
    "assets/img/wavecue-icon.svg",
  ];

  for (const rel of requiredFiles) {
    const full = path.join(outDir, rel);
    assert(fs.existsSync(full), `Missing generated file: ${rel}`);
  }

  const htmlFiles = walkHtml(outDir);
  assert(htmlFiles.length >= 5, "Expected at least 5 generated HTML files");

  const bannedPatterns = [
    /building the digital future/i,
    /private meet/i,
    /partage de frais/i,
    /contact@ker-it\.com/i,
    /révolutionne/i,
    /cutting-edge/i,
    /shaping tomorrow/i,
    /proprietary software/i,
    /verified contact address/i,
    /adresse de contact vérifiée/i,
    /development agency/i,
    /holding company/i,
    /incubateur/i,
  ];

  const requiredExternalUrls = [
    "https://halfy.app/",
    "https://app.halfy.app/",
    "https://halfy.app/safemeet/",
    "https://app.halfy.app/meet",
    "https://halfy.app/#business",
    "https://wavecue-web.vercel.app/",
    "mailto:contactus.kerit@gmail.com",
  ];

  for (const filePath of htmlFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    const relName = path.relative(outDir, filePath);

    for (const pattern of bannedPatterns) {
      assert(!pattern.test(content), `Banned phrase ${pattern} found in ${relName}`);
    }

    const attrMatches = [...content.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
    for (const ref of attrMatches) {
      resolveSiteAsset(outDir, prefix, ref);
    }

    if (relName !== "privacy.html") {
      assert(content.includes('<link rel="canonical"'), `Missing canonical in ${relName}`);
      assert(content.includes('hreflang="en"'), `Missing hreflang=en in ${relName}`);
      assert(content.includes('hreflang="fr"'), `Missing hreflang=fr in ${relName}`);
      assert(content.includes('hreflang="x-default"'), `Missing hreflang=x-default in ${relName}`);
      assert(content.includes(`content="${siteUrl}${prefix}`), `Canonical/OG URL missing expected origin+prefix in ${relName}`);
    }

    if (relName === "index.html" || relName === "fr/index.html") {
      for (const ext of requiredExternalUrls) {
        assert(content.includes(ext), `Missing expected external URL "${ext}" in ${relName}`);
      }
    }
  }

  const sitemap = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
  assert(sitemap.includes(`<loc>${siteUrl}${prefix}</loc>`), "Sitemap missing EN root URL");
  assert(sitemap.includes(`<loc>${siteUrl}${prefix}fr/</loc>`), "Sitemap missing FR root URL");

  const robots = fs.readFileSync(path.join(outDir, "robots.txt"), "utf8");
  assert(robots.includes(`Sitemap: ${siteUrl}${prefix}sitemap.xml`), "robots.txt missing prefixed Sitemap URL");
}

// 1. Verify default GitHub Pages subpath build (_site)
const ghOut = path.join(rootDir, "_site");
fs.rmSync(ghOut, { recursive: true, force: true });
runEleventy({
  PATH_PREFIX: "/Ker-IT.Website/",
  SITE_URL: "https://ker-it.github.io",
  ELEVENTY_OUTPUT: "_site",
});
verifyBuild({
  outDir: ghOut,
  prefix: "/Ker-IT.Website/",
  siteUrl: "https://ker-it.github.io",
});
console.log("OK: GitHub Pages subpath build (/Ker-IT.Website/) verified.");

// 2. Verify custom root domain build in temporary directory
const tmpOut = fs.mkdtempSync(path.join(os.tmpdir(), "kerit-root-check-"));
try {
  runEleventy({
    PATH_PREFIX: "/",
    SITE_URL: "https://ker-it.example",
    ELEVENTY_OUTPUT: tmpOut,
  });
  verifyBuild({
    outDir: tmpOut,
    prefix: "/",
    siteUrl: "https://ker-it.example",
  });
  console.log("OK: Custom root domain build (/) verified.");
} finally {
  fs.rmSync(tmpOut, { recursive: true, force: true });
}
