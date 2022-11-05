/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "rgb(0, 185, 130)",
        primaryBlue: "rgb(0, 150, 200)",
        primaryPurple: "#d24adf",
        secondary: "rgba(255, 255, 255, 0.5)",
        secondaryWhite: "rgba(255, 255, 255, 0.8)",
        secondaryBg: "rgb(22, 22, 22)",
        instagramHover: "#d24adf",
        telegramHover: "#229ED9",
        whatsappHover: "#25D366",
        discordHover: "#5865F2",
      },
    },
  },
  plugins: [],
};
