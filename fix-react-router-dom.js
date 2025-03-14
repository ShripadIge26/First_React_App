const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "node_modules",
  "react-router-dom",
  "dist",
  "index.mjs"
);

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const fixedData = data.replace(
    'import { HydratedRouter, RouterProvider } from "react-router/dom";',
    'import { HydratedRouter, RouterProvider } from "react-router-dom";'
  );

  fs.writeFile(filePath, fixedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("Successfully patched react-router-dom!");
  });
});
