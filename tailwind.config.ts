import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#f9f0e1',
          300: '#f3e3cd',
          400: '#ead3b0',
          500: '#dfc08a',
          600: '#d4ad6b',
          700: '#b8924d',
          800: '#8b6b3a',
          900: '#5d4726',
        },
        'pastel-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'pastel-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        'pastel-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'pastel-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'flip': 'flip 0.8s ease-in-out',
        'flip-back': 'flipBack 0.8s ease-in-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-8px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(74, 148, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(74, 148, 255, 0.6)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleUp: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
        slideUp: {
          from: { 
            transform: 'translateY(100%)',
            opacity: '0',
          },
          to: { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipBack: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        sparkle: {
          '0%, 100%': { 
            opacity: '0.3', 
            transform: 'scale(0.8) rotate(0deg)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.2) rotate(180deg)' 
          },
        },
        breathe: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '1'
          },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;