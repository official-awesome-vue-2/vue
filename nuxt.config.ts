import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from "glob"

const currentDir = dirname(fileURLToPath(import.meta.url));

const routes = globSync('./content/**/*.md')
  .map(path => path.slice(7, -3).replace(/\d+\./g, '').replace(/\\/g, '/'))
  routes.splice(0, 1);
  export default defineNuxtConfig({
  app: {
    baseURL: '/vue/',
    buildAssetsDir: 'assets',
  },
  nitro: {
    prerender: {
      routes: [...routes]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxt/scripts',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [
    join(currentDir, './assets/css/themes.css'),
  ],
  tailwindcss: {
    config: {
      content: [
        join(currentDir, './pages/**/*.{vue,js,ts}'),
        join(currentDir, './components/**/*.{vue,js,ts}'),
      ],
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'mdc', 'yaml', 'bash', 'ini', 'dotenv'],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
        'prevNext',
        'breadcrumb',
        'fullpage',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '/vue/',
      },
    },
  },
  build: {
    transpile: ['shiki', 'ohash'],
  },
  compatibilityDate: '2024-07-05',
});
