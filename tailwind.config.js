/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "rgb(0, 185, 130)",
        primaryBlue: "rgb(0, 150, 200)",
        primaryPurple: "#d24adf",
        instagramHover: "#d24adf",
        telegramHover: "#229ED9",
        whatsappHover: "#25D366",
        discordHover: "#5865F2",
      },
    },
  },
  plugins: [],
};
