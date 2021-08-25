// post-build.js
const fs = require("fs-extra");
console.log("-> Copying locales directory...");
// Path to locales directory
const localeSrc = "./public/locales";
// Path to default-lambda destination
const localeDest = "./.serverless_nextjs/default-lambda/public/locales";
// Copy Files over recursively
fs.copySync(localeSrc, localeDest, { recursive: true });
console.log("Locale directory was copied successfully");
