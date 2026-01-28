import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Plugin } from 'vite';

/**
 * Vite plugin to inline critical CSS into the HTML at build time
 * This eliminates render-blocking CSS for above-the-fold content
 */
export function inlineCriticalCss(): Plugin {
  return {
    name: 'inline-critical-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        try {
          // Read the critical CSS file
          const criticalCssPath = resolve(__dirname, 'client/public/critical.css');
          const criticalCss = readFileSync(criticalCssPath, 'utf-8');

          // Find the placeholder comment or the closing </style> tag
          const styleTagEnd = html.lastIndexOf('</style>');
          if (styleTagEnd === -1) {
            console.warn('⚠️ Could not find </style> tag to inject critical CSS');
            return html;
          }

          // Inject critical CSS before the closing style tag
          const before = html.slice(0, styleTagEnd);
          const after = html.slice(styleTagEnd);

          const injected = `${before}\n\n      /* Critical CSS - Inlined for instant Hero rendering */\n      ${criticalCss}\n    ${after}`;

          // Also defer the main CSS file to prevent render blocking
          const deferredHtml = injected.replace(
            /<link([^>]*?)rel="stylesheet"([^>]*?)href="([^"]*?\.css)"([^>]*?)>/g,
            (match, before, after, href, end) => {
              // Don't modify preload links or links with media attributes
              if (match.includes('preload') || match.includes('media=')) {
                return match;
              }
              // Defer the CSS with print trick
              return `<link${before}rel="preload"${after}href="${href}"${end} as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
            }
          );

          console.log('✅ Critical CSS inlined successfully');
          return deferredHtml;
        } catch (error) {
          console.error('❌ Error inlining critical CSS:', error);
          return html;
        }
      },
    },
  };
}
