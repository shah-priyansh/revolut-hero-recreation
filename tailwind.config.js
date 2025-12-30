/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      colors: {
        ink: "#191c1f",
        muted: "#8b909a",
      },
      boxShadow: {
        card: "0 20px 50px rgba(0, 0, 0, 0.10)",
      },
      borderRadius: {
        card: "24px",
      },
      width: {
        card: "344px",
      },
      height: {
        card: "486px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};


// rounded-xs (2px)
// rounded-sm (4px)
// rounded-md (6px)
// rounded-lg (8px)
// rounded-xl (12px)
// rounded-2xl (16px)
// rounded-3xl (24px)
// rounded-4xl (32px)
// rounded-none
// rounded-full

// text-xs (12px)
// text-sm (14px)
// text-base (16px)
// text-lg (18px)
// text-xl (20px)
// text-2xl (24px)
// text-3xl (30px)
// text-4xl (36px)
// text-5xl (48px)
// text-6xl (60px)
// text-7xl (72px)
// text-8xl (96px)
// text-9xl (128px)