/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{ts,tsx,js,jsx,css}',
    './widgets/**/*.{ts,tsx,js,jsx,css}'
  ],
  variants: {
    extend: {
        backgroundColor: ['hover','active', 'focus', 'border'],
    }
  },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        NotoSansMono: ["Noto Sans Mono", "monospace"],
       },
    },
  },
  plugins: [],
}
