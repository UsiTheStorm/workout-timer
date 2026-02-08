import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const deployTarget = env.VITE_DEPLOY_TARGET ?? 'DEV';
  const isGitHub = deployTarget === 'GH';

  return {
    base: isGitHub ? '/YOUR-REPO/' : '/',

    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],

    build: {
      sourcemap: true,
      emptyOutDir: true,
    },
  };
});
