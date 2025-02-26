import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/", "dist/", "docs/", "service-worker.js", "assets/js/", "assets/html/", "assets/css/"], 
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off", // Disable undefined variable errors
      "no-cond-assign": "warn",
    },
    files: ["*.js"],
    languageOptions: { 
      globals: { 
        ...globals.browser,  // Enables `window`, `document`, `console`, etc.
        ...globals.worker    // Enables `self`, `caches`, `fetch`, etc. (for service workers)
      }
    }
  },
  pluginJs.configs.recommended,
];
