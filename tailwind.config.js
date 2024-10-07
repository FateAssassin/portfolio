/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        glassphorm: "rgba(164, 164, 164, 0.08)",
        theme: {
          100: '#201E43',
          200: '#134B70',
          300: '#508C9B',
          400: '#1d4ed8',
        }, 
        backgroundColor: "#1e2942"
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropFilter: {
        'blur': 'blur(12.4px)',
      },


    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'web_theme'],
      textColor: ['responsive', 'hover', 'focus', 'web_theme'],
    },
  },
  plugins: [],
}

