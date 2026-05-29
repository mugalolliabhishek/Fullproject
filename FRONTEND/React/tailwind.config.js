export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.12)',
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
        },
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, rgba(16, 185, 129, .9), rgba(59, 130, 246, .8))',
      },
    },
  },
  plugins: [],
};
