import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-[1464px]': '1464px',  
        'min-[1104px]': '1104px',  
      },
      backgroundImage: {
        'bg_image_info' : "url('/images/info-bg.svg')",
        'bg_image_serv-1' : "url('/images/services/bg-1.svg')",
        'bg_image_serv-2' : "url('/images/services/bg-2.svg')",
        'bg_image_services' : "url('/images/services/services-bg.png')",
        'bg_image_products' : "url('/images/products/product-bg.png')",
        'bg_image_spec_dark' : "url('/images/speciality/bg-dark.png')",
        'bg_image_spec_white' : "url('/images/speciality/bg-white.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out forwards",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
