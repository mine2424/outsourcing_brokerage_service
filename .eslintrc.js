module.exports = {
  plugins: ["tailwindcss", "import"],
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
  ],
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};
