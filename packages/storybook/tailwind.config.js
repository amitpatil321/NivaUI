/** @type {import('tailwindcss').Config} */

const shared = require("@niva/ui/tailwind.config");

export default {
  ...shared,
  content: ["../ui/src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
};
