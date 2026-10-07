/** Paleta e tipografia herdadas do sistema visual ezf.tech */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1b1026", raised: "#261835" },
        paper: "#eeeaf3",
        violet: { DEFAULT: "#8a12b4", hover: "#a41fd1" },
        lilac: "#b98be0",
        amber: "#f2b233",
      },
      fontFamily: {
        display: ['"Unbounded"', "system-ui", "sans-serif"],
        body: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
