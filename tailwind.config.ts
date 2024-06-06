import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          bg1: '#f7faff', // Table
          border: '#d8dee5', // Table border
          100: '#F6F8FE',
          200: '#B5BECA',
          500: '#828699', // Gray Text
          600: '#475569',
          750: '#4D5D67', // Footer icon hovered
          850: '#2D3D47', // Footer icon
          950: '#1E293B', // Almost black text
        },
        blue: {
          100: '#EAF0F9',
          500: '#0074f0', // Button
        },
        red: {
          500: '#ff4e4e',
        },
        green: {
          200: '#66FE90',
          500: '#07C166',
        },
        'off-black': '#101113',
        'off-white': '#fafbfb',
      },
      fontSize: {
        '1.5xl': ['1.25rem', {}], // 28px
        '3xl': ['2rem', { lineHeight: '3.1rem', letterSpacing: '0.005em' }], // 32px
        // Titles on landing page
        '2.66xl': ['1.75rem', {}], // 28px
        '4.5xl': ['2.5rem', { lineHeight: '3rem' }],
        '6xl': [
          '3.5rem',
          {
            lineHeight: '64px',
          },
        ],
      },
      fontFamily: {
        sans: ['Sailec', ...defaultTheme.fontFamily.sans],
        heading: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '7xl': '86rem',
        '8xl': '98rem',
      }
    },

    backgroundImage: {
      'blue-gradient': 'linear-gradient(90deg, #8c66fc -29%, #0274f1 145%)',
      'blue-gradient-light': `linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(90deg, #8c66fc -29%, #0274f1 145%)`,
      'orange-gradient':
        'linear-gradient(91deg, #FEDBA8 -3.29%, #CF75D5 106.42%)',
      'footer-gradient': `linear-gradient(76.46deg, #000000 -1.88%, #1E313F 117.7%)`,
    },
  },
  plugins: [],
}
