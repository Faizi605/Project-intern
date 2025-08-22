import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url';
import path,{dirname} from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{
      "@ui" : path.resolve(__dirname, "./src/components/UI"),
      "@sections" : path.resolve(__dirname, "./src/components/sections"),
      "@pages" : path.resolve(__dirname,"./src/pages"),
      "@constants" : path.resolve(__dirname,"./src/constants")

    },
  },
});
