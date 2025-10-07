// Imports
const fs = require("fs");
const path = require("path");
const adZip = require("adm-zip");
const pkg = require("pkg");

// Set paths
const distPath = path.join(__dirname, "dist");

(async () => {
  try {
    // Build app
    console.log("Building app...");
    await pkg.exec([
      path.join(__dirname, "index.js"),
      "--targets", "node18-win-x64",
      "--out-path", distPath
    ]);

    // Rename
    fs.renameSync(path.join(distPath, "index.exe"), path.join(distPath, "hack-windows.exe"))

    // Log
    console.log("Success!");
  } catch (error) {
    console.error(error);
  }
})();
