import express from "express";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
const PREVIEW_DIR = path.join(rootDir, ".preview-site");

execFileSync(process.execPath, [path.join(rootDir, "node_modules/@11ty/eleventy/cmd.cjs")], {
  cwd: rootDir,
  stdio: "inherit",
  env: {
    ...process.env,
    PATH_PREFIX: "/",
    SITE_URL: process.env.SITE_URL || `http://localhost:${PORT}`,
    ELEVENTY_OUTPUT: ".preview-site",
  },
});

const app = express();

app.use("/Ker-IT.Website", (req, res) => {
  const target = req.url || "/";
  res.redirect(302, target);
});

app.use(
  express.static(PREVIEW_DIR, {
    extensions: ["html"],
  })
);

app.use((_req, res) => {
  res.status(404).sendFile(path.join(PREVIEW_DIR, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Preview server listening on http://${HOST}:${PORT}`);
});
