// Imports
const path = require("path");
const adZip = require("adm-zip");
const pkg = require("pkg");

// Paths
const distDir = path.join(__dirname, "dist");
const exePath = path.join(distDir, "win.exe");
const zipPath = path.join(distDir, "win.zip");

(async () => {
  try {
    // Build app
    console.log("Building app...");
    await pkg.exec([
      path.join(__dirname, "index.js"),
      "--targets", "node18-win-x64",
      "--out-path", distDir
    ]);

    // Create zip
    console.log("Creating zip...");
    const zip = new adZip();
    zip.addLocalFile(exePath, "", "hack.exe");
    zip.writeZip(zipPath);

    // Log
    console.log("Success!");
  } catch (error) {
    console.error(error);
  }
})();
