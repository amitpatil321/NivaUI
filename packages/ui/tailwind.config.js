/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    fontSize: {
      "title-hero": [
        "72px",
        {
          lineHeight: "86.4px",
          letterSpacing: "-2.16px",
          fontWeight: "700",
        },
      ],
      "title-page": [
        "48px",
        {
          lineHeight: "57.6px",
          letterSpacing: "-0.96px",
          fontWeight: "700",
        },
      ],
      subtitle: [
        "32px",
        {
          lineHeight: "38.4px",
          fontWeight: "400",
        },
      ],
      heading: [
        "24px",
        {
          lineHeight: "28.8px",
          letterSpacing: "-0.48px",
          fontWeight: "600",
        },
      ],
      subheading: [
        "20px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "body-base": [
        "16px",
        {
          lineHeight: "22.4px",
          fontWeight: "400",
        },
      ],
      "body-strong": [
        "16px",
        {
          lineHeight: "22.4px",
          fontWeight: "600",
        },
      ],
      "body-emphasis": [
        "16px",
        {
          lineHeight: "22.4px",
          fontStyle: "italic",
        },
      ],
      "body-link": [
        "16px",
        {
          lineHeight: "22.4px",
          textDecoration: "underline",
        },
      ],
      "body-small": [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: "400",
        },
      ],
      "body-small-strong": [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: "600",
        },
      ],
      "body-code": [
        "16px",
        {
          lineHeight: "16px",
          fontFamily: "Roboto Mono, monospace",
        },
      ],
      "single-line-body-base": [
        "16px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
      "single-line-body-small-strong": [
        "14px",
        {
          lineHeight: "14px",
          fontWeight: "600",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      bg: {
        default: {
          DEFAULT: "hsl(0, 0%, 100%)",
          hover: "hsl(0, 0%, 96%)",
          secondary: "hsl(0, 0%, 96%)",
          "secondary-hover": "hsl(0, 0%, 90%)",
          tertiary: "hsl(0, 0%, 85%)",
          "tertiary-hover": "hsl(0, 0%, 70%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 35%)",
          hover: "hsl(0, 0%, 26%)",
          secondary: "hsl(0, 0%, 80%)",
          "secondary-hover": "hsl(0, 0%, 70%)",
          tertiary: "hsl(0, 0%, 89%)",
          "tertiary-hover": "hsl(0, 0%, 80%)",
        },
        brand: {
          DEFAULT: "hsl(0, 0%, 17%)",
          hover: "hsl(0, 0%, 12%)",
          secondary: "hsl(0, 0%, 90%)",
          "secondary-hover": "hsl(0, 0%, 85%)",
          tertiary: "hsl(0, 0%, 96%)",
          "tertiary-hover": "hsl(0, 0%, 90%)",
        },
        positive: {
          DEFAULT: "hsl(148, 79%, 38%)",
          hover: "hsl(152, 100%, 30%)",
          secondary: "hsl(126, 71%, 89%)",
          "secondary-hover": "hsl(140, 76%, 82%)",
          tertiary: "hsl(129, 100%, 96%)",
          "tertiary-hover": "hsl(126, 71%, 89%)",
        },
        warning: {
          DEFAULT: "hsl(45, 80%, 55%)",
          hover: "hsl(42, 100%, 45%)",
          secondary: "hsl(46, 100%, 88%)",
          "secondary-hover": "hsl(45, 100%, 82%)",
          tertiary: "hsl(48, 100%, 96%)",
          "tertiary-hover": "hsl(46, 100%, 88%)",
        },
        danger: {
          DEFAULT: "hsl(1, 84%, 52%)",
          hover: "hsl(1, 88%, 40%)",
          secondary: "hsl(4, 92%, 90%)",
          "secondary-hover": "hsl(5, 93%, 83%)",
          tertiary: "hsl(5, 92%, 95%)",
          "tertiary-hover": "hsl(4, 92%, 90%)",
        },
        disabled: {
          DEFAULT: "hsl(0, 0%, 85%)",
        },
        utilities: {
          scrim: "hsla(0, 0%, 100%, 0.8)",
          blanket: "hsla(0, 0%, 0%, 0.7)",
          overlay: "hsla(0, 0%, 0%, 0.5)",
          measurement: "hsl(300, 71%, 93%)",
        },
      },
      text: {
        default: {
          DEFAULT: "hsl(0, 0%, 12%)",
          secondary: "hsl(0, 0%, 46%)",
          tertiary: "hsl(0, 0%, 70%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 19%)",
          secondary: "hsl(0, 0%, 35%)",
          tertiary: "hsl(0, 0%, 46%)",
          "on-neutral": "hsl(0, 0%, 95%)",
          "on-neutral-secondary": "hsl(0, 0%, 19%)",
          "on-neutral-tertiary": "hsl(0, 0%, 26%)",
        },
        brand: {
          DEFAULT: "hsl(0, 0%, 17%)",
          secondary: "hsl(0, 0%, 27%)",
          tertiary: "hsl(0, 0%, 46%)",
          "on-brand": "hsl(0, 0%, 96%)",
          "on-brand-secondary": "hsl(0, 0%, 12%)",
          "on-brand-tertiary": "hsl(0, 0%, 17%)",
        },
        positive: {
          DEFAULT: "hsl(151, 95%, 17%)",
          secondary: "hsl(152, 100%, 30%)",
          tertiary: "hsl(148, 79%, 38%)",
          "on-positive": "hsl(129, 100%, 96%)",
          "on-positive-secondary": "hsl(151, 95%, 17%)",
          "on-positive-tertiary": "hsl(151, 95%, 17%)",
        },
        warning: {
          DEFAULT: "hsl(25, 91%, 17%)",
          secondary: "hsl(32, 97%, 30%)",
          tertiary: "hsl(33, 98%, 38%)",
          "on-warning": "hsl(25, 97%, 13%)",
          "on-warning-secondary": "hsl(25, 94%, 21%)",
          "on-warning-tertiary": "hsl(25, 91%, 17%)",
        },
        danger: {
          DEFAULT: "hsl(1, 88%, 30%)",
          secondary: "hsl(1, 88%, 40%)",
          tertiary: "hsl(1, 84%, 52%)",
          "on-danger": "hsl(5, 92%, 95%)",
          "on-danger-secondary": "hsl(1, 88%, 30%)",
          "on-danger-tertiary": "hsl(1, 88%, 30%)",
        },
        disabled: {
          DEFAULT: "hsl(0, 0%, 70%)",
          "on-disabled": "hsl(0, 0%, 70%)",
        },
        utilities: {
          "text-on-overlay": "hsl(240, 4%, 5%)",
          "text-on-measurement": "hsl(316, 60%, 34%)",
        },
      },
      border: {
        default: {
          DEFAULT: "hsl(0, 0%, 85%)",
          secondary: "hsl(0, 0%, 46%)",
          tertiary: "hsl(0, 0%, 22%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 19%)",
          secondary: "hsl(0, 0%, 46%)",
          tertiary: "hsl(0, 0%, 70%)",
        },
        brand: {
          DEFAULT: "hsl(0, 0%, 17%)",
          secondary: "hsl(0, 0%, 27%)",
          tertiary: "hsl(0, 0%, 46%)",
        },
        positive: {
          DEFAULT: "hsl(151, 95%, 17%)",
          secondary: "hsl(152, 100%, 30%)",
          tertiary: "hsl(148, 79%, 38%)",
        },
        warning: {
          DEFAULT: "hsl(25, 91%, 17%)",
          secondary: "hsl(32, 97%, 30%)",
          tertiary: "hsl(33, 98%, 38%)",
        },
        danger: {
          DEFAULT: "hsl(1, 88%, 30%)",
          secondary: "hsl(1, 88%, 40%)",
          tertiary: "hsl(1, 84%, 52%)",
        },
        disabled: {
          DEFAULT: "hsl(0, 0%, 70%)",
        },
        utilities: {
          measurement: "hsl(315, 75%, 78%)",
          swatch: "hsla(0, 0%, 0%, 0.24)",
        },
      },
      icon: {
        default: {
          DEFAULT: "hsl(0, 0%, 12%)",
          secondary: "hsl(0, 0%, 46%)",
          tertiary: "hsl(0, 0%, 70%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 19%)",
          secondary: "hsl(0, 0%, 35%)",
          tertiary: "hsl(0, 0%, 46%)",
          "on-neutral": "hsl(0, 0%, 95%)",
          "on-neutral-secondary": "hsl(0, 0%, 19%)",
          "on-neutral-tertiary": "hsl(0, 0%, 26%)",
        },
        brand: {
          DEFAULT: "hsl(0, 0%, 17%)",
          secondary: "hsl(0, 0%, 27%)",
          tertiary: "hsl(0, 0%, 46%)",
          "on-brand": "hsl(0, 0%, 96%)",
          "on-brand-secondary": "hsl(0, 0%, 12%)",
          "on-brand-tertiary": "hsl(0, 0%, 17%)",
        },
        positive: {
          DEFAULT: "hsl(151, 95%, 17%)",
          secondary: "hsl(152, 100%, 30%)",
          tertiary: "hsl(148, 79%, 38%)",
          "on-positive": "hsl(129, 100%, 96%)",
          "on-positive-secondary": "hsl(151, 95%, 17%)",
          "on-positive-tertiary": "hsl(152, 94%, 13%)",
        },
        warning: {
          DEFAULT: "hsl(25, 91%, 17%)",
          secondary: "hsl(32, 97%, 30%)",
          tertiary: "hsl(33, 98%, 38%)",
          "on-warning": "hsl(25, 97%, 13%)",
          "on-warning-secondary": "hsl(25, 94%, 21%)",
          "on-warning-tertiary": "hsl(25, 91%, 17%)",
        },
        danger: {
          DEFAULT: "hsl(1, 88%, 30%)",
          secondary: "hsl(1, 88%, 40%)",
          tertiary: "hsl(1, 84%, 52%)",
          "on-danger": "hsl(5, 92%, 95%)",
          "on-danger-secondary": "hsl(1, 88%, 30%)",
          "on-danger-tertiary": "hsl(1, 88%, 30%)",
        },
        disabled: {
          DEFAULT: "hsl(0, 0%, 70%)",
          "on-disabled": "hsl(0, 0%, 70%)",
        },
        utilities: {
          icon: "hsl(317, 67%, 52%)",
          "icon-on-measurement": "hsl(316, 60%, 34%)",
        },
      },
    },
    extend: {
      boxShadow: {
        "ds-100": "0 1px 4px #0c0c0d0d",
        "ds-200": ["0 1px 4px #0c0c0d0d", "0 1px 4px #0c0c0d1a"].join(", "),
        "ds-300": ["0 4px 4px -1px #0c0c0d0d", "0 4px 4px -1px #0c0c0d1a"].join(
          ", "
        ),
        "ds-400": [
          "0 4px 4px -4px #0c0c0d0d",
          "0 16px 32px -4px #0c0c0d1a",
        ].join(", "),
        "ds-500": [
          "0 4px 4px -4px #0c0c0d0d",
          "0 16px 16px -8px #0c0c0d1a",
        ].join(", "),
        "ds-600": "0 16px 32px -8px #0c0c0d66",

        "is-100": "inset 0 1px 4px #0c0c0d0d",
        "is-200": "inset 0 1px 4px #0c0c0d0d",
        "is-300": "inset 0 4px 4px -1px #0c0c0d0d",
        "is-400": "inset 0 16px 32px -4px #0c0c0d1a",
        "is-500": "inset 0 16px 16px -8px #0c0c0d1a",
        "is-600": "inset 0 16px 32px -8px #0c0c0d66",
      },
      backdropBlur: {
        overlay: "8px",
        layer: "12px",
        glass: "20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
