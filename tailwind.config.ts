import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// Simpler Lime Green: #7dce94
// Scuffed Dark Grey: #3d3d3f
// Vanilla Grey: #f6f5f3
// White-ish: #f9f8fd

// Fresh: #4ABDAC
// Vermillion: #FC4A1A
// Sunshine: #F7B733
// Clean: #DFDCE3

// text-black bg-white dark:text-white dark:bg-[#111010]