import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// ⚠️ Замените на имя репозитория на GitHub
const repo = 'https://github.com/DeepBlackHole/README'

export default defineConfig(({ mode }) => ({
	// ▸ http://localhost:5173  → "/"
	// ▸ https://<user>.github.io/<repo>/ → "/<repo>/"
	base: mode === 'development' ? '/' : `/${repo}/`,

	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},

	build: {
		outDir: 'dist', // GitHub Actions «gh-pages» публикует эту папку
		emptyOutDir: true,
	},
}))
