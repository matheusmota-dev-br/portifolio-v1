import type { Config } from "tailwindcss";
import preset from "@matheusmota-dev-br/ui/preset";

export default {
  presets: [preset],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./node_modules/@matheusmota-dev-br/ui/**/*.js"],
} satisfies Config;
