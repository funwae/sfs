import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          red: "#E10600",
          crimson: "#A00000",
          ember: "#FF3D30",
          night: "#0A0A0D",
          space: "#111117",
          ice: "#ECEFF4",
          steel: "#7D828C",
        },
      },
      boxShadow: {
        "forge-glow": "0 0 25px rgba(225,6,0,0.5)",
      },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(circle at 0% 0%, rgba(255,61,48,0.28), transparent 55%), radial-gradient(circle at 100% 100%, rgba(225,6,0,0.45), transparent 55%)",
        "aurora-linear":
          "linear-gradient(135deg, #0A0A0D 0%, #111117 40%, #1B0A0D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

