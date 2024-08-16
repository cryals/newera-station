import { defineConfig } from 'vitepress';
import { telegram } from './support/icons.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEWERA STATION",
  description: "Space Station 14 Project",
  lang: 'ru-RU',
  srcDir: './docs',
  base: '/newera-station/',
  head: [['link', { rel: 'icon', href: '/newera-station/newera.png' }]],
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'База Знаний', link: '/main' },
      { text: 'SUNRISE WIKIPEDIA', link: 'https://wiki.sunrise14.top/' }
    ],
    sidebar: [
      {
        text: 'Space Station 14',
        items: [
          { text: 'Начать Игру', link: '/quick-starts' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/newera-station' },
      { icon: { svg: telegram }, link: 'https://t.me/NEWERA_OFF' },
      { icon: 'github', link: 'https://github.com/cryals/newera-station' },
    ]
  }
});
