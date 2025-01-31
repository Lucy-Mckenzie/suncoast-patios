import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2], // Enforce 2-space indentation
      "quotes": ["error", "single", { "avoidEscape": true }], // Use single quotes
      "no-console": ["warn"], // Warn when console.log is used
      "object-curly-spacing": ["error", "always"], // Enforce spaces inside { objects }
      "array-bracket-spacing": ["error", "never"], // No spaces inside [arrays]
    },
  },
];

export default eslintConfig;
