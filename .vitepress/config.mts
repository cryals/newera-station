import { defineConfig } from 'vitepress';
import { telegram } from './support/icons.ts';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { nav, sidebar } from '../_data/navigation.ts'; 

export default defineConfig({
  title: "NEWERA STATION",
  description: "Space Station 14 Project",
  lang: 'ru-RU',
  srcDir: './docs',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/newera-station/newera.png' }],
    // Добавляем Google Analytics
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BKG62BG33P');
    `]
  ],
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/newera-station' },
      { icon: { svg: telegram }, link: 'https://t.me/NEWERA_OFF' },
      { icon: 'github', link: 'https://github.com/cryals/newera-station' },
    ]
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    }
  }
});
