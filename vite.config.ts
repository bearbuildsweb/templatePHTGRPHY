import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Plugin to automatically generate 404.html and ensure .nojekyll for GitHub Pages
function githubPagesPlugin() {
  return {
    name: 'github-pages-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const notFoundPath = path.join(distDir, '404.html');
      const nojekyllPath = path.join(distDir, '.nojekyll');

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
      if (!fs.existsSync(nojekyllPath)) {
        fs.writeFileSync(nojekyllPath, '');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    // Relative base path ensures the app works on both custom domains and GitHub repository subpaths (e.g. username.github.io/repo-name/)
    base: './',
    plugins: [react(), tailwindcss(), githubPagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
