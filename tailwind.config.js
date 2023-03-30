/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f29fa4",

          secondary: "#f961e0",

          accent: "#d59cf4",

          neutral: "#242442",

          "base-100": "#F5F5F5",

          info: "#86A6F9",

          success: "#166A52",

          warning: "#F0D351",

          error: "#DF2A3F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
