/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8"
        }
      },
      boxShadow: {
        "soft-glow": "0 18px 45px rgba(15, 23, 42, 0.9)",
        "card-glass": "0 18px 35px rgba(15, 23, 42, 0.75)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

