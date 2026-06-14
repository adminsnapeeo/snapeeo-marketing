/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F8FAFC',
        'ink-muted': '#94A3B8',
        'ink-subtle': '#64748B',
        canvas: '#0B1D3A',
        surface: '#132238',
        elevated: '#1A3050',
        accent: '#243B5E',
        brand: {
          navy: '#0B1D3A',
          'navy-mid': '#1E3A5F',
          'navy-light': '#2E5078',
          pink: '#E11D8D',
          'pink-light': '#F472B6',
          'pink-soft': '#FCE7F3',
          'pink-dark': '#BE185D',
        },
        obsidian: '#0B1D3A',
        pearl: '#F8FAFC',
        'amber-gold': '#E11D8D',
        'slate-muted': '#94A3B8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      maxWidth: {
        content: '1440px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1E3A5F 0%, #E11D8D 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #2E5078 0%, #F472B6 100%)',
        'gradient-soft': 'linear-gradient(180deg, #0B1D3A 0%, #132238 100%)',
        'gradient-section': 'linear-gradient(180deg, rgba(19,34,56,0.6) 0%, rgba(11,29,58,0) 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0B1D3A 0%, #1E3A5F 55%, #BE185D 100%)',
        'gradient-pink': 'linear-gradient(135deg, #E11D8D 0%, #F472B6 100%)',
        'gradient-card': 'linear-gradient(145deg, #1A3050 0%, #132238 100%)',
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 12px 40px -8px rgba(225, 29, 141, 0.28), 0 4px 16px -4px rgba(0,0,0,0.4)',
        glow: '0 0 24px -4px rgba(225, 29, 141, 0.45)',
        'glow-sm': '0 0 16px -2px rgba(225, 29, 141, 0.3)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px -4px rgba(225, 29, 141, 0.25)' },
          '50%': { boxShadow: '0 0 28px -2px rgba(225, 29, 141, 0.45)' },
        },
      },
    },
  },
  plugins: [],
};
