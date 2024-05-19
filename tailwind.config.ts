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
      colors: {
        dark: {
          100: '#18181B',
        },
        white: {
          50: '#E5E5E5',
          100: '#FAFAFA'
        },
        gray: {
        },
        skyBlue: {
          100: '#58A4B0',
        },
        green: {
          100: '#10B981'
        },
        red: {
          100: '#EF4444'
        }
      }
    },
  },
  plugins: [],
};
export default config;
