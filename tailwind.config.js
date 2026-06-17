/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3D4852',
        'ink-muted': '#6B7280',
        'ink-subtle': '#9CA3AF',
        canvas: '#FDF8FA',
        surface: '#FFFFFF',
        elevated: '#FAF5F7',
        accent: '#E94E89',
        brand: {
          pink: '#E94E89',
          'pink-light': '#F06BA3',
          'pink-soft': '#FCE7F3',
          'pink-dark': '#D63D78',
          'pink-muted': '#FFF0F5',
          'pink-blush': '#FAF0F4',
          vivid: '#E94E89',
          rose: '#6B7280',
          'rose-light': '#9CA3AF',
          link: '#38BDF8',
        },
        pearl: '#FFFFFF',
        'amber-gold': '#E94E89',
        'slate-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '14px',
        xl: '20px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '48px',
      },
      maxWidth: {
        content: '1140px',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(180deg, #FFFFFF 0%, #FAF5F7 45%, #F5EEF2 100%)',
        'gradient-brand': 'linear-gradient(135deg, #F06BA3 0%, #E94E89 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #E94E89 0%, #D63D78 100%)',
        'gradient-pink': 'linear-gradient(180deg, #E94E89 0%, #D63D78 100%)',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(61, 72, 82, 0.1)',
        'card-hover': '0 24px 56px -16px rgba(233, 78, 137, 0.22)',
        glow: '0 0 40px -8px rgba(233, 78, 137, 0.3)',
        'glow-sm': '0 0 20px -4px rgba(233, 78, 137, 0.2)',
        float: '0 20px 50px -12px rgba(61, 72, 82, 0.14)',
        camera: '0 24px 60px -10px rgba(233, 78, 137, 0.2)',
        polaroid: '0 16px 40px -8px rgba(61, 72, 82, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
