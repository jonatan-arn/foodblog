/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "25%": "25%",
        "-1": "-1",

        "10vh": "10vh",
        "15vh": "15vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "75vh": "75vh",

        "10vw": "10vw",
        "20vw": "20vw",
        "50vw": "50vw",
        "70vw": "70vw",
        "90vw": "90vw",

        "30rem": "30rem",
        "50rem": "50rem",
        "55rem": "55rem",
        "60rem": "60rem",

        "15deg": "15deg",
        "55deg": "55deg",
        "190deg": "190deg",
        "305deg": "305deg",
        "350deg": "350deg",
      },
    },
  },
  plugins: [],
};
