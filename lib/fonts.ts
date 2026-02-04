import localFont from 'next/font/local'

export const assistant = localFont({
  src: [
    {
      path: '../public/fonts/assistant-400-hebrew.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/assistant-500-hebrew.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/assistant-600-hebrew.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/assistant-700-hebrew.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-assistant',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  display: 'swap',
})
