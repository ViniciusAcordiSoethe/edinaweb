import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#0D1B2A',
        'custom-blue': '#1B263B',
        'custom-light-blue': '#778DA9',
        'custom-green': '#236242',
        'custom-orange': '#EB6424',
        
      },
    },
  },
  plugins: [],
}
export default config
