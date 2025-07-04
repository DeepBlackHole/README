import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import fs from 'fs'

// ✅ только название репозитория
const repo = 'README'

export default defineConfig(({ mode }) => ({
	// / в dev и /<repo>/ в production
	base: mode === 'development' ? '/' : `/${repo}/`,

	plugins: [
		react(),

		// ────────────────────────────────────────────────
		// Копируем index.html → 404.html для GitHub Pages
		// ────────────────────────────────────────────────
		{
			name: 'github-pages-404',
			closeBundle() {
				const from = path.resolve(__dirname, 'dist/index.html')
				const to = path.resolve(__dirname, 'dist/404.html')
				fs.copyFileSync(from, to)
			},
		},
	],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},

	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},
}))
