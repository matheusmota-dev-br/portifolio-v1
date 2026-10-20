import preset from "@matheusmota-dev-br/ui/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./node_modules/@matheusmota-dev-br/ui/**/*.js"],
};
