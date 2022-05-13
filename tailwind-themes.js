const colors = require("tailwindcss/colors");

module.exports = {
  defaultTheme: {
    spacing: {
      0: 0,
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
    },
    borderRadius: {
      sm: "10px",
      DEFAULT: "4px",
      md: "16px",
      lg: "32px",
      full: "9999px",
    },
    fontSize: {
      xs: ["10px", "12px"],
      sm: ["14px", "21px"],
      base: ["16px", "24px"],
      lg: ["18px", "21.6px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28.8px"],
      "3xl": ["28px", "33.6px"],
      "4xl": ["32px", "38.4px"],
      "5xl": ["40px", "48px"],
    },
    extend: {
      colors: {
        primary: colors.red["600"],
        secondary: colors.green["400"],
        neutral: colors.neutral,
      },
      spacing: {
        sm: "16px",
        xs: "8px",
        xxs: "4px",
        40: "160px",
      },
      flexShrink: {
        2: 2,
      },
    },
  },
};
