module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '1100px'
        }
      },
      colors: {
        'orange': {
          'link': '#E75E18',
          'normal': '#FF7C29',
          'dark': '#F1621A'
        },
        'primary-deemph': {
          'normal': '#FDF0E4'
        },
        'subtle': {
          'normal': '#F5F6F8'
        },
        'negative': {
          'normal': '#E71818'
        },
        'positive': {
          'normal': '#31A24C'
        },
        'purple': {
          'light': '#E5DFFF',
          'normal': '#6200EE'
        },
        'gray': {
          'primary': '#212121',
          'secondary': '#666666',
          'placeholder': '#8A8D91',
          'disabled': '#BCC0C4',
          'divider': '#E4E4E4',
          'aux': '#2a2a2a'
        },
        'white': {
          'normal': '#fff',
          'soft': '#f5f5f5',
          '10': 'rgba(255, 255, 255, 0.1)'
        },
        'card': {
          'normal': '#F5F3EF'
        },
      },
      dropShadow: {
        'sa': '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
