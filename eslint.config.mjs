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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "coverage/**",
      "src/generated/**",
      "prisma/generated/**",
      "**/*.generated.*",
      "**/*.min.js",
      "next-env.d.ts",
      "*.config.js",
      "*.config.ts",
    ],
  },
];

export default eslintConfig;
