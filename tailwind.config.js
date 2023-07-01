/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bgPrimary: 'rgb(var(--bg-primary) / <alpha-value>)',
      textPrimary: 'rgb(var(--text-primary) / <alpha-value>)',
      kick: 'rgb(var(--kick) / <alpha-value>)',
    }
  },
  plugins: [],
}
