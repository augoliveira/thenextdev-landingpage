/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-dupe-keys */
const { fontFamily } = require("tailwindcss/defaultTheme");

import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    fontFamily: {
      permanent: ["Permanent Marker", "cursive"],
      foldit: ["Foldit", "cursive"]
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/grid.svg')",
        "hero-card": "url('/bg-box.png')",
        "hero-page": "url('/bg-vidracaria-2.jpg')",
        "contato-page": "url('/Bg-contato.jpg')"
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"]
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)"
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b"
        },
        clr_body: "#141410",
        clr_white: "#ffffff",
        clr_title: "#181818",
        clr_mtitle: "#000d27",
        clr_pra: "#999999",
        clr_subtitle: "#121212",
        clr_base: "#c9f31d",
        clr_hover: "#c2ec1d9e",
        clr_bg1: "#e9f0ff",
        clr_ftext: "#818181",
        clr_footer: "#181818",
        clr_cusborder: "rgb(38, 37, 37)",
        clr_border1: "#414141",
        clr_ratting: "#ffa311",
        clr_bgsection: "#000d27",
        clr_success: "#3fca90",
        clr_danger: "#ed5050",
        clr_boxes1: "rgba(26, 77, 190, 0.05)",
        clr_cborder: "#d9d9d9",
        "violet-550": "#8257e6",
        white: "#FFFF",

        "gray-900": "#121214",
        "gray-800": "#202024",
        "gray-300": "#c4c4cc",
        "gray-100": "#e1e1e6",

        "green-500": "#00875f",
        "green-300": "#00b37e",
        gray: colors.zinc,
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        customBlue: "#299EF3",
        lightGray: "#272D4E",
        lightGrayAlt: "#94A2B3",
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        link: "#f72585",
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))"
          }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'gradient': "gradient 6s linear infinite",
         // Modal
        'scale-in': 'scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
         // Input Select
        'input-select-slide-up':
        'input-select-slide-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'input-select-slide-down':
        'input-select-slide-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
         // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
        'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
         // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
         // Accordion
        'accordion-down': 'accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'accordion-up': 'accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
         // Custom wiggle animation
        wiggle: 'wiggle 0.75s infinite'
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
    require("tailwindcss-radix")()
  ]
};
