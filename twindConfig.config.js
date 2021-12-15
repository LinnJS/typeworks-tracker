const twindConfig = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        standalone: { raw: "(display-mode:standalone)" },
      },
    },
  },
}

export default twindConfig
